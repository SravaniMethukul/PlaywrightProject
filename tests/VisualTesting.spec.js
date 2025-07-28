import { test, expect } from '@playwright/test';


test(`Visual Test`, async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://swift.techwithjatin.com/login');

    expect(await page.screenshot()).toMatchSnapshot('login-page.png');

})