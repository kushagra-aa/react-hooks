const jestConfig = {
  preset: "ts-jest", // Use the TypeScript preset
  testEnvironment: "jsdom", // Simulate a browser environment for React tests
  roots: ["./src/"],
  testMatch: ["**/?(*.)test.ts"],
  // setupFilesAfterEnv: ["<rootDir>/__setupTests.js"], // Optional setup file (explained later)
};

export default jestConfig;
