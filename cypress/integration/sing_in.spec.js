/// <reference types="cypress"/> ///   

describe('Login', () => {
    it("efetuar login com usuário e senha",()=>{
        const user= Cypress.env('user').email
        const password =Cypress.env('user').password
        cy.visit("/")
        
        cy.get("[href='/login']")
        .click()

        cy.get("input[type='email']")
        .type(user)

        cy.get("input[type='password']")
        .type(password)
        cy.get(".page button[type='button']")
        .contains("Sign in")
        .click()
        cy.get(".feed-toggle .nav-link.active")
        .should("contain.text","Your Feed") 
    })
});