import { readFileSync, writeFileSync } from 'node:fs';
import { execSync } from 'node:child_process';

function getType() {
  const commitMsgFile = process.argv[2];
  if (!commitMsgFile) {
    console.error('No commit message file provided');
    return null;
  }

  const msg = readFileSync(commitMsgFile, 'utf8').trim();

  if (msg.startsWith('major:')) return 'major';
  if (msg.startsWith('feat:')) return 'patch';
  if (msg.startsWith('minor:')) return 'minor';
  return null;
}

const type = getType();
if (!type) {
  console.error('No valid prefix found in commit message.');
  process.exit(1);
}

const pkgPath = './package.json';
const pkg = JSON.parse(readFileSync(pkgPath, 'utf8'));

let [major, patch, minor] = pkg.version.split('.').map(Number);

switch (type) {
  case 'major':
    major++;
    patch = 0;
    minor = 0;
    break;
  case 'patch':
    patch++;
    minor = 0;
    break;
  case 'minor':
    minor++;
    break;
}

const oldVersion = pkg.version;
pkg.version = `${major}.${patch}.${minor}`;

writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + '\n');

// Ensure git add runs and any error surfaces
try {
  execSync('git add package.json', { stdio: 'inherit' });
} catch (err) {
  console.error('Failed to git add package.json', err);
  process.exit(1);
}

console.log(`✅ Version bumped: ${oldVersion} → ${pkg.version}`);
process.exit(0);
