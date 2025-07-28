# PlaywrightProject

## WebSite 
[https://swift.techwithjatin.com/]

# Project Structure
```
PlaywrightProject/
├── .github/workflows/         # CI/CD automation (runs your tests on push)
├── allure-report/             # Shiny HTML test reports from Allure
├── allure-results/            # Raw test results for Allure to chew on
├── pageObjects/               # Page classes for the Page Object Model
│   ├── AccountsPage.js            # Handles account-related actions
│   ├── ChangePasswordPage.js      # Change password stuff
│   ├── LoginPage.js               # Login logic
│   ├── POManager.js               # Manages all your page objects
│   ├── ProfilePage.js             # User profile actions
│   └── SignUpPage.js              # Sign-up page interactions
├── tests/                     # Your real test scripts live here
│   ├── RegistrationWithPOM.spec.js      # Registration tests using POM
│   ├── TestWebScenarios.spec.js         # Web scenario tests
│   ├── VisualTesting.spec.js            # Visual regression tests
│   └── VisualTesting.spec.js-snapshots  # Snapshots for visual tests
├── utils/                     # utility folder
│   ├── changePasswordData.json      # Data for changePassword Functionality
│   ├── loginData.json               # Data for Login
│   ├── registrationData.json        # Data for registration
├── .gitignore                 # Tells Git what to ignore (node_modules, etc.)
├── README.md                  # Project overview and instructions
├── package-lock.json          # Locks down npm dependencies (auto-generated)
├── package.json               # Project info, scripts, and dependencies
├── playwright.config.js       # Playwright’s main config file
├── state.json                 # Stores logged-in session state

```

## 🚀 Getting Started

### 1. Install dependencies
Open your terminal and run:

```
npm install
```

### 2. Run tests
just use:

```
npx playwright test
```
To run only tests having tag as @web
```
npx playwright test --grep '@web'
```

Want to run a specific test file? Try:
```
npx playwright test RegistrationWithPOM.spec.js
```


