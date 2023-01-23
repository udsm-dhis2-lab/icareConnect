/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
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
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

Cypress.Commands.add("Login", (username: string, password: string) => {
  cy.visit("/");
  cy.get("#username").type(username);
  cy.get("#password").type(password + "{enter}");
});

Cypress.Commands.add("login1", (name = "admin") => {
  cy.session(
    name,
    () => {
      cy.request({
        method: "POST",
        url: "/login",
        body: { name, password: "Admin123" },
      }).then(({ body }) => {
        window.localStorage.setItem("authToken", body.token);
      });
    },
    {
      validate() {
        cy.visit("/user_profile");
        cy.contains(`Hello ${name}`);
      },
      cacheAcrossSpecs: true,
    }
  );
});

Cypress.Commands.add("Logout", () => {
  cy.get("#btn-account")
    .click()
    .then(() => {
      cy.contains("Logout").click();
      cy.get("#username").should("be.visible");
      cy.get("#password").should("be.visible");
    });

  //   cy.get("#username").type(username);
  //   cy.get("#password").type(password);
  //   cy.get("[data-test='icare-login-button']").should("be.visible").click();
  //   cy.get("#modal-location-selector")
  //     .contains("Select Location")
  //     .should("be.visible");
});
