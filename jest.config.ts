import type { Config } from "jest";
import nextJest from "next/jest";

const createJestConfig = nextJest({ dir: "./" });

const customJestConfig: Config = {
  testEnvironment: "jsdom", // Simulates a browser environment
  clearMocks: true, // Resets mocks between tests
  moduleDirectories: ["node_modules", "<rootDir>/src"], // Handles absolute imports
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"], // For Jest setup
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.[jt]sx?$", // Match test files
};

export default createJestConfig(customJestConfig);
