Feature: User find Diswashers or similar using the categories
         User can find the specific product using the categories that the website has

  Background: 
    Given User visit the metro appliances website

  @test
  Scenario: User find Diswashers or similar using the categories
    And user hover the mouse on dishwashers button
    And User click on built-in dishwashers category
    And User should see PLP of dishwashers

  @test
  Scenario: User find Portable Diswashers using the categories
    And user hover the mouse on dishwashers button
    And User click on portable diswasher category
    And User should see PLP of portable diswasher

  @test
  Scenario: User find Diswashers acesories similar using the categories
    And user hover the mouse on dishwashers button
    And User click on dishwashers accesories category
    And User should see PLP of accesories dishwashers