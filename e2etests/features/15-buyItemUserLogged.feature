Feature: User logged buys an item into the metro appliance website
   The user logged wants to buy an item into metro appliances
 website


Background:
Given User visit the metro appliances website

@fail
   Scenario: User logged buys an item
    When User logs in website
    And User searches and adds an item to cart
    And User fills out the form
    And User makes the purchase
    Then User should see the id of the purchase