// The Deleted Claim — entrypoint for the make.fun poem bounty.
// Copies poem.txt (the poem) to $MAKEFUN_OUTPUT_DIR/entry.txt, Node stdlib only.
import { copyFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const dir = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}
copyFileSync(join(dir, "poem.txt"), join(outDir, "entry.txt"));
