//მომხმარებლის დეტალებს შეცვლა -   Edit account details
//+ შეამოწმეთ რომ შენახვის შემდეგ ცვლილებები აისახა.
//არსებული მისამართის შეცვლა ან ახალი მისამართის დამატება
//პაროლის შეცვლა



describe('Login Incorrect User', () => {
  beforeEach(() => {
    cy.loginAuto()
  })
   

  let fName="ika11";
  let lName="irakli11"
  let eMail="ika11@gmail.com"
  let tele="444555"
  let fax="fax111"
  let addr='misamarti 1'
  let curPassWord='12345678ffrr'
  let newPassWord='paroli123'


  //პაროლები ყოველი მცდელობისას უნდა შეიცვალოს არსებულიდან ახალზე
  //paroli123
  //12345678ffrr
  //



  it('edit account details', () => {

    //edit account & detail button click
    cy.get('ul.side_account_list > li').eq(2).click()


    //edit details 
    cy.get('[name="firstname"]').clear().type(fName)
    cy.get('[name="lastname"]').clear().type(lName)
    cy.get('#AccountFrm_email').clear().type(eMail)
    cy.get('[name="telephone"]').clear().type(tele)
    cy.get('[name="fax"]').clear().type(fax)
    cy.get('.col-md-12 > .btn-orange').click()


    //zemoT weria es metodebi 
    cy.get('#customer_menu_top > li > a').click()
    cy.get('ul.side_account_list > li').eq(2).click()
    


    //შედარების მეთოდი მგონია რო შეიძლება გაკეთდეს 
    cy.get('#AccountFrm_firstname').should('have.value', fName)
    cy.get('#AccountFrm_lastname').should('have.value', lName)
    cy.get('#AccountFrm_email').should('have.value', eMail)
    cy.get('#AccountFrm_telephone').should('have.value', tele)
    cy.get('#AccountFrm_fax').should('have.value', fax)
  })




  it('change address', () => {
    cy.get('ul.side_account_list > li').eq(4).click()
    cy.get('tr > .pull-right > .btn').click()
    cy.get('#AddressFrm_address_1').clear().type(addr)
    cy.get('#AddressFrm_address_2').clear().type(addr)
    cy.get('.col-md-12 > .btn-orange').click()


    //check if change is succesfully
    cy.get('tr > .pull-right > .btn').click()
    cy.get('#AddressFrm_address_1').should('have.value', addr)
    cy.get('#AddressFrm_address_2').should('have.value', addr)
  })




  it('change password', () => {
    cy.get('ul.side_account_list > li').eq(3).click()
    cy.get('#PasswordFrm_current_password').clear().type(curPassWord)
    cy.get('#PasswordFrm_password').clear().type(newPassWord)
    cy.get('#PasswordFrm_confirm').clear().type(newPassWord)
    cy.get('.col-md-12 > .btn-orange').click()
    cy.get('.alert').should('be.visible')
  })
})
