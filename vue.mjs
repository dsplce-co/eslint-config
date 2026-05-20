import { defineConfigWithVueTs, vueTsConfigs } from "@vue/eslint-config-typescript";
import pluginVue from "eslint-plugin-vue";

const houseVueRules = {
    rules: {
        "vue/multi-word-component-names": "off",
        "vue/padding-line-between-tags": [
            "error",
            [{ blankLine: "always", prev: "*", next: "*" }],
        ],
        "vue/max-attributes-per-line": [
            "error",
            { singleline: { max: 1 }, multiline: { max: 1 } },
        ],
        "vue/first-attribute-linebreak": [
            "error",
            { singleline: "beside", multiline: "below" },
        ],
        "vue/html-closing-bracket-newline": [
            "error",
            { singleline: "never", multiline: "always" },
        ],
        "vue/multiline-html-element-content-newline": "error",
        "vue/html-indent": ["error", 4],
        "vue/script-indent": ["error", 4],
        "vue/block-lang": [
            "error",
            {
                script: {
                    lang: "ts",
                },
            },
        ],
    },
};

/**
 * The dsplce-co Vue preset: `eslint-plugin-vue` (flat/essential) +
 * `@vue/eslint-config-typescript` recommended + house Vue rules.
 *
 * Cannot be spread into a plain config array directly — `vueTsConfigs.recommended`
 * is a placeholder that must be processed by `defineConfigWithVueTs()`. Pass these
 * into the default export `vue(...)` (or call `defineConfigWithVueTs` yourself).
 */
export const vueConfigs = [
    ...pluginVue.configs["flat/essential"],
    vueTsConfigs.recommended,
    houseVueRules,
];

/**
 * Wraps any number of flat-config blocks with the necessary Vue + TypeScript
 * plumbing. Pass base configs first, `...vueConfigs` next, then user overrides.
 *
 * @param {...import("eslint").Linter.Config} configs
 * @returns {import("eslint").Linter.Config[]}
 */
export default function vue(...configs) {
    return defineConfigWithVueTs(...configs);
}
