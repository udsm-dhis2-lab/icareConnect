describe("Start Visit", () => {
  beforeEach("login First", () => {
    // cy.autoInterceptorFixture("login");
    cy.Login("admin", "Admin123");
    cy.selectRegistrationModule();
  });

  it("Insurance Visit", { defaultCommandTimeout: 90000 }, () => {
    // cy.writeApiUrl("auto/visit-Insurance/index");

    cy.autoInterceptorSaver("visit-Insurance");
    /* ==== Generated with Cypress Studio ==== */
    cy.get("#input-search-patient").type("patient");
    cy.get("tbody > :nth-child(1) > .cdk-column-name").click();
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
    cy.get("#mat-checkbox-3-input").check({ force: true });
    // cy.get("#mat-input-3").type("123445565646");
    // cy.get("#btn-start-visit > .mat-button-wrapper").click();
    /* ==== End Cypress Studio ==== */
  });
});
