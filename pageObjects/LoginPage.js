import { expect } from "@playwright/test";

class LoginPage {
    constructor(page) {
        this.page = page;
        this.userName = page.locator("#username");
        this.password = page.locator("#password");
        this.signInButton = page.locator('//button[@type=\'submit\']');
        this.toastMessage = page.locator('.Toastify__toast-body');
    }

    async goTo() {
        await this.page.goto('https://swift.techwithjatin.com/');
        await expect(this.page).toHaveTitle("React App");
    }

    async login(username, password) {
        await this.userName.fill(username);
        await this.password.fill(password);
        await this.signInButton.click();
        await expect(this.toastMessage).toHaveText("Login successful!");
    }
}

module.exports = { LoginPage };