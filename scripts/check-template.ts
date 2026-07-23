import { existsSync, readFileSync, readdirSync } from "node:fs";

const v1Skills = [
  "challenge",
  "de-ai",
  "draft",
  "inbox",
  "init",
  "log",
  "meeting",
  "morning",
  "pulse",
  "relink",
  "research",
  "ship",
  "today",
  "vault-search",
  "week",
];

const skills = readdirSync(".agents/skills", { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name)
  .sort();

const vaultFolders = [
  "01_Inbox",
  "02_Journal",
  "03_Garden",
  "04_Projects",
  "05_Areas",
  "06_Content",
  "07_System",
];

const failures: string[] = [];

for (const skill of v1Skills) {
  if (!skills.includes(skill)) failures.push(`missing v1 workflow ${skill}`);
}

for (const skill of skills) {
  const skillFile = `.agents/skills/${skill}/SKILL.md`;
  const commandAdapter = `.claude/commands/${skill}.md`;
  const skillAdapter = `.claude/skills/${skill}/SKILL.md`;

  if (!existsSync(skillFile)) {
    failures.push(`missing ${skillFile}`);
    continue;
  }

  const content = readFileSync(skillFile, "utf8");
  const frontmatter = content.match(/^---\n([\s\S]*?)\n---\n/);

  if (!frontmatter) {
    failures.push(`invalid frontmatter in ${skillFile}`);
  } else {
    const declaredName = frontmatter[1].match(/^name:\s*(.+)$/m)?.[1];
    const description = frontmatter[1].match(/^description:\s*(.+)$/m)?.[1];
    const body = content.slice(frontmatter[0].length).trimStart();

    if (declaredName !== skill) failures.push(`name mismatch in ${skillFile}`);
    if (!description) failures.push(`missing description in ${skillFile}`);
    if (body.startsWith("---\n")) failures.push(`duplicate frontmatter in ${skillFile}`);
  }

  if (!existsSync(commandAdapter)) {
    failures.push(`missing command adapter ${commandAdapter}`);
  } else if (readFileSync(commandAdapter, "utf8") !== content) {
    failures.push(`stale command adapter ${commandAdapter}`);
  }

  if (!existsSync(skillAdapter)) {
    failures.push(`missing skill adapter ${skillAdapter}`);
  } else if (readFileSync(skillAdapter, "utf8") !== content) {
    failures.push(`stale skill adapter ${skillAdapter}`);
  }
}

for (const folder of vaultFolders) {
  if (!existsSync(`vault/${folder}`)) failures.push(`missing vault/${folder}`);
}

const commandHeadings = [
  ...readFileSync("docs/COMMANDS.md", "utf8").matchAll(/^### \/([a-z-]+)$/gm),
].map((match) => match[1]);

for (const skill of skills) {
  if (!commandHeadings.includes(skill)) failures.push(`missing /${skill} in docs/COMMANDS.md`);
}

for (const heading of commandHeadings) {
  if (!skills.includes(heading)) failures.push(`unknown /${heading} in docs/COMMANDS.md`);
}

const commandAdapters = readdirSync(".claude/commands")
  .filter((entry) => entry.endsWith(".md"))
  .map((entry) => entry.slice(0, -3))
  .sort();
const skillAdapters = readdirSync(".claude/skills").sort();

if (JSON.stringify(commandAdapters) !== JSON.stringify(skills)) {
  failures.push("command adapter set differs from canonical skills");
}

if (JSON.stringify(skillAdapters) !== JSON.stringify(skills)) {
  failures.push("skill adapter set differs from canonical skills");
}

for (const mirroredFile of ["HOME.md", "HUMAN.md", "PURPOSE.md"]) {
  if (readFileSync(mirroredFile, "utf8") !== readFileSync(`vault/${mirroredFile}`, "utf8")) {
    failures.push(`${mirroredFile} differs from vault/${mirroredFile}`);
  }
}

if (readFileSync("CLAUDE.md", "utf8") !== readFileSync("AGENTS.md", "utf8")) {
  failures.push("CLAUDE.md differs from AGENTS.md");
}

if (readFileSync("VERSION", "utf8").trim() !== "2.0.0") {
  failures.push("VERSION is not 2.0.0");
}

if (failures.length > 0) {
  for (const failure of failures) console.error(`FAIL ${failure}`);
  process.exit(1);
}

console.log(`PASS ${skills.length} skills, ${skills.length * 2} adapters, ${vaultFolders.length} vault folders`);
