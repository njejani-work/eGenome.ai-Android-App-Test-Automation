#!/usr/bin/env node
// Cross-platform "VAR=value command": node scripts/run-with-env.mjs LAYOUT_UPDATE=true -- wdio run ./wdio.conf.js --suite layout
import { spawn } from 'node:child_process';

const args = process.argv.slice(2);
const sep = args.indexOf('--');
const vars = (sep < 0 ? [] : args.slice(0, sep)).map((a) => a.split('='));
const cmd = sep < 0 ? args : args.slice(sep + 1);
const env = { ...process.env, ...Object.fromEntries(vars.map(([k, ...v]) => [k, v.join('=')])) };
const child = spawn(`npx ${cmd.map((c) => (/\s/.test(c) ? `"${c}"` : c)).join(' ')}`, { stdio: 'inherit', shell: true, env });
child.on('exit', (code) => process.exit(code ?? 1));
