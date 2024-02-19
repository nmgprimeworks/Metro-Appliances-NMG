Feature: User find washer using the categories
         User can find the specific product using the categories that the website has

  Background: 
    Given User visit the metro appliances website

  @test
  Scenario: User find washers using the categories
    And user hover the mouse on laundry button
    And User click on washers category
    And User should see PLP of washers

  @test
  Scenario: User find dryers using the categories
    And user hover the mouse on laundry button
    And User click on dryers category
    And User should see PLP of dryers

  @test
  Scenario: User find stack laundry using the categories
    And user hover the mouse on laundry button
    And User click on stack laundry category
    And User should see PLP of stack laundry

  @test
  Scenario: User find laundry accesories using the categories
    And user hover the mouse on laundry button
    And User click on laundry accesories category
    And User should see PLP of laundry accesories
