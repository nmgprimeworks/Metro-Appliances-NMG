import { Given, When, Then, Before, After } from "@cucumber/cucumber"
import { getPage } from "../utils/basePage"
import homePageActions from "../actions/homePageActions"
import financingPageActions from "../actions/financingPageActions"


let homeActions: homePageActions
let financingActions: financingPageActions


Given('User click on financing button', async function () {
    homeActions = new homePageActions(getPage())
    await homeActions.openFinancingPage()
  });

  Given('User should see financing page', async function () {
    financingActions = new financingPageActions(getPage())
    await financingActions.validateFinancingTitleIsVisible()
    await getPage().waitForTimeout(2000)
  });