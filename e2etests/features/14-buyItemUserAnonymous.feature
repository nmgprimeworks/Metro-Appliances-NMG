Feature: User anonymous buys an item into the metro appliances website
   The user anonymous wants to buy an item into metro appliances
 website


Background:
Given User visit the metro appliances website

@test 
   Scenario: User anonymous buys an item
    And User searches and adds an item to cart
    And User fills out the form
    And User makes the purchase
    Then User should see the id of the purchase