describe("Clinic", () => {
  beforeEach("login First", () => {
    // cy.autoInterceptorFixture("login");
    cy.Login("admin", "Admin123");
    cy.selectClinicModule();
  });

  it("Awaiting Consultation", () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.contains("Awaiting Consultation").should("be.visible");
    cy.contains("Attended").should("be.visible");
    cy.contains("With Laboratory Test").should("be.visible");
    cy.contains("With Radiology Orders").should("be.visible");
    cy.contains("With Medications").should("be.visible");
    cy.contains("Admitted Patients").should("be.visible");
    cy.get(".search-input-card").should("be.visible");
    cy.contains("Filter by Payment Status").should("be.visible");
    cy.contains("Filter by PaymentCate").should("be.visible");
    cy.get(":nth-child(2) > .mat-icon").should("be.visible");
    cy.get(".active-list-type > .mat-icon").should("be.visible");
    cy.get(".mat-chip-list-wrapper > :nth-child(5)").click();
    cy.get("#mat-tab-label-1-5").click();
    cy.get("#mat-tab-label-1-5").click();
    cy.get("tbody > :nth-child(1) > .cdk-column-mrn").click();
    cy.contains("Back to Client List").should("be.visible");
    cy.contains("Vitals").should("be.visible");
    cy.contains("Visit Notes").should("be.visible");
    cy.contains("View Vitals").should("be.visible");
    cy.contains("History").should("be.visible");
    cy.contains("More").should("be.visible");
    cy.contains("End consultation").should("be.visible");

    // visit notes *************************
    cy.get("#c3959ab5-3f10-11e4-adec-0800271c1b75").type(
      "fever for two days,headache,chills,fatigue"
    );
    // cy.contains("History of presenting illness (HPI)").click({ force: true });
    // cy.contains("History of presenting illness (HPI)").type(
    //   "it just started in two days back",
    //   { force: true }
    // // );
    // cy.contains("General examination").type("None", { force: true });
    // cy.contains("Local examination").type("None", { force: true });
    cy.get("#mat-input-5").clear();
    cy.get("#mat-input-5").type("malaria");
    cy.get("#mat-option-170 > .mat-option-text > span").click();
    // cy.get("#mat-input-4").type("malaria");
    cy.get("#mat-input-6").click();
    cy.get("#mat-option-18 > .mat-option-text").click();
    cy.get("#mat-expansion-panel-header-1").click();
    cy.get("#mat-input-14").type("malaria");
    cy.get("#mat-option-89 > .mat-option-text > span").click({ force: true });
    cy.get("#remarks").type("Test using the morden malaria test");
    cy.get(
      "tr.ng-star-inserted > :nth-child(2) > .mat-focus-indicator > .mat-button-wrapper"
    ).click();
    cy.get(
      '[colspan="3"] > app-form > .p-1 > :nth-child(1) > .row > .col-12 > app-field > :nth-child(1) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix'
    ).click();
    cy.contains("Common Lab Tests").click();
    cy.get("#fb4c8016-184d-4641-9a50-2865f11e9cc2").click();
    cy.get("#mat-expansion-panel-header-1").click();
    cy.get("#mat-expansion-panel-header-2").click();
    cy.get("#mat-input-7").type("malaria");
    cy.get("#mat-option-338 > .mat-option-text > span").click();
    cy.get("#mat-input-8").click();
    cy.get("#mat-option-20 > .mat-option-text").click();
    cy.get(
      '#cdk-accordion-child-2 > .mat-expansion-panel-body > [style=""] > app-patient-diagnoses-summary > :nth-child(1) > div[_ngcontent-pls-c343=""] > .table > tbody > tr.ng-star-inserted > :nth-child(3) > .mat-focus-indicator'
    ).click();

    cy.get(
      ":nth-child(4) > .mat-focus-indicator > .mat-button-wrapper > .mat-icon"
    ).click();
    cy.get(".cdk-overlay-backdrop").click();
    cy.get("a > .text-muted").click();
    cy.get("a > .text-muted").click();
    cy.get(
      ":nth-child(4) > .mat-focus-indicator > .mat-button-wrapper > .mat-icon"
    ).click();
    cy.get(".cdk-overlay-backdrop").click();
    cy.get(
      ":nth-child(4) > .mat-focus-indicator > .mat-button-wrapper > .mat-icon"
    ).click();
    cy.get(".mat-focus-indicator > .text-muted").click();
    cy.get(".mat-focus-indicator > .text-muted").click();
    cy.get(".cdk-overlay-backdrop").click();
    cy.get(":nth-child(2) > :nth-child(2) > .mat-focus-indicator").click();
    cy.get(":nth-child(2) > :nth-child(4) > .mat-focus-indicator").click();
    cy.get(".cdk-overlay-backdrop").click();
    cy.get(
      '[colspan="3"] > app-form > .p-1 > :nth-child(1) > .row > .col-12 > app-field > :nth-child(1) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix > span.ng-star-inserted > .mat-icon'
    ).click();
    cy.get(
      '[colspan="3"] > app-form > .p-1 > :nth-child(1) > .row > .col-12 > app-field > :nth-child(1) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix > span.ng-star-inserted > .mat-icon'
    ).click();
    cy.get("tbody > :nth-child(3) > :nth-child(2)").click();
    cy.get("#mat-tab-label-2-1 > .mat-tab-label-content").click();
    cy.get("#mat-tab-label-2-0 > .mat-tab-label-content").click();
    /* ==== End Cypress Studio ==== */
  });

  it("testing", () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.get("#mat-input-6").type("malaria");
    cy.get("#mat-option-245 > .mat-option-text").click();
    cy.get("#mat-input-7").click();
    cy.get("#mat-option-14 > .mat-option-text").click();
    cy.get(
      '#cdk-accordion-child-2 > .mat-expansion-panel-body > [style=""] > app-patient-diagnoses-summary > :nth-child(1) > div[_ngcontent-pls-c343=""] > .table > tbody > tr.ng-star-inserted > :nth-child(3) > .mat-focus-indicator'
    ).click();
    /* ==== End Cypress Studio ==== */
  });

  it("testing", () => {});
});
