# ParaBank Automation

Automated testing framework for ParaBank using Playwright and Cucumber (BDD).

## 📋 Overview

This is a test automation suite for the ParaBank application built with:
- **Playwright** - Web automation and testing framework
- **Cucumber/Gherkin** - BDD test scenarios
- **TypeScript** - Type-safe scripting language
- **Page Object Model** - Design pattern for maintainable tests

## 🛠️ Tech Stack

- Node.js
- Playwright
- Cucumber (BDD)
- TypeScript
- xlsx (for test data management)

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Git

## 🚀 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ParaBank-Automation
```

2. Install dependencies:
```bash
npm install
```

3. Install Playwright browsers:
```bash
npx playwright install
```

## 📁 Project Structure

```
├── features/                    # BDD feature files (Gherkin syntax)
│   └── signup.feature
├── pages/                       # Page Object Models
│   ├── account-service.page.ts
│   ├── accounts-overview.page.ts
│   ├── home.page.ts
│   └── register.page.ts
├── steps/                       # Step definitions
│   └── signup.steps.ts
├── utils/                       # Utility functions
│   └── logger.utils.ts
├── playwright.config.ts         # Playwright configuration
├── tsconfig.json               # TypeScript configuration
├── package.json                # Project dependencies
└── README.md                   # This file
```

## 📊 Folder Structure Details

- **features/** - Cucumber feature files containing test scenarios in Gherkin syntax
- **pages/** - Page Object Model classes for each page in the application
- **steps/** - Step definitions mapping Gherkin steps to code
- **utils/** - Helper utilities (logging, data parsing, etc.)
- **screenshots/** - Test failure screenshots (not tracked in git)
- **test-results/** - Playwright test results (not tracked in git)
- **playwright-report/** - HTML test report (not tracked in git)

## 🧪 Running Tests

### Run all tests:
```bash
npm test
```

### Run specific feature:
```bash
npx playwright test --grep @signup
```

### Run in headed mode (see browser):
```bash
npx playwright test --headed
```

### Run in debug mode:
```bash
npx playwright test --debug
```

### Generate HTML report:
```bash
npx playwright show-report
```

## ⚙️ Configuration

Playwright configuration is in `playwright.config.ts`:
- Base URL
- Browser types (Chromium, Firefox, WebKit)
- Test timeout settings
- Retry logic
- Screenshot/video capture on failure

Update the config as needed for your environment.

## 📝 Test Data

Test data can be imported from Excel files using the `xlsx` package. Place Excel files in the project root and reference them in your step definitions.

## 📸 Screenshots & Reports

- **screenshots/** - Captured during test failures (ignored in git)
- **test-results/** - Detailed test results (ignored in git)
- **playwright-report/** - Interactive HTML report (ignored in git)

## 🔍 Logging

Logging utility available at `utils/logger.utils.ts` for debugging and test reporting.

## 📦 Dependencies

See `package.json` for full list. Key packages:
- `@cucumber/cucumber` - BDD framework
- `@playwright/test` - Testing library
- `typescript` - Type support
- `xlsx` - Excel file handling

## ⚠️ Known Issues

- xlsx package has unpatched security vulnerabilities (Prototype Pollution, ReDoS). Use with caution in production environments.

## 🤝 Best Practices

1. Follow Page Object Model pattern for page interactions
2. Use BDD approach with clear, descriptive feature files
3. Keep step definitions simple and reusable
4. Use proper wait strategies instead of hardcoded delays
5. Organize tests by feature/functionality
6. Use meaningful test data and scenario names

## 📝 License

[Add license information]

## 👤 Authors

[Add author information]

## 📞 Support

[Add support information]
