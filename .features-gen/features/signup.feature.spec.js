// Generated from: features\signup.feature
import { test } from "playwright-bdd";

test.describe('ParaBank User Registration and Log the amount displayed on the page post-login', () => {

  test('Successfully register a new user and verify account balance', async ({ Given, When, Then, And, page }) => { 
    await Given('User launches the ParaBank application', null, { page }); 
    await When('User navigates to the registration page', null, { page }); 
    await And('User submits the registration form with valid details', null, { page }); 
    await Then('the account should be created successfully', null, { page }); 
    await When('User navigates to the account overview page', null, { page }); 
    await Then('User should be able to view the account balance', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\signup.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User launches the ParaBank application","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User navigates to the registration page","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"And User submits the registration form with valid details","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then the account should be created successfully","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"When User navigates to the account overview page","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then User should be able to view the account balance","stepMatchArguments":[]}]},
]; // bdd-data-end