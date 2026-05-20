import typescript from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";
import sonarjs from "eslint-plugin-sonarjs";
import unicorn from "eslint-plugin-unicorn";

/** @type {import("eslint").Linter.Config[]} */
export default [
    {
        languageOptions: {
            parser: typescriptParser,
            parserOptions: {
                ecmaVersion: "latest",
                sourceType: "module",
            },
        },
        plugins: {
            sonarjs,
            unicorn,
            "@typescript-eslint": typescript,
        },
        rules: {
            "@typescript-eslint/no-unused-vars": "error",
            "@typescript-eslint/no-explicit-any": "warn",
            "@typescript-eslint/explicit-function-return-type": "off",
            "@typescript-eslint/explicit-module-boundary-types": "off",
            "@typescript-eslint/no-empty-function": "warn",
            "no-console": "off",
            "no-debugger": "error",
            "prefer-const": "error",
            "no-var": "error",
            "sonarjs/cognitive-complexity": ["error", 15],
            "sonarjs/no-duplicate-string": "off",
            "unicorn/prefer-module": "error",
            "unicorn/prefer-node-protocol": "error",
            "unicorn/switch-case-braces": ["error", "always"],
            quotes: ["error", "double"],
            semi: ["error", "always"],
            "comma-dangle": [
                "error",
                {
                    arrays: "always-multiline",
                    objects: "always-multiline",
                    imports: "always-multiline",
                    exports: "always-multiline",
                    functions: "always-multiline",
                },
            ],
            indent: ["error", 4, { SwitchCase: 1 }],
            "brace-style": ["warn", "1tbs", { allowSingleLine: false }],
            curly: ["error", "all"],
            "padding-line-between-statements": [
                "error",
                { blankLine: "always", prev: "*", next: "return" },
                { blankLine: "always", prev: "*", next: "block-like" },
                { blankLine: "never", prev: "case", next: "block-like" },
                { blankLine: "always", prev: "block-like", next: "*" },
            ],
            "object-curly-spacing": ["error", "always"],
            "array-bracket-spacing": ["error", "never"],
            "space-in-parens": ["error", "never"],
        },
    },
];
