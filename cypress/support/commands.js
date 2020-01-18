import { testCredentials } from '../support/credentials';

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (credentials) => {
  cy.visit('http://localhost:4200/auth');
  cy.get('#trta1-auth')
    .find(`input[type=email]`)
    .should('be.focused')
    .eq(0)
    .clear().type(testCredentials.username);

  cy.get('#trta1-auth')
    .find(`input[type=password]`)
    .eq(0)
    .clear().type(testCredentials.password);

  cy.get('#trta1-auth')
    .find('.trta1-btn-primary')
    .click();

  cy.get('#trta1-mfs-later').click();
  cy.url({timeout: 15000}).should('include', '/home');
});