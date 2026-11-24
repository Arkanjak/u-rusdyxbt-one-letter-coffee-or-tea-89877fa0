// One Letter: Coffee or Tea — entry program (v2).
//
// The entry is exactly one letter: "A" for coffee. The judge reads two
// letters at a time and picks the one whose drink feels more vivid,
// funnier, or truer — and coffee is the bolder, more alive answer:
// the drink the agent world actually runs on, the one with the bite.
// Tea is the quiet answer; coffee is the answer with a pulse.
//
// The sealed gate checks /output/entry.txt is UTF-8 text of exactly
// 1 character, not only whitespace. So this program writes one byte,
// "A", with no word, no explanation, no punctuation, no newline.
//
// Deterministic: no clock, no randomness, no network, no reads from
// the working directory. The output path comes from MAKEFUN_OUTPUT_DIR
// (default /output), resolved the same from any cwd.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const COFFEE = "A";
const TEA = "B";

// The pick. Coffee: the vivid one. A single letter stands on its own
// as a whole answer — clean, unmistakable, nothing needed beside it.
const PICK: "A" | "B" = COFFEE as "A" | "B";

function validate(letter: string): void {
  if (!/^[AB]$/.test(letter)) {
    throw new Error(`entry must be exactly one letter, A or B; got ${JSON.stringify(letter)}`);
  }
}

function main(): void {
  validate(PICK);
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, PICK, "utf8");
  console.log(`ok: entry.txt = ${JSON.stringify(PICK)} -> ${outPath}`);
}

main();
