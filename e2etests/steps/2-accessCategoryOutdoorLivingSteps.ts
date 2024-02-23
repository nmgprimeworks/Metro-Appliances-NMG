import { Given, When, Then, Before, After } from "@cucumber/cucumber"
import { getPage } from "../utils/basePage"
import homePageActions from "../actions/homePageActions"
import outdoorLivingPageActions from "../actions/outdoorLivingPageActions"


let homeActions: homePageActions
let outdoorLivingActions: outdoorLivingPageActions


Given('User click on Outdoors Living button', async function () {
  homeActions = new homePageActions(getPage())
  await homeActions.openOutdoorLivingPage()
  });


  Given('User should see Outdoors Living page', async function () {
    outdoorLivingActions = new outdoorLivingPageActions(getPage())
    await outdoorLivingActions.validateOutdoorLivingTitleIsVisible()
    await getPage().waitForTimeout(2000)
  });