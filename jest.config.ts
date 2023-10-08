import type { JestConfigWithTsJest } from 'ts-jest';

const config: JestConfigWithTsJest = {
  collectCoverage: true,
  coverageDirectory: './reports/tests',
  preset: 'ts-jest',
  reporters: [
    'default',
    [
      'jest-junit',
      {
        outputDirectory: './reports/tests',
      },
    ],
    [
      'jest-stare',
      {
        coverageLink: '../../coverage/lcov-report/index.html',
        jestGlobalConfigJson: 'globalStuff.json',
        jestStareConfigJson: 'jest-stare.json',
        reportTitle: 'jest-stare!',
        resultDir: './reports/tests/result',
      },
    ],
  ],
  testEnvironment: 'node',
};

export default config;
