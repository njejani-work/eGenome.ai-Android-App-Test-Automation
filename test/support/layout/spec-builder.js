// Builds a layout spec (expected text, proportional boxes and relations) from a screen's elements.
// Used by scripts/layout/generate.mjs (from captures) and by LAYOUT_UPDATE=true runs (from the live screen).
import { findAll, isInteresting, isVisualLeaf, isGlyph } from './hierarchy.js';

export const DEFAULT_TOLERANCE = {
  position: 0.02, // x/y, as a share of screen width/height
  size: 0.03, // w/h
  align: 0.012, // edge alignment, share of width
  center: 0.015, // centring, share of width
  gap: 0.025, // vertical gap between rows, share of width
  aspect: 0.03, // absolute box checks only run when the screen's aspect ratio is within this of the baseline
};

const MONTHS = /\b(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*\b/;
const GLYPH = /[\uE000-\uF8FF\u{F0000}-\u{FFFFD}]/u;
const GLYPH_ALL = /[\uE000-\uF8FF\u{F0000}-\u{FFFFD}]/gu;
const r4 = (n) => Math.round(n * 10000) / 10000;

/**
 * Text that depends on the account, the date or live data, so it can't be compared exactly:
 * numbers ("56 kg", "21.2", "1, Day Streak", "2 reports found"), amounts, dates and user names.
 * Short fixed codes such as "+91" or labels such as "OTP digit 1" count as static.
 */
export function isDynamicText(s, { userNames = [] } = {}) {
  const t = String(s || '').trim();
  if (!t) return false;
  if (/^\+\d{1,3}$/.test(t)) return false; // country code
  if (/^\d/.test(t)) return true; // starts with a number: counters, values, dates
  if (/\d{2,}|\d[.,:]\d/.test(t)) return true; // multi-digit numbers, decimals, times
  if (/\d+ of \d+/.test(t) || /₹/.test(t) || MONTHS.test(t)) return true;
  return userNames.some((n) => n && t.includes(n));
}

function boxOf(e, screen) {
  const b = e.bounds;
  return { x: r4(b.x1 / screen.w), y: r4(b.y1 / screen.h), w: r4((b.x2 - b.x1) / screen.w), h: r4((b.y2 - b.y1) / screen.h) };
}

const contains = (p, c, slack = 2) =>
  p !== c && c.bounds.x1 >= p.bounds.x1 - slack && c.bounds.y1 >= p.bounds.y1 - slack && c.bounds.x2 <= p.bounds.x2 + slack && c.bounds.y2 <= p.bounds.y2 + slack &&
  !(c.bounds.x1 === p.bounds.x1 && c.bounds.y1 === p.bounds.y1 && c.bounds.x2 === p.bounds.x2 && c.bounds.y2 === p.bounds.y2);

const intersects = (a, b) => a.bounds.x1 < b.bounds.x2 && b.bounds.x1 < a.bounds.x2 && a.bounds.y1 < b.bounds.y2 && b.bounds.y1 < a.bounds.y2;

function words(s) {
  return String(s).replace(GLYPH_ALL, ' ').replace(/([a-z0-9])([A-Z])/g, '$1 $2').split(/[^A-Za-z0-9]+/).filter(Boolean).map((w) => w.toLowerCase());
}
const VALUE_WORD = /^([0-9].*|jan(uary)?|feb(ruary)?|mar(ch)?|apr(il)?|may|june?|july?|aug(ust)?|sep(t|tember)?|oct(ober)?|nov(ember)?|dec(ember)?)$/;
function nameFor(e, taken, { live = false } = {}) {
  const pick = (s) => words(s).filter((w) => !live || !VALUE_WORD.test(w)).slice(0, 4);
  let base = pick(e.rid ? e.rid.split(/[:/.]/).pop() : '');
  if (!base.length) base = pick(e.desc);
  if (!base.length) base = pick(e.text);
  if (!base.length) base = [live ? 'value' : 'icon'];
  const suffix = e.input ? 'Input' : e.clickable ? 'Btn' : /Image/.test(e.cls) ? 'Image' : 'Text';
  let n = base.map((w, i) => (i ? w[0].toUpperCase() + w.slice(1) : w)).join('') + suffix;
  if (/^\d/.test(n)) n = `el${n}`;
  let out = n;
  for (let i = 2; taken.has(out); i++) out = `${n}${i}`;
  taken.add(out);
  return out;
}

function shapeName(e, taken) {
  const w = e.bounds.x2 - e.bounds.x1, h = e.bounds.y2 - e.bounds.y1;
  const base = /Svg/.test(e.cls) ? 'graphic' : /Image/.test(e.cls) ? 'image' : /Progress|SeekBar/.test(e.cls) ? 'progress' : w >= 3 * h ? 'bar' : Math.abs(w - h) <= 2 ? 'circle' : 'shape';
  let out = `${base}${e.clickable ? 'Btn' : ''}`;
  for (let i = 2; taken.has(out); i++) out = `${base}${e.clickable ? 'Btn' : ''}${i}`;
  taken.add(out);
  return out;
}

/**
 * Regex describing the *format* of live text, so it can be checked without its value:
 * "₹9,999" -> "₹[0-9][0-9,.]*", "Today, October 28, 2026" -> "Today, [A-Z][a-z]+ [0-9][0-9,.]*, [0-9][0-9,.]*".
 * No backslashes (see BasePage noBackslash). Used with full-string matching.
 */
export function shapeOf(s) {
  const MONTH_WORD = /^(Jan(uary)?|Feb(ruary)?|Mar(ch)?|Apr(il)?|May|June?|July?|Aug(ust)?|Sep(t|tember)?|Oct(ober)?|Nov(ember)?|Dec(ember)?)$/;
  const DAY_WORD = /^(Mon(day)?|Tue(s|sday)?|Wed(nesday)?|Thu(rs|rsday)?|Fri(day)?|Sat(urday)?|Sun(day)?)$/;
  // regex specials become one-character classes; ] \\ ^ can't be written that way, so they match any character
  const lit = (c) => (']\\^'.includes(c) ? '.' : /[.*+?${}()|[\/-]/.test(c) ? `[${c}]` : c);
  let out = '';
  const tokens = String(s).match(/[0-9][0-9,.]*|[A-Za-z]+|\s+|./gsu) || [];
  for (const t of tokens) {
    if (/^[0-9]/.test(t)) out += '[0-9][0-9,.]*';
    else if (MONTH_WORD.test(t) || DAY_WORD.test(t)) out += '[A-Z][a-z]+';
    else if (/^\s+$/.test(t)) out += ' +';
    else if (/^[A-Za-z]+$/.test(t)) out += t;
    else out += [...t].map(lit).join('');
  }
  return out;
}

/**
 * A combined label such as "\uee55, Weight, GOOD, 56 kg, 49, 58" (a card read out by TalkBack) holds live
 * values and statuses, so it is matched by its first fixed word only: "(.*, )?Weight(, .*)?".
 */
function labelPattern(desc) {
  const parts = String(desc).split(/, /).map((p) => p.trim());
  const fixed = parts.find((p) => p && !GLYPH.test(p) && !isDynamicText(p));
  return fixed ? `(.*, )?${shapeOf(fixed)}(, .*)?` : shapeOf(desc);
}

const tokenFor = (t, names) => {
  let out = t;
  for (const [key, val] of names) if (val && out.includes(val)) out = out.split(val).join(`{{${key}}}`);
  return out;
};

/**
 * Month calendar: >= 28 tappable day cells labelled 1..31 under a row of weekday names.
 * Day cells change position every month, so they are checked as one grid rule instead of one by one.
 */
function detectCalendar(cands) {
  const label = (e) => (/^[0-9]{1,2}$/.test(e.desc.trim()) ? e.desc.trim() : /^[0-9]{1,2}$/.test(e.text.trim()) && e.clickable ? e.text.trim() : null);
  const cells = cands.filter((e) => e.clickable && label(e));
  const days = new Set(cells.map((e) => Number(label(e))));
  if (cells.length < 28 || ![...Array(28)].every((_, i) => days.has(i + 1))) return null;
  const dayNames = cands.filter((e) => /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun)[a-z]*$/.test(e.text.trim()));
  if (dayNames.length !== 7) return null;
  dayNames.sort((a, b) => a.bounds.x1 - b.bounds.x1);
  const title = cands.find((e) => /^(January|February|March|April|May|June|July|August|September|October|November|December) [0-9]{4}$/.test(e.text.trim()));
  const byDesc = cells.every((e) => /^[0-9]{1,2}$/.test(e.desc.trim()));
  return { cells, dayNames, title, match: byDesc ? { descPattern: '[0-9]{1,2}', clickable: true } : { textPattern: '[0-9]{1,2}', clickable: true } };
}

/**
 * @param tree      { all, doc } from parseSource() or treeFromCapture()
 * @param screen    { w, h } in px
 * @param meta      { spec, page, source, scrollTop, userNames, nameTokens, pageLocators, previous }
 */
export function buildSpec(tree, screen, meta) {
  const { pageLocators = {}, userNames = [], previous } = meta;
  // account names in .env: matched and checked through {{TOKENS}}, so specs follow the configured account
  const nameTokens = meta.nameTokens || [];
  // 1. Candidate elements (deduplicate identical boxes of the same class, e.g. merged capture states)
  const seen = new Set();
  const isCand = (e) => isInteresting(e) || isVisualLeaf(e, screen);
  let candidates = tree.all.filter(isCand).filter((e) => {
    const k = `${e.cls}|${e.text}|${e.desc}|${e.bounds.x1},${e.bounds.y1},${e.bounds.x2},${e.bounds.y2}`;
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });

  // 1b. Calendar grid: its cells (and everything drawn inside them) become one calendarGrid rule
  const calendar = detectCalendar(candidates);
  if (calendar) {
    const inCell = (e) => calendar.cells.some((c) => c === e || contains(c, e, 1));
    candidates = candidates.filter((e) => !inCell(e));
  }
  const candSet = new Set(candidates);

  // 2. Name elements after page-object locators where a locator matches exactly one element
  const named = new Map(); // element -> { name, selector }
  for (const [key, sel] of Object.entries(pageLocators)) {
    if (typeof sel !== 'string') continue;
    const hits = findAll(tree, sel);
    if (hits.length !== 1 || !hits[0].bounds) continue;
    const el = hits[0];
    if (calendar && calendar.cells.includes(el)) continue;
    if ([...named.values()].some((v) => v.name === key) || named.has(el)) continue;
    named.set(el, { name: key, selector: sel });
  }

  // 3. Identify every candidate. Unique, fixed text/labels are matched exactly; repeated, live or
  //    unlabelled elements get a matcher plus "near": the closest match to the expected position is used.
  const taken = new Set([...named.values()].map((v) => v.name));
  const items = [];
  const unique = (m) => findAll(tree, m).length === 1;
  for (const e of new Set([...named.keys(), ...candidates])) {
    if (!named.has(e) && !candSet.has(e)) continue;
    const text = tokenFor(e.text, nameTokens);
    const desc = tokenFor(e.desc, nameTokens);
    const dynText = isDynamicText(e.text, { userNames });
    const dynDesc = isDynamicText(e.desc, { userNames });
    const nameText = text !== e.text && !isDynamicText(text, { userNames: [] }); // only an account name varies
    const nameDesc = desc !== e.desc && !isDynamicText(desc, { userNames: [] });
    let ident = named.get(e);
    let kind = 'static';
    if (!ident) {
      let match = null;
      let near = false;
      if (e.desc && (!dynDesc || nameDesc) && unique({ desc: e.desc })) match = { desc };
      else if (e.rid && !/^android:id\//.test(e.rid) && unique({ rid: e.rid })) match = { rid: e.rid };
      else if (e.text && !e.input && (!dynText || nameText) && unique({ text: e.text, cls: e.cls })) match = { text, cls: e.cls };
      else if (e.text && !e.input) {
        near = true;
        if (dynText && !nameText) { match = { cls: e.cls, textPattern: shapeOf(e.text) }; kind = 'live'; }
        else match = { text, cls: e.cls };
      } else if (e.desc) {
        near = true;
        if (dynDesc && !nameDesc) { match = { cls: e.cls, descPattern: labelPattern(e.desc) }; kind = 'live'; }
        else match = { desc };
      } else if (e.input) { near = true; match = { cls: e.cls }; }
      else if (isVisualLeaf(e, screen)) { near = true; match = { cls: e.cls, leaf: true }; kind = 'shape'; }
      if (!match) continue;
      const nm = kind === 'shape' ? shapeName(e, taken) : nameFor(e, taken, { live: kind === 'live' });
      ident = { name: nm, match, near };
    } else if ((e.input ? false : dynText) || dynDesc) kind = 'live';
    if (kind !== 'shape' && kind !== 'live' && ((e.input ? false : dynText && !nameText) || (dynDesc && !nameDesc))) kind = 'live';
    items.push({ e, ident, kind, text: e.input ? null : text });
  }
  if (!items.length) throw new Error(`No identifiable elements for layout spec ${meta.spec}`);

  // 4. Elements
  const elements = {};
  for (const { e, ident, kind, text: tx } of items) {
    const box = boxOf(e, screen);
    const checks = ['presence', 'state'];
    const dynamic = kind === 'live';
    const glyph = isGlyph(e);
    const text = tx && !dynamic ? tx : null;
    if (text) checks.push('text');
    if (dynamic && ident.match?.textPattern) checks.push('format');
    checks.push('box');
    if (box.w >= 0.5 && !dynamic && kind !== 'shape') checks.push('width');
    if (e.clickable) checks.push('minTap');
    elements[ident.name] = {
      ...(ident.selector ? { selector: ident.selector } : { match: ident.match }),
      ...(ident.near ? { near: true } : {}),
      ...(text ? { text } : {}),
      ...(glyph ? { icon: true } : {}),
      box,
      // live values change width; bars/fills can change width with progress
      ...(dynamic ? { dynamic: true, boxKeys: ['x', 'y'] } : kind === 'shape' ? { boxKeys: ['x', 'y', 'h'] } : {}),
      clickable: e.clickable,
      enabled: e.enabled,
      checks,
    };
  }

  // 5. Relations (only between spec elements)
  const list = items.map((i) => ({ ...i, dynamic: i.kind === 'live', name: i.ident.name, box: elements[i.ident.name].box }));
  const parentOf = new Map();
  for (const c of list) {
    const parents = list.filter((p) => contains(p.e, c.e));
    if (parents.length) {
      parents.sort((a, b) => a.box.w * a.box.h - b.box.w * b.box.h);
      parentOf.set(c, parents[0]);
    }
  }
  const rules = [];
  if (calendar) {
    const nameOf = (el) => list.find((i) => i.e === el)?.name;
    const columns = calendar.dayNames.map(nameOf);
    if (columns.every(Boolean)) {
      rules.push({
        type: 'calendarGrid', cells: calendar.match, columns,
        weekdays: calendar.dayNames.map((d) => ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(d.text.trim().slice(0, 3))),
        ...(calendar.title && nameOf(calendar.title) ? { title: nameOf(calendar.title) } : {}),
      });
    }
  }
  for (const [c, p] of parentOf) {
    const ccx = (c.e.bounds.x1 + c.e.bounds.x2) / 2, pcx = (p.e.bounds.x1 + p.e.bounds.x2) / 2;
    rules.push({ type: 'inside', el: c.name, parent: p.name, centered: Math.abs(ccx - pcx) <= 3 && !c.dynamic });
  }
  const top = list.filter((i) => !parentOf.has(i)).sort((a, b) => a.e.bounds.y1 - b.e.bounds.y1 || a.e.bounds.x1 - b.e.bounds.x1);

  // rows: same test the check uses - an element's vertical centre lies within the row's first element (or vice versa)
  const cyOf = (x) => (x.e.bounds.y1 + x.e.bounds.y2) / 2;
  const within = (y, x) => y >= x.e.bounds.y1 - 2 && y <= x.e.bounds.y2 + 2;
  const rows = [];
  for (const i of top) {
    const row = rows.find((r) => (within(cyOf(i), r.items[0]) || within(cyOf(r.items[0]), i)) && !r.items.some((x) => intersects(x.e, i.e)));
    if (row) { row.items.push(i); row.y1 = Math.min(row.y1, i.e.bounds.y1); row.y2 = Math.max(row.y2, i.e.bounds.y2); }
    else rows.push({ items: [i], y1: i.e.bounds.y1, y2: i.e.bounds.y2 });
  }
  rows.sort((a, b) => a.y1 - b.y1);
  for (const r of rows) if (r.items.length > 1) rules.push({ type: 'sameRow', els: r.items.map((i) => i.name) });
  if (rows.length > 1) rules.push({ type: 'order', els: rows.map((r) => r.items[0].name) });
  for (let k = 1; k < rows.length; k++) {
    const a = rows[k - 1], b = rows[k];
    // gap between the rows' first elements (the same elements the check measures)
    const gap = (b.items[0].e.bounds.y1 - a.items[0].e.bounds.y2) / screen.w;
    const stable = (r) => r.items.some((i) => !i.dynamic);
    if (gap >= 0 && stable(a) && stable(b)) rules.push({ type: 'gap', above: a.items[0].name, below: b.items[0].name, value: r4(gap) });
  }

  // alignment groups (static, not full-width, top-level)
  const alignable = top.filter((i) => !i.dynamic && i.box.w < 0.97);
  for (const [edge, get] of [['alignLeft', (i) => i.e.bounds.x1], ['alignRight', (i) => i.e.bounds.x2]]) {
    const groups = [];
    for (const i of alignable) {
      const g = groups.find((gr) => Math.abs(get(gr[0]) - get(i)) <= 2);
      if (g) g.push(i); else groups.push([i]);
    }
    for (const g of groups) if (g.length > 1) rules.push({ type: edge, els: g.map((i) => i.name) });
  }
  for (const i of top) {
    const cx = i.box.x + i.box.w / 2;
    if (Math.abs(cx - 0.5) <= 0.006 && i.box.w < 0.95) rules.push({ type: 'centerX', el: i.name });
  }
  const tappable = top.filter((i) => i.e.clickable);
  const apart = [];
  for (let a = 0; a < tappable.length; a++) for (let b = a + 1; b < tappable.length; b++) if (!intersects(tappable[a].e, tappable[b].e)) apart.push([tappable[a].name, tappable[b].name]);
  if (apart.length) rules.push({ type: 'noOverlap', pairs: apart });

  return {
    spec: meta.spec,
    page: meta.page,
    source: meta.source,
    generatedAt: new Date().toISOString(),
    reviewed: false,
    note: 'Generated - review each value against the design, then set "reviewed": true. Remove a check by deleting it from an element\'s "checks", or list element names in "ignore".',
    baseline: { w: screen.w, h: screen.h },
    scrollTop: Boolean(meta.scrollTop),
    tolerance: { ...DEFAULT_TOLERANCE, ...(previous?.tolerance || {}) },
    ignore: previous?.ignore || [],
    elements,
    rules,
  };
}
