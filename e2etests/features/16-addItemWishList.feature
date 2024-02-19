Feature: User logged adds an item to wish list



Background:
Given User visit the metro appliances website

@fail
   Scenario: User logged adds an item to wish list
    When User logs in website
    And User searches an item 
    And User adds an item to wish list
    Then User should see item added in the wish list page