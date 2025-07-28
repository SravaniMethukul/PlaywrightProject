import { test, expect } from '@playwright/test';
import { POManager } from '../pageObjects/POManager';

test('Registration Test', async ({ page }) => {
    const poManager = new POManager(page);
    const signUpPage = poManager.getSignUpPage();

    await page.goto('https://swift.techwithjatin.com/login');

    await expect(page).toHaveURL('https://swift.techwithjatin.com/login');

    // Use page object to click register link
    await signUpPage.clickRegisterButton();

    // Fill in registration form data as a single object for clarity
    await signUpPage.fillRegistrationForm({
        username: "User1413",
        email: "Testuser977@gmail.com",
        password: "UserToTest@1234",
        confirmPassword: "UserToTest@1234",
        firstName: "Test 1413",
        lastName: "User 1413",
        mobileNumber: "9876549318"
    });
});