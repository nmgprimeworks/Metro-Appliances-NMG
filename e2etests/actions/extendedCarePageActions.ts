import { Page, expect } from "@playwright/test"
import extendedCarePageLocators from '../locators/extendedCarePageLocators.json'


export default class extendedCarePageActions {

    page: Page


    constructor(page: Page) {
        this.page = page
    }



    async validateExtendedCareIsVisible() {
        await expect(this.page.locator(extendedCarePageLocators.extendeCare_title)).toBeVisible()
    }
}