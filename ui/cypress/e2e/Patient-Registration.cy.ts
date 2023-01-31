it("Login-Valid Credentials", () => {
  cy.Login("admin", "Admin123");
  cy.get("#btn-account").should("be.visible");
  cy.get("#location-icon")
    .should("be.visible")
    .then(() => {
      cy.selectRegistrationModule();
      cy.get("#RegistrationBtn").should("be.visible");
      cy.get("#RegistrationBtn").click();
      cy.get("#patientType")
        .click()
        .then(() => {
          cy.contains("Student").click();
        });
      cy.get("#patientTypeID").type("2014-04-02323");
      cy.get("#fname").type("Test");
      cy.get("#lname").type("Test", { force: true });
      cy.get("#mname").type("Test");
      // cy.intercept(
      //   "GET",
      //   "/openmrs/ws/rest/v1/patient?identifier=test test test&v=full&limit=10",
      //   []
      // ).as("patients");
      // cy.wait("@patients");
      // cy.get("#registerNew-btn").click({ force: true });
      cy.get("#registerNew-btn").click({ force: true });
      // cy.get("#existingPatients").should("not.be.visible");
      // cy.get("#sex")
      //   .click()
      //   .then(() => {
      //     // cy.contains("Female").click({ force: true });
      //   });
      // // cy.contains("Female").click();

      // // *********************      Test the DOB both ways     ***********
      cy.get("#ageYears").type("20", { force: true });
      cy.get("#ageMonths").type("10", { force: true });
      cy.get("#ageDays").type("12", { force: true });

      cy.get("#input-date-picker").click({ force: true });
      cy.get(".mat-calendar-previous-button").should("be.visible");
      cy.get(".mat-calendar-previous-button").click();
      cy.get(':nth-child(3) > [data-mat-col="4"]').click();
      cy.get(
        ".col-sm-9 > :nth-child(1) > .p-1 > .col-12.ng-star-inserted > .row > .col-12 > app-field > :nth-child(1) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex"
      ).type("0987654321");
      cy.get(
        ".col-sm-9 > .d-flex > :nth-child(1) > .p-1 > .col-12.ng-star-inserted > .row > .col-12 > app-field > :nth-child(1) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex"
      )
        .type("kibo Village")
        .then(() => cy.contains("Kibo Village").click());
      cy.get(
        "app-dynamic-reg-form.ng-star-inserted > app-form > .p-1 > :nth-child(1) > .row > .col-12 > app-field > :nth-child(1) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex"
      )
        .click()
        .then(() => cy.contains("Primary Education").click());
      cy.get(
        ":nth-child(2) > .row > .col-12 > app-field > :nth-child(1) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex"
      )
        .click()
        .then(() => cy.contains("Single").click());
      cy.get(
        ":nth-child(3) > .row > .col-12 > app-field > :nth-child(1) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex"
      )
        .click()
        .then(() => cy.contains("Christian").click());
      cy.get(
        ":nth-child(4) > .row > .col-12 > app-field > :nth-child(1) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex"
      ).type("Leader Test");
      cy.get(
        ":nth-child(5) > .row > .col-12 > app-field > :nth-child(1) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex"
      ).type("0987654321");
      cy.get("#kinFname").type("Kin Fname");
      cy.get("#kinLName").type("Kin Lname");
      cy.get("#relationshipType")
        .click()
        .then(() => cy.contains("Parent").click());
      cy.get(
        ":nth-child(1) > .d-flex > app-form > .p-1 > .col-12.ng-star-inserted > .row > .col-12 > app-field > :nth-child(1) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex"
      ).type("0987654321");
    });
});

/***************************   THE INTERCEPT EXAMPLES  ***************************** */
// cy.intercept("POST", "http://XXXXXX/api/_testing/createUser").as("user");
// cy.window()
//   .invoke("fetch", "http://XXXXXX/api/_testing/createUser", { method: "POST" }) // not exactly sure how to include method in this example
//   .invoke("json")
//   .then((body) => {
//     cy.get("@user").its("response.body").should("deep.equal", body);
//   });

// cy.intercept("POST", "https://api.sendgrid.com").as("emails");
// cy.request({
//   method: "POST",
//   url: `https;//graphqlendpoint.com`,
//   body: { query, variables },
// });
// cy.wait("@emails").then((intercept) => {
//   cy.log(intercept);
// });
