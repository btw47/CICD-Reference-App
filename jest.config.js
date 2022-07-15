module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  coveragePathIgnorePatterns: [
    '<rootDir>/src/application.ts',
    '<rootDir>/src/migrate.ts',
    '<rootDir>/src/openapi-spec.ts',
    '<rootDir>/src/datasources',
    '<rootDir>/src/scripts',
    'index.ts',
  ],
  modulePathIgnorePatterns: [
    '<rootDir>/dist',
    '<rootDir>/src/__tests__/helpers',
  ],
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/**'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
};
