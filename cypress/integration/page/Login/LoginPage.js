class LoginPage {
    
    visit() {
      cy.visit('/login');
    }
  
    get username() {
      return cy.get(`#${Ids.username}`);
    }
  }