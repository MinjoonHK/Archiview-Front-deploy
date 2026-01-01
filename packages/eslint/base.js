import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);

const webApp = require('@rushstack/eslint-config/flat/profile/web-app');

export default [
  ...webApp,

  {
    rules: {},
  },
];
