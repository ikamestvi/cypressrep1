
describe('Register existing user', () => {
  beforeEach(() => {
    //1.Launch browser and 2.Navigate to url 'http://automationexercise.com'
    cy.visit('http://automationexercise.com')
  })



    let name="btttrrr"
    let email="btttrrr@gmm";


  it('Register existing user', () => {
    //3. Verify that home page is visible successfully
    cy.get('body').should('be.visible')

    //4. Click on 'Signup / Login' button & 5.Verify 'New User Signup!' is visible
    cy.get('a[href="/login"]').click()
    cy.get('body').should('be.visible')


    //6. Enter name and email address & 7. Click 'Signup' button
    cy.get('[data-qa="signup-name"]').type(name)
    cy.get('[data-qa="signup-email"]').type(email)
    cy.get('[data-qa="signup-button"]').click()


    //8. Verify error 'Email Address already exist!' is visible
    cy.get('p[style="color: red;"]').contains('Email Address already exist!').should('be.visible')


  })
})
