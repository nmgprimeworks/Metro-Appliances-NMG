import { Given, When, Then, Before, After } from "@cucumber/cucumber"
import { getPage } from "../utils/basePage"
import homePageActions from "../actions/homePageActions"
import propertyManagementPageActions from "../actions/propertyManagmentPageActions"


let homeActions: homePageActions
let propertyManagementActions: propertyManagementPageActions


Given('User click on property management button', async function () {
  homeActions = new homePageActions(getPage())
  await homeActions.openPropertyManagementPage()
  });

  Given('User should see property management page', async function () {
    propertyManagementActions = new propertyManagementPageActions(getPage())
    await propertyManagementActions.validatePropertyManagementIsVisible()
    await getPage().waitForTimeout(2000)
  });