import { Given, When, Then, Before, After } from "@cucumber/cucumber"
import { getPage } from "../utils/basePage"
import homePageActions from "../actions/homePageActions"
import ventilationPageActions from "../actions/ventilationPageActions"


let homeActions: homePageActions
let ventilationActions: ventilationPageActions


Given('User click on Ventilation button', async function () {
  homeActions = new homePageActions(getPage())
  await homeActions.openVentilationPage()
  });

  Given('User should see Ventilation page', async function () {
    ventilationActions = new ventilationPageActions(getPage())
    await ventilationActions.validateVentilationTitleIsVisible()
    await getPage().waitForTimeout(2000)
  });