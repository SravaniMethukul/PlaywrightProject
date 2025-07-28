import { expect } from '@playwright/test';

class AccountsPage {
    constructor(page) {
        this.page = page;
        this.accountsButton = page.locator("(//li/div//span[contains(text(),'Accounts')])[1]");
        this.createAccountButton = page.locator("button[type='button']", { hasText: 'Create Account' });
        this.accountTypeDropdown = page.locator("//label[text()='Account Type']/following-sibling::div");
        this.accountTypeOptions = page.locator("ul");
        this.branchDropdown = page.locator("//label[text()='Branch']/following-sibling::div");
        this.branchOptions = page.locator("ul");
        this.createButton = page.locator("//button[@type='button' and text()='Create']");
        this.cancelButton = page.locator("//button[@type='button' and text()='Cancel']");
        this.toastMessage = page.locator(".Toastify__toast-body");

        this.accountCards = page.locator('.MuiCardContent-root');
    }

    async goToAccountsPage() {
        await this.accountsButton.click();
    }

    async createAccount(accountType, branch) {
        await this.createAccountButton.click();

        await this.accountTypeDropdown.click();
        const accountTypeLocator = this.accountTypeOptions.locator(`li[data-value="${accountType}"]`);
        await accountTypeLocator.click();

        await this.branchDropdown.click();
        const branchLocator = this.branchOptions.locator(`li[data-value="${branch}"]`);
        await branchLocator.click();

        const [response] = await Promise.all([
            this.page.waitForResponse(response =>
                response.url().includes('/api/accounts') && response.status() === 200
            ),
            this.createButton.click()
        ]);

        // Parse response JSON
        const responseData = await response.json();
        console.log('Account Created:', responseData);

        expect(responseData).toHaveProperty('accountNumber');
        return responseData.accountNumber;
    }

    async validateAccountCreation(accountNumber) {

        await this.page.waitForSelector('.MuiCardContent-root', { timeout: 10000 });
        const cards = this.accountCards;
        const count = await cards.count();

        console.log(`Total Cards Found: ${count}`);
        let accountNumberObtained;

        for (let i = 0; i < count; i++) {
            const card = cards.nth(i);
            const accountNumberText = card.locator('h6').nth(1);
            const text = await accountNumberText.textContent();
            if (text && text.trim().includes(accountNumber)) {
                accountNumberObtained = text.trim();
                break;
            }
        }
        console.log(`Account Number Obtained: ${accountNumberObtained}`);
        expect(accountNumberObtained).toContain(accountNumber);
    }
}

module.exports = { AccountsPage };