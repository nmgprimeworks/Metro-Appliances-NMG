import{Given, When, Then, Before, After} from "@cucumber/cucumber"
import { getPage } from "../utils/basePage"
import homePageActions from "../actions/homePageActions"
import { expect } from "@playwright/test"


let homeActions: homePageActions
let titleBuiltDiswasher: string | null 
let titlePortableDiswasher: string | null 
let titleDiswasherAccesories: string | null 

Given('user hover the mouse on dishwashers button', async function () {
    homeActions = new homePageActions(getPage())
    await homeActions.hoverDiswashersButton()
  });

  Given('User click on built-in dishwashers category', async function () {
    await homeActions.selectBuiltDiswasherCategory()
  });

  Given('User should see PLP of dishwashers', async function () {
    titleBuiltDiswasher =   await homeActions.getNameFirstItem()
    await expect(titleBuiltDiswasher).toContain("Dishwasher")
  });

 
  
  Given('User click on portable diswasher category', async function () {
    await homeActions.selectPortableDiswasherCategory()
  });

  Given('User should see PLP of portable diswasher', async function () {
    titlePortableDiswasher =   await homeActions.getNameFirstItem()
    await expect(titlePortableDiswasher).toContain("Portable Dishwasher")
  });

  Given('User click on dishwashers accesories category', async function () {
    await homeActions.selectDiswasherAccesoriesCategory()
  });

  Given('User should see PLP of accesories dishwashers', async function () {
    titleDiswasherAccesories =   await homeActions.getNameFirstItem()
    await expect(titleDiswasherAccesories).toContain("Dishwasher")
  });