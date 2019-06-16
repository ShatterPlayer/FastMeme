module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'plugin:prettier/recommended'],
  rules: {
    'no-undef': 'off',
    'arrow-parens': 'off',
    'react/prop-types': [2, { ignore: ['children'] }],
    'comma-dangle': 'off',
    'arrow-body-style': 'off'
  }
};
