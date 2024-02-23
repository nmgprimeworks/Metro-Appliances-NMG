Feature: User find items of outdoor living using the categories
         User can find the specific product using the categories that the website has

  Background: 
    Given User visit the metro appliances website

  @test
  Scenario: User find pellets grill or similar using the categories
    And user hover the mouse on outdoor living button
    And User click on pellet bbq category
    And User should see PLP of pellet grill

  @test
  Scenario: User find natural gas bbq using the categories
    And user hover the mouse on outdoor living button
    And User click on natural gas bbq category
    And User should see PLP of natural gas bbq

  @test
  Scenario: User find lp gas bbq using the categories
    And user hover the mouse on outdoor living button
    And User click on natural lp gas bbq category
    And User should see PLP of lp gas bbq

  @test
  Scenario: User find characoal bbq using the categories
    And user hover the mouse on outdoor living button
    And User click on characoal bbq category
    And User should see PLP of characoal bbq

  @test
  Scenario: User find bbq accessories using the categories
    And user hover the mouse on outdoor living button
    And User click on bbq accessories category
    And User should see PLP of bbq accessories
