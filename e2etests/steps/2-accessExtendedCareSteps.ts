import{Given, When, Then, Before, After} from "@cucumber/cucumber"
import { getPage } from "../utils/basePage"
import homePageActions from "../actions/homePageActions"
import extendedCarePageActions from "../actions/extendedCarePageActions"



let homeActions: homePageActions
let extendedCareActions: extendedCarePageActions

Given('User click on extended care button', async function () {
    homeActions = new homePageActions(getPage())
    await homeActions.openExtendedPage()
  });

  Given('User should see extended care page', async function () {
    extendedCareActions = new extendedCarePageActions(getPage())
    await extendedCareActions.validateExtendedCareIsVisible()
    await getPage().waitForTimeout(2000)
  });