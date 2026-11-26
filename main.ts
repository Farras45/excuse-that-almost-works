// The Excuse That Almost Works — make.fun entry.
// Writes the single winning excuse line to /output/entry.txt.
// Gate: UTF-8 text, 1-140 characters, one line, at most 20 words.
// The line is built from its three beats, then checked against the
// gate caps in-program before anything is written, so a bad line can
// never reach the output file.
import { mkdirSync, writeFileSync } from "node:fs";

// Beat 1: the predicament, specific place + time (root canal, till noon).
// Beat 2: the work was DONE — the Henderson report is finished, on the desk.
// Beat 3 (punch, 5 words): the deliverable the reader holds — your signature.
const BEATS = [
  "Stranded at my root canal till noon,",
  "but the Henderson report's finished, on your desk,",
  "it only needs your signature.",
];

const LINE = BEATS.join(" ");

// Gate self-check: 1-140 chars, at most 20 words, single line.
if (LINE.length < 1 || LINE.length > 140) {
  throw new Error(`line is ${LINE.length} chars, gate allows 1-140`);
}
if (LINE.split(/\s+/).length > 20) {
  throw new Error("line exceeds 20 words");
}
if (LINE.includes("\n")) {
  throw new Error("line must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
