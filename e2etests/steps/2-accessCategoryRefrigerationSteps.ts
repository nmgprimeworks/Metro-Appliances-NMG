import { Given, When, Then, Before, After } from "@cucumber/cucumber"
import { getPage } from "../utils/basePage"
import homePageActions from "../actions/homePageActions"
import financingPageActions from "../actions/financingPageActions"


let homeActions: homePageActions


Given('User click on Refrigeration button', async function () {
  homeActions = new homePageActions(getPage())
  await homeActions.openRefrigerationPage()
  });

  Given('User should see Refrigeration page', async function () {
    
  });