Feature: Login into metro appliance website
   The user wants to login into metro appliances website

Background:
Given User visit the metro appliances website

@fail
   Scenario: login with valid credencials
    When User writes the valid username
    And User writes the valid password
    And User click continue button
    Then User should see The tittle My account

