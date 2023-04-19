describe("Nursing", () => {
  beforeEach("login First", () => {
    cy.Login("admin", "Admin123");
    cy.selectNursingModule();
  });
  it("Fill Vitals", () => {
    cy.autoInterceptorSaver("filling-vitals");
    // cy.writeApiUrl("auto/filling-vitals/index");
    /* ==== Generated with Cypress Studio ==== */
    cy.get('[ng-reflect-selected="false"]').click();
    cy.get("#searchActivePatient").type("TESTLOCAL LOCAL", { force: true });
    cy.get(".mat-row > .cdk-column-mrn").click();
    cy.contains("Back to Client List").should("be.visible");
    cy.contains("Vital history").should("be.visible");
    cy.contains("Admit").should("be.visible");
    cy.contains("Send to Observation").should("be.visible");
    cy.get("#\\35 089AAAAAAAAAAAAAAAAAAAAAAAAAAAA").type("23");
    cy.get("#\\35 090AAAAAAAAAAAAAAAAAAAAAAAAAAAA").type("23");
    cy.get("#c37bd733-3f10-11e4-adec-0800271c1b75").type("23");
    cy.get("#c36e9c8b-3f10-11e4-adec-0800271c1b75").type("118");
    cy.get("#c379aa1d-3f10-11e4-adec-0800271c1b75").type("80");
    cy.get("#mat-input-9").click();
    // cy.get("#mat-option-12 > .mat-option-text").click();
    cy.get("#\\35 087AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA").type("90");
    cy.get("#d37d3833-0e1c-425b-941d-52dfa44d138d").type("80");
    cy.get("#\\39 c29c4ac-ea70-4a90-8f70-f5aa405cea06").type("4.5");
    cy.get("#\\35 05c32f3-d121-401b-8f70-9bc613b29954").type("20");
    cy.get("#mat-input-14").click();
    cy.contains("Urgent").click();
    cy.get("#f6154e46-46b4-4507-9c93-42fac182d233").click();
    cy.get("#\\31 77ccf8d-87a7-491e-ae5b-a8704d14d6e5").click();
    cy.get(".mat-flat-button > .mat-button-wrapper").click();
    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
    // cy.get('#mat-chip-list-0 > [ng-reflect-selected="false"]').click();
    cy.contains("Triage Desk").click();
    cy.get(".search-input-card ").type("TESTLOCAL LOCAL");
    cy.get(".mat-row > .cdk-column-mrn").click();
    cy.get("#\\35 089AAAAAAAAAAAAAAAAAAAAAAAAAAAA").type("23");
    cy.get("#\\35 090AAAAAAAAAAAAAAAAAAAAAAAAAAAA").type("23");
    cy.get("#c37bd733-3f10-11e4-adec-0800271c1b75").type("23");
    cy.get("#c36e9c8b-3f10-11e4-adec-0800271c1b75").type("118");
    cy.get("#c379aa1d-3f10-11e4-adec-0800271c1b75").type("80");
    cy.get("#mat-input-9").click();
    cy.contains("sitting").click({ force: true });
    cy.get("#\\35 087AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA").type("90");
    cy.get("#d37d3833-0e1c-425b-941d-52dfa44d138d").type("80");
    cy.get("#\\39 c29c4ac-ea70-4a90-8f70-f5aa405cea06").type("4.5");
    cy.get("#\\35 05c32f3-d121-401b-8f70-9bc613b29954").type("20");
    cy.get("#mat-input-14").click();
    cy.contains("Urgent").click({ force: true });
    cy.get("#f6154e46-46b4-4507-9c93-42fac182d233").click();
    cy.get("#\\31 77ccf8d-87a7-491e-ae5b-a8704d14d6e5").click();
    cy.get(".mat-flat-button > .mat-button-wrapper").click();
    /* ==== End Cypress Studio ==== */
  });
  it("Vital history", () => {
    cy.autoInterceptorSaver("vitals-history");
    cy.writeApiUrl("auto/vitals-history/index");
    /* ==== Generated with Cypress Studio ==== */
    cy.get('[ng-reflect-selected="false"]').click();
    cy.get("#searchActivePatient").type("TESTLOCAL LOCAL", { force: true });
    cy.get(".mat-row > .cdk-column-mrn").click();
    cy.contains("Back to Client List").should("be.visible");
    cy.contains("Vital history").should("be.visible");
    cy.contains("Admit").should("be.visible");
    cy.contains("Send to Observation").should("be.visible");
    cy.contains("Vital history").click();
    cy.contains("Patient History").should("be.visible");
    cy.get("#mat-dialog-0").should("be.visible");
  });
});
