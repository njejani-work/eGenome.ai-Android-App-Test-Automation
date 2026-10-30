// Parses UiAutomator2 page source and builds ranked, uniqueness-checked locators.
import { DOMParser } from '@xmldom/xmldom';
import xpath from 'xpath';
import crypto from 'node:crypto';

const TEXT_MAX = 60;

export function hash(str) {
  return crypto.createHash('sha1').update(str).digest('hex').slice(0, 12);
}

const bool = (v) => v === 'true';

function attr(node, name) {
  const v = node.getAttribute(name);
  return v == null ? '' : v;
}

function elementNodes(doc) {
  return xpath.select('//*', doc).filter((n) => n.nodeName !== 'hierarchy');
}

function absoluteXPath(node) {
  const parts = [];
  let cur = node;
  while (cur && cur.nodeType === 1) {
    let idx = 1;
    let sib = cur.previousSibling;
    while (sib) {
      if (sib.nodeType === 1 && sib.nodeName === cur.nodeName) idx++;
      sib = sib.previousSibling;
    }
    parts.unshift(cur.nodeName === 'hierarchy' ? 'hierarchy' : `${cur.nodeName}[${idx}]`);
    cur = cur.parentNode;
  }
  return '/' + parts.join('/');
}

export function xpathLiteral(s) {
  if (!s.includes('"')) return `"${s}"`;
  if (!s.includes("'")) return `'${s}'`;
  return 'concat(' + s.split('"').map((p) => `"${p}"`).join(`, '"', `) + ')';
}

