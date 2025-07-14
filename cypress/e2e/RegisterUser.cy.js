
describe('Register user', () => {
  beforeEach(() => {
    //1.Launch browser and 2.Navigate to url 'http://automationexercise.com'
    cy.visit('http://automationexercise.com')
  })



  let name="koko4444";


  it('register', () => {
    //3. Verify that home page is visible successfully
    cy.get('body').should('be.visible')

    //4. Click on 'Signup / Login' button & 5.Verify 'New User Signup!' is visible
    cy.get('a[href="/login"]').click()
    cy.get('body').should('be.visible')


    //6. Enter name and email address & 7. Click 'Signup' button
    cy.get('[data-qa="signup-name"]').type(name)
    cy.get('[data-qa="signup-email"]').type('koko4444@bhh')
    cy.get('[data-qa="signup-button"]').click()


    //8. Verify that 'ENTER ACCOUNT INFORMATION' is visible
    cy.get('h2.title.text-center').should('contain', 'Enter Account Information')


    //9. Fill details: Title, Name, Email, Password, Date of birth
    cy.get('[id=id_gender1]').check()
    

    //ქვედა ორი ველი უკვე შევსებული გვხვდება ამიტომ ჩაკომენტარებულად ჩავწერე
    //cy.get('[data-qa="name"]').type(name)
    //cy.get('[data-qa="email"]').should('not.be.disabled').type('ika@gmail')   
    cy.get('[data-qa="password"]').type('ika')

    cy.get('select#days').select('14')
    cy.get('select#months').select('7')
    cy.get('select#years').select('1995')



    //10. Select checkbox 'Sign up for our newsletter!'
    cy.get('#newsletter').check()


    //11. Select checkbox 'Receive special offers from our partners!'
    cy.get('#optin').check()



    //12. Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
    cy.get('[data-qa="first_name"]').type('ikk')   
    cy.get('[data-qa="last_name"]').type('mstv')
    cy.get('[data-qa="company"]').type('ccc')
    cy.get('[data-qa="address"]').type('tbl str')
    cy.get('[data-qa="address2"]').type('tbl2 str')
    cy.get('select#country').select('Canada')
    cy.get('[data-qa="state"]').type('state')
    cy.get('[data-qa="city"]').type('tbilisi')
    cy.get('[data-qa="zipcode"]').type('0001')
    cy.get('[data-qa="mobile_number"]').type('1234567')



    //13. Click 'Create Account button'
    cy.get('[data-qa="create-account"]').click()



    //14. Verify that 'ACCOUNT CREATED!' is visible
    cy.get('[data-qa="account-created"]').should('be.visible')


    //15. Click 'Continue' button
    cy.get('[data-qa="continue-button"]').click()

    

    //16. Verify that 'Logged in as username' is visible
    //ქვევით იუზერნეიმი რატომღაც ჯდება ორჯერ ზედიზედ
    cy.get('.shop-menu').contains('Logged in as '+name).should('be.visible')


    //17. Click 'Delete Account' button
    cy.get('a[href="/delete_account"]').click()


    //18. Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
    cy.get('[data-qa="account-deleted"]').should('be.visible')
    cy.get('[data-qa="continue-button"]').click()
  })
})
