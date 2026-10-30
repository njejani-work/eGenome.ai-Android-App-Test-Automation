#!/usr/bin/env node
// npm run dashboard          -> rebuild data and open reports/index.html
// npm run dashboard:build    -> rebuild data only (e.g. after an interrupted run)
import { exec } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import dotenv from 'dotenv';

// Load .env before options.js reads DASHBOARD_* settings
const PROJECT_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..', '..');
dotenv.config({ path: path.join(PROJECT_ROOT, '.env'), quiet: true });
const { options } = await import('./options.js');
const { buildIndex } = await import('./builder.js');

const idx = buildIndex(options.reportsDir, { keepRuns: options.keepRuns, projectName: options.projectName, rebuildRuns: true });
const file = path.join(options.reportsDir, 'index.html');
console.log(`  Dashboard rebuilt: ${idx.runs.length} run(s) -> ${file}`);

if (process.argv.includes('--open') && fs.existsSync(file)) {
  const cmd = process.platform === 'win32' ? `start "" "${file}"` : process.platform === 'darwin' ? `open "${file}"` : `xdg-open "${file}"`;
  exec(cmd, (err) => { if (err) console.log(`  Open it in your browser: ${file}`); });
}
