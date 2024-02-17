describe('alerts demo',()=>{
    it.skip('javascript alert',()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onClick='jsAlert()']").click()
        cy.on('window:alert',(t)=>{
            expect(t).to.contains("I am a JS Alert")
        })

    })
    it.skip('javascript confirm alert',()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onClick='jsConfirm()']").click()
        cy.on('window:confirm',(t)=>{
            expect(t).to.contains("I am a JS Confirm")
        })
        cy.get("#result").should('have.text',"You clicked: Ok")
    })

    it.skip('javascript confirm alert: cancel',()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onClick='jsConfirm()']").click()
        cy.on('window:confirm',(t)=>{
            expect(t).to.contains("I am a JS Confirm")
        })
        cy.on('window:confirm',()=>false)
        cy.get("#result").should('have.text',"You clicked: Cancel")
    })

    it.skip('javascript alert with input textbox',()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.window().then((win)=>{
            cy.stub(win,'prompt').returns("welcome")
        })
        cy.get("button[onClick='jsPrompt()']").click()
        
        cy.get("#result").should('have.text',"You entered: welcome")
    })

    it.only('autheniticated alert',()=>{
        cy.visit("https://the-internet.herokuapp.com/basic_auth",{auth:{
            username:"admin",
            password:"admin"
        }

        })
        cy.xpath("//div[@class='example']/p").should('have.text',"Congratulations! You must have the proper credentials.")
        
    })
})