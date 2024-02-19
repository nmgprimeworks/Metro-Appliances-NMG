Feature: User can accees to property management page from main navigation
         

  Background: 
    Given User visit the metro appliances website

  @test
  Scenario: User can accees to property management page from main navigation
    And User click on property management button
    And User should see property management page