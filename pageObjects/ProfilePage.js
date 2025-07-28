const { expect } = require("@playwright/test");

class ProfilePage {
    constructor(page) {
        this.page = page;

        this.profileButton = page.locator('(//li/div//span[contains(text(),"Profile")])[1]');
        this.editProfileButton = page.locator('//button[@type="button"]', { hasText: 'Edit Profile' });
        this.firstNameInput = page.locator('input[name="firstName"]');
        this.lastNameInput = page.locator('input[name="lastName"]');
        this.emailInput = page.locator('input[name="email"]');
        this.mobileNumberInput = page.locator('input[name="mobileNumber"]');
        this.addressInput = page.locator('textarea[name="address"]');
        this.saveButton = page.locator('//button[@type="button"]', { hasText: 'Save Changes' });
        this.cancelButton = page.locator('//button[@type="button"]', { hasText: 'Cancel' });
        this.toastMessage = page.locator('.MuiSnackbarContent-message');
    }

    async goToProfilePage() {
        await this.profileButton.click();
    }

    async clickEditProfile() {
        await this.editProfileButton.click();
    }

    // Bulk update with clearing fields explicitly
    async updateProfile({ firstName, lastName, email, mobileNumber, address } = {}) {

        if (firstName !== undefined) {
            await this.firstNameInput.fill('');
            await this.firstNameInput.fill(firstName);
        }
        if (lastName !== undefined) {
            await this.lastNameInput.fill('');
            await this.lastNameInput.fill(lastName);
        }
        if (email !== undefined) {
            await this.emailInput.fill('');
            await this.emailInput.fill(email);
        }
        if (mobileNumber !== undefined) {
            await this.mobileNumberInput.fill('');
            await this.mobileNumberInput.fill(mobileNumber);
        }
        if (address !== undefined) {
            await this.addressInput.fill('');
            await this.addressInput.fill(address);
        }

        await this.saveButton.click();
    }

    // Individual setters for granular control — also clear before fill
    async setFirstName(firstName) {
        await this.firstNameInput.fill('');
        await this.firstNameInput.fill(firstName);
    }

    async setLastName(lastName) {
        await this.lastNameInput.fill('');
        await this.lastNameInput.fill(lastName);
    }

    async setEmail(email) {
        await this.emailInput.fill('');
        await this.emailInput.fill(email);
    }

    async setMobileNumber(mobileNumber) {
        await this.mobileNumberInput.fill('');
        await this.mobileNumberInput.fill(mobileNumber);
    }

    async setAddress(address) {
        await this.addressInput.fill('');
        await this.addressInput.fill(address);
    }

    // Save & Cancel buttons
    async saveChanges() {
        await this.saveButton.click();
        await expect(this.toastMessage).toHaveText("Profile updated successfully");
    }

    async cancelChanges() {
        await this.cancelButton.click();
    }
}

module.exports = { ProfilePage };
