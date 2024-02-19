import { Given, When, Then, Before, After } from "@cucumber/cucumber"
import { getPage } from "../utils/basePage"
import homePageActions from "../actions/homePageActions"
import { expect } from "@playwright/test"

let homeActions: homePageActions
let titleDowndraft: string | null


Given('user hover the mouse on Ventilation button', async function () {
    homeActions = new homePageActions(getPage())
    await homeActions.hoverVentilationButton()
});


Given('User click on Downdraft category', async function () {
    await homeActions.selectDowndracftCategory()
});


Given('User should see PLP of downdraft', async function () {
    titleDowndraft =   await homeActions.getNameFirstItem()
    await expect(titleDowndraft).toContain("Downdraft")
});