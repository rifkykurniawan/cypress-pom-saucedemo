const locator = require('../../pageobject/pageElements/Locator.json')

export class LogoutPage {
    clickBurgerButton(){
        cy.get(locator.LogOut.burger_button).click()
    }
    clickLogOutButton(){
        cy.get(locator.LogOut.log_out_button).click()
        return
    }
}