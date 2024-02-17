describe('handling tabs',()=>{
    it('tabs',()=>{
        cy.visit("https://the-internet.herokuapp.com/windows")

        //to remove the attribute: new tab will also open in parent window.
        cy.get(".example>a").click().invoke('removeAttr','target').click()
        cy.url().should('include',"https://the-internet.herokuapp.com/windows/new")
        cy.wait(3000)
        cy.go('back')


    })
})