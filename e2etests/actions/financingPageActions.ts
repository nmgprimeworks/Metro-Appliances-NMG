import { Page, expect } from "@playwright/test"
import fiancingPageLocators from '../locators/financingPageLocators.json'


export default class financingPageActions {

    page: Page


    constructor(page: Page) {
        this.page = page
    }



    async validateFinancingTitleIsVisible() {
        await expect(this.page.locator(fiancingPageLocators.payYourBill_title)).toBeVisible()
    }
}