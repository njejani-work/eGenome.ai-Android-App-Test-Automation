// Reads a UiAutomator2 page source into a flat list of elements with screen boxes,
// and finds elements by the same selector strings the page objects use.
import { DOMParser } from '@xmldom/xmldom';
import xpath from 'xpath';

const IGNORE_PACKAGES = /^(com\.android\.systemui|com\.google\.android\.inputmethod|com\.android\.inputmethod|com\.samsung\.android\.honeyboard)/;
const GLYPH_ONLY = /^[\s\uE000-\uF8FF\u{F0000}-\u{FFFFD}]+$/u;

export function parseBounds(b) {
  const m = String(b || '').match(/\[(-?\d+),(-?\d+)\]\[(-?\d+),(-?\d+)\]/);
  return m ? { x1: +m[1], y1: +m[2], x2: +m[3], y2: +m[4] } : null;
}

const attr = (n, k) => (n.getAttribute ? n.getAttribute(k) || '' : '');

const hasElementChild = (n) => { for (let c = n.firstChild; c; c = c.nextSibling) if (c.nodeType === 1) return true; return false; };

function toEl(node, index) {
  const cls = attr(node, 'class') || node.nodeName;
  return {
    leaf: !hasElementChild(node),
    node,
    index,
    cls,
    text: attr(node, 'text'),
    desc: attr(node, 'content-desc'),
    rid: attr(node, 'resource-id'),
    hint: attr(node, 'hint'),
    pkg: attr(node, 'package'),
    clickable: attr(node, 'clickable') === 'true',
    enabled: attr(node, 'enabled') !== 'false',
    displayed: attr(node, 'displayed') !== 'false',
    checked: attr(node, 'checked') === 'true',
    input: /EditText|TextField|AutoCompleteTextView/i.test(cls),
    bounds: parseBounds(attr(node, 'bounds')),
  };
}

/** Parse page source. Returns { doc, screen: {w,h}, all: [...elements] } */
export function parseSource(xml) {
  const doc = new DOMParser({ onError: () => {} }).parseFromString(xml, 'text/xml');
  const root = doc.documentElement;
  const all = xpath.select('//*', doc).filter((n) => n.nodeName !== 'hierarchy').map(toEl);
  let w = Number(attr(root, 'width')) || 0;
  let h = Number(attr(root, 'height')) || 0;
  if (!w || !h) {
    for (const e of all) if (e.bounds) { w = Math.max(w, e.bounds.x2); h = Math.max(h, e.bounds.y2); }
  }
  return { doc, screen: { w, h }, all };
}

/** Elements worth putting in a layout spec (visible app UI with text, a label, an icon, or that can be tapped/typed into). */
export function isInteresting(e) {
  if (!e.bounds || !e.displayed || IGNORE_PACKAGES.test(e.pkg)) return false;
  if (e.bounds.x2 - e.bounds.x1 < 2 || e.bounds.y2 - e.bounds.y1 < 2) return false;
  return Boolean(e.text.trim() || e.desc.trim() || e.input || (e.clickable && (e.desc || e.text)));
}

/** Icon drawn with an icon-font character (the character identifies the icon). */
export const isGlyph = (e) => Boolean(e.text && GLYPH_ONLY.test(e.text));

const VISUAL_CLASS = /(View|ViewGroup|Image|Svg|Progress|SeekBar|RatingBar)$/;
/**
 * Unlabelled visual building blocks: progress bars and their fills, rings, avatars, logos drawn as
 * images, dividers, coloured chips. Only leaves (no children) of a page source, so containers are skipped.
 */
export function isVisualLeaf(e, screen) {
  if (e.leaf !== true || !e.bounds || !e.displayed || IGNORE_PACKAGES.test(e.pkg)) return false;
  if (e.text.trim() || e.desc.trim() || e.input || !VISUAL_CLASS.test(e.cls)) return false;
  const w = e.bounds.x2 - e.bounds.x1, h = e.bounds.y2 - e.bounds.y1;
  if (w < 4 || h < 4) return false;
  if (screen && w * h > 0.4 * screen.w * screen.h) return false; // backgrounds
  return true;
}

/** "{{TEST_USER_NAME}}" -> value from .env (names in specs follow the configured test account). */
export const resolveTokens = (s) => (typeof s === 'string' ? s.replace(/\{\{(\w+)\}\}/g, (_, k) => process.env[k] ?? '') : s);

// ---------------------------------------------------------------- selector evaluation

