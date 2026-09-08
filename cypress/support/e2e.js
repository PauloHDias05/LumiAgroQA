// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import 'cypress-mochawesome-reporter/register'
import './commands'
// Oculta logs de XHR e Fetch no painel do Cypress
const origLog = Cypress.log;
Cypress.log = function (opts, ...other) {
  if (opts.displayName === 'xhr' || opts.displayName === 'fetch') {
    return;
  }
  return origLog(opts, ...other);
};
// cypress/support/e2e.js

afterEach(function () {
  // Executa após CADA 'it()' de qualquer arquivo de teste
  if (this.currentTest.state === 'passed') {
    // O Cypress gera o nome da imagem automaticamente com o nome do teste
    cy.screenshot(); 
  }
});