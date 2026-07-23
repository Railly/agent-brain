import { copyFileSync, mkdirSync, readdirSync } from "node:fs";

const skills = readdirSync(".agents/skills", { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name)
  .sort();

mkdirSync(".claude/commands", { recursive: true });
mkdirSync(".claude/skills", { recursive: true });

for (const skill of skills) {
  const source = `.agents/skills/${skill}/SKILL.md`;
  const skillDirectory = `.claude/skills/${skill}`;

  mkdirSync(skillDirectory, { recursive: true });
  copyFileSync(source, `${skillDirectory}/SKILL.md`);
  copyFileSync(source, `.claude/commands/${skill}.md`);
}

console.log(`Synced ${skills.length} canonical skills to ${skills.length * 2} adapters`);
