import { mkdir, readdir, readFile, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import os from "node:os";

const AGENTS_DIR = path.join(os.homedir(), ".openclaw", "agency-agents");
const OUTPUT_FILE = path.join(process.cwd(), "public", "agents-snapshot.json");
const REQUIRED_FILES = ["AGENTS.md", "SOUL.md", "USER.md", "IDENTITY.md", "TOOLS.md"];

async function pathExists(target) {
  try {
    await stat(target);
    return true;
  } catch {
    return false;
  }
}

async function readAgentName(agentPath, slug) {
  const identityPath = path.join(agentPath, "IDENTITY.md");

  if (!(await pathExists(identityPath))) {
    return slug;
  }

  try {
    const content = await readFile(identityPath, "utf8");
    const nameLine = content
      .split("\n")
      .find((line) => line.toLowerCase().startsWith("- **name:**"));

    return nameLine?.split(":").slice(1).join(":").trim() || slug;
  } catch {
    return slug;
  }
}

async function buildSnapshot() {
  const dirEntries = await readdir(AGENTS_DIR, { withFileTypes: true });
  const agents = await Promise.all(
    dirEntries
      .filter((entry) => entry.isDirectory())
      .map(async (entry) => {
        const agentPath = path.join(AGENTS_DIR, entry.name);
        const checks = await Promise.all(
          REQUIRED_FILES.map(async (file) => ({
            file,
            exists: await pathExists(path.join(agentPath, file)),
          })),
        );

        const missingFiles = checks.filter((item) => !item.exists).map((item) => item.file);
        const hasOpenClawDir = await pathExists(path.join(agentPath, ".openclaw"));

        return {
          slug: entry.name,
          name: await readAgentName(agentPath, entry.name),
          path: agentPath,
          status: missingFiles.length === 0 ? "ready" : "incomplete",
          missingFiles,
          hasOpenClawDir,
        };
      }),
  );

  agents.sort((a, b) => a.slug.localeCompare(b.slug));

  return {
    generatedAt: new Date().toISOString(),
    source: AGENTS_DIR,
    requiredFiles: REQUIRED_FILES,
    total: agents.length,
    agents,
  };
}

async function main() {
  await mkdir(path.dirname(OUTPUT_FILE), { recursive: true });
  const snapshot = await buildSnapshot();
  await writeFile(OUTPUT_FILE, JSON.stringify(snapshot, null, 2));
  console.log(`Generated ${snapshot.total} agents into ${OUTPUT_FILE}`);
}

main().catch((error) => {
  console.error("Failed to generate agents snapshot");
  console.error(error);
  process.exit(1);
});
