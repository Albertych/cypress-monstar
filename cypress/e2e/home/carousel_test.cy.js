import mainPage from '../../support/pageObjects/mainPage'
import 'cypress-soft-assertions'

/// <reference types="cypress" />

describe("Open home page and check carousels", () => {
    
    it("Should be able to scroll to the carousel and display 15 product items", () => {
        
        const mainObj = new mainPage();
        
        mainObj.elements.openPage()
        
        cy.get('div[data-testid="cms-carousel-background"]').each(($el) => {

            cy.wrap($el).scrollIntoView

            cy.wrap($el).find('article[data-scroll-id]').better('have.length', 15)

        })


    })

})  