Feature: User can accees to shop by brand page from main navigation
         

  Background: 
    Given User visit the metro appliances website

  @test
  Scenario: User can accees to shop by brand page from main navigation
    And User click on shop by brand button
    And User should see shop by brand page