describe("Laboratory", () => {
  beforeEach("login First", () => {
    // cy.autoInterceptorFixture("login");
    cy.Login("admin", "Admin123");
    cy.selectLaboratoryModule();
  });
  it("Sample collection", () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.get("#mat-chip-list-1 > .mat-chip-list-wrapper > :nth-child(1)").click();
    cy.get(".mat-row > .cdk-column-mrn").click();
    cy.get("#\\37 9e54f3b-6e73-4ce2-afae-46723acbf0bd0").type("108106-6-10659");
    cy.get(
      ":nth-child(1) > .text-center > .mat-focus-indicator > .mat-button-wrapper"
    ).click();
    cy.get(
      '[style="padding: 2%;"] > .d-flex > .ml-2 > .mat-button-wrapper'
    ).click();
    cy.get(".cdk-overlay-backdrop").click();
    cy.get("#\\31 000AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0").click();
    cy.get(".item-left > :nth-child(1)").click();
    cy.get("#\\31 000AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0").type("108106-6-10659");
    cy.get(
      ":nth-child(1) > .text-center > .mat-focus-indicator > .mat-button-wrapper"
    ).click();
    cy.get(".cdk-overlay-backdrop").click();
    cy.get("#\\37 9e54f3b-6e73-4ce2-afae-46723acbf0bd0").type("108106-6-10659");
    cy.get(".text-center > .mat-focus-indicator > .mat-button-wrapper").click();
    cy.get(
      '[style="padding: 2%;"] > .d-flex > :nth-child(1) > .mat-button-wrapper'
    ).click();
    cy.get("#mat-tab-label-0-1 > .mat-tab-label-content > .mat-badge").click();
    cy.get(".mat-chip-list-wrapper > :nth-child(2)").click();
    /* ==== End Cypress Studio ==== */
  });
});