function uiSelectorPredicate(sel) {
  const calls = [...sel.matchAll(/\.(\w+)\(("(?:[^"\\]|\\.)*"|\d+|true|false)\)/g)].map(([, fn, raw]) => {
    let v = raw;
    try { v = JSON.parse(raw); } catch {}
    return [fn, v];
  });
  const full = (re, s) => { try { return new RegExp(`^(?:${re.replace(/^\(\?i\)/, '')})$`, re.startsWith('(?i)') ? 'is' : 's').test(s); } catch { return false; } };
  let instance = null;
  const preds = [];
  for (const [fn, v] of calls) {
    switch (fn) {
      case 'description': preds.push((e) => e.desc === v); break;
      case 'descriptionContains': preds.push((e) => e.desc.includes(v)); break;
      case 'descriptionStartsWith': preds.push((e) => e.desc.startsWith(v)); break;
      case 'descriptionMatches': preds.push((e) => full(v, e.desc)); break;
      case 'text': preds.push((e) => e.text === v); break;
      case 'textContains': preds.push((e) => e.text.includes(v)); break;
      case 'textStartsWith': preds.push((e) => e.text.startsWith(v)); break;
      case 'textMatches': preds.push((e) => full(v, e.text)); break;
      case 'resourceId': preds.push((e) => e.rid === v); break;
      case 'resourceIdMatches': preds.push((e) => full(v, e.rid)); break;
      case 'className': preds.push((e) => e.cls === v); break;
      case 'clickable': preds.push((e) => e.clickable === v); break;
      case 'instance': instance = v; break;
      default: preds.push(() => false);
    }
  }
  return { pred: (e) => preds.every((p) => p(e)), instance };
}

/**
 * Find elements for a selector (page-object selector string) or an attribute matcher
 * ({ desc, text, rid, cls, descStarts, textStarts }). Returns elements in document order.
 */
export function findAll(tree, selOrMatch) {
  const { all, doc } = tree;
  if (selOrMatch && typeof selOrMatch === 'object') {
    const m = Object.fromEntries(Object.entries(selOrMatch).map(([k, v]) => [k, resolveTokens(v)]));
    const tp = m.textPattern != null ? new RegExp(`^(?:${m.textPattern})$`, 's') : null;
    const dp = m.descPattern != null ? new RegExp(`^(?:${m.descPattern})$`, 's') : null;
    return all.filter((e) =>
      (m.desc == null || e.desc === m.desc) && (m.text == null || e.text === m.text) && (m.rid == null || e.rid === m.rid) &&
      (m.cls == null || e.cls === m.cls) && (m.descStarts == null || e.desc.startsWith(m.descStarts)) && (m.textStarts == null || e.text.startsWith(m.textStarts)) &&
      (!tp || tp.test(e.text)) && (!dp || dp.test(e.desc)) && (m.clickable == null || e.clickable === m.clickable) &&
      (m.leaf == null || (e.leaf === m.leaf && !e.text && !e.desc)));
  }
  const sel = resolveTokens(String(selOrMatch));
  if (sel.startsWith('android=new UiSelector()')) {
    const { pred, instance } = uiSelectorPredicate(sel);
    const hits = all.filter(pred);
    return instance == null ? hits : hits.slice(instance, instance + 1);
  }
  if (sel.startsWith('~')) return all.filter((e) => e.desc === sel.slice(1));
  if (sel.startsWith('id=')) return all.filter((e) => e.rid === sel.slice(3) || e.rid.endsWith(`:id/${sel.slice(3)}`));
  if (sel.startsWith('/') || sel.startsWith('(')) {
    if (!doc) return [];
    try {
      const nodes = xpath.select(sel, doc);
      return nodes.map((n) => all.find((e) => e.node === n)).filter(Boolean);
    } catch {
      return [];
    }
  }
  return [];
}

/** Build a tree-like object from capture JSON elements (no XML available). */
export function treeFromCapture(elements) {
  const all = elements.map((a, i) => ({
    index: i,
    cls: a.class || '',
    text: a.text || '',
    desc: a.contentDesc || '',
    rid: a.resourceId || '',
    hint: a.hint || '',
    pkg: '',
    clickable: Boolean(a.clickable),
    enabled: true,
    displayed: true,
    input: Boolean(a.input) || /EditText/.test(a.class || ''),
    bounds: parseBounds(a.bounds),
    key: a.key,
    name: a.name,
  }));
  return { doc: null, all };
}
