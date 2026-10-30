// Persists screens + locators under <outputDir>/ and matches new captures to known screens.
import fs from 'node:fs';
import path from 'node:path';
import { serializeElement, camel } from './parser.mjs';

const now = () => new Date().toISOString();

function readJson(file, fallback) {
  try {
    return JSON.parse(fs.readFileSync(file, 'utf8'));
  } catch {
    return fallback;
  }
}

function writeJson(file, data) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, JSON.stringify(data, null, 2) + '\n');
}

export function pascal(s) {
  const c = camel(
    String(s)
      .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
      .split(/[^A-Za-z0-9]+/)
      .filter(Boolean)
      .map((w) => w.toLowerCase())
  );
  return c.charAt(0).toUpperCase() + c.slice(1);
}

// Similarity of a fresh capture (a) to a known screen's accumulated signature (b).
// Uses the better of Jaccard and "how much of what I see now is already known",
// so a screen that grew through scrolling still matches its earlier captures.
function jaccard(a, b, ignore) {
  const A = [...a].filter((t) => !ignore.has(t));
  const B = new Set([...b].filter((t) => !ignore.has(t)));
  if (!A.length && !B.size) return 1;
  if (!A.length || !B.size) return 0;
  let inter = 0;
  for (const t of A) if (B.has(t)) inter++;
  return Math.max(inter / (A.length + B.size - inter), (inter / A.length) * 0.85);
}

export class Store {
  constructor(outputDir, { threshold = 0.6 } = {}) {
    this.dir = path.resolve(outputDir);
    this.threshold = threshold;
    this.indexFile = path.join(this.dir, '_screens.json');
    this.index = readJson(this.indexFile, { screens: {}, transitions: [] });
    fs.mkdirSync(this.dir, { recursive: true });
  }

  screenFile(name) {
    return path.join(this.dir, `${name}.json`);
  }

  // Tokens that appear on most screens (bottom nav, toolbar) shouldn't drive matching.
  commonTokens() {
    const screens = Object.values(this.index.screens);
    const ignore = new Set();
    if (screens.length < 3) return ignore;
    const freq = new Map();
    for (const s of screens) for (const t of s.signature) freq.set(t, (freq.get(t) || 0) + 1);
    for (const [t, n] of freq) if (n / screens.length >= 0.6) ignore.add(t);
    return ignore;
  }

  /** Returns { name, score } of the best matching known screen, or null. */
  match(analysis, activity) {
    const ignore = this.commonTokens();
    let best = null;
    for (const [name, s] of Object.entries(this.index.screens)) {
      if (s.package && analysis.package && s.package !== analysis.package) continue;
      if (s.activity && activity && s.activity !== activity) continue;
      if (s.title && analysis.title && s.title !== analysis.title) continue;
      let score = jaccard(analysis.signature, new Set(s.signature), ignore);
      // Same non-empty title within the same activity => same screen (e.g. scrolled further down)
      if (s.title && s.title === analysis.title) score = Math.max(score, 0.95);
      if (!best || score > best.score) best = { name, score };
    }
    return best && best.score >= this.threshold ? best : null;
  }

  uniqueScreenName(base) {
    let name = base;
    let i = 2;
    while (this.index.screens[name]) name = `${base}${i++}`;
    return name;
  }

  suggestScreenName(analysis, activity) {
    let base = '';
    if (analysis.title) base = pascal(analysis.title);
    else if (activity) base = pascal(activity.split('.').pop().replace(/Activity$/, ''));
    if (!base) base = 'Unknown';
    if (!/Screen$/.test(base)) base += 'Screen';
    return this.uniqueScreenName(base);
  }

