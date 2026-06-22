import { createBdd } from 'playwright-bdd';
import { RegisterPage } from '../pages/register.page';
import { HomePage } from '../pages/home.page';
import { AccountsOverviewPage } from '../pages/accounts-overview.page';
import { AccountServicePage } from '../pages/account-service.page';
import { createUserData } from '../utils/logger.utils';
import { expect } from '@playwright/test';

const { Given, When, Then } = createBdd();

let registerPage: RegisterPage;
let homePage: HomePage;
let accountServicePage: AccountServicePage;
let accountsOverviewPage: AccountsOverviewPage;

Given('User launches the ParaBank application', async ({ page }) => {
    await page.goto('');
    homePage = new HomePage(page);
    registerPage = new RegisterPage(page);
    accountServicePage = new AccountServicePage(page);
    accountsOverviewPage = new AccountsOverviewPage(page);
});

When('User navigates to the registration page', async () => {
    await homePage.registerLink();
});

When('User submits the registration form with valid details', async () => {
    const userData = createUserData();
    await registerPage.registerNewUser(
        userData.firstName,
        userData.lastName,
        userData.address,
        userData.city,
        userData.state,
        userData.zipCode,
        userData.phone,
        userData.ssn,
        userData.username,
        userData.password
    );
});

Then('the account should be created successfully', async ({ page }) => {
    await page.waitForLoadState('networkidle');
    await expect(accountServicePage.getloginSuccessfullLog()).toContainText('Your account was created successfully. You are now logged in.');
});

When('User navigates to the account overview page', async () => {
    await accountServicePage.accountOverViewLink();
});

Then('User should be able to view the account balance', async ({ page }) => {
    await accountsOverviewPage.getBalance();
    await page.screenshot({
        path: 'screenshots/account-balance.png'
    });
});
