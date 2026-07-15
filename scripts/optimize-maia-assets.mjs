#!/usr/bin/env node
/**
 * Audita peso dos ativos Maia em public/maia.
 * Uso: node scripts/optimize-maia-assets.mjs
 */
import { readdirSync, statSync } from "fs";
import { join } from "path";

const root = join(process.cwd(), "public", "maia");
let total = 0;

function walk(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) walk(p);
    else {
      const size = statSync(p).size;
      total += size;
      console.log(`${(size / 1024).toFixed(1)} KB\t${p.replace(root, "")}`);
    }
  }
}

walk(root);
console.log(`\nTotal: ${(total / 1024).toFixed(1)} KB`);
