/// <reference types="cypress"/>

import {Given,And, Then} from 'cypress-cucumber-preprocessor/steps';


Given(`I visit jira login page`,()=>{
  cy.visit('https://id.atlassian.com/login');

})

When(`I set {string}`,(email)=>{
  //cy.get('#username').clear();
  cy.get('#username').type(email)

})

When(`I click on next`,()=>{
  cy.get('#login-submit').click()

})

When(`I set The {string}`,(password)=>{
  //cy.get('#password').clear();
  cy.get('#password').type(password,{log:false});
})
When(`I click on login`,()=>{

  cy.get('#login-submit').click()

})
Then(`User Logged in`,()=>{
cy.get('.sc-gqjmRU > :nth-child(1)').should('have.text','Your products')
})


      
