it("Edit Patient", function () {
  cy.autoInterceptorFixture("login");

  cy.Login("admin", "Admin123");
  cy.selectRegistrationModule();
  /* ==== Generated with Cypress Studio ==== */
  cy.get("#input-search-patient").type("patient");
  cy.get("tbody > :nth-child(1) > .cdk-column-name").click();
  cy.contains("Update Authorization").should("be.visible");
  cy.contains("Current visit").should("be.visible");
  cy.contains("Previous visits").should("be.visible");
  cy.contains("Update Consultation Room").should("be.visible");
  cy.contains("Update Consultation Room").should("be.visible");
  cy.contains("Edit Patient").should("be.visible");
  cy.contains("Done").should("be.visible");
  cy.contains("Edit Patient").click();
  cy.contains("Edit Patient").should("be.visible");
  cy.get("#saveBtn").should("be.visible");
  cy.get("#cancelBtn").should("be.visible");
});
