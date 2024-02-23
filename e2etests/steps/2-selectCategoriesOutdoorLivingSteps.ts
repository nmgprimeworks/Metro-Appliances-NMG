import{Given, When, Then, Before, After} from "@cucumber/cucumber"
import { getPage } from "../utils/basePage"
import homePageActions from "../actions/homePageActions"
import homePageLocators from '../locators/homePageLocators.json'
import { expect } from "@playwright/test"


let homeActions: homePageActions
let titlePelletBBQ: string | null 
let titleNaturalGas: string | null 
let titleLpGasBBQ: string | null 
let titleCharcoal: string | null 
let titleBBQAccessories: string | null 

Given('user hover the mouse on outdoor living button', async function () {
    
    homeActions = new homePageActions(getPage())
    await homeActions.hoverOutdooLivingButton()
  });

  Given('User click on pellet bbq category', async function () {
    await homeActions.selectPelletBBQCategory()
  });

  Given('User should see PLP of pellet grill', async function () {
    titlePelletBBQ =   await homeActions.getNameFirstItem()
    await expect(titlePelletBBQ).toContain("Pellet Grill")
  });



///-------------------

  Given('User click on natural gas bbq category', async function () {
    await homeActions.selectNaturalGasBBQCategory()
  });

  Given('User should see PLP of natural gas bbq', async function () {
    titleNaturalGas =   await homeActions.getNameFirstItem()
    await expect(titleNaturalGas).toContain("Grill")
  });


  //-------------------------
  Given('User click on natural lp gas bbq category', async function () {
    await homeActions.selectLpGasBBQCategory()
  });


  Given('User should see PLP of lp gas bbq', async function () {
    titleLpGasBBQ=   await homeActions.getNameFirstItem()
    await expect(titleLpGasBBQ).toContain("Grill")
  });


//--------------

Given('User click on characoal bbq category', async function () {
    await homeActions.selectCharcoalBBQCategory()
  });


  Given('User should see PLP of characoal bbq', async function () {
    titleCharcoal =   await homeActions.getNameFirstItem()
    await expect(titleCharcoal).toContain("Asado Smoker")   
  });

  //------------------------------------------

  Given('User click on bbq accessories category', async function () {
    await homeActions.selectBBQAccessoriesCategory()
  });


  Given('User should see PLP of bbq accessories', async function () {
    await homeActions.validateIsVisibleFirstItem()

  });
