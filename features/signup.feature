Feature: ParaBank Registration and Login

  Scenario: Register new user and login successfully

    Given User launches ParaBank application

    When User registers a new account

    Then User should be registered successfully

    And User navigate to account overview page

    And Print account balance
    