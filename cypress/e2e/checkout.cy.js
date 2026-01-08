describe('Checkout flow - SauceDemo', () => {

  beforeEach(() => {
    cy.visit('/');
    cy.login();
  });

  it('Should complete purchase successfully', () => {
    cy.contains('Add to cart').first().click();
    cy.get('.shopping_cart_link').click();

    cy.contains('Checkout').click();

    cy.get('[data-test="firstName"]').type('Ian');
    cy.get('[data-test="lastName"]').type('Arvizu');
    cy.get('[data-test="postalCode"]').type('23000');
    cy.get('[data-test="continue"]').click();

    cy.contains('Finish').click();

    cy.contains('Thank you for your order').should('be.visible');
  });

});
