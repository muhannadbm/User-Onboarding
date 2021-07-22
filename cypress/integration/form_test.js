describe('Forms App',()=>{
    beforeEach(()=>{
        cy.visit('localhost:3000')
    })
    it('check for Name input', ()=> {
        nameInput().type('Moe BM')
        nameInput().should('have.value','Moe BM')
    })
    it('check for email input',()=>{
        emailInput().type('Moebm@hotmail.com')
    })
    it('check for password input',()=>{
        passwordInput().type('mypassword')
    })
    it('check for users ability to check TOS box',()=>{
        TOSInput().check()
    })
    it('check for user ability to submit data',()=>{
        nameInput().type('123')
        passwordInput().type('12345678')
        emailInput().type('mhd@hotmail.com')
        TOSInput().check()
        submitButton().click()
    })
    it('check form validation',()=> {
        emailInput().type(' ')
        emailInput().blur()
        errors().children().should('have.text','')
    }) 
})




const nameInput = () => cy.get('input[name="name"]')
const emailInput = () => cy.get('input[name="email"]')
const passwordInput = () => cy.get('input[name=password]')
const TOSInput = () => cy.get('input[name="term"]')
const submitButton =() => cy.get('button[id="submit"]')
const errors =() => cy.get('.errors')
