Feature: User can accees to cooking page from main navigation
         

  Background: 
    Given User visit the metro appliances website

  @test
  Scenario: User can accees to cooking page from main navigation
    And User click on cooking button
    And User should see cooking page