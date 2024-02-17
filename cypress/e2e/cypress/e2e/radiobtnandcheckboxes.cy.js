describe('UI elements',()=>{
    it('radiobuttons',()=>{
        cy.visit("https://testautomationpractice.blogspot.com/")
        //validate that radiobtns are display
        cy.get("#male").should('be.visible')
        cy.get('#female').should('be.visible')

        cy.get("#male").check().should('be.checked')
        cy.get("#female").should('not.be.checked')

        //
    })

    it('checkboxes',()=>{
        cy.visit("https://testautomationpractice.blogspot.com/")
        // cy.get("#sunday").should('be.visible')
        // cy.get("#monday").should('be.visible')
        // cy.get("#sunday").check().should('be.checked')
        // cy.xpath("//div[@class='form-check form-check-inline']/following::input[@type='checkbox']").check().
        // should('be.checked')
        cy.xpath("//div[@class='form-check form-check-inline']/following::input[@type='checkbox']").
        first().check()
        cy.xpath("//div[@class='form-check form-check-inline']/following::input[@type='checkbox']").
        last().check()


    })
})