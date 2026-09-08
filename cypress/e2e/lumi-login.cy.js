import { faker } from '@faker-js/faker'

describe('Lumi Login', () => {
    let env
    beforeEach(() => {
        cy.env([
            'urlbase',
            'email_novo',
            'email_novo2',
            'email_novo3',
            'email_cadastrado',
            'email_invalido',
            'email_padrao',
            'senha_padrao',
            'senha_menor8',
            'senha_invalida',
            'nome_padrao'
        ]).then((values) => {
            env = values
            cy.visit(env.urlbase)
        })
    })
    context('Cenarios Criar conta', () => {
         it(' com sucesso', () => {

            const email = `teste${Date.now()}@gmail.com`
            

            cy.get('.hidden.gap-3 > .bg-brand').click()
            cy.url().should('eq', env.urlbase + 'cadastrar')
            cy.get('[name="full_name"]').type(env.nome_padrao)
            cy.get('[name="email"]').type(email)
            cy.get('[name="password"]').type(env.senha_padrao)
            cy.get('.inline-flex').click()
            cy.url().should('eq', env.urlbase + 'assinatura')
     })
         it(' com email invalido', () => {
    

        cy.get('.hidden.gap-3 > .bg-brand').click()
        cy.url().should('eq', env.urlbase + 'cadastrar')
        cy.get('[name="full_name"]').type(env.nome_padrao)
        cy.get('[name="email"]').type(env.email_invalido)
        cy.get('[name="password"]').type(env.senha_padrao)
        cy.get('.inline-flex').click()
        cy.contains('Informe um e-mail válido.').should('be.visible')
                  
     })
    it(' sem nome', () => {
        const email2 = faker.internet.email()
        
        cy.get('.hidden.gap-3 > .bg-brand').click()
        cy.url().should('eq', env.urlbase + 'cadastrar')
        cy.get('[name="email"]').type(email2)
        cy.get('[name="password"]').type(env.senha_padrao)
        cy.get('.inline-flex').click()
        cy.contains('Informe seu nome completo.').should('be.visible')
    })
    it(' com senha menor que 8 caracteres', () => {
        cy.get('.hidden.gap-3 > .bg-brand').click()
        cy.url().should('eq', env.urlbase + 'cadastrar')
        cy.get('[name="full_name"]').type(env.nome_padrao)
        cy.get('[name="email"]').type(env.email_novo2)
        cy.get('[name="password"]').type(env.senha_menor8)
        cy.get('.inline-flex').click()
        cy.contains('A senha precisa ter ao menos 8 caracteres.').should('be.visible')
        cy.get('[name="password"]').clear()
        cy.get('.inline-flex').click()
        cy.contains('A senha precisa ter ao menos 8 caracteres.').should('be.visible')
    })
    it(' com email ja cadastrado', () => {
        cy.get('.hidden.gap-3 > .bg-brand').click()
        cy.url().should('eq', env.urlbase + 'cadastrar')
        cy.get('[name="full_name"]').type(env.nome_padrao)
        cy.get('[name="email"]').type(env.email_cadastrado)
        cy.get('[name="password"]').type(env.senha_padrao)
        cy.get('.inline-flex').click()
        cy.contains('Este e-mail já está cadastrado.').should('be.visible')
    })
 })
    
    context('Cenarios Login', () => {
        it('Login com email invalido', () => {
            cy.get('.hidden.gap-3 > .text-white').click()
            cy.url().should('eq', env.urlbase + 'entrar')
            cy.get('[name="email"]').type(env.email_invalido)
            cy.get('[name="password"]').type(env.senha_padrao)
            cy.get('.inline-flex').click()
            cy.contains('Informe um e-mail válido.').should('be.visible')           
        })
        it('Login com senha invalida', () => {
            cy.get('.hidden.gap-3 > .text-white').click()
            cy.url().should('eq', env.urlbase + 'entrar')
            cy.get('[name="email"]').type(env.email_padrao)
            cy.get('[name="password"]').type(env.senha_invalida)
            cy.get('.inline-flex').click()
            cy.contains('E-mail ou senha incorretos.').should('be.visible')
        })
        it('Login com senha menor que 8 caracteres', () => {
            cy.get('.hidden.gap-3 > .text-white').click()
            cy.url().should('eq', env.urlbase + 'entrar')
            cy.get('[name="email"]').type(env.email_padrao)
            cy.get('[name="password"]').type(env.senha_menor8)
            cy.get('.inline-flex').click()
            cy.contains('A senha precisa ter ao menos 8 caracteres.').should('be.visible')
            cy.get('[name="password"]').clear()
            cy.get('.inline-flex').click()
            cy.contains('A senha precisa ter ao menos 8 caracteres.').should('be.visible')
        })
        it('Login com sucesso', () => {
            cy.get('.hidden.gap-3 > .text-white').click()
            cy.url().should('eq', env.urlbase + 'entrar')
            cy.get('[name="email"]').type(env.email_padrao)
            cy.get('[name="password"]').type(env.senha_padrao)
            cy.get('.inline-flex').click()
            cy.url().should('eq', env.urlbase + 'assinatura')
        })
    })
})
