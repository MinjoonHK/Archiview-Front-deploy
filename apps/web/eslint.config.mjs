import { defineConfig, globalIgnores } from 'eslint/config';
import base from '@archiview/eslint';

const eslintConfig = defineConfig([
  ...base,

  // 원하는 룰 추가.
  {
    rules: {},
  },

  globalIgnores([
    // Default ignores of eslint-config-next:
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
  ]),
]);

export default eslintConfig;
