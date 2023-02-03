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

import uniqueHash from "unique-hash"

Cypress.Commands.add("Login", (username: string, password: string) => {
  // cy.intercept({ 
  //   method: 'GET', 
  //   url: "/openmrs/ws/rest/v1/session?v=custom:(authenticated,user:(privileges:(uuid,name,roles),roles:(uuid,name)))"
  // }, { fixture: 'session/valid-session.json' });
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

function getFileName(context, req){
  return uniqueHash(`auto/${ req.url.replace('/openmrs/ws/rest/v1/', '').replace('http://localhost:4200', '') }`,{
    prepend:`auto/${context}/${req.method}`,
  });
  //return `auto/${ req.url.replace('/openmrs/ws/rest/v1/', '').replace('http://localhost:4200', '') }-${req.method}`;
}
function setIntercept(context, rM){
  let fileName = getFileName(context,rM)
  try{
    cy.intercept(rM, { fixture: `${fileName}.json` })
  }catch(e){
    console.error(e);
  }
}
Cypress.Commands.add("autoInterceptor", (context, routeMatcher) => {
  if(Array.isArray(routeMatcher)){
    routeMatcher.forEach((rM)=>{
      setIntercept(context, rM)
    })
  }else{
    setIntercept(context, routeMatcher)
  }
});
Cypress.Commands.add("autoInterceptorFixture", (context) => {
  return cy.fixture(`auto/${context}/index.json`).then(data =>{
    return cy.autoInterceptor(context, data);
  })
});
Cypress.Commands.add("autoInterceptorSaver", (context) => {
  cy.intercept('/openmrs/ws/rest/v1/**',
      req => {
        let fileName = getFileName(context,req)
        req.continue((res) => {
          console.log(req.url, fileName);
          if(res.body != ""){
            cy.now('writeFile',
            `cypress/fixtures/${fileName}.json`,
            res.body)
          }
        })
      })
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
