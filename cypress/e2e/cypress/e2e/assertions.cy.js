import { expect } from "chai"

describe('assertions',()=>{
    it('implicit assertion',()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.url().should('include','orangehrmlive.com')
        cy.url().should('contain','/auth/login')
        cy.url().should('not.contain','xpath')

        cy.title().should('include','Orange')
        .and('eq','OrangeHRM')

        cy.xpath("//img[@alt='company-branding']").should('be.visible')

        cy.xpath("//input[@name='username']").should('have.value','Admin')
        
    })

    it('explicit assertions',()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get("input[name='username']").type("Admin")
        cy.get("input[name='password']").type("admin123")
        cy.get("button[type='submit']").click()
        let expName = "xyz"
        cy.get(".oxd-userdropdown-tab").then(   (x)=>{
            let actualName = x.text()

            //bdd assertions
            expect(actualName).to.equal(expName)

            //tdd assertions
            assert.equal(actualName,expName)

        })
        
    })
})