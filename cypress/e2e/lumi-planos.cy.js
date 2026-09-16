describe('Lumi Planos', () => {
    let urlbase
    beforeEach(() => {
        cy.env(['urlbase', 'login']).then(({urlbase: base, login}) => {
            urlbase = base
        cy.visit(urlbase);
        cy.get('.hidden.gap-3 > .text-white').click()
            cy.url().should('eq', urlbase + 'entrar')
            cy.get('[name="email"]').type(login.username)
            cy.get('[name="password"]').type(login.password)
            cy.get('.inline-flex').click()
            cy.url().should('eq', urlbase + 'assinatura')
        })
    })
    context('Cenario acessar planos mensais', () => {
        beforeEach(() => {
            cy.get('.w-10').click()
            cy.url().should('eq', urlbase)
        
            
        })
        it('Acessar planos', () => {
            cy.contains('Planos').click()
            cy.url().should('eq', urlbase + 'precos')
            cy.contains('p', 'R$ 109,90').should('be.visible')
            cy.contains('p', 'R$ 127,90').should('be.visible')
            cy.contains('p', 'R$ 249,90').should('be.visible')
            })
        it('Acessar plano mensal 1', () => {
            cy.contains('Planos').click()
            cy.get('.mt-12 > :nth-child(1) > .inline-flex').click()
            cy.url().should('include', 'https://checkout.stripe.com')
            
        })
        it('Acessar plano mensal 2', () => {
            cy.contains('Planos').click()
            cy.get('.bg-gradient-to-br > .justify-center').click()
            cy.url().should('include', 'https://checkout.stripe.com')
        })
        it('Acessar plano mensal 3', () => {
            cy.contains('Planos').click()
            cy.get('.mt-12 > :nth-child(3) > .inline-flex').click()
            cy.url().should('include', 'https://checkout.stripe.com')

        })
    context('Cenario acessar planos anuais', () => {
        beforeEach(() => { 
            cy.contains('Planos').click()
            cy.url().should('eq', urlbase + 'precos')
            cy.contains('button', 'Anual' ).click()
            cy.contains('p', 'R$ 1.099,00').should('be.visible')
            cy.contains('p', 'R$ 1.279,00').should('be.visible')
            cy.contains('p', 'R$ 2.499,00').should('be.visible')
            cy.contains('No plano anual você paga 10 meses e leva 12.').should('be.visible')
        })
        it('Acessar plano anual 1', () => {
            cy.get('.mt-12 > :nth-child(1) > .inline-flex').click()
            cy.url().should('include', 'https://checkout.stripe.com')
        })
        it('Acessar plano anual 2', () => {
            cy.get('.bg-gradient-to-br > .justify-center').click()
            cy.url().should('include', 'https://checkout.stripe.com')
        })
        it('Acessar plano anual 3', () => {
            cy.get('.mt-12 > :nth-child(3) > .inline-flex').click()
            cy.url().should('include', 'https://checkout.stripe.com')

        })
    })
    })
})