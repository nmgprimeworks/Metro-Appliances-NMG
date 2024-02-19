Feature: User find Frezzer or similar using the categories
         User can find the specific product using the categories that the website has

  Background: 
    Given User visit the metro appliances website

  @test
  Scenario: User find french door refrigerator using the categories
    And user hover the mouse on Refrigeration button
    And User click on french door refrigerators category
    And User should see PLP of french door refrigerators

  @test
  Scenario: User find botton freezer refrigerators using the categories
    And user hover the mouse on Refrigeration button
    And User click on botton freezer refrigerators category
    And User should see PLP of botton freezer refrigerators

  @test
  Scenario: User find refrigerator accesories using the categories
    And user hover the mouse on Refrigeration button
    And User click on refrigerator accesories category
    And User should see PLP of refrigerator accesories

 
