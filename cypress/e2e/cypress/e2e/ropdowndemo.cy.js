describe('dropdown demo',()=>{
    // it('drop down',()=>{
    //     cy.visit("https://testautomationpractice.blogspot.com/")
    //     cy.get("#country").select("Canada").should('have.value','Canada')
    // })

    // it('drop down without select',()=>{
    //     cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
    //     cy.get("#select2-billing_country-container").click()
    //     cy.get("input[role='combobox']").type("Japan").type("{enter}")
    //     cy.get("#select2-billing_country-container").should('have.text','Japan')


    // })

    // it('auto suggested drop down',()=>{
    //     cy.visit("https://www.wikipedia.org/")
    //     cy.get("#search-input").type("Delhi")
    //     cy.xpath("//div[@class='suggestions-dropdown']/a").contains("Delhi University")
    //     .click()

    // })

    it('google dropdown',()=>{
        cy.visit("https://www.google.com/")
        cy.get("textarea[name='q']").type("cypress automation ")
        cy.wait(3000)
        cy.xpath("//div[@class='OBMEnb']/ul/li").each(($el, index, $list)=>{
            if($el.text()=='cypress automation interview questions'){
                cy.wrap($el).click()
            }

        })

    })
})