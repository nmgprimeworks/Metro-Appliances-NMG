import{Given, When, Then, Before, After} from "@cucumber/cucumber"
import { getPage } from "../utils/basePage"
import homePageActions from "../actions/homePageActions"
import { expect } from "@playwright/test"


let homeActions: homePageActions
let titleWasher: string | null 
let titleDryer: string | null 
let titleStack: string | null 

Given('user hover the mouse on laundry button', async function () {
    homeActions = new homePageActions(getPage())
    await homeActions.hoverLaundryButton()
  });


  Given('User click on washers category', async function () {
    await homeActions.selectWashersCategory()
  });


  Given('User should see PLP of washers', async function () {
    titleWasher =   await homeActions.getNameFirstItem()
    await expect(titleWasher).toContain("Washer")
  });




  Given('User click on dryers category', async function () {
    await homeActions.selectDryersCategory()
  });


  Given('User should see PLP of dryers', async function () {
    titleDryer =   await homeActions.getNameFirstItem()
    await expect(titleDryer).toContain("Dryer")
  });

  Given('User click on stack laundry category', async function () {
    await homeActions.selectStackLaundryCategory()
  });

  Given('User should see PLP of stack laundry', async function () {
    titleStack =   await homeActions.getNameFirstItem()
    await expect(titleStack).toContain("Stack")
  });

  Given('User click on laundry accesories category', async function () {
    await homeActions.selectLaundryAccesoriesCategory()
  });


  Given('User should see PLP of laundry accesories', async function () {
    await homeActions.validateIsVisibleFirstItem()
  });