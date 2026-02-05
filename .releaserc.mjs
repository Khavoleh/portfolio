export default {
  branches: ['main'],
  tagFormat: `v${version}`,
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        preset: 'angular',
        releaseRules: [
          { type: 'major', release: 'major' },
          { type: 'minor', release: 'minor' },
          { type: 'feat', release: 'minor' },
          { type: 'patch', release: 'patch' },
          { type: 'fix', release: 'patch' },
          { type: 'perf', release: 'patch' },
          { type: 'refactor', release: 'patch' },
          { type: 'revert', release: 'patch' },
          { type: 'docs', release: false },
          { type: 'chore', release: false },
          { type: 'style', release: false },
          { type: 'test', release: false },
        ],
      },
    ],
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    [
      '@semantic-release/npm',
      {
        npmPublish: false,
      },
    ],
    '@semantic-release/git',
    '@semantic-release/github',
  ],
};
