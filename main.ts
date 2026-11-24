import * as fs from "node:fs";

const TEXT =
  "In Grumbletown, today's rain arrives by bus, twenty minutes late, and it only soaks the people who checked the forecast.";

// Gate from competition.yaml: one line, 1-140 characters.
const len = [...TEXT].length;
if (len < 1 || len > 140) throw new Error(`entry length ${len} outside 1-140`);
if (/\r|\n/.test(TEXT)) throw new Error("entry must be a single line");
if (TEXT.trim().length === 0) throw new Error("entry must not be blank");

// The forecast must name the (fictional) city — the gate in RULES requires it.
if (!/Grumbletown/.test(TEXT)) throw new Error("entry must name the city");

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", TEXT, "utf8");
console.log(`wrote ${len} characters to /output/entry.txt`);
