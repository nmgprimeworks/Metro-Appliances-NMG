import { Given, When, Then, Before, After } from "@cucumber/cucumber"
import { getPage } from "../utils/basePage"
import homePageActions from "../actions/homePageActions"
import laundryPageActions from "../actions/laundryPageActions"


let homeActions: homePageActions
let laundryActions: laundryPageActions

Given('User click on Laundry button', async function () {
  homeActions = new homePageActions(getPage())
  await homeActions.openLaundryPage()
  });

  Given('User should see Laundry page', async function () {
    laundryActions = new laundryPageActions(getPage())
    await laundryActions.validateLaundryTitleIsVisible()
    await getPage().waitForTimeout(2000)
  });