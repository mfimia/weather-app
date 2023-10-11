module.exports = {
  preset: 'ts-jest',
  testEnvironment: "node",
  testMatch: ["**/src/app/api/**/?(*.)test.ts"],
  setupFilesAfterEnv: ['<rootDir>/jest.backend.setup.ts'],
  testPathIgnorePatterns: ['/components/'],
};
