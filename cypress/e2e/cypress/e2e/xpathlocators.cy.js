describe('xpath',()=>{
    it('find number of links',()=>{
        cy.visit("https://www.guru99.com/")

        //to validate the number of links
        cy.xpath("//div[@class='featured-box cloumnsize1']/ul/li").
        should('have.length',29)

        

    })
})