// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
  timeout: 30 * 1000,
  expect: {
    timeout: 50000,
  },
  retries: 1,

  reporter: [['html'], ['line'], ['allure-playwright']],

  use: {
    browserName: 'chromium',
    headless: true,
    screenshot: 'on',
    trace: 'on'
  },


});

