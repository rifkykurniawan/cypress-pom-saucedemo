import { loginPageElements } from "../../pageobject/pageActions/LoginPage";
const Login_Elements = new loginPageElements

describe('Login', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/v1/')
    });
    it('Verify login page components', function(){
        Login_Elements.verifyLoginPage()
    });
    it('Verify user success login', function(){
        Login_Elements.username('standard_user')
        Login_Elements.password('secret_sauce')
        Login_Elements.loginButton()
        Login_Elements.verifyLogin()
    });
    it('Verify login with invalid username',function(){
        Login_Elements.username('standard')
        Login_Elements.password('secret_sauce')
        Login_Elements.loginButton()
        Login_Elements.verifyFailedLogin()
    });
    it('Verify login with invalid password',function() {
        Login_Elements.username('standard_user')
        Login_Elements.password('secret')
        Login_Elements.loginButton()
        Login_Elements.verifyFailedLogin()
    });
    it('Verify login with empty username and password',function(){
        Login_Elements.username('{backspace}')
        Login_Elements.password('{backspace}')
        Login_Elements.loginButton()
        Login_Elements.verifyFailedLogin()
    });
    it('Verify login with locked account', () => {
        Login_Elements.username('locked_out_user')
        Login_Elements.password('secret_user')
        Login_Elements.loginButton()
        Login_Elements.verifyFailedLogin()
    });
});