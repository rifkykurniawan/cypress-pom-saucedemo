import { loginPageElements } from "../../pageobject/pageActions/LoginPage";
import { LogoutPage } from "../../pageobject/pageActions/LogoutPage";
const Login_Elements = new loginPageElements
const LogOut_Elements = new LogoutPage

describe('Log Out', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/v1/')
        Login_Elements.username('standard_user')
        Login_Elements.password('secret_sauce')
        Login_Elements.loginButton()
        Login_Elements.verifyLogin()
    });
    it('Verify success log out', () => {
        LogOut_Elements.clickBurgerButton()
        LogOut_Elements.clickLogOutButton()
    });
});