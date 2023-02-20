it("Patient Registration", () => {
  // cy.intercept(
  //   "GET",
  //   "/openmrs/ws/rest/v1/session?v=custom:(authenticated,user:(privileges:(uuid,name,roles),roles:(uuid,name)))",
  //   { fixture: "/registration/session.json" }
  // );
  // cy.intercept(
  //   "GET",
  //   "/openmrs/ws/rest/v1/user/84ee6acb-1e75-11eb-8bc7-0242c0a85003",
  //   { fixture: "/registration/user.json" }
  // );
  // cy.intercept(
  //   "GET",
  //   "/openmrs/ws/rest/v1/provider?user=84ee6acb-1e75-11eb-8bc7-0242c0a85003&v=custom:(uuid,display,person:(uuid,display))",
  //   { fixture: "/registration/provider.json" }
  // );
  // cy.intercept(
  //   "GET",
  //   "/openmrs/ws/rest/v1/role?startIndex=0&limit=100&v=custom:(uuid,name,privileges:(uuid,name))",
  //   { fixture: "/registration/roleStartindex-0.json" }
  // );
  // cy.intercept(
  //   "GET",
  //   "/openmrs/ws/rest/v1/role?startIndex=100&limit=100&v=custom:(uuid,name,privileges:(uuid,name))",
  //   { fixture: "/registration/roleStartindex-100.json" }
  // );
  // cy.intercept(
  //   "GET",
  //   "/openmrs/ws/rest/v1/systemsetting?q=iCare.filters.billing&v=full",
  //   { fixture: "/registration/iCareSysSettingBilling.json" }
  // );
  // cy.intercept(
  //   "GET",
  //   "/openmrs/ws/rest/v1/systemsetting?q=iCare.general.systemSettings.support.googleFormLink&v=full",
  //   { fixture: "/registration/iCareSysSettingGeneral.json" }
  // );

  cy.autoInterceptorFixture("login");

  /************ THE CODES TO WRITE URL AND METHOD IN THE FILE */
  // cy.writeApiUrl("registration");
  // cy.writeApiUrls("registration");
  cy.Login("admin", "Admin123");

  // cy.autoInterceptorSaver("regtest");
  // cy.autoInterceptorFixture("registration");
  cy.selectRegistrationModule();
  cy.get("#input-search-patient").should("be.visible");
  cy.contains("Registration Desk").should("be.visible");
  cy.get("#RegistrationBtn").should("be.visible");
  cy.get("#RegistrationBtn").click();
  cy.contains("Register New Patient").should("be.visible");
  cy.get("#mat-checkbox-1").should("be.visible");
  cy.get("#saveBtn").should("be.disabled");
  cy.get("#cancelBtn").should("be.visible");
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
  cy.get("#sex")
    .click()
    .then(() => {
      // cy.contains("Female").click({ force: true });
    });
  cy.get("mat-select[name=gender]")
    .click({ force: true })
    .get("mat-option")
    .contains("Male")
    .click();

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

  cy.get("#saveBtn").should("be.not.disabled");
  cy.get("#saveBtn").click();
});
