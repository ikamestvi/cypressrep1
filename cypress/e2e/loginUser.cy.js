
describe('Login User', () => {
  beforeEach(() => {
    //1.Launch browser and 2.Navigate to url 'http://automationexercise.com'
    cy.visit('http://automationexercise.com')
  })


  //ჯერ უნდა შეიქმნას პროფაილი ყოველ ჯერზე შლის 
    let name="btttrrr"
    let email="btttrrr@gmm";
    let password="12345678ff";
   


  it('login user', () => {
    //3. Verify that home page is visible successfully
    cy.get('body').should('be.visible')

    
    //4. Click on 'Signup / Login' button
    cy.get('a[href="/login"]').click()


    //5. Verify 'Login to your account' is visible
    cy.contains('h2', 'Login to your account').should('be.visible')


    //6. Enter correct email address and password
    cy.get('[data-qa="login-email"]').type(email)
    cy.get('[data-qa="login-password"]').type(password)

    
    //7. Click 'login' button
    cy.get('[data-qa="login-button"]').click()


    //8. Verify that 'Logged in as username' is visible
    cy.get('.shop-menu').contains('Logged in as '+name).should('be.visible')


    //9. Click 'Delete Account' button
    cy.get('a[href="/delete_account"]').click()


    //10.10. Verify that 'ACCOUNT DELETED!' is visible
    cy.get('[data-qa="account-deleted"]').should('be.visible')
  })
})
