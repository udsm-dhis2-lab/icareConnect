describe("Login", () => {
  beforeEach(() => {
    cy.window().then((win) => win.sessionStorage.clear());
    cy.clearCookies();
    cy.clearLocalStorage();
  });

  it("Login- Invalid Credentials", () => {
    cy.Login("admin", "Admin66664444");
    cy.wait(3000);
  });

  it("Login-Valid Credentials", () => {
    cy.Login("admin", "Admin123");
    cy.get("#btn-account").should("be.visible");
    cy.get("#location-icon").should("be.visible");
  });
});
