Feature: ParaBank User Registration and Log the amount displayed on the page post-login

  Scenario: Successfully register a new user and verify account balance

    Given User launches the ParaBank application
    When User navigates to the registration page
    And User submits the registration form with valid details
    Then the account should be created successfully
    When User navigates to the account overview page
    Then User should be able to view the account balance
    