import { Given, When, Then, Before, After } from "@cucumber/cucumber"
import { getPage } from "../utils/basePage"
import homePageActions from "../actions/homePageActions"
import cookingPageActions from "../actions/cookingPageActions"


let homeActions: homePageActions
let cookingActions: cookingPageActions


Given('User click on cooking button', async function () {
  homeActions = new homePageActions(getPage())
  await homeActions.openCookingPage()
  });

  Given('User should see cooking page', async function () {
    cookingActions = new cookingPageActions(getPage())
    await cookingActions.validateCookingTitleIsVisible()
    await getPage().waitForTimeout(2000)
  });