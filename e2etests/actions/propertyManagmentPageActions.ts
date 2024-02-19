import { Page, expect } from "@playwright/test"
import propertyManagmentPageLocators from '../locators/propertymanagmentPageLocators.json'


export default class propertyManagmentPageActions {

    page: Page


    constructor(page: Page) {
        this.page = page
    }


    async validatePropertyManagementIsVisible() {
        await expect(this.page.locator(propertyManagmentPageLocators.apartmentRental_title)).toBeVisible()
    }

}