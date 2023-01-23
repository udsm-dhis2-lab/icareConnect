it("Logout", () => {
  cy.Login("admin", "Admin123");
  cy.get("#btn-account").should("be.visible");
  cy.get("#location-icon").should("be.visible");
  cy.Logout();
});
