import { Page, expect } from "@playwright/test"
import laundryPageLocators from '../locators/laundryPageLocators.json'


export default class laundryPageActions {

    page: Page


    constructor(page: Page) {
        this.page = page
    }



    async validateLaundryTitleIsVisible() {
        await expect(this.page.locator(laundryPageLocators.laundry_title)).toBeVisible()
    }
}