
describe('SauceDemo Users', () => {

  it('Standard User', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
    cy.url().should('include', 'inventory');
    cy.get('.title').should('have.text', 'Products');
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('.shopping_cart_badge').should('have.text', '1');
    cy.get('.shopping_cart_link').click();
    cy.contains('Sauce Labs Backpack').should('exist');
    cy.get('[data-test="checkout"]').click();
    cy.get('[data-test="firstName"]').type('Ajoke');
    cy.get('[data-test="lastName"]').type('Saidat');
    cy.get('[data-test="postalCode"]').type('1000234');
    cy.get('[data-test="continue"]').click();
    cy.get('[data-test="finish"]').click();
    cy.contains('Thank you for your order!').should('be.visible');
  });

  it('Locked Out User', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('#user-name').type('locked_out_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
    cy.get('[data-test="error"]').should('contain', 'locked out');
  });

  it('Problem User', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('.input_error').eq(0).type('problem_user');
    cy.get('.input_error').eq(1).type('secret_sauce');
    cy.get('.submit-button').click();
    cy.url().should('include', 'inventory');
    cy.get('.title').should('have.text', 'Products');
  });

  it('Performance Glitch User', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('#user-name').type('performance_glitch_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
    cy.url().should('include', 'inventory');
    cy.get('.title').should('have.text', 'Products');
  });

  it('Error User', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('[data-test="username"]').type('error_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
    cy.url().should('include', 'inventory');
    cy.get('.title').should('have.text', 'Products');
  });

  it('Visual User', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('.input_error').eq(0).type('visual_user');
    cy.get('.input_error').eq(1).type('secret_sauce');
    cy.get('.submit-button').click();
    cy.url().should('include', 'inventory');
    cy.get('.title').should('have.text', 'Products');
  });

});