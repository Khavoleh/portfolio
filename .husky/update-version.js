import { readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';

const VERSION_TYPES = {
  MAJOR: 'major',
  MINOR: 'minor',
  PATCH: 'patch',
};

function getMessageStart(message, type) {
  return message.startsWith(`${type}: `);
}

function getType() {
  const commitMsgFile = process.argv[2];

  if (!commitMsgFile) {
    console.error('Error: Commit message file path not provided. This script must be run from a pre-commit hook.');
    return null;
  }

  try {
    const msg = readFileSync(commitMsgFile, 'utf8').trim();

    if (getMessageStart(msg, VERSION_TYPES.MAJOR)) return VERSION_TYPES.MAJOR;
    if (getMessageStart(msg, VERSION_TYPES.MINOR)) return VERSION_TYPES.MINOR;
    if (getMessageStart(msg, VERSION_TYPES.PATCH)) return VERSION_TYPES.PATCH;

    console.log('Commit message does not match versioning prefixes (major:, minor:, patch:). Skipping version bump.');
    return null;
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error(`Error reading commit message file (${commitMsgFile}): ${errorMessage}`);
    process.exit(1);
  }
}

function main() {
  const type = getType();
  if (!type) {
    return;
  }

  const pkgPath = path.resolve('./package.json');
  let pkg;

  pkg = JSON.parse(readFileSync(pkgPath, 'utf8'));

  let [major, minor, patch] = pkg.version.split('.').map(Number);

  switch (type) {
    case VERSION_TYPES.MAJOR:
      major++;
      minor = 0;
      patch = 0;
      break;
    case VERSION_TYPES.MINOR:
      minor++;
      patch = 0;
      break;
    case VERSION_TYPES.PATCH:
      patch++;
      break;
  }

  const oldVersion = pkg.version;
  pkg.version = `${major}.${minor}.${patch}`;

  try {
    writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + '\n');
    console.log(`✅ Version bumped: ${oldVersion} → ${pkg.version} (Triggered by ${type} commit).`);
  } catch (e) {
    const errorMessage = e instanceof Error ? e.message : String(e);
    console.error(`Error: Failed to write new version to package.json: ${errorMessage}`);
    process.exit(1);
  }
}

main();
