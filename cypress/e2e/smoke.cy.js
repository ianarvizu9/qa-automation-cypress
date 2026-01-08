describe('Smoke tests - SauceDemo', () => {

  it('Home page loads correctly', () => {
    cy.visit('/');
    cy.get('[data-test="login-button"]').should('be.visible');
  });

});
