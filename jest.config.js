/** @type {import('jest').Config} */
const nextJest = require("next/jest");

const createJestConfig = nextJest({ dir: "./" });

const customJestConfig = {
  testEnvironment: "jsdom",
  clearMocks: true,
  moduleDirectories: ["node_modules", "<rootDir>/src"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"], // Ensure jest.setup.js exists
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.[jt]sx?$",
};

module.exports = createJestConfig(customJestConfig);
