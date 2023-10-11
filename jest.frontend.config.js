const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './src/',
})

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.frontend.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  testPathIgnorePatterns: ['/api/']
}

module.exports = createJestConfig(customJestConfig)
