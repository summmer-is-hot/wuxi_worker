import { getESLintConfig } from '@iceworks/spec';

export default getESLintConfig('react-ts', {
  rules: {
    'no-console': 'off',
    'max-len': 'off',
    'max-lines': 'off',
    '@typescript-eslint/consistent-type-assertions': 'off',
    'no-case-declarations': 'off',
    '@typescript-eslint/indent': 'off',
    'no-nested-ternary': 'off',
    'react-hooks/exhaustive-deps': 'off',
  },
});
