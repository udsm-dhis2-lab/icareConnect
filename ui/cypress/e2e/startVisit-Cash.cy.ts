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

  it("Cash Visit - OPD", function () {
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
  it("Cash Visit - Health Programs", function () {
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
    cy.contains("Health Programs").click({ force: true });
    cy.contains("Service").should("be.visible");
    cy.contains("RCH Services").should("be.visible");
    cy.contains("TB Services").should("be.visible");
    cy.contains("CTC Services").should("be.visible");
    cy.contains("RCH Services").click({ force: true });
    cy.contains("Room 03 (RCH)").should("be.visible");
    cy.contains("Room 03 (RCH)").click({ force: true });
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

  it("Cash Visit - Specialized Clinics", function () {
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
    cy.contains("Specilized Clinics").click({ force: true });
    cy.contains("Obstetric & Gynaecology").should("be.visible");
    cy.contains("Paediatric Clinic").should("be.visible");
    cy.contains("Mental/Psychiatric Health").should("be.visible");
    cy.contains("General OPD").should("be.visible");
    cy.contains("Dental clinic").should("be.visible");
    cy.contains("Obstetric & Gynaecology").click({ force: true });
    cy.contains("Room 09 (Obstretic & Gynecology)").should("be.visible");
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

  it("Cash Visit - Diagnostic Service", function () {
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
    cy.contains("Diagnostic Service").click({ force: true });
    cy.contains("Service").should("be.visible");
    cy.contains("General OPD").should("be.visible");
    cy.contains("Dental clinic").should("be.visible");
    cy.contains("Investigations/Procedures").click({ force: true });
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
});
