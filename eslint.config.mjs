import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

export default [
  { ignores: ["dist", "dist-electron", "node_modules", "prisma/generated"] },
  {
    files: ["src/renderer/src/**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2022,
      globals: globals.browser,
      parser: tsParser,
      parserOptions: {
        sourceType: "module",
        ecmaFeatures: { jsx: true }
      }
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      "@typescript-eslint": tsPlugin
    },
    rules: {
      ...js.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }]
    }
  },
  {
    files: ["src/main/**/*.ts", "src/preload/**/*.ts", "prisma/**/*.ts", "tests/**/*.ts"],
    languageOptions: {
      ecmaVersion: 2022,
      globals: globals.node,
      parser: tsParser,
      parserOptions: { sourceType: "module" }
    },
    plugins: {
      "@typescript-eslint": tsPlugin
    },
    rules: {
      ...js.configs.recommended.rules,
      ...tsPlugin.configs.recommended.rules,
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }]
    }
  },
  {
    files: ["**/*.d.ts"],
    rules: {
      "@typescript-eslint/no-unused-vars": "off"
    }
  }
];
