describe('test  du login',()=>{

    it('afficher la page de login',()=>{
       cy.visit("https://id.atlassian.com/login");
       cy.get('#username').clear();
       cy.get('#username').type('aouedraogo@nehemiecreation.com')
       cy.get('#login-submit').click()
       cy.get('#password').clear();
       cy.get('#password').type('adama7484')
       cy.get('#login-submit').click()
       cy.get('.sc-gqjmRU > :nth-child(1)').should('have.text','Your products')

       
    })

} )