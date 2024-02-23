Feature: User can accees to Ventilation page from main navigation
         

  Background: 
    Given User visit the metro appliances website

  @test
  Scenario: User can accees to ventilation page from main navigation
    And User click on Ventilation button
    And User should see Ventilation page