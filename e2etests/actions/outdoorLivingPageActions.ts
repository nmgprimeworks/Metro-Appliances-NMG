import { Page, expect } from "@playwright/test"
import outdoorLivingPageLocators from '../locators/outdoorLivingPageLocatorsd.json'


export default class outdoorLivingPageActions {

    page: Page


    constructor(page: Page) {
        this.page = page
    }



    async validateOutdoorLivingTitleIsVisible() {
        await expect(this.page.locator(outdoorLivingPageLocators.outdoorLiving_title)).toBeVisible()
    }
}