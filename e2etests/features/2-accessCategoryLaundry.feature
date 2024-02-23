Feature: User can accees to Laundry page from main navigation
         

  Background: 
    Given User visit the metro appliances website

  @test
  Scenario: User can accees to Laundry page from main navigation
    And User click on Laundry button
    And User should see Laundry page