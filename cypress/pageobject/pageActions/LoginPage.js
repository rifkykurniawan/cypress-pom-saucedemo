const loginElementLocators = require('../../pageObject/pageElements/LoginPageElements.json')
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
        cy.get('.header_secondary_container').should('be.visible')
    }
}