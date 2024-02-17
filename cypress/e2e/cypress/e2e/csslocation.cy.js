describe('css locators',()=>{
    it('css',()=>{
        cy.visit("https://www.guru99.com/")
        cy.get("a[title='Software Testing']").click()
        cy.title().should('eq','Software Testing Tutorial')
    })
    it('css',()=>{
        cy.visit("https://www.guru99.com/")
        cy.get("a[title='SAP Beginner']").click()
        cy.title().should('eq','SAP tutorials for Beginners - Guru99')
        })
})