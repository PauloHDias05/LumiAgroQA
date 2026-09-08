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
            cy.get(':nth-child(5) > .relative').click()
            cy.url().should('eq', urlbase + 'precos')
            cy.contains('p', 'R$ 109,90').should('be.visible')
            cy.contains('p', 'R$ 127,90').should('be.visible')
            cy.contains('p', 'R$ 249,90').should('be.visible')
            })
        // it('Acessar plano mensal 1', () => {
        //     cy.get('.mt-12 > :nth-child(1) > .inline-flex').click()
        //     cy.url().should('eq', 'https://checkout.stripe.com/c/pay/cs_test_b1YRBsLuHsNWEwTl9S1DTopv2ylfo6OBAcrS9FW9yF2Q9HK1JzXOx5BoHS#fidnandhYHdWcXxpYCc%2FJ2FgY2RwaXEnKSd2cGd2ZndsdXFsamtQa2x0cGBrYHZ2QGtkZ2lgYSc%2FY2RpdmApJ2JwZGZkaGppYFNkd2xka3EnPydmamtxd2ppJyknZHVsTmB8Jz8ndW5acWB2cVowNFAyNEJNV0p0aGRtbWc0VWNnRzxrVk1TcWxdTV1RTkdJfFBiSWM8c09xd281d1VARnZob3VRV2JVPXdkZHZWQUNMf2xScFJBU1U1VTFwZ1NyTk0wU2JVRjU1dU1hRGF1b1wnKSdjd2poVmB3c2B3Jz9xd3BgKSdnZGZuYndqcGthRmppancnPycmY2NjY2NjJyknaWR8anBxUXx1YCc%2FJ2hwaXFsWmxxYGgnKSdga2RnaWBVaWRmYG1qaWFgd3YnP3F3cGB4JSUl')
            
        // })
        // it('Acessar plano mensal 2', () => {
        //     cy.get('.bg-gradient-to-br > .justify-center').click()
        //     cy.url().should('eq', 'https://checkout.stripe.com/c/pay/cs_test_b1noHUkCdeSJ4exjGaMR3dOzDe7l3I2BYo9oUV1xLm3soAaELe1iaPqTMk#fidnandhYHdWcXxpYCc%2FJ2FgY2RwaXEnKSd2cGd2ZndsdXFsamtQa2x0cGBrYHZ2QGtkZ2lgYSc%2FY2RpdmApJ2JwZGZkaGppYFNkd2xka3EnPydmamtxd2ppJyknZHVsTmB8Jz8ndW5acWB2cVowNFAyNEJNV0p0aGRtbWc0VWNnRzxrVk1TcWxdTV1RTkdJfFBiSWM8c09xd281d1VARnZob3VRV2JVPXdkZHZWQUNMf2xScFJBU1U1VTFwZ1NyTk0wU2JVRjU1dU1hRGF1b1wnKSdjd2poVmB3c2B3Jz9xd3BgKSdnZGZuYndqcGthRmppancnPycmY2NjY2NjJyknaWR8anBxUXx1YCc%2FJ2hwaXFsWmxxYGgnKSdga2RnaWBVaWRmYG1qaWFgd3YnP3F3cGB4JSUl')

        // })
        // it('Acessar plano mensal 3', () => {
        //     cy.get('.mt-12 > :nth-child(3) > .inline-flex').click()
        //     cy.url().should('eq', 'https://checkout.stripe.com/c/pay/cs_test_b1jFyNVufkfIk5Krc28Ryt2T7ykOshc5qVpaUDuhKf1rVRq5oUmWsLUCsT#fidnandhYHdWcXxpYCc%2FJ2FgY2RwaXEnKSd2cGd2ZndsdXFsamtQa2x0cGBrYHZ2QGtkZ2lgYSc%2FY2RpdmApJ2JwZGZkaGppYFNkd2xka3EnPydmamtxd2ppJyknZHVsTmB8Jz8ndW5acWB2cVowNFAyNEJNV0p0aGRtbWc0VWNnRzxrVk1TcWxdTV1RTkdJfFBiSWM8c09xd281d1VARnZob3VRV2JVPXdkZHZWQUNMf2xScFJBU1U1VTFwZ1NyTk0wU2JVRjU1dU1hRGF1b1wnKSdjd2poVmB3c2B3Jz9xd3BgKSdnZGZuYndqcGthRmppancnPycmY2NjY2NjJyknaWR8anBxUXx1YCc%2FJ2hwaXFsWmxxYGgnKSdga2RnaWBVaWRmYG1qaWFgd3YnP3F3cGB4JSUl')

        // })
    context('Cenario acessar planos anuais', () => {
        beforeEach(() => { 
            cy.get(':nth-child(5) > .relative').click()
            cy.url().should('eq', urlbase + 'precos')
            cy.contains('button', 'Anual' ).click()
            cy.contains('p', 'R$ 1.099,00').should('be.visible')
            cy.contains('p', 'R$ 1.279,00').should('be.visible')
            cy.contains('p', 'R$ 2.499,00').should('be.visible')
            cy.contains('No plano anual você paga 10 meses e leva 12.').should('be.visible')
        })
        // it('Acessar plano anual 1', () => {
        //     cy.get('.mt-12 > :nth-child(1) > .inline-flex').click()
        //     cy.url().should('eq', 'https://checkout.stripe.com/c/pay/cs_test_b1qCHdoVUj1rORB1R2hqjVe6UcMjVM4PQo1Bt14j1U8LrVNBmeWsPdnJ66#fidnandhYHdWcXxpYCc%2FJ2FgY2RwaXEnKSd2cGd2ZndsdXFsamtQa2x0cGBrYHZ2QGtkZ2lgYSc%2FY2RpdmApJ2JwZGZkaGppYFNkd2xka3EnPydmamtxd2ppJyknZHVsTmB8Jz8ndW5acWB2cVowNFAyNEJNV0p0aGRtbWc0VWNnRzxrVk1TcWxdTV1RTkdJfFBiSWM8c09xd281d1VARnZob3VRV2JVPXdkZHZWQUNMf2xScFJBU1U1VTFwZ1NyTk0wU2JVRjU1dU1hRGF1b1wnKSdjd2poVmB3c2B3Jz9xd3BgKSdnZGZuYndqcGthRmppancnPycmY2NjY2NjJyknaWR8anBxUXx1YCc%2FJ2hwaXFsWmxxYGgnKSdga2RnaWBVaWRmYG1qaWFgd3YnP3F3cGB4JSUl')
        // })
        // it('Acessar plano anual 2', () => {
        //     cy.get('.bg-gradient-to-br > .justify-center').click()
        //     cy.url().should('eq', 'https://checkout.stripe.com/c/pay/cs_test_b1ngCpO2fWqvBfTha9INsjb91jkuq0tbZywPB9D48Ef2FM1vXIGUrnawwr#fidnandhYHdWcXxpYCc%2FJ2FgY2RwaXEnKSd2cGd2ZndsdXFsamtQa2x0cGBrYHZ2QGtkZ2lgYSc%2FY2RpdmApJ2JwZGZkaGppYFNkd2xka3EnPydmamtxd2ppJyknZHVsTmB8Jz8ndW5acWB2cVowNFAyNEJNV0p0aGRtbWc0VWNnRzxrVk1TcWxdTV1RTkdJfFBiSWM8c09xd281d1VARnZob3VRV2JVPXdkZHZWQUNMf2xScFJBU1U1VTFwZ1NyTk0wU2JVRjU1dU1hRGF1b1wnKSdjd2poVmB3c2B3Jz9xd3BgKSdnZGZuYndqcGthRmppancnPycmY2NjY2NjJyknaWR8anBxUXx1YCc%2FJ2hwaXFsWmxxYGgnKSdga2RnaWBVaWRmYG1qaWFgd3YnP3F3cGB4JSUl')
        // })
        // it('Acessar plano anual 3', () => {
        //     cy.get('.mt-12 > :nth-child(3) > .inline-flex').click()
        //     cy.url().should('eq', 'https://checkout.stripe.com/c/pay/cs_test_b1lUZAuXjWn7ijndUS07CsjaZdLxqmF54kkfZ2JIZOTSOL0avwtU0eT81I#fidnandhYHdWcXxpYCc%2FJ2FgY2RwaXEnKSd2cGd2ZndsdXFsamtQa2x0cGBrYHZ2QGtkZ2lgYSc%2FY2RpdmApJ2JwZGZkaGppYFNkd2xka3EnPydmamtxd2ppJyknZHVsTmB8Jz8ndW5acWB2cVowNFAyNEJNV0p0aGRtbWc0VWNnRzxrVk1TcWxdTV1RTkdJfFBiSWM8c09xd281d1VARnZob3VRV2JVPXdkZHZWQUNMf2xScFJBU1U1VTFwZ1NyTk0wU2JVRjU1dU1hRGF1b1wnKSdjd2poVmB3c2B3Jz9xd3BgKSdnZGZuYndqcGthRmppancnPycmY2NjY2NjJyknaWR8anBxUXx1YCc%2FJ2hwaXFsWmxxYGgnKSdga2RnaWBVaWRmYG1qaWFgd3YnP3F3cGB4JSUl')

        // })
    })
    })
})