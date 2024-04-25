import { loginPageElements } from "../../../PageObject/PageActions/LoginPage";

const Login_Elements = new loginPageElements
describe('POM test suite', () => {
    before(() => {
        cy.visit('https://www.saucedemo.com/v1/')
    });
    
    it('Login Page', function(){
        Login_Elements.username('standard_user')
        Login_Elements.password('secret_sauce')
        Login_Elements.loginButton()
        Login_Elements.verifyLogin()
    });
});