  /**
   * Save (or merge into) a screen. Element names already in the file are preserved,
   * so manual renames survive later captures.
   */
  save(name, analysis, { activity = '' } = {}) {
    const file = this.screenFile(name);
    const existing = readJson(file, null);
    const data = existing || {
      screen: name,
      package: analysis.package,
      activity,
      title: analysis.title,
      firstCaptured: now(),
      elements: {},
    };
    data.lastCaptured = now();
    data.captures = (data.captures || 0) + 1;
    if (!data.title && analysis.title) data.title = analysis.title;

    const byKey = new Map(Object.entries(data.elements).map(([n, el]) => [el.key, n]));
    const added = [];
    for (const e of analysis.elements) {
      const ser = serializeElement(e);
      const existingName = byKey.get(e.key);
      if (existingName) {
        data.elements[existingName] = { ...data.elements[existingName], ...ser, lastSeen: now() };
      } else {
        let n = e.suggestedName;
        let i = 2;
        while (data.elements[n]) n = `${e.suggestedName}${i++}`;
        data.elements[n] = { ...ser, firstSeen: now(), lastSeen: now() };
        byKey.set(e.key, n);
        added.push(n);
      }
    }
    writeJson(file, data);

    const prev = this.index.screens[name];
    const signature = new Set([...(prev?.signature || []), ...analysis.signature]);
    this.index.screens[name] = {
      file: `${name}.json`,
      package: analysis.package,
      activity: prev?.activity ?? activity,
      title: prev?.title || analysis.title,
      signature: [...signature].sort(),
      elementCount: Object.keys(data.elements).length,
      firstCaptured: prev?.firstCaptured || now(),
      lastCaptured: now(),
    };
    this.flush();
    return { data, added, isNew: !existing };
  }

  addTransition(from, to, via) {
    if (!from || !to || from === to) return;
    const t = this.index.transitions;
    if (!t.some((x) => x.from === from && x.to === to && x.via === via)) {
      t.push({ from, to, via });
      this.flush();
    }
  }

  rename(oldName, newName) {
    if (!this.index.screens[oldName]) throw new Error(`Unknown screen: ${oldName}`);
    if (this.index.screens[newName]) throw new Error(`Screen already exists: ${newName}`);
    const move = (a, b) => fs.existsSync(a) && fs.renameSync(a, b);
    const data = readJson(this.screenFile(oldName), null);
    if (data) {
      data.screen = newName;
      writeJson(this.screenFile(newName), data);
      fs.rmSync(this.screenFile(oldName));
    }
    move(path.join(this.dir, 'screenshots', `${oldName}.png`), path.join(this.dir, 'screenshots', `${newName}.png`));
    move(path.join(this.dir, 'raw', `${oldName}.xml`), path.join(this.dir, 'raw', `${newName}.xml`));
    for (const ext of ['.page.js', '.page.cjs']) {
      const p = path.join(this.dir, 'pages', `${oldName}${ext}`);
      if (fs.existsSync(p)) fs.rmSync(p);
    }
    this.index.screens[newName] = { ...this.index.screens[oldName], file: `${newName}.json` };
    delete this.index.screens[oldName];
    for (const t of this.index.transitions) {
      if (t.from === oldName) t.from = newName;
      if (t.to === oldName) t.to = newName;
    }
    this.flush();
    return data;
  }

  /** Merge screen `from` into `into` (when one real screen was captured as two). */
  merge(into, from) {
    const a = readJson(this.screenFile(into), null);
    const b = readJson(this.screenFile(from), null);
    if (!a || !b) throw new Error(`Both screens must exist: ${into}, ${from}`);
    const keys = new Set(Object.values(a.elements).map((e) => e.key));
    for (const [n, el] of Object.entries(b.elements)) {
      if (keys.has(el.key)) continue;
      let name = n;
      let i = 2;
      while (a.elements[name]) name = `${n}${i++}`;
      a.elements[name] = el;
    }
    writeJson(this.screenFile(into), a);
    fs.rmSync(this.screenFile(from));
    for (const p of [
      path.join(this.dir, 'screenshots', `${from}.png`),
      path.join(this.dir, 'raw', `${from}.xml`),
      path.join(this.dir, 'pages', `${from}.page.js`),
      path.join(this.dir, 'pages', `${from}.page.cjs`),
    ]) if (fs.existsSync(p)) fs.rmSync(p);
    const si = this.index.screens;
    si[into].signature = [...new Set([...si[into].signature, ...si[from].signature])].sort();
    si[into].elementCount = Object.keys(a.elements).length;
    delete si[from];
    for (const t of this.index.transitions) {
      if (t.from === from) t.from = into;
      if (t.to === from) t.to = into;
    }
    this.index.transitions = this.index.transitions.filter((t) => t.from !== t.to);
    this.flush();
    return a;
  }

  load(name) {
    return readJson(this.screenFile(name), null);
  }

  flush() {
    writeJson(this.indexFile, this.index);
  }
}
