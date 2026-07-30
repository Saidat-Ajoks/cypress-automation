describe('SauceDemo Automation', () => {
  it('completes the entire user journey', () => {
    // 1. Invalid Login
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type('wronguser')
    cy.get('[data-test="password"]').type('wrongpassword')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]').should('be.visible')

    // 2. Clear page & Valid Login
    cy.visit('https://www.saucedemo.com/')
    cy.login()
    cy.url().should('include', 'inventory')

    // 3. Sort Filter (FIXED HERE)
    cy.get('[data-test="product-sort-container"]').select('az')
    cy.get('[data-test="product-sort-container"]').should('have.value', 'az')

    cy.get('[data-test="product-sort-container"]').select('lohi')
    cy.get('[data-test="product-sort-container"]').should('have.value', 'lohi')

    // 4. Cart Operations
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click()
    cy.get('[data-test="shopping-cart-badge"]').should('have.text', '4')

    cy.get('[data-test="remove-sauce-labs-backpack"]').click()
    cy.get('[data-test="remove-sauce-labs-bike-light"]').click()
    cy.get('[data-test="shopping-cart-badge"]').should('have.text', '2')

    // 5. Checkout
    cy.get('[data-test="shopping-cart-link"]').click()
    cy.get('[data-test="checkout"]').click()
    cy.get('[data-test="firstName"]').type('Ajoke')
    cy.get('[data-test="lastName"]').type('Saidat')
    cy.get('[data-test="postalCode"]').type('100001')
    cy.get('[data-test="continue"]').click()
    cy.get('[data-test="finish"]').click()
    cy.get('[data-test="complete-header"]').should('contain', 'Thank you for your order!')
  })
})