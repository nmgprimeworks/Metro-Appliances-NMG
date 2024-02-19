Feature: User can accees to financing page from main navigation
         

  Background: 
    Given User visit the metro appliances website

  @test
  Scenario: User can accees to financing page from main navigation
    And User click on financing button
    And User should see financing page