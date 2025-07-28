import { expect } from '@playwright/test';

class ChangePasswordPage {
    constructor(page) {
        this.page = page;
        this.changePasswordButton = page.locator('(//li/div//span[contains(text(),"Change Password")])[1]');
        this.currentPasswordInput = page.locator('input[name="currentPassword"]');
        this.newPasswordInput = page.locator('input[name="newPassword"]');
        this.confirmNewPasswordInput = page.locator('input[name="confirmPassword"]');
        this.submitButton = page.locator('//button[@type="submit"]', { hasText: 'Change Password' });
        this.cancelButton = page.locator('//button[@type="button"]', { hasText: 'Cancel' });
        this.toastMessage = page.locator('..MuiSnackbarContent-message');
    }

    async goToChangePasswordPage() {
        await this.changePasswordButton.click();
    }

    async fillChangePasswordForm(currentPassword, newPassword, confirmNewPassword) {
        await this.currentPasswordInput.fill(currentPassword);
        await this.newPasswordInput.fill(newPassword);
        await this.confirmNewPasswordInput.fill(confirmNewPassword);
    }

    async submitForm() {
        await this.submitButton.click();
        await expect(this.toastMessage).toHaveText("Password changed successfully!");
    }

    async cancel() {
        await this.cancelButton.click();
    }
}

module.exports = { ChangePasswordPage };