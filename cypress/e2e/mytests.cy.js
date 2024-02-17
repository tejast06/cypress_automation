

describe('sample test',()=>{
  it('test1-positive',()=>{
    cy.visit("https://opensource-demo.orangehrmlive.com/")
    cy.title().should('eq','OrangeHRM')
  })
  it('test1-negative',()=>{
    cy.visit("https://opensource-demo.orangehrmlive.com/")
    cy.title().should('eq','OrangeH')
    
  })
})