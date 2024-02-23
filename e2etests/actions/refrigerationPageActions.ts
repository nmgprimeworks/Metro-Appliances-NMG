import { Page, expect } from "@playwright/test"
import refrigerationPageLocators from '../locators/refrigerationPageLocators.json'


export default class refrigerationPageActions {

    page: Page


    constructor(page: Page) {
        this.page = page
    }



    async validateRefrigerationTitleIsVisible() {
        await expect(this.page.locator(refrigerationPageLocators.refrigeration_title)).toBeVisible()
    }
}