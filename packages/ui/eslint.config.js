const sharedConfig = require("@cerberauth/eslint-config");

/** @type {import('eslint').Linter.FlatConfig[]} */
module.exports = [
  ...sharedConfig,
  {
    ignores: ["dist/**", "node_modules/**"],
  },
];
