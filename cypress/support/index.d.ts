/// <reference types="cypress" />

// add new command to the existing Cypress interface
// Check here for more examples
// https://docs.cypress.io/api/cypress-api/custom-commands.html#5-Write-TypeScript-definitions
// https://github.com/cypress-io/cypress-example-todomvc#cypress-intellisense
declare namespace Cypress {
  interface Chainable<Subject> {
    /**
     * Logs into the system
     *
     * @returns void
     * @memberof Chainable
     */
    login(credentials?: Credentials): void
  }
}

declare interface Credentials {
  username: string;
  password: string;
}
