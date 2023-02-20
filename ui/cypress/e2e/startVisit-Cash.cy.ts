describe("Start Visit", () => {
  beforeEach("login First", () => {
    cy.Login("admin", "Admin123");
    cy.selectRegistrationModule();
  });
  it("login Second", () => {});

  /* ==== Test Created with Cypress Studio ==== */

  it("Patient with visit", function () {
    /* ==== Generated with Cypress Studio ==== */
    cy.get("#input-search-patient").type("patient");
    cy.get("tbody > :nth-child(1) > .cdk-column-name").click();
    cy.contains("Update Authorization").should("be.visible");
    cy.contains("Current visit").should("be.visible");
    cy.contains("Previous visits").should("be.visible");
    cy.contains("Update Consultation Room").should("be.visible");
    cy.contains("Patient already has active visit").should("be.visible");
    cy.contains("Update Consultation Room").should("be.visible");
    cy.contains("Edit Patient").should("be.visible");
    cy.contains("Done").should("be.visible");
  });

  it("Cash Visit", function () {
    /* ==== Generated with Cypress Studio ==== */
    cy.get("#input-search-patient").type("patient");
    cy.get("tbody > :nth-child(1) > .cdk-column-name").click();
    cy.contains("Update Authorization").should("be.visible");
    cy.contains("Current visit").should("be.visible");
    cy.contains("Previous visits").should("be.visible");
    cy.contains("Update Consultation Room").should("be.visible");
    cy.contains("Visit type").should("be.visible");

    cy.contains("Health Programs").should("be.visible");
    cy.contains("Specilized Clinics").should("be.visible");
    cy.contains("Diagnostic Service").should("be.visible");
    cy.contains("OPD").should("be.visible");
    cy.get("#btn-start-visit").should("be.disabled");
    cy.contains("Edit Patient").should("be.visible");
    cy.contains("Cancel").should("be.visible");
    cy.contains("OPD").click({ force: true });
    cy.contains("Service").should("be.visible");
    cy.contains("General OPD").should("be.visible");
    cy.contains("Dental clinic").should("be.visible");
    cy.contains("General OPD").click({ force: true });
    cy.contains("Room 04 (General)").should("be.visible");
    // cy.contains("Room 08 (General)").should("be.visible");
    cy.contains("Room 02 (Family Planning)").should("be.visible");
    cy.contains("Room 04 (General)").click({ force: true });
    // cy.contains("Payment Category").should("be.visible", { force: true });
    cy.contains("Cash").click({ force: true });

    cy.get("#mat-chip-list-2 > .mat-chip-list-wrapper > :nth-child(1)").click();
    cy.get("#mat-chip-list-3 > .mat-chip-list-wrapper > :nth-child(1)").click();
    cy.get("#mat-chip-list-4 > .mat-chip-list-wrapper > :nth-child(1)").click();
    cy.get("#mat-chip-list-5 > .mat-chip-list-wrapper > :nth-child(1)").click();
    cy.get("#btn-start-visit > .mat-button-wrapper").should("be.visible");
    cy.get("#btn-start-visit > .mat-button-wrapper").should("not.be.visible");
    cy.get("#btn-start-visit > .mat-button-wrapper").click();
    /* ==== End Cypress Studio ==== */
  });
  it("Insurance Visit", () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.get("#input-search-patient").type("patient");
    cy.get(":nth-child(4) > .cdk-column-name").click();
    cy.get("#mat-chip-list-1 > .mat-chip-list-wrapper > :nth-child(1)").click();
    cy.contains("General OPD").click();
    cy.get("#mat-chip-list-3 > .mat-chip-list-wrapper > :nth-child(3)").click();
    cy.get("#mat-chip-list-4 > .mat-chip-list-wrapper > :nth-child(2)").click();
    cy.get("#mat-chip-list-5 > .mat-chip-list-wrapper > .mat-chip").click();
    cy.get("#mat-chip-list-6 > .mat-chip-list-wrapper > .mat-chip").click();
    cy.get("#mat-input-3").type("1234455656464");
    cy.get(
      "#mat-checkbox-3 > .mat-checkbox-layout > .mat-checkbox-label"
    ).click();
    cy.get("#mat-checkbox-3-input").check();
    cy.get("#mat-input-3").type("123445565646");
    cy.get("#btn-start-visit > .mat-button-wrapper").click();
    /* ==== End Cypress Studio ==== */
  });
});
