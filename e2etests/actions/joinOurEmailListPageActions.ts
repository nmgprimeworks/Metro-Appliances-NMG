import { Page, expect } from "@playwright/test"
import joinOurEmailListPageLocators from '../locators/joinOurEmailListPageLocators.json'


export default class joinOurEmailListPageActions {

    page: Page


    constructor(page: Page) {
        this.page = page
    }



    async validateSignUpToStayInTouchTitleIsVisible() {
        await expect(this.page.locator(joinOurEmailListPageLocators.singUpStayInTouch_title)).toBeVisible()
    }
}