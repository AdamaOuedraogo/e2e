/// <reference types="cypress"/>

describe('google search', () => {
    it('should work', () => {
      cy.visit('http://www.google.com');
    });
  });
  