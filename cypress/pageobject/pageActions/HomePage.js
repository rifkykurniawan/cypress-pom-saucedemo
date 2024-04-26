const locator = require('../../pageobject/pageElements/Locator.json')

export class homePageElements{
    menu_button(){
        cy.get(locator.HomePage.menu_button).click()
    }
    verify_menuButton(){
        cy.get(locator.HomePage.inventory_menu).should('be.visible')
        cy.get(locator.HomePage.about_menu).should('be.visible')
        cy.get(locator.HomePage.logout_menu).should('be.visible')
        cy.get(locator.HomePage.resetAppState_menu).should('be.visible')
    }
    chart_button(){
        cy.get(locator.HomePage.chart_button).click()
        cy.get(locator.ChartPage.checkout_button).should('be.visible')
    }
    verify_homePageCopy(){
        cy.get(locator.HomePage.chart_button).should('be.visible')
        cy.get(locator.HomePage.page_title).should('be.visible')
        cy.get(locator.HomePage.product_sort).should('be.visible')
        cy.get(locator.HomePage.list_product).should('be.visible')
        cy.get(locator.HomePage.productPrice_label).should('be.visible')
        cy.get(locator.HomePage.product_title).should('be.visible')
        cy.get(locator.HomePage.productDescription).should('be.visible')
        cy.get(locator.HomePage.footer).scrollIntoView()        
    }
}