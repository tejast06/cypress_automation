
import 'cypress-iframe'
describe('handling frames',()=>{
    it('approach 1',()=>{
        cy.visit("https://the-internet.herokuapp.com/iframe")
        let iframe = cy.get("#mce_0_ifr")
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap)

        iframe.clear().type("jhjhjhj {cmd+a}")
        cy.get("button[aria-label='Bold']").click()

    })

    it.only('approach 3- cypress plugins',()=>{
        cy.visit("https://the-internet.herokuapp.com/iframe")
        cy.frameLoaded('#mce_0_ifr')
        cy.iframe('#mce_0_ifr').clear().type("uiuiuiu")

        

    })
})