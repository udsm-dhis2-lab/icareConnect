describe("Start Visit", () => {
  beforeEach("login First", () => {
    cy.Login("admin", "Admin123");
    cy.selectRegistrationModule();
  });
  it("Handling payment", () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.get(":nth-child(5) > div").click();
    cy.get("#mat-input-3").type("patient");
    cy.get(".mat-row > .cdk-column-mrn").click();
    cy.get(
      "#mat-checkbox-2 > .mat-checkbox-layout > .mat-checkbox-inner-container"
    ).click();
    cy.get("#mat-checkbox-2-input").check();
    cy.get(".mt-4 > .mat-focus-indicator > .mat-button-wrapper").click();
    cy.get('[data-test="confirm-cash-payment-button"]').click();
    cy.get(
      "app-print-button > .mat-focus-indicator > .mat-button-wrapper"
    ).click();
    cy.get("tbody > :nth-child(1) > .cdk-column-mrn").click();
    /* ==== End Cypress Studio ==== */
  });
});
