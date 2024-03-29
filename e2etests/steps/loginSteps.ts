import{Given, When, Then, Before, After} from "@cucumber/cucumber"
import { getPage } from "../utils/basePage"
import homePageActions from "../actions/homePageActions"
import loginPageActions from "../actions/loginPageActions"
import data from '../data/data.json'


let homeActions: homePageActions
let loginActions: loginPageActions

Given('User visit the metro appliances website', async function () {
    await getPage().goto(data.URL)
   await getPage().waitForTimeout(1000);
  });


  When('User writes the valid username', async function () {
    homeActions = new homePageActions(getPage())
    await homeActions.openLoginPage()
    
    loginActions = new loginPageActions(getPage())
    await loginActions.inputValidUsername()

  });

  When('User writes the valid password', async function () {
    await loginActions.inputValidPassword()
  });


  When('User click continue button', async function () {
    await loginActions.clcikButtonContinue()
    await getPage().waitForTimeout(4000);
  });


  Then('User should see The tittle My account', async function () {
    
  });

