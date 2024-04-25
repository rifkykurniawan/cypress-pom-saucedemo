import { loginPageElements } from "../../pageobject/pageActions/LoginPage";

const Login_Elements = new loginPageElements
describe('Login', () => {
    before(() => {
        cy.visit('https://www.saucedemo.com/v1/')
    });
    
    it('Verify user success login', function(){
        Login_Elements.username('standard_user')
        Login_Elements.password('secret_sauce')
        Login_Elements.loginButton()
        Login_Elements.verifyLogin()
    });
});