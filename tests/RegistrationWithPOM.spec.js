import { test, expect } from '@playwright/test';
import { POManager } from '../pageObjects/POManager';

let registrationData = JSON.parse(JSON.stringify(require('../utils/registrationData.json')));

test('Registration Test', async ({ page }) => {
    const poManager = new POManager(page);
    const signUpPage = poManager.getSignUpPage();

    await page.goto('https://swift.techwithjatin.com/login');

    await expect(page).toHaveURL('https://swift.techwithjatin.com/login');

    // Use page object to click register link
    await signUpPage.clickRegisterButton();

    // Fill in registration form data as a single object for clarity
    await signUpPage.fillRegistrationForm({
        username: registrationData.username,
        email: registrationData.email,
        password: registrationData.password,
        confirmPassword: registrationData.confirmPassword,
        firstName: registrationData.firstName,
        lastName: registrationData.lastName,
        mobileNumber: registrationData.mobileNumber
    });
});