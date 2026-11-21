import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

const here = dirname(fileURLToPath(import.meta.url));
const poemPath = join(here, "poem.txt");
if (!existsSync(poemPath)) {
  throw new Error("poem.txt not found next to main.ts");
}

mkdirSync(outDir, { recursive: true });
copyFileSync(poemPath, join(outDir, "entry.txt"));
