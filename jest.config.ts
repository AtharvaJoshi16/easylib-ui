const config = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  roots: [
    "<rootDir>/src/atoms",
    "<rootDir>/src/molecules",
    "<rootDir>/src/organisms",
  ],
  // Only run tests in files matching *.test.ts / *.test.tsx
  testRegex: "(/__tests__/.*|(\\.|/)(test))\\.(ts|tsx)$",
  testPathIgnorePatterns: [
    "/node_modules/",
    "<rootDir>/src/core/",
    "<rootDir>/src/interfaces/",
    ".*\\.css$",
    ".*\\.html$",
    ".*\\.png$",
    ".*\\.js$", // if you don’t want plain .js in tests
    ".*\\.stories\\.tsx$",
    ".*\\.stories\\.ts$",
    ".*Props\\.ts$",
  ],
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "<rootDir>/src/core/",
    "<rootDir>/src/interfaces/",
    ".*\\.css$",
    ".*\\.html$",
    ".*\\.png$",
    ".*\\.js$", // if you don’t want plain .js in tests
    ".*\\.stories\\.tsx$",
    ".*\\.stories\\.ts$",
    ".*Props\\.ts$",
  ],
  coverageDirectory: "<rootDir>/coverage",
  collectCoverage: true,
  coverageReporters: ["html"],
};

export default config;
