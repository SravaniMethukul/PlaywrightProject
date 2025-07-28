const { LoginPage } = require("./LoginPage");
const { AccountsPage } = require("./AccountsPage");
const { ProfilePage } = require("./ProfilePage");
const { SignUpPage } = require("./SignUpPage");
const { ChangePasswordPage } = require("./ChangePasswordPage");

class POManager {
    constructor(page) {
        this.page = page;
        this.loginPage = new LoginPage(this.page);
        this.accountsPage = new AccountsPage(this.page);
        this.profilePage = new ProfilePage(this.page);
        this.signUpPage = new SignUpPage(this.page);
        this.changePasswordPage = new ChangePasswordPage(this.page);
    }

    getLoginPage() {
        return this.loginPage;
    }

    getAccountsPage() {
        return this.accountsPage;
    }

    getProfilePage() {
        return this.profilePage;
    }

    getSignUpPage() {
        return this.signUpPage;
    }

    getChangePasswordPage() {
        return this.changePasswordPage;
    }

}

module.exports = { POManager };