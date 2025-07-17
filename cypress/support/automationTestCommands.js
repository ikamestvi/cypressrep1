Cypress.Commands.add('loginAuto', (email, password) => { 
    cy.visit('https://automationteststore.com')
    cy.get('#customer_menu_top > li > a').click()

    cy.get('[name="loginname"]').clear().type("ika_ika")
    cy.get('[name="password"]').clear().type('12345678ffrr')
    cy.get('#loginFrm > fieldset > .btn').click()
    //
 })