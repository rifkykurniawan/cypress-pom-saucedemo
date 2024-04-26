const locator = require('../../pageobject/pageElements/Locator.json')
export class loginPageElements {
    username(username_data){
        cy.get(locator.LoginPage.username_text).type(username_data)
        return
    }
    password(password_data){
        cy.get(locator.LoginPage.password_text).type(password_data)
        return
    }
    loginButton(){
        cy.get(locator.LoginPage.login_button).click() 
    }
    verifyLogin(){
        cy.get(locator.HomePage.homepage_title).should('be.visible')
    }
    verifyFailedLogin(){
        cy.get(locator.LoginPage.error_message).should('be.visible')
    }
    verifyLoginPage(){
        cy.get(locator.LoginPage.username_text).should('be.visible')
        cy.get(locator.LoginPage.password_text).should('be.visible')
    }
    
}