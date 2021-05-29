describe('Artigos', () => {
    before(() => {
        cy.request({
             method:"POST"
            ,url: "https://conduit.productionready.io/api/users/login"
            ,body: { "user": { "password": "novasenha", "email": "aladim@mail.com" } }
            , headers:{'accept':'application/json','content-type':'application/json'}

        })
        .then(response =>{
            localStorage.setItem('token',response.body.user.token)
            cy.log(response.body.user.token)
        })
    })
    it("criar um novo artigo", () => {
        const user = "aladim@mail.com"
        const password = "novasenha"
        cy.visit("https://purescript-react-realworld.netlify.app/")

      
        cy.get(".nav-link[href='/editor']")
            .click()
        cy.get("input[placeholder='Article title']")
            .clear()
            .type("Artigo do Aladin")
        cy.get("input[placeholder='What is this article about?']")
            .clear()
            .type("Artigo sobre a vida do personagem Aladin")
        cy.get("textarea")
            .clear()
            .type("Este artigo é relacionado a um dos contos mais antigos de Agraba")
        cy.get("input[placeholder='Enter tags']")
            .clear()
            .type("Aladin")
        cy.get("button")
            .contains("Publish article")
            .click()
        cy.get(".banner h1").should("contain.text", "Artigo do Aladin")
    })
});