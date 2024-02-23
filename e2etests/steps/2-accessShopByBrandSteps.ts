import { Given, When, Then, Before, After } from "@cucumber/cucumber"
import { getPage } from "../utils/basePage"
import homePageActions from "../actions/homePageActions"
import shopByBrandPageActions from "../actions/shopByBrandPageActions"



let homeActions: homePageActions
let shopByBrandActions: shopByBrandPageActions


Given('User click on shop by brand button', async function () {
    homeActions = new homePageActions(getPage())
    await homeActions.openShopByBrandPage()
  });


  Given('User should see shop by brand page', async function () {
    shopByBrandActions = new shopByBrandPageActions(getPage())
    await shopByBrandActions.validateBrandSquareIsVisible()
    await getPage().waitForTimeout(2000)
  });