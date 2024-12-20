module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
        jest: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:vue/vue3-essential",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
    ],
    overrides: [
        {
            env: {
                node: true,
                jest: true,
            },
            files: [
                ".eslintrc.{js,cjs}",
                "**/*.{cjs, test}.js",
                "**/*.{ts.tsx}",
                "**/*.d.ts",
            ],
            parserOptions: {
                sourceType: "module",
                ecmaVersion: 2020,
                parser: "@typescript-eslint/parser",
            },
        },
    ],
    parser: "vue-eslint-parser",
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        extraFileExtensions: [".vue"],
        parser: "@typescript-eslint/parser",
    },
    plugins: ["vue", "@typescript-eslint", "prettier"],
    rules: {
        "prettier/prettier": [
            "error",
            {
                endOfLine: "auto",
            },
        ],
        "@typescript-eslint/ban-types": [
            "error",
            {
                extendDefaults: true,
                types: {
                    "{}": false,
                },
            },
        ],
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-var-requires": 0,

        "vue/multi-word-component-names": "off",
    },
};
