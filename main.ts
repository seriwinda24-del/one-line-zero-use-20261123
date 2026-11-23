import { mkdirSync, writeFileSync } from "node:fs";
// One line, zero use: the power only arrives after the mistake is already made.
const line = "My useless superpower is knowing which of two identical socks is the original, but only after I've already worn the other one.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line, "utf8");
