import { readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';

function getType() {
  const commitMsgFile = process.argv[2];

  if (!commitMsgFile) {
    console.error('Error: Commit message file path not provided. This script must be run from a pre-commit hook.');
    return null;
  }

  try {
    const msg = readFileSync(commitMsgFile, 'utf8').trim();

    if (msg.startsWith('major:')) return 'major';
    if (msg.startsWith('minor:')) return 'minor';
    if (msg.startsWith('patch:')) return 'patch';

    console.log(
      'ℹ️ Commit message does not match versioning prefixes (major:, minor:, patch:, feat:). Skipping version bump.'
    );
    return null;
  } catch (error) {
    console.error(`Error reading commit message file (${commitMsgFile}): ${error.message}`);
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
    case 'major':
      major++;
      minor = 0;
      patch = 0;
      break;
    case 'minor':
      minor++;
      patch = 0;
      break;
    case 'patch':
      patch++;
      break;
  }

  const oldVersion = pkg.version;
  pkg.version = `${major}.${minor}.${patch}`;

  try {
    writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + '\n');
    console.log(`✅ Version bumped: ${oldVersion} → ${pkg.version} (Triggered by ${type} commit).`);
  } catch (e) {
    console.error(`Error: Failed to write new version to package.json: ${e.message}`);
    process.exit(1);
  }
}

main();
