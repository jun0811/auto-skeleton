module.exports = {
  preset: 'ts-jest',
  rootDir: '.',

  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};
