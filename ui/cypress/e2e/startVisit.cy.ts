describe("Start Visit", () => {
  beforeEach("login First", () => {
    cy.Login("admin", "Admin123");
    cy.selectRegistrationModule();
  });
  it("login Second", () => {});

  /* ==== Test Created with Cypress Studio ==== */
  it("Cash Visit", function () {
    /* ==== Generated with Cypress Studio ==== */
    cy.get("#input-search-patient").type("testpa");
    cy.get("tbody > :nth-child(1) > .cdk-column-name").click();
    cy.get("#mat-chip-list-1 > .mat-chip-list-wrapper > :nth-child(1)").click();
    cy.get("#mat-chip-list-2 > .mat-chip-list-wrapper > :nth-child(1)").click();
    cy.get("#mat-chip-list-3 > .mat-chip-list-wrapper > :nth-child(1)").click();
    cy.get("#mat-chip-list-4 > .mat-chip-list-wrapper > :nth-child(1)").click();
    cy.get("#mat-chip-list-5 > .mat-chip-list-wrapper > :nth-child(1)").click();
    cy.get("#btn-start-visit > .mat-button-wrapper").click();
    /* ==== End Cypress Studio ==== */
  });
  it("", () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.get("#input-search-patient").clear("tests");
    cy.get("#input-search-patient").type("test");
    cy.get(":nth-child(4) > .cdk-column-name").click();
    cy.get("#mat-chip-list-1 > .mat-chip-list-wrapper > :nth-child(1)").click();
    cy.get("#mat-chip-list-2 > .mat-chip-list-wrapper > :nth-child(1)").click();
    cy.get("#mat-chip-list-3 > .mat-chip-list-wrapper > :nth-child(3)").click();
    cy.get("#mat-chip-list-4 > .mat-chip-list-wrapper > :nth-child(2)").click();
    cy.get("#mat-chip-list-5 > .mat-chip-list-wrapper > .mat-chip").click();
    cy.get("#mat-chip-list-6 > .mat-chip-list-wrapper > .mat-chip").click();
    cy.get("#mat-input-3").clear("1");
    cy.get("#mat-input-3").type("1234455656464");
    cy.get(
      "#mat-checkbox-3 > .mat-checkbox-layout > .mat-checkbox-label"
    ).click();
    cy.get("#mat-checkbox-3-input").check();
    cy.get("#mat-input-3").clear("123445565646");
    cy.get("#mat-input-3").type("123445565646");
    cy.get("#btn-start-visit > .mat-button-wrapper").click();
    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
    cy.get("#input-search-patient").clear("tes");
    cy.get("#input-search-patient").type("test");
    cy.get(":nth-child(4) > .cdk-column-name").click();
    cy.get("#mat-chip-list-1 > .mat-chip-list-wrapper > :nth-child(1)").click();
    cy.get("#mat-chip-list-2 > .mat-chip-list-wrapper > :nth-child(1)").click();
    cy.get("#mat-chip-list-3 > .mat-chip-list-wrapper > :nth-child(3)").click();
    cy.get("#mat-chip-list-4 > .mat-chip-list-wrapper > :nth-child(2)").click();
    cy.get("#mat-chip-list-5 > .mat-chip-list-wrapper > .mat-chip").click();
    cy.get("#mat-chip-list-6 > .mat-chip-list-wrapper > .mat-chip").click();
    cy.get("#mat-input-3").clear("1");
    cy.get("#mat-input-3").type("1234455656464");
    cy.get(
      "#mat-checkbox-3 > .mat-checkbox-layout > .mat-checkbox-label"
    ).click();
    cy.get("#mat-checkbox-3-input").check();
    cy.get("#mat-input-3").clear("123445565646");
    cy.get("#mat-input-3").type("123445565646");
    cy.get("#btn-start-visit > .mat-button-wrapper").click();
    /* ==== End Cypress Studio ==== */
  });
});
