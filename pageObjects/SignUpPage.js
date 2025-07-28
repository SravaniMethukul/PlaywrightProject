import { expect } from '@playwright/test';

class SignUpPage {

    constructor(page) {
        this.page = page;
        this.registerButton = page.locator('a[href="/register"]');

        this.userNameInput = page.locator('#username');
        this.emailInput = page.locator('#email');
        this.passwordInput = page.locator('#password');
        this.confirmPasswordInput = page.locator('#confirmPassword');
        this.submitButton = page.locator('//button[@type="button"]', { hasText: 'Next' });
        this.cancelButton = page.locator('//button[@type="button"]', { hasText: 'Cancel' });
        this.firstNameInput = page.locator('#firstName');
        this.lastNameInput = page.locator('#lastName');
        this.mobileNumberInput = page.locator('#mobileNumber');
        this.finalSubmitButton = page.locator('//button[@type="submit"]');
        this.toastMessage = page.locator('.Toastify__toast-body');
    }

    async clickRegisterButton() {
        await this.registerButton.click();
    }

    async fillRegistrationForm({ username, email, password, confirmPassword, firstName, lastName, mobileNumber }) {
        await this.userNameInput.fill(username);
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.confirmPasswordInput.fill(confirmPassword);
        await this.submitButton.click();
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.mobileNumberInput.fill(mobileNumber);

        await this.finalSubmitButton.click();
        await expect(this.toastMessage).toHaveText("Registration successful! Please login.");
    }

}

module.exports = { SignUpPage };
