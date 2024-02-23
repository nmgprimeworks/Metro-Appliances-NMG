import { Given, When, Then, Before, After } from "@cucumber/cucumber"
import { getPage } from "../utils/basePage"
import homePageActions from "../actions/homePageActions"
import { expect } from "@playwright/test"

let homeActions: homePageActions
let titleFrenchRefrigerator: string | null
let titleBottonFreezer: string | null
let titleStack: string | null



Given('user hover the mouse on Refrigeration button', async function () {
    homeActions = new homePageActions(getPage())
    await homeActions.hoverRefrigerationButton()
});

Given('User click on french door refrigerators category', async function () {
    await homeActions.selectFrenchDoorRefrigeratorsCategory()
});


Given('User should see PLP of french door refrigerators', async function () {
    titleFrenchRefrigerator =   await homeActions.getNameFirstItem()
    await expect(titleFrenchRefrigerator).toContain("French Door")
});


Given('User click on botton freezer refrigerators category', async function () {
    await homeActions.selectbottonFreezerRefrigeratorsCategory()
});

Given('User should see PLP of botton freezer refrigerators', async function () {
    titleBottonFreezer =   await homeActions.getNameFirstItem()
    await expect(titleBottonFreezer).toContain("Bottom Freezer")
});

Given('User click on refrigerator accesories category', async function () {
    await homeActions.selectRefrigeratorAccesoriesCategory()
});


Given('User should see PLP of refrigerator accesories', async function () {
    await homeActions.validateIsVisibleFirstItem()
});