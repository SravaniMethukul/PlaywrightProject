import { test, expect } from '@playwright/test';
import { POManager } from '../pageObjects/POManager';


test('Invalid Login Data Test Validation', async ({ page }) => {
    const poManager = new POManager(page);

    await page.goto('https://swift.techwithjatin.com/login');

    await expect(page).toHaveURL('https://swift.techwithjatin.com/login');

    const loginpage = poManager.getLoginPage();
    await loginpage.validateLoginError("TestUser", "TestPassword");

});