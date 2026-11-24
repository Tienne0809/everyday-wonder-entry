import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "In the stairwell my dropped keys land three times: on the concrete, in the echo, and in the sudden quiet of the flat below.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
