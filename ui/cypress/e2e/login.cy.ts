describe("Login", () => {
  beforeEach(() => {
    cy.window().then((win) => win.sessionStorage.clear());
    cy.clearCookies();
    cy.clearLocalStorage();
  });

  it("Login- Invalid Credentials", () => {
    cy.intercept("GET", "/openmrs/ws/rest/v1/session", {
      sessionId: "2E5739E8F09E7B6D3D6173517B4DF897",
      authenticated: false,
    });
    cy.Login("admin", "Admin66664444");

    cy.wait(3000);
  });

  it("Login-Valid Credentials", () => {
    cy.intercept("GET", "/openmrs/sw/rest/v1/session", {
      fixture: "session.json",
    });
    cy.Login("admin", "Admin123");
    cy.get("#btn-account").should("be.visible");
    cy.get("#location-icon").should("be.visible");
  });
});
