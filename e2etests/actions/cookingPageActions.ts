import { Page, expect } from "@playwright/test"
import cookinkPageLocators from '../locators/cookingPageLocators.json'


export default class cookingPageActions {

    page: Page


    constructor(page: Page) {
        this.page = page
    }



    async validateCookingTitleIsVisible() {
        await expect(this.page.locator(cookinkPageLocators.cooking_title)).toBeVisible()
    }
}