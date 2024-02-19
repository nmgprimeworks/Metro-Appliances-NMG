import { Page, expect } from "@playwright/test"
import shopByBrandPageLocators from '../locators/shopByBrandPageLocators.json'


export default class shopByBrandPageActions {

    page: Page


    constructor(page: Page) {
        this.page = page
    }


    async validateBrandSquareIsVisible() {
        await expect(this.page.locator(shopByBrandPageLocators.shopByBrands_title)).toBeVisible()
    }

}