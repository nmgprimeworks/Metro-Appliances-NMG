import { Given, When, Then, Before, After } from "@cucumber/cucumber"
import { getPage } from "../utils/basePage"
import homePageActions from "../actions/homePageActions"
import dishwashersPageActions from "../actions/dishwashersPageActions"


let homeActions: homePageActions
let dishwashersActions: dishwashersPageActions


Given('User click on Diswashers button', async function () {
  homeActions = new homePageActions(getPage())
  await homeActions.openDishwashersPage()
  });

  Given('User should see Diswashers page', async function () {
    dishwashersActions = new dishwashersPageActions(getPage())
    await dishwashersActions.validateDishwashersTitleIsVisible()
    await getPage().waitForTimeout(2000)
  });