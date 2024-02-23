import { Page, expect } from "@playwright/test"
import dishwashersPageLocators from '../locators/dishwashersPageLocators.json'


export default class dishwashersPageActions {

    page: Page


    constructor(page: Page) {
        this.page = page
    }



    async validateDishwashersTitleIsVisible() {
        await expect(this.page.locator(dishwashersPageLocators.diswashers_title)).toBeVisible()
    }
}