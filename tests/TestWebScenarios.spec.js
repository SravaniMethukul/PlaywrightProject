const { test, expect, request } = require('@playwright/test');
const { POManager } = require('../pageObjects/POManager');

let webContext;
let page;
let poManager;
let loginPage;

test.beforeAll(async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();

    poManager = new POManager(page);
    loginPage = poManager.getLoginPage();

    await page.goto("https://swift.techwithjatin.com/login");

    await loginPage.goTo();
    await loginPage.login('User1413', "UserToTest@1234");

    await page.waitForLoadState('networkidle');
    //create a context that has storage data on logging in
    await context.storageState({ path: 'state.json' });
    webContext = await browser.newContext({ storageState: 'state.json' });
    page = await webContext.newPage();
})

test.afterAll(async () => {
    await webContext.close();
});


test(`@web Account Creation Test`, async ({ }) => {

    await page.goto('https://swift.techwithjatin.com/dashboard');

    await expect(page).toHaveURL('https://swift.techwithjatin.com/dashboard');

    const accountsPage = poManager.getAccountsPage();

    await accountsPage.goToAccountsPage();
    const accountId = await accountsPage.createAccount("CURRENT", "MAIN_BRANCH");
    console.log(`Account created with ID: ${accountId}`);

    await accountsPage.validateAccountCreation(accountId);

});

test(`@web Edit Profile Test`, async ({ }) => {
    await page.goto('https://swift.techwithjatin.com/dashboard');

    await expect(page).toHaveURL('https://swift.techwithjatin.com/dashboard');

    const profilePage = poManager.getProfilePage();

    // Update profile with new details
    await profilePage.goToProfilePage();
    await profilePage.clickEditProfile();
    await profilePage.setFirstName('John');
    await profilePage.setLastName('Doe');
    await profilePage.saveChanges();
});

test(`@web Change Password Test`, async ({ }) => {
    await page.goto('https://swift.techwithjatin.com/dashboard');

    await expect(page).toHaveURL('https://swift.techwithjatin.com/dashboard');

    const changePasswordPage = poManager.getChangePasswordPage();

    // Change password
    await changePasswordPage.goToChangePasswordPage();
    await changePasswordPage.fillChangePasswordForm('UserToTest@1234', 'NewPassword@1234', 'NewPassword@1234');
    await changePasswordPage.submitForm();
});

