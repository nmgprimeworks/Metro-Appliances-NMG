Feature: User submit the contact us form

  Background: 
    Given User visit the metro appliances website

  @test
  Scenario: User submit the contact us form
    And User opens the contact us page
    And User fills the form
    And User select the store
    And User click on button submit
    Then User should see the message We have received your query.

