Feature: User can accees to extended care page from main navigation
         

  Background: 
    Given User visit the metro appliances website

  @test
  Scenario: User can accees to extended care page from main navigation
    And User click on extended care button
    And User should see extended care page