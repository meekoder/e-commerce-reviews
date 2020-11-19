module.exports = {
  preset: '@shelf/jest-mongodb',
  testEnvironment: 'node',
  watchPathIgnorePatterns: ['globalConfig'],
  testMatch: [`${__dirname}/*.spec.js`],
};
