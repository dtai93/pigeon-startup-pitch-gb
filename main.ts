// Write the contest's single-line pitch to the requested output directory.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const text =
  "Investors, city pigeons remember who skips lunch. Fund our facial-recognition moat; your guilty flinch is recurring revenue.";

const length = [...text].length;
if (length < 1 || length > 200 || text.trim().length === 0) {
  throw new Error(`Entry must be 1-200 non-blank characters; got ${length}.`);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), text, "utf8");