const uiStr = (s) => '"' + s.replace(/\\/g, '\\\\').replace(/"/g, '\\"') + '"';

function isInput(cls) {
  return /EditText|TextField|AutoCompleteTextView/i.test(cls);
}

function describe(node) {
  const cls = attr(node, 'class') || node.nodeName;
  return {
    node,
    cls,
    resourceId: attr(node, 'resource-id'),
    text: attr(node, 'text'),
    contentDesc: attr(node, 'content-desc'),
    hint: attr(node, 'hint'),
    package: attr(node, 'package'),
    bounds: attr(node, 'bounds'),
    clickable: bool(attr(node, 'clickable')),
    longClickable: bool(attr(node, 'long-clickable')),
    checkable: bool(attr(node, 'checkable')),
    checked: bool(attr(node, 'checked')),
    scrollable: bool(attr(node, 'scrollable')),
    focusable: bool(attr(node, 'focusable')),
    enabled: attr(node, 'enabled') !== 'false',
    displayed: attr(node, 'displayed') !== 'false',
    password: bool(attr(node, 'password')),
    input: isInput(cls),
  };
}

function isInteresting(e) {
  if (!e.displayed) return false;
  if (e.clickable || e.longClickable || e.checkable || e.scrollable || e.input) return true;
  if (e.resourceId && !/^android:id\/(content|statusBarBackground|navigationBarBackground)$/.test(e.resourceId)) return true;
  if (e.contentDesc) return true;
  if (e.text.trim() && e.text.length <= TEXT_MAX * 3) return true;
  return false;
}

// Stable identity used to merge the same element across captures.
export function elementKey(e) {
  if (e.resourceId || e.contentDesc) {
    // Text is only part of the key when id alone is ambiguous (e.g. list rows) - handled by caller.
    return `${e.cls}|id:${e.resourceId}|desc:${e.contentDesc}`;
  }
  if (e.text.trim()) return `${e.cls}|text:${e.text.trim().slice(0, TEXT_MAX)}`;
  if (e.hint) return `${e.cls}|hint:${e.hint}`;
  return `${e.cls}|xpath:${e.absXPath}`;
}

function buildCandidates(e, doc, counts) {
  const c = [];
  const push = (strategy, selector, unique, note) => c.push({ strategy, selector, unique, ...(note ? { note } : {}) });
  const shortText = e.text.trim() && e.text.length <= TEXT_MAX ? e.text : '';

  if (e.contentDesc) {
    push('accessibility id', `~${e.contentDesc}`, counts.desc.get(e.contentDesc) === 1);
  }
  if (e.resourceId) {
    const n = counts.rid.get(e.resourceId);
    push('id', `id=${e.resourceId}`, n === 1);
    if (n > 1 && shortText) {
      const combo = `//*[@resource-id=${xpathLiteral(e.resourceId)} and @text=${xpathLiteral(shortText)}]`;
      const unique = xpath.select(combo, doc).length === 1;
      push('-android uiautomator', `android=new UiSelector().resourceId(${uiStr(e.resourceId)}).text(${uiStr(shortText)})`, unique);
    }
  }
  if (shortText) {
    push('-android uiautomator', `android=new UiSelector().text(${uiStr(shortText)})`, counts.text.get(e.text) === 1);
  }
  if (e.hint && !shortText) {
    const hx = `//${e.cls}[@hint=${xpathLiteral(e.hint)}]`;
    push('xpath', hx, xpath.select(hx, doc).length === 1);
  }

  // Relative XPath combining the available attributes
  const conds = [];
  if (e.resourceId) conds.push(`@resource-id=${xpathLiteral(e.resourceId)}`);
  if (e.contentDesc) conds.push(`@content-desc=${xpathLiteral(e.contentDesc)}`);
  if (shortText) conds.push(`@text=${xpathLiteral(shortText)}`);
  if (conds.length) {
    const rel = `//${e.cls}[${conds.join(' and ')}]`;
    const matches = xpath.select(rel, doc);
    if (matches.length === 1) push('xpath', rel, true);
    else if (matches.length > 1) {
      const idx = matches.indexOf(e.node) + 1;
      push('xpath', `(${rel})[${idx}]`, true, 'index-based: may break if list order changes');
    }
  }

  // Indexed id when nothing else is unique (e.g. repeated list rows)
  if (e.resourceId && counts.rid.get(e.resourceId) > 1) {
    const same = counts.ridNodes.get(e.resourceId);
    const idx = same.indexOf(e.node);
    push('-android uiautomator', `android=new UiSelector().resourceId(${uiStr(e.resourceId)}).instance(${idx})`, true, 'index-based: may break if list order changes');
  }

  push('xpath', e.absXPath, true, 'absolute: brittle, last resort');

  // Rank: unique first (stable strategies before index-based), keep original priority order otherwise
  const score = (x) => (x.unique ? 0 : 10) + (x.note ? 5 : 0);
  return c
    .map((x, i) => ({ x, i }))
    .sort((a, b) => score(a.x) - score(b.x) || a.i - b.i)
    .map(({ x }) => x);
}

const SUFFIX = [
  [/EditText|TextField|AutoComplete/i, 'Input'],
  [/CheckBox/i, 'Checkbox'],
  [/Switch|Toggle/i, 'Switch'],
  [/RadioButton/i, 'Radio'],
  [/Spinner/i, 'Dropdown'],
  [/RecyclerView|ListView|GridView|ScrollView|ViewPager/i, 'List'],
  [/ImageButton|Button|FloatingActionButton/i, 'Btn'],
  [/ImageView|Image/i, 'Image'],
  [/TextView|Text/i, 'Text'],
  [/Tab/i, 'Tab'],
];

const NOISE_WORDS = new Set(['btn', 'button', 'et', 'edt', 'edit', 'tv', 'txt', 'text', 'iv', 'img', 'image', 'cb', 'sw', 'rv', 'lv', 'input', 'view', 'id']);

function words(s) {
  return s
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    .split(/[^A-Za-z0-9]+/)
    .filter(Boolean)
    .map((w) => w.toLowerCase());
}

export function camel(ws) {
  const s = ws.map((w, i) => (i === 0 ? w : w[0].toUpperCase() + w.slice(1))).join('');
  return /^[a-z]/.test(s) ? s : 'el' + s.charAt(0).toUpperCase() + s.slice(1);
}

export function suggestName(e) {
  let suffix = 'View';
  for (const [re, s] of SUFFIX) if (re.test(e.cls)) { suffix = s; break; }
  if (suffix === 'Text' && e.clickable) suffix = 'Link';
  if ((suffix === 'Image' || suffix === 'View') && e.clickable) suffix = 'Btn';

  let base = [];
  if (e.resourceId) base = words(e.resourceId.split(':id/').pop()).filter((w) => !NOISE_WORDS.has(w));
  if (!base.length && e.contentDesc) base = words(e.contentDesc).slice(0, 4);
  if (!base.length && e.text.trim()) base = words(e.text).slice(0, 4);
  if (!base.length && e.hint) base = words(e.hint).slice(0, 4);
  if (!base.length) base = [suffix.toLowerCase()];
  else if (base[base.length - 1] !== suffix.toLowerCase()) base.push(suffix.toLowerCase());
  const name = camel(base);
  return RESERVED.has(name) ? name + 'El' : name;
}

// Names that would clash with BasePage members / JS internals
const RESERVED = new Set(['find', 'isOpen', 'waitForOpen', 'locators', 'anchors', 'constructor', 'prototype', '__proto__']);

function findTitle(els) {
  const isTitle = (e) =>
    e.text.trim() &&
    e.text.length <= 40 &&
    (/(toolbar|action_bar|appbar|title|header)/i.test(e.resourceId) ||
      /Toolbar|ActionBar/i.test(e.node.parentNode?.getAttribute?.('class') || ''));
  const t = els.find(isTitle);
  return t ? t.text.trim() : '';
}

/**
 * Analyze one page source.
 * @returns {{ elements, signature:Set<string>, structureHash, title, package }}
 */
export function analyze(xml, { appPackage, ignorePackages = [] } = {}) {
  const doc = new DOMParser({ onError: () => {} }).parseFromString(xml, 'text/xml');
  const all = elementNodes(doc).map(describe);

  const counts = { rid: new Map(), desc: new Map(), text: new Map(), ridNodes: new Map() };
  for (const e of all) {
    if (e.resourceId) {
      counts.rid.set(e.resourceId, (counts.rid.get(e.resourceId) || 0) + 1);
      if (!counts.ridNodes.has(e.resourceId)) counts.ridNodes.set(e.resourceId, []);
      counts.ridNodes.get(e.resourceId).push(e.node);
    }
    if (e.contentDesc) counts.desc.set(e.contentDesc, (counts.desc.get(e.contentDesc) || 0) + 1);
    if (e.text) counts.text.set(e.text, (counts.text.get(e.text) || 0) + 1);
  }

  const kept = all.filter((e) => !ignorePackages.includes(e.package)).filter(isInteresting);

  const elements = [];
  const seenKeys = new Set();
  for (const e of kept) {
    e.absXPath = absoluteXPath(e.node);
    let key = elementKey(e);
    // Repeated ids (list rows): disambiguate by text; skip exact duplicates
    if (seenKeys.has(key) && e.text.trim()) key += `|text:${e.text.trim().slice(0, TEXT_MAX)}`;
    if (seenKeys.has(key)) continue;
    seenKeys.add(key);
    e.key = key;
    e.locators = buildCandidates(e, doc, counts);
    e.suggestedName = suggestName(e);
    elements.push(e);
  }

  // Screen signature: stable structural tokens (no free text except on tappable, id-less elements)
  const signature = new Set();
  for (const e of elements) {
    if (e.resourceId) signature.add('id:' + e.resourceId);
    else if (e.contentDesc) signature.add('desc:' + e.contentDesc);
    else if ((e.clickable || e.input) && e.text.trim() && e.text.length <= 30) signature.add('t:' + e.text.trim());
    else if (e.input && e.hint) signature.add('hint:' + e.hint);
  }
  if (!signature.size) for (const e of elements) signature.add('cls:' + e.cls);

  const pkgs = all.map((e) => e.package).filter((p) => p && !ignorePackages.includes(p));
  const pkg = appPackage && pkgs.includes(appPackage) ? appPackage : pkgs[0] || '';

  return {
    elements,
    signature,
    structureHash: hash([...seenKeys].sort().join('\n')),
    title: findTitle(elements),
    package: pkg,
  };
}

/** Serializable view of an element (what goes into the JSON file). */
export function serializeElement(e) {
  const [primary, ...rest] = e.locators;
  return {
    key: e.key,
    primary,
    fallbacks: rest.slice(0, 4),
    attributes: {
      class: e.cls,
      resourceId: e.resourceId || undefined,
      text: e.text || undefined,
      contentDesc: e.contentDesc || undefined,
      hint: e.hint || undefined,
      clickable: e.clickable,
      checkable: e.checkable || undefined,
      scrollable: e.scrollable || undefined,
      input: e.input || undefined,
      password: e.password || undefined,
      bounds: e.bounds,
    },
  };
}
