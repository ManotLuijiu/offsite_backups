module.exports = {
  types: [
    { type: 'feat', section: 'Features' },
    { type: 'fix', section: 'Bug Fixes' },
    { type: 'chore', section: 'Maintenance', hidden: false },
    { type: 'docs', section: 'Documentation' },
    { type: 'style', section: 'Styling' },
    { type: 'refactor', section: 'Code Refactoring' },
    { type: 'perf', section: 'Performance Improvements' },
    { type: 'test', section: 'Tests' },
    { type: 'build', section: 'Build System' },
    { type: 'ci', section: 'CI/CD' }
  ],
  bumpFiles: [
    { filename: 'package.json', type: 'json' }
  ],
  packageFiles: [{ filename: 'package.json', type: 'json' }],
  tagPrefix: 'v',
  commitUrlFormat: 'https://github.com/ManotLuijiu/offsite_backups/commit/{{hash}}',
  compareUrlFormat: 'https://github.com/ManotLuijiu/offsite_backups/compare/{{previousTag}}...{{currentTag}}',
  releaseCommitMessageFormat: 'chore(release): {{currentTag}}'
};
