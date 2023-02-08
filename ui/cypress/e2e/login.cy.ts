describe("Login", () => {
  beforeEach(() => {
    cy.window().then((win) => win.sessionStorage.clear());
    cy.clearCookies();
    cy.clearLocalStorage();
  });

  it("Login- Interface", () => {
    cy.visit("/");
    cy.intercept(
      {
        method: "GET",
        url: "/openmrs/ws/rest/v1/session**",
      },
      { fixture: "session/no-session.json" }
    );
    cy.intercept(
      {
        method: "GET",
        url: "/openmrs/ws/rest/v1/location**",
      },
      { fixture: "location/login-location.json" }
    );
    cy.contains("University of Dar es Salaam").should("be.visible");
    cy.contains("University Health Centre").should("be.visible");
    cy.contains("Login").should("be.visible");
    cy.contains("Can't Login?").should("be.visible");
    cy.contains("Can't Login?").click();
    cy.contains("Please contact your system administrator").should(
      "be.visible"
    );
    cy.contains("Okay").should("be.visible");
    cy.contains("Okay").click();
  });
  it("Login- Invalid Credentials", () => {
    cy.intercept(
      {
        method: "GET",
        url: "/openmrs/ws/rest/v1/session**",
      },
      { fixture: "session/no-session.json" }
    );
    cy.intercept(
      {
        method: "GET",
        url: "/openmrs/ws/rest/v1/location**",
      },
      { fixture: "location/login-location.json" }
    );
    cy.Login("admin", "Admin66664444");

    cy.contains("Wrong username or password").should("be.visible");
  });

  it("Login-Valid Credentials", () => {
    // cy.autoInterceptorSaver("login");
    cy.writeApiUrl("registration");
    cy.writeApiUrls("registration");
    // cy.autoInterceptorFixture("login");
    cy.Login("admin", "Admin123");

    cy.get("#btn-account").should("be.visible");
    cy.get("#location-icon").should("be.visible");
  });
});
