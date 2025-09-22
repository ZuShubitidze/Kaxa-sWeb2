import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import { globalIgnores } from "eslint/config";

export default tseslint.config([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs["recommended-latest"],
      reactRefresh.configs.vite,
    ],
    rules: {
      // Disable the base ESLint rule for no-unused-expressions
      "no-unused-expressions": "off",
      // Enable the TypeScript version of the rule with options
      "@typescript-eslint/no-unused-expressions": [
        "error", // Or "warn"
        {
          allowShortCircuit: true, // Example: Allow `a && b()`
          allowTernary: true, // Example: Allow `a ? b : c` as expression
          allowTaggedTemplates: true, // Example: Allow `tag`name`
        },
      ],
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  },
]);
