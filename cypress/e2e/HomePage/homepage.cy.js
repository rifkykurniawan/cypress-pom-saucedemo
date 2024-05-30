import { homePageElements } from "../../pageobject/pageActions/HomePage";
import { loginPageElements } from "../../pageobject/pageActions/LoginPage";
const Login_Elements = new loginPageElements
const Homepage_Elements = new homePageElements

describe('Homepage', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/v1/')
        Login_Elements.username('standard_user')
        Login_Elements.password('secret_sauce')
        Login_Elements.loginButton()
        Login_Elements.verifyLogin()
    });
    it('Verify user can click menu button', () => {
        Homepage_Elements.menu_button()
        Homepage_Elements.verify_menuButton()
    });
    it('Verify user can click chart button', () => {
        Homepage_Elements.chart_button()
    });
    it('Verify homepage copy (EN)', () => {
        Homepage_Elements.verify_homePageCopy()
    });
    it('Verify add product to chart', () => {
        Homepage_Elements.addProductToChart()
        Homepage_Elements.chart_button()
        Homepage_Elements.verifyChartData()
    });
    it('Verify remove product from chart', () => {
        
    });
});