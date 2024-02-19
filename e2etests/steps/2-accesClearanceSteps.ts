import { Given, When, Then, Before, After } from "@cucumber/cucumber"
import { getPage } from "../utils/basePage"
import homePageActions from "../actions/homePageActions"


let homeActions: homePageActions


Given('User click on clearance button', async function () {
    homeActions = new homePageActions(getPage())
    await homeActions.openClearance()
});


Given('User should see PLP clearance', async function () {
    await homeActions.validateIsVisibleFirstItem()
    await homeActions.validateItleOutletIsVisible()
    await getPage().waitForTimeout(2000)
});