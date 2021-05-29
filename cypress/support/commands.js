Cypress.Commands.add('Login',()=>{

 
    cy.log(Cypress.env('apiUrl'))
    cy.log(Cypress.env('user').email)
    cy.log(Cypress.env('user').password)
    cy.request({
        method:"POST"
       ,url:`${Cypress.env('apiUrl')}/users/login`
       ,body: { "user": { 
           "password": `${Cypress.env('user').email}`,
            "email": `${Cypress.env('user').password}` } }
       , headers:{'accept':'application/json','content-type':'application/json'}

   })
   .then(response =>{
       localStorage.setItem('token',response.body.user.token)
   })
})