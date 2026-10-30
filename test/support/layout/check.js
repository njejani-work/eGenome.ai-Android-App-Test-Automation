// Evaluates a layout spec against a parsed screen. Pure function - no driver calls - so it can be unit-tested.
import { findAll, resolveTokens } from './hierarchy.js';
import { DEFAULT_TOLERANCE } from './spec-builder.js';

const pct = (v) => `${(v * 100).toFixed(1)}%`;
const norm = (s) => String(s ?? '').replace(/\s+/g, ' ').trim();

function box(e, screen) {
  const b = e.bounds;
  return { x: b.x1 / screen.w, y: b.y1 / screen.h, w: (b.x2 - b.x1) / screen.w, h: (b.y2 - b.y1) / screen.h, px: b };
}
const round = (b) => (b ? { x: +b.x.toFixed(4), y: +b.y.toFixed(4), w: +b.w.toFixed(4), h: +b.h.toFixed(4) } : null);

/**
 * @returns {{ results: Array, elements: Array, aspectMatches: boolean, summary: object }}
 *   results: { type, target, status: passed|failed|warning|skipped, expected, actual, message }
 */
export function evaluate(spec, tree, { dpi = null } = {}) {
  const screen = tree.screen;
  const tol = { nearest: 0.25, nearestShape: 0.06, ...DEFAULT_TOLERANCE, ...(spec.tolerance || {}) };
  const ignore = new Set(spec.ignore || []);
  const baseAspect = spec.baseline.h / spec.baseline.w;
  const aspect = screen.h / screen.w;
  const aspectMatches = Math.abs(aspect - baseAspect) / baseAspect <= tol.aspect;
  const results = [];
  const found = new Map(); // name -> { el, box }
  const claimed = new Set(); // screen elements already matched to a spec element
  const elements = [];
  const add = (type, target, ok, expected, actual, message, severity = 'error') =>
    results.push({ type, target, status: ok === null ? 'skipped' : ok ? 'passed' : severity === 'warn' ? 'warning' : 'failed', expected, actual, message });

  // ---------------- element checks
  // exact matches first, so repeated/unlabelled ("near") elements can't take their screen element
  const ordered = Object.entries(spec.elements).sort(([, a], [, b]) => Number(Boolean(a.near)) - Number(Boolean(b.near)));
  for (const [name, spec_] of ordered) {
    if (ignore.has(name)) continue;
    const checks = new Set(spec_.checks || ['presence']);
    const exp = spec_.box;
    let hits = findAll(tree, spec_.selector || spec_.match).filter((e) => e.bounds && e.displayed);
    let el = hits[0];
    if (exp && (spec_.near || hits.length > 1)) {
      // Repeated / live / unlabelled element: take the closest unclaimed match to where it should be
      // distance over the box values this element is checked on (a progress fill's width may change)
      const keys = spec_.boxKeys || ['x', 'y', 'w', 'h'];
      const dist = (e) => { const b = box(e, screen); return keys.reduce((d, k) => d + (k === 'w' || k === 'h' ? 0.5 : 1) * Math.abs(b[k] - exp[k]), 0); };
      const pool = hits.filter((e) => !claimed.has(e));
      el = (pool.length ? pool : hits).sort((a, b) => dist(a) - dist(b))[0];
      const limit = spec_.match?.leaf ? tol.nearestShape : tol.nearest;
      if (el && spec_.near && dist(el) > limit) el = undefined; // nothing like it anywhere near its place
    }
    if (el) claimed.add(el);
    const actual = el ? box(el, screen) : null;
    let worst = 'passed';
    const mark = (r) => { if (r === 'failed' || (r === 'warning' && worst === 'passed')) worst = r; };

    if (!el) {
      // Explain *why*: is something else sitting where the element should be (e.g. its text changed)?
      let hint = '';
      if (exp) {
        const cx = (exp.x + exp.w / 2) * screen.w, cy = (exp.y + exp.h / 2) * screen.h;
        const there = tree.all.filter((e) => e.bounds && e.displayed && (e.text || e.desc) && e.bounds.x1 <= cx && cx <= e.bounds.x2 && e.bounds.y1 <= cy && cy <= e.bounds.y2)
          .sort((a, b) => (a.bounds.x2 - a.bounds.x1) * (a.bounds.y2 - a.bounds.y1) - (b.bounds.x2 - b.bounds.x1) * (b.bounds.y2 - b.bounds.y1))[0];
        if (there) hint = `; at its position the screen shows ${there.text ? `text "${norm(there.text)}"` : `label "${norm(there.desc)}"`}${spec_.text ? ` (expected "${norm(resolveTokens(spec_.text))}")` : ''}`;
      }
      add('presence', name, false, spec_.text ? `"${norm(resolveTokens(spec_.text))}"` : 'visible', 'not found', `${name} not found on screen${spec_.near ? ' near its expected position' : ''}${hint}`);
      elements.push({ name, expected: exp, actual: null, status: 'failed' });
      continue;
    }
    add('presence', name, true, 'visible', 'visible', '');
    found.set(name, { el, box: actual });

    // stays on screen
    const on = el.bounds.x1 >= -2 && el.bounds.y1 >= -2 && el.bounds.x2 <= screen.w + 2 && el.bounds.y2 <= screen.h + 2;
    add('onScreen', name, on, 'inside screen', on ? 'inside' : 'off-screen', on ? '' : `${name} is partly off-screen`);
    mark(results[results.length - 1].status);

    if (checks.has('state')) {
      const ok = (!spec_.clickable || el.clickable) && (spec_.enabled === false || el.enabled);
      add('state', name, ok, `${spec_.clickable ? 'clickable, ' : ''}enabled`, `${el.clickable ? 'clickable' : 'not clickable'}, ${el.enabled ? 'enabled' : 'disabled'}`, ok ? '' : `${name} state changed`);
      mark(results[results.length - 1].status);
    }
    if (checks.has('text') && spec_.text != null) {
      const want = norm(resolveTokens(spec_.text));
      const ok = norm(el.text) === want;
      add('text', name, ok, want, norm(el.text), ok ? '' : `${name} text is "${norm(el.text)}", expected "${want}"`);
      mark(results[results.length - 1].status);
    }
    if (checks.has('format') && spec_.match?.textPattern) {
      // live value (price, date, count...): only its format is fixed
      let ok;
      try { ok = new RegExp(`^(?:${spec_.match.textPattern})$`, 's').test(el.text); } catch { ok = false; }
      add('format', name, ok, spec_.match.textPattern, norm(el.text), ok ? '' : `${name} shows "${norm(el.text)}", which doesn't have the expected format`);
      mark(results[results.length - 1].status);
    }
    if (checks.has('box') && exp) {
      if (!aspectMatches) add('box', name, null, '', '', 'skipped: screen aspect ratio differs from the baseline');
      else {
        const keys = spec_.boxKeys || ['x', 'y', 'w', 'h'];
        const off = keys.filter((k) => Math.abs(actual[k] - exp[k]) > (k === 'x' || k === 'y' ? tol.position : tol.size));
        add('box', name, off.length === 0, keys.map((k) => `${k}=${pct(exp[k])}`).join(' '), keys.map((k) => `${k}=${pct(actual[k])}`).join(' '),
          off.length ? `${name} moved/resized: ${off.map((k) => `${k} ${pct(actual[k])} (expected ${pct(exp[k])} ±${pct(k === 'x' || k === 'y' ? tol.position : tol.size)})`).join(', ')}` : '');
        mark(results[results.length - 1].status);
      }
    }
    if (checks.has('width') && exp) {
      const ok = Math.abs(actual.w - exp.w) <= tol.size;
      add('width', name, ok, `${pct(exp.w)} of screen width`, pct(actual.w), ok ? '' : `${name} width ${pct(actual.w)} of screen, expected ${pct(exp.w)}`);
      mark(results[results.length - 1].status);
    }
    if (checks.has('minTap')) {
      if (!dpi) add('minTap', name, null, '≥ 48dp', '', 'skipped: display density unknown', 'warn');
      else {
        const dp = Math.min(el.bounds.x2 - el.bounds.x1, el.bounds.y2 - el.bounds.y1) / (dpi / 160);
        const ok = dp >= 48 - 0.5;
        add('minTap', name, ok, '≥ 48dp', `${Math.round(dp)}dp`, ok ? '' : `${name} tap target is ${Math.round(dp)}dp (Android guideline: 48dp)`, 'warn');
        mark(results[results.length - 1].status);
      }
    }
    elements.push({ name, expected: exp, actual: round(actual), status: worst });
  }

  // ---------------- relational rules
  const get = (n) => found.get(n);
  const need = (type, names, fn) => {
    const missing = names.filter((n) => ignore.has(n) || !get(n));
    if (missing.length) return add(type, names.join(', '), null, '', '', `skipped: ${missing.join(', ')} not found`);
    fn(names.map(get));
  };
  const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  /**
   * Month calendar: every day 1..N of the shown month is present once, under the right weekday
   * column, cells are the same size, each week is one row and rows are evenly spaced.
   */
  const calendarGrid = (r) => {
    const T = 'calendar';
    const cells = findAll(tree, r.cells).filter((e) => e.bounds && e.displayed);
    const label = (e) => Number((/^[0-9]{1,2}$/.test(e.desc.trim()) ? e.desc : e.text).trim());
    const title = r.title && get(r.title);
    const m = title && norm(title.el.text).match(/^([A-Za-z]+) ([0-9]{4})$/);
    const month = m ? MONTHS.indexOf(m[1]) : -1;
    if (!cells.length) return add('calendarGrid', T, false, 'day cells', 'none', 'Calendar: no day cells found');
    if (month < 0) return add('calendarGrid', T, null, '', '', 'skipped: month title not found or not "Month YYYY"');
    const year = Number(m[2]);
    const daysIn = new Date(year, month + 1, 0).getDate();
    const nums = cells.map(label).sort((a, b) => a - b);
    const dupes = nums.filter((n, i) => nums[i - 1] === n);
    const missing = [...Array(daysIn)].map((_, i) => i + 1).filter((d) => !nums.includes(d));
    const extra = nums.filter((n) => n < 1 || n > daysIn);
    const okDays = !dupes.length && !missing.length && !extra.length;
    add('calendarDays', T, okDays, `days 1-${daysIn} of ${m[1]} ${year}, once each`, `${cells.length} cells`,
      okDays ? '' : `Calendar ${m[1]} ${year}: ${[missing.length && `missing ${missing.join(', ')}`, dupes.length && `repeated ${[...new Set(dupes)].join(', ')}`, extra.length && `unexpected ${extra.join(', ')}`].filter(Boolean).join('; ')}`);
    const cols = (r.columns || []).map(get);
    if (cols.some((c) => !c)) return add('calendarColumns', T, null, '', '', 'skipped: weekday names not found');
    const colX = cols.map((c) => (c.el.bounds.x1 + c.el.bounds.x2) / 2);
    const cx = (e) => (e.bounds.x1 + e.bounds.x2) / 2, cy = (e) => (e.bounds.y1 + e.bounds.y2) / 2;
    const wrongCol = cells.filter((e) => {
      const wd = new Date(year, month, label(e)).getDay();
      const ci = r.weekdays.indexOf(wd);
      return ci < 0 || Math.abs(cx(e) - colX[ci]) / screen.w > tol.align * 2;
    }).map(label).sort((a, b) => a - b);
    add('calendarColumns', T, !wrongCol.length, 'each day under its weekday', wrongCol.length ? `${wrongCol.length} misplaced` : 'all aligned',
      wrongCol.length ? `Calendar: ${wrongCol.slice(0, 8).join(', ')}${wrongCol.length > 8 ? '…' : ''} not under the right weekday` : '');
    const ws = cells.map((e) => (e.bounds.x2 - e.bounds.x1) / screen.w), hs = cells.map((e) => (e.bounds.y2 - e.bounds.y1) / screen.h);
    const spreadW = Math.max(...ws) - Math.min(...ws), spreadH = Math.max(...hs) - Math.min(...hs);
    const okSize = spreadW <= tol.size && spreadH <= tol.size;
    add('calendarCells', T, okSize, 'all day cells the same size', `size spread ${pct(Math.max(spreadW, spreadH))}`, okSize ? '' : 'Calendar: day cells are not all the same size');
    // weeks: group by date (Monday-first per the weekday columns), each week on one row, rows evenly spaced
    const weekOf = (d) => Math.floor((d - 1 + r.weekdays.indexOf(new Date(year, month, 1).getDay())) / 7);
    const weeks = new Map();
    for (const e of cells) { const w = weekOf(label(e)); if (!weeks.has(w)) weeks.set(w, []); weeks.get(w).push(e); }
    const rowsY = [...weeks.keys()].sort((a, b) => a - b).map((w) => weeks.get(w).map(cy));
    const badRow = rowsY.findIndex((ys) => (Math.max(...ys) - Math.min(...ys)) / screen.h > tol.position);
    const centres = rowsY.map((ys) => ys.reduce((a, b) => a + b, 0) / ys.length);
    const steps = centres.slice(1).map((y, i) => (y - centres[i]) / screen.w);
    const evenly = steps.length < 2 || Math.max(...steps) - Math.min(...steps) <= tol.gap;
    add('calendarRows', T, badRow < 0 && evenly && steps.every((x) => x > 0), `${rowsY.length} week rows, evenly spaced`,
      badRow >= 0 ? `week ${badRow + 1} not on one row` : evenly ? 'ok' : 'uneven spacing',
      badRow >= 0 ? `Calendar: week ${badRow + 1} is not on one row` : evenly ? '' : 'Calendar: week rows are not evenly spaced');
    const off = cells.filter((e) => e.bounds.x1 < -2 || e.bounds.y1 < -2 || e.bounds.x2 > screen.w + 2 || e.bounds.y2 > screen.h + 2).map(label);
    if (off.length) add('calendarOnScreen', T, false, 'all days on screen', `${off.length} off-screen`, `Calendar: days ${off.join(', ')} are partly off-screen`);
  };

  for (const r of spec.rules || []) {
    switch (r.type) {
      case 'order': {
        // Missing elements are reported by their presence check; order is checked among the rest
        const names = r.els.filter((n) => get(n) && !ignore.has(n));
        if (names.length < 2) { add('order', 'top → bottom', null, '', '', 'skipped: not enough elements found'); break; }
        const xs = names.map(get);
        let bad = null;
        for (let i = 1; i < xs.length; i++) if (xs[i].el.bounds.y1 < xs[i - 1].el.bounds.y1) { bad = [names[i - 1], names[i]]; break; }
        add('order', 'top → bottom', !bad, names.join(' → '), bad ? `${bad[1]} is above ${bad[0]}` : 'in order', bad ? `Order changed: ${bad[1]} is now above ${bad[0]}` : '');
        break;
      }
      case 'sameRow':
        need('sameRow', r.els, (xs) => {
          const [a, ...rest] = xs;
          const bad = rest.findIndex((b) => {
            const cy = (b.el.bounds.y1 + b.el.bounds.y2) / 2, ay = (a.el.bounds.y1 + a.el.bounds.y2) / 2;
            return !(cy >= a.el.bounds.y1 - 2 && cy <= a.el.bounds.y2 + 2) && !(ay >= b.el.bounds.y1 - 2 && ay <= b.el.bounds.y2 + 2);
          });
          add('sameRow', r.els.join(', '), bad < 0, 'on one row', bad < 0 ? 'on one row' : `${r.els[bad + 1]} left the row`, bad < 0 ? '' : `${r.els[bad + 1]} is no longer on the same row as ${r.els[0]}`);
        });
        break;
      case 'alignLeft':
      case 'alignRight':
        need(r.type, r.els, (xs) => {
          const edges = xs.map((x) => (r.type === 'alignLeft' ? x.el.bounds.x1 : x.el.bounds.x2) / screen.w);
          const spread = Math.max(...edges) - Math.min(...edges);
          const ok = spread <= tol.align;
          add(r.type, r.els.join(', '), ok, `${r.type === 'alignLeft' ? 'left' : 'right'} edges aligned (±${pct(tol.align)})`, `spread ${pct(spread)}`, ok ? '' : `${r.els.join(', ')}: ${r.type === 'alignLeft' ? 'left' : 'right'} edges differ by ${pct(spread)} of width`);
        });
        break;
      case 'centerX':
        need('centerX', [r.el], ([x]) => {
          const cx = (x.el.bounds.x1 + x.el.bounds.x2) / 2 / screen.w;
          const ok = Math.abs(cx - 0.5) <= tol.center;
          add('centerX', r.el, ok, 'centred (50%)', pct(cx), ok ? '' : `${r.el} is off-centre: centre at ${pct(cx)} of width`);
        });
        break;
      case 'inside':
        need('inside', [r.el, r.parent], ([c, p]) => {
          const s = 2, cb = c.el.bounds, pb = p.el.bounds;
          const inside = cb.x1 >= pb.x1 - s && cb.y1 >= pb.y1 - s && cb.x2 <= pb.x2 + s && cb.y2 <= pb.y2 + s;
          const dc = Math.abs((cb.x1 + cb.x2) / 2 - (pb.x1 + pb.x2) / 2) / screen.w;
          const ok = inside && (!r.centered || dc <= tol.center);
          add('inside', `${r.el} in ${r.parent}`, ok, r.centered ? 'inside, centred' : 'inside', inside ? (r.centered ? `off-centre by ${pct(dc)}` : 'inside') : 'outside',
            ok ? '' : inside ? `${r.el} is not centred in ${r.parent} (${pct(dc)} off)` : `${r.el} sticks out of ${r.parent}`);
        });
        break;
      case 'gap':
        need('gap', [r.above, r.below], ([a, b]) => {
          const g = (b.el.bounds.y1 - a.el.bounds.y2) / screen.w;
          const ok = Math.abs(g - r.value) <= tol.gap;
          add('gap', `${r.above} ↕ ${r.below}`, ok, `${pct(r.value)} of width`, pct(g), ok ? '' : `Spacing between ${r.above} and ${r.below} is ${pct(g)} of width, expected ${pct(r.value)}`);
        });
        break;
      case 'noOverlap':
        for (const [a, b] of r.pairs || []) {
          need('noOverlap', [a, b], ([x, y]) => {
            const A = x.el.bounds, B = y.el.bounds;
            const overlap = A.x1 < B.x2 - 1 && B.x1 < A.x2 - 1 && A.y1 < B.y2 - 1 && B.y1 < A.y2 - 1;
            add('noOverlap', `${a} / ${b}`, !overlap, 'not overlapping', overlap ? 'overlapping' : 'apart', overlap ? `${a} overlaps ${b}` : '');
          });
        }
        break;
      case 'calendarGrid':
        calendarGrid(r);
        break;
      default:
        add(r.type, '', null, '', '', `unknown rule type "${r.type}"`);
    }
  }

  const count = (s) => results.filter((x) => x.status === s).length;
  return {
    results,
    elements,
    aspectMatches,
    screen: { w: screen.w, h: screen.h },
    summary: { total: results.length, passed: count('passed'), failed: count('failed'), warnings: count('warning'), skipped: count('skipped') },
  };
}
