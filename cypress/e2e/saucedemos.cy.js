describe('SauceDemo Automation', () => {

  it('Login with invalid credentials', () => {

    cy.visit('https://www.saucedemo.com/')

    cy.get('[data-test="username"]').type('wronguser')
    cy.get('[data-test="password"]').type('wrongpassword')
    cy.get('[data-test="login-button"]').click()

    cy.get('[data-test="error"]').should('be.visible')

  })

  it('Login with valid credentials', () => {
     cy.login()

    cy.url().should('include', 'inventory')

  })

  it('Filter products from A-Z', () => {
    cy.login()

   

  cy.get('[data-test="product-sort-container"]')
      .select('Name (A to Z)')

    cy.get('[data-test="product-sort-container"]')
      .should('have.value', 'az')

  })

  it('Filter products from Low to High', () => {

    cy.login()

    cy.get('[data-test="product-sort-container"]')
      .select('Price (low to high)')

    cy.get('[data-test="product-sort-container"]')
      .should('have.value', 'lohi')

  })

  it('Add 4 products and remove 2 products', () => {

    cy.login()

    // Add 4 products
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click()

    // Verify 4 items
    cy.get('[data-test="shopping-cart-badge"]')
      .should('have.text', '4')

    // Remove 2 products
    cy.get('[data-test="remove-sauce-labs-backpack"]').click()
    cy.get('[data-test="remove-sauce-labs-bike-light"]').click()

    // Verify 2 items remain
    cy.get('[data-test="shopping-cart-badge"]')
      .should('have.text', '2')

  })

})

it('Proceed to checkout and complete checkout', () => {

    cy.login()

  // Add products
  cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
  cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()

  // Open cart
  cy.get('[data-test="shopping-cart-link"]').click()

  // Proceed to checkout
  cy.get('[data-test="checkout"]').click()

  // Fill checkout information
  cy.get('[data-test="firstName"]').type('Ajoke')
  cy.get('[data-test="lastName"]').type('Saidat')
  cy.get('[data-test="postalCode"]').type('100001')

  cy.get('[data-test="continue"]').click()

  // Finish checkout
  cy.get('[data-test="finish"]').click()

  // Verify success message
  cy.get('[data-test="complete-header"]')
    .should('contain', 'Thank you for your order!')

})