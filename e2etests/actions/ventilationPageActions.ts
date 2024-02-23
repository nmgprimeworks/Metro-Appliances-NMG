import { Page, expect } from "@playwright/test"
import ventilationPageLocators from '../locators/ventilationPageLocators.json'


export default class ventilationPageActions {

    page: Page


    constructor(page: Page) {
        this.page = page
    }



    async validateVentilationTitleIsVisible() {
        await expect(this.page.locator(ventilationPageLocators.ventilation_title)).toBeVisible()
    }
}