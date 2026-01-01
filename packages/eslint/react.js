import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
import base from './base.js';

const reactPlugin = require('eslint-plugin-react');

export default [
  ...base,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: { react: reactPlugin },
    settings: {
      react: { version: 'detect' },
    },
    rules: {
      'react/jsx-key': 'warn',
      'react/jsx-no-bind': 'warn',
      'react/jsx-no-comment-textnodes': 'warn',
      'react/jsx-no-target-blank': 'warn',
      'react/jsx-uses-react': 'warn',
      'react/jsx-uses-vars': 'warn',
      'react/no-children-prop': 'warn',
      'react/no-danger-with-children': 'warn',
      'react/no-deprecated': 'warn',
      'react/no-direct-mutation-state': 'warn',
      'react/no-unescaped-entities': 'warn',
      'react/no-find-dom-node': 'warn',
      'react/no-is-mounted': 'warn',
      'react/no-render-return-value': 'warn',
      'react/no-string-refs': 'warn',
      'react/self-closing-comp': 'warn',
    },
  },
];
