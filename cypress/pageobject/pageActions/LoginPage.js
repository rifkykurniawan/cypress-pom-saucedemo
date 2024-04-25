const loginElementLocators = require('../../pageobject/pageElements/LoginPageElements.json')
export class loginPageElements {
    username(username_data){
        cy.get(loginElementLocators.LoginPageLocator.username_text).type(username_data)
        return
    }
    password(password_data){
        cy.get(loginElementLocators.LoginPageLocator.password_text).type(password_data)
        return
    }
    loginButton(){
        cy.get(loginElementLocators.LoginPageLocator.login_button).click()
        return
    }
    verifyLogin(){
        cy.get(loginElementLocators.HomePageLocator.homepage_title).should('be.visible')
        return
    }
    verifyFailedLogin(){
        cy.get(loginElementLocators.LoginPageLocator.error_message).should('be.visible')
    }
    verifyLoginPage(){
        cy.get(loginElementLocators.LoginPageLocator.username_text).should('be.visible')
        cy.get(loginElementLocators.LoginPageLocator.password_text).should('be.visible')
    }
}