Feature: User find items about ventilation using the categories
         User can find the specific product using the categories that the website has

  Background: 
    Given User visit the metro appliances website

  @test
  Scenario: User find items about ventilation using the categories
    And user hover the mouse on Ventilation button
    And User click on Downdraft category
    And User should see PLP of downdraft