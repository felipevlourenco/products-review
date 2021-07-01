import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(css|less|scss|sss|styl)$': '<rootDir>/node_modules/jest-css-modules',
    '\\.(png|jpg)$': '<rootDir>/__mocks__/fileMocks.ts'
  }
}

export default config
