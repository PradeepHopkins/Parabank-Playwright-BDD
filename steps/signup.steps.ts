import { createBdd } from 'playwright-bdd';
import { RegisterPage } from '../pages/register.page';
import { HomePage } from '../pages/home.page';
import { AccountsOverviewPage } from '../pages/accounts-overview.page';
import { AccountServicePage } from '../pages/account-service.page';
import { createUserData } from '../utils/logger.utils';
import { expect } from '@playwright/test';

let registerPage: RegisterPage;
let homePage: HomePage;
let accountServicePage: AccountServicePage;
let accountsOverviewPage: AccountsOverviewPage;

const { Given, When, Then } = createBdd();

Given('User launches the ParaBank application', async ({ page }) => {

    await page.goto('');
});

When('User navigates to the registration page', async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.registerLink();
});

When('User submits the registration form with valid details', async ({ page }) => {
    registerPage = new RegisterPage(page);
    await registerPage.registerNewUser(
        createUserData().firstName,
        createUserData().lastName,
        createUserData().address,
        createUserData().city,
        createUserData().state,
        createUserData().zipCode,
        createUserData().phone,
        createUserData().ssn,
        createUserData().username,
        createUserData().password
    );
});

Then('the account should be created successfully', async ({ page }) => {
    accountServicePage = new AccountServicePage(page);
    expect(accountServicePage.getloginSuccessfullLog())
        .toHaveText('Your account was created successfully. You are now logged in.');
});

When('User navigates to the account overview page', async ({ page }) => {
    accountServicePage = new AccountServicePage(page);
    await accountServicePage.accountOverViewLink();
});

Then('User should be able to view the account balance', async ({ page }) => {
    accountsOverviewPage = new AccountsOverviewPage(page);
    await accountsOverviewPage.getBalance();
});

