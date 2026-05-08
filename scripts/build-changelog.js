#!/usr/bin/env node
// Reads CHANGELOG.md and writes site/changelog-data.json

import { readFileSync, writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dir = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dir, '..');

const md = readFileSync(resolve(root, 'CHANGELOG.md'), 'utf8');
const lines = md.split('\n');

const releases = [];
let current = null;

for (const line of lines) {
  const versionMatch = line.match(/^## (v[\d.]+) — (\d{4}-\d{2}-\d{2})/);
  if (versionMatch) {
    if (current) releases.push(current);
    current = { version: versionMatch[1], date: versionMatch[2], items: [] };
    continue;
  }

  if (!current) continue;

  const itemMatch = line.match(/^- ([a-z]+)(?:\(([^)]+)\))?: (.+?)(?:\s+\([a-f0-9]{7,}\))*(?:\s+\(#\d+\))*(?:\s+\([a-f0-9]{7,}\))*\s*$/);
  if (itemMatch) {
    current.items.push({
      type: itemMatch[1],
      scope: itemMatch[2] || null,
      text: itemMatch[3].trim(),
    });
    continue;
  }

  const skipMatch = line.match(/^_(.+)_$/);
  if (skipMatch) {
    current.skip = skipMatch[1];
  }
}

if (current) releases.push(current);

const out = resolve(root, 'site/changelog-data.json');
writeFileSync(out, JSON.stringify(releases, null, 2));
console.log(`wrote ${releases.length} releases to site/changelog-data.json`);
