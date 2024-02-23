import { Given, When, Then, Before, After } from "@cucumber/cucumber"
import { getPage } from "../utils/basePage"
import homePageActions from "../actions/homePageActions"
import joinOurEmailListPageActions from "../actions/joinOurEmailListPageActions"


let homeActions: homePageActions
let joinOurEmailListActions: joinOurEmailListPageActions

Given('User click on join our email list button', async function () {
  homeActions = new homePageActions(getPage())
  await homeActions.openJoinOurEmailListPage()
  });

  Given('User should see join our email list page', async function () {
    joinOurEmailListActions = new joinOurEmailListPageActions(getPage())
    await getPage().waitForTimeout(2000)
    await joinOurEmailListActions.validateSignUpToStayInTouchTitleIsVisible()
    await getPage().waitForTimeout(2000)
  });