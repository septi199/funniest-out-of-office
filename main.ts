import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The funniest out-of-office auto-reply line, 119 chars (gate max 140).
const reply =
  "I am out of the office until Monday. Your email has been automatically filed under things I will pretend to read later.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const target = join(outDir, "entry.txt");
writeFileSync(target, reply);
console.log(`wrote ${target} (${reply.length} chars, gate max 140)`);
