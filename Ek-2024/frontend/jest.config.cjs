module.exports = {
    testEnvironment: "jsdom",
    transform: {
        "^.+\\.vue$": "@vue/vue3-jest",
        "^.+\\js$": "babel-jest",
    },
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(js|ts)$",
    moduleFileExtensions: ["vue", "js"],
    moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/src/$1",
    },
    transformIgnorePatterns: ["<rootDir>/node_modules/"],
    coveragePathIgnorePatterns: ["/tests/"],
    coverageReporters: ["text", "json-summary"],
    testEnvironmentOptions: {
        customExportConditions: ["node", "node-addons"],
    },
    setupFilesAfterEnv: ["./setup.js"],
    setupFiles: ["./setup.js"],
};
