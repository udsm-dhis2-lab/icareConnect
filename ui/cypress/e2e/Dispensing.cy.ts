describe("Start Visit", () => {
  beforeEach("login First", () => {
    // cy.autoInterceptorFixture("login");
    cy.Login("admin", "Admin123");
    cy.selectRegistrationModule();
  });

  /* ==== Test Created with Cypress Studio ==== */
  it("Waiting to be Dispensed", function () {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit("localhost:4200");
    cy.get("#username").type("admin");
    cy.get("#password").clear();
    cy.get("#password").type("Admin123{enter}");
    cy.get('[data-test="icare-login-button"]').click();
    cy.get(":nth-child(7) > div > .mt-2").click();
    cy.get("#mat-tab-label-0-1 > .mat-tab-label-content").click();
    cy.get("#mat-tab-label-0-2 > .mat-tab-label-content").click();
    cy.get("#mat-tab-label-0-0 > .mat-tab-label-content").click();
    /* ==== End Cypress Studio ==== */
  });
});
