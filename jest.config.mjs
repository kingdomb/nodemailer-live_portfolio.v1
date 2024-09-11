export default {
  testEnvironment: "node",
  coveragePathIgnorePatterns: ["/node_modules/"],
  verbose: true,
  reporters: [
    "default",
    [
      "jest-html-reporter",
      {
        outputPath: "./reports/test-report.html",
      },
    ],
  ],
  collectCoverage: true,
  coverageDirectory: "./tests/coverage",
  moduleFileExtensions: ["js", "mjs"],
  transformIgnorePatterns: [
    "/node_modules/*/",
  ],
};
