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

Cypress.Commands.add("Logout", () => {
  cy.get("#btn-account")
    .click()
    .then(() => {
      cy.contains("Logout").click();
      cy.get("#username").should("be.visible");
      cy.get("#password").should("be.visible");
    });
});

Cypress.Commands.add("selectRegistrationModule", () => {
  cy.contains("Registration").click();
  cy.get("#RegistrationBtn").should("be.visible");
  cy.contains("Registration Desk").should("be.visible");
});
Cypress.Commands.add("selectNursingModule", () => {
  cy.contains("Nursing").click();
});
Cypress.Commands.add("selectClinicModule", () => {
  cy.contains("Clinic").click();
});
Cypress.Commands.add("selectIpdObservationModule", () => {
  cy.contains("IPD/Observation").click();
});
Cypress.Commands.add("selectCashierModule", () => {
  cy.contains("Cashier").click();
});
Cypress.Commands.add("selectLaboratoryModule", () => {
  cy.contains("Laboratory").click();
});
Cypress.Commands.add("selectDispensingModule", () => {
  cy.contains("Dispensing").click();
});
Cypress.Commands.add("selectSocialWelfareModule", () => {
  cy.contains("Social Welfare").click();
});
Cypress.Commands.add("selectEClaimModule", () => {
  cy.contains("E-claim").click();
});
Cypress.Commands.add("selectReportsModule", () => {
  cy.contains("Reports").click();
});
Cypress.Commands.add("selectSettingsModule", () => {
  cy.contains("Settings").click();
});
Cypress.Commands.add("selectStoreModule", () => {
  cy.contains("Store").click();
});
Cypress.Commands.add("selectRadiologyModule", () => {
  cy.contains("Radiology").click();
});
Cypress.Commands.add("selectDHIS2Module", () => {
  cy.contains("DHIS2").click();
});
Cypress.Commands.add("selectTheatreModule", () => {
  cy.contains("Theatre").click();
});
// Cypress.Commands.add("", () => {});
// Cypress.Commands.add("", () => {});
// Cypress.Commands.add("", () => {});
// Cypress.Commands.add("", () => {});
// Cypress.Commands.add("", () => {});
// Cypress.Commands.add("", () => {});
// Cypress.Commands.add("", () => {});
// Cypress.Commands.add("", () => {});
// Cypress.Commands.add("", () => {});
// Cypress.Commands.add("", () => {});
// Cypress.Commands.add("", () => {});
// Cypress.Commands.add("", () => {});
