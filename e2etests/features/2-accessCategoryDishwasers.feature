Feature: User can accees to Diswashers page from main navigation
         

  Background: 
    Given User visit the metro appliances website

  @test
  Scenario: User can accees to fDiswashers page from main navigation
    And User click on Diswashers button
    And User should see Diswashers page