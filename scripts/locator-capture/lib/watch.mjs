// Watch mode: you navigate the app in the emulator; every new screen/state is captured automatically.
import readline from 'node:readline';
import { sleep } from './capture.mjs';

const HELP = `
  Watching the emulator. Navigate the app normally; screens are captured as they appear.
  Keys:  c = capture now   n = save current screen under a new name   r = rename current screen
         m = merge current screen into another   l = list screens   q = quit
`;

export async function watch(capturer, { log = console.log } = {}) {
  const { store, config } = capturer;
  let running = true;
  let busy = false;
  let lastHash = null;
  let current = null;

  const interactive = process.stdin.isTTY;
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  const ask = (qs) =>
    new Promise((res) => {
      if (interactive) process.stdin.setRawMode(false);
      rl.question(qs, (a) => {
        if (interactive) process.stdin.setRawMode(true);
        res(a.trim());
      });
    });

  const report = (r, prefix = '') => {
    if (r.isNew) log(`${prefix}+ NEW screen ${r.name} (${r.elementCount} elements)`);
    else if (r.added.length) log(`${prefix}~ ${r.name}: +${r.added.length} new element(s): ${r.added.join(', ')}`);
    else if (r.name !== current) log(`${prefix}> ${r.name}`);
  };

  const capture = async (opts = {}) => {
    const r = await capturer.captureNow(opts);
    if (current && r.name !== current) store.addTransition(current, r.name, 'manual');
    report(r);
    current = r.name;
    lastHash = r.snap.analysis.structureHash;
    return r;
  };

  const withPause = async (fn) => {
    busy = true;
    try {
      await fn();
    } catch (e) {
      log(`  ! ${e.message}`);
    } finally {
      busy = false;
    }
  };

  const onSigint = () => (running = false);
  process.once('SIGINT', onSigint);

  if (interactive) {
    readline.emitKeypressEvents(process.stdin);
    process.stdin.setRawMode(true);
    process.stdin.on('keypress', (str, key) => {
      if (busy && !(key?.ctrl && key.name === 'c')) return;
      if ((key?.ctrl && key.name === 'c') || str === 'q') {
        running = false;
        return;
      }
      if (str === 'c') withPause(() => capture());
      if (str === 'l') {
        log(Object.entries(store.index.screens).map(([n, s]) => `  ${n === current ? '*' : ' '} ${n} (${s.elementCount})`).join('\n'));
      }
      if (str === 'n')
        withPause(async () => {
          const name = await ask('  Save current screen as (PascalCase, e.g. OtpScreen): ');
          if (name) await capture({ forceName: name });
        });
      if (str === 'r')
        withPause(async () => {
          if (!current) return log('  Nothing captured yet.');
          const name = await ask(`  Rename ${current} to: `);
          if (!name) return;
          store.rename(current, name);
          log(`  renamed ${current} -> ${name}`);
          current = name;
          await capture({ forceName: name });
        });
      if (str === 'm')
        withPause(async () => {
          if (!current) return log('  Nothing captured yet.');
          const into = await ask(`  Merge ${current} into which screen? `);
          if (!into) return;
          store.merge(into, current);
          log(`  merged ${current} -> ${into}`);
          current = into;
          await capture({ forceName: into });
        });
    });
  }

  log(HELP);
  let errors = 0;
  while (running) {
    if (!busy) {
      try {
        const snap = await capturer.snapshot();
        if (snap.analysis.structureHash !== lastHash) {
          busy = true;
          await capture();
          busy = false;
        }
        errors = 0;
      } catch (e) {
        busy = false;
        if (++errors > 5) {
          log(`  ! Lost connection to Appium: ${e.message}`);
          break;
        }
      }
    }
    await sleep(config.watch.pollIntervalMs);
  }

  if (interactive) process.stdin.setRawMode(false);
  rl.close();
  process.stdin.pause();
}
