import { Page, expect } from "@playwright/test"
import homePageLocators from '../locators/homePageLocators.json'
import data from "../data/data.json"


export default class homePageActions {

    page: Page


    constructor(page: Page) {
        this.page = page
    }

    async openLoginPage() {
        await this.page.locator(homePageLocators.account_button).click()
    }

    async searchAndSeleectAnItem() {
        await this.page.locator(homePageLocators.search_button).fill('botton freezer refrigerator')
        await this.page.keyboard.press('Enter');
        await this.page.waitForTimeout(2000);
        await this.page.evaluate(() => {
            window.scrollBy(0, 50)
        })
        await this.page.locator(homePageLocators.itemSelected_button).click()
        await this.page.waitForTimeout(1000);
    }

    async searchesForAnItem() {
        await this.page.locator(homePageLocators.search_txt).fill(data.searches.bottomRefrigerator)
        await this.page.keyboard.press('Enter');

    }
// methods to test general things
async validateIsVisibleFirstItem() {
    await expect(this.page.locator(homePageLocators.titleFirstItem_title)).toBeVisible()

}
// methods to test adding item wish list
    async openWishListPage() {
        await this.page.locator(homePageLocators.wishListPage_button).click()
    }


// methods to test the comparation between two items
    async getNameItem(locator: string) {
        const name = await this.page.locator(locator).textContent()
        return name
    }

    async getNameFirstItem() {
        await this.page.evaluate(() => {
            window.scrollBy(0, 80)
        })
        const name = await this.page.locator(homePageLocators.titleFirstItem_title).textContent()
        console.log("este es el titulo del item 1 " + name)
        return name
    }

    async getNameSecondItem() {
        const name = await this.page.locator(homePageLocators.titleSecondItem_title).textContent()
        console.log("este es el titulo del item 2 " + name)
        return name
    }


    async openComparePage() {
        await this.page.locator(homePageLocators.goTocompare_button).click()
    }

    async addTwoItemsToCompare() {
        const compareButton = await this.page.locator(homePageLocators.compareFirstItem_checkBox)
        compareButton.scrollIntoViewIfNeeded()
        await this.page.locator(homePageLocators.compareFirstItem_checkBox).click()
        await this.page.locator(homePageLocators.compareSecondItem_checkBox).click()
    }

// methods to open contact us new page
    async openContactUsPage() {
        await this.page.locator(homePageLocators.contactUsPage_button).click()
    }


// methods to test Laundry category located in the main navigation
    async hoverLaundryButton() {
        await this.page.waitForTimeout(2000)
        await this.page.locator(homePageLocators.laundry_button).hover()
        await this.page.waitForTimeout(2000)
    }

    async selectWashersCategory() {
        await this.page.locator(homePageLocators.washers_button).click()
        await this.page.waitForTimeout(2000)
    }

    async selectDryersCategory() {
        await this.page.locator(homePageLocators.dryers_button).click()
        await this.page.waitForTimeout(2000)
    }

    async selectStackLaundryCategory() {
        await this.page.locator(homePageLocators.stackLaundry_button).click()
        await this.page.waitForTimeout(2000)
    }

    async selectLaundryAccesoriesCategory() {
        await this.page.locator(homePageLocators.laundryAccesories_button).click()
        await this.page.waitForTimeout(2000)
    }


// methods to test Refrigeration category located in the main navigation

async hoverRefrigerationButton() {
    await this.page.waitForTimeout(2000)
    await this.page.locator(homePageLocators.refrigeration_button).hover()
    await this.page.waitForTimeout(2000)
}

async selectFrenchDoorRefrigeratorsCategory() {
    await this.page.locator(homePageLocators.frenchDoorRefrigerators_button).click()
    await this.page.waitForTimeout(2000)
}

async selectbottonFreezerRefrigeratorsCategory() {
    await this.page.locator(homePageLocators.bottonFreezerRefrigerators_button).click()
    await this.page.waitForTimeout(2000)
}

async selectRefrigeratorAccesoriesCategory() {
    await this.page.locator(homePageLocators.refrigeratorAccesories_button).click()
    await this.page.waitForTimeout(2000)
}



// methods to test Ventilation category located in the main navigation
async hoverVentilationButton() {
    await this.page.waitForTimeout(2000)
    await this.page.locator(homePageLocators.ventilation_button).hover()
    await this.page.waitForTimeout(2000)
}

async selectDowndracftCategory() {
    await this.page.locator(homePageLocators.downdraft_button).click()
    await this.page.waitForTimeout(2000)
}

// methods to test Diswashers category located in the main navigation
async hoverDiswashersButton() {
    await this.page.waitForTimeout(2000)
    await this.page.locator(homePageLocators.diswashers_button).hover()
    await this.page.waitForTimeout(2000)
}

async selectBuiltDiswasherCategory() {
    await this.page.locator(homePageLocators.builtInDiswashers_button).click()
    await this.page.waitForTimeout(2000)
}

async selectPortableDiswasherCategory() {
    await this.page.locator(homePageLocators.portableDiswashers_button).click()
    await this.page.waitForTimeout(2000)
}

async selectDiswasherAccesoriesCategory() {
    await this.page.locator(homePageLocators.diswashersAccesories_button).click()
    await this.page.waitForTimeout(2000)
}


// methods to test outdoor living category located in the main navigation

async hoverOutdooLivingButton() {
    await this.page.waitForTimeout(2000)
    await this.page.locator(homePageLocators.outdoorLiving_button).hover()
    await this.page.waitForTimeout(2000)
}

async selectPelletBBQCategory() {
    await this.page.locator(homePageLocators.pelletBBQ_button).click()
    await this.page.waitForTimeout(2000)
}

async selectNaturalGasBBQCategory() {
    await this.page.locator(homePageLocators.naturalGasBBQ_button).click()
    await this.page.waitForTimeout(2000)
}

async selectLpGasBBQCategory() {
    await this.page.locator(homePageLocators.lpGasBBQ_button).click()
    await this.page.waitForTimeout(2000)
}

async selectCharcoalBBQCategory() {
    await this.page.locator(homePageLocators.characoalBBQ_button).click()
    await this.page.waitForTimeout(2000)
}
async selectBBQAccessoriesCategory() {
    await this.page.locator(homePageLocators.BBQAccesories_button).click()
    await this.page.waitForTimeout(2000)
}

// method to test acces to extended care page
async openExtendedPage() {
    await this.page.locator(homePageLocators.extendedCare_button).click()
}

// method to test acces to outlet PLP
async openClearance() {
    await this.page.locator(homePageLocators.clearance_button).click()
}

async validateItleOutletIsVisible() {
    await expect(this.page.locator(homePageLocators.outlet_title)).toBeVisible()
}

// method to test acces to property managment page
async openPropertyManagementPage() {
    await this.page.locator(homePageLocators.propertyManagement_button).click()
}

// method to test acces to financing page
async openFinancingPage() {
    await this.page.locator(homePageLocators.financing_button).click()
}

// method to test acces to shop by brand page
async openShopByBrandPage() {
    await this.page.locator(homePageLocators.shopByBrand_button).click()
}

}