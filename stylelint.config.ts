export default {
  plugins: ['stylelint-order', 'stylelint-prettier'],
  extends: ['stylelint-config-recommended', 'stylelint-config-sass-guidelines'],
  overrides: [
    {
      files: ['**/*.scss'],
      customSyntax: 'postcss-scss',
    },
  ],
  rules: {
    'prettier/prettier': true,
    'no-descending-specificity': null,
    'max-nesting-depth': 2,
    'selector-max-id': 1,
    'selector-no-qualifying-type': null,
    'order/properties-alphabetical-order': true,
  },
}
