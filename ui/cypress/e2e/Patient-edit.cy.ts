describe("Edit Patient", () => {
  beforeEach("Login First", () => {
    cy.autoInterceptorFixture("login");
    cy.Login("admin", "Admin123");
  });

  it("Edit Patient with visit", function () {
    cy.selectRegistrationModule();
    /* ==== Generated with Cypress Studio ==== */
    cy.get("#input-search-patient").type("testlocal");
    cy.get("tbody > :nth-child(1) > .cdk-column-name").click();
    cy.contains("Update Authorization").should("be.visible");
    cy.contains("Current visit").should("be.visible");
    cy.contains("Previous visits").should("be.visible");
    cy.contains("Update Consultation Room").should("be.visible");
    cy.contains("Update Consultation Room").should("be.visible");
    cy.contains("Edit Patient").should("be.visible");
    cy.contains("Done").should("be.visible");
    cy.contains("Close Visit").should("be.visible");
    cy.contains("Edit Patient").click();
    cy.contains("Edit Patient").should("be.visible");
    cy.get("#saveBtn").should("be.visible");
    cy.get("#cancelBtn").should("be.visible");
    cy.get("#patientType")
      .click()
      .then(() => {
        cy.contains("Other").click({ force: true });
      });
    cy.get("#patientTypeID").type("02328", { force: true });
    cy.get("#sex")
      .click({ force: true })
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

    // Skip to edit the phone number because field cannot be cleared
    // cy.get(
    //   ".col-sm-9 > :nth-child(1) > .p-1 > .col-12.ng-star-inserted > .row > .col-12 > app-field > :nth-child(1) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex"
    // ).type("0987654321");
    cy.get(
      ".col-sm-9 > .d-flex > :nth-child(1) > .p-1 > .col-12.ng-star-inserted > .row > .col-12 > app-field > :nth-child(1) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex"
    )
      .click()
      .then(() => cy.contains("Msewe Village").click());
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
    cy.get("#kfname").type("Kin Fname");
    cy.get("#klname").type("Kin Lname");
    cy.get("#relationshipType")
      .click()
      .then(() => cy.contains("Parent").click());
    cy.get(
      ":nth-child(1) > .d-flex > app-form > .p-1 > .col-12.ng-star-inserted > .row > .col-12 > app-field > :nth-child(1) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex"
    ).type("0987654321");

    // cy.get("#saveBtn").should("be.disabled");
    cy.get("#cancelBtn").should("be.visible");
    cy.get("#saveBtn").should("be.not.disabled");
    // cy.get("#saveBtn").click();
  });

  it("Edit Patient without a visit", function () {
    cy.selectRegistrationModule();
    /* ==== Generated with Cypress Studio ==== */
    cy.get("#input-search-patient").type("patient");
    cy.get("tbody > :nth-child(1) > .cdk-column-name").click();
    cy.contains("Update Authorization").should("be.visible");
    cy.contains("Current visit").should("be.visible");
    cy.contains("Previous visits").should("be.visible");
    cy.contains("Update Consultation Room").should("be.visible");
    cy.contains("Update Consultation Room").should("be.visible");
    cy.contains("Edit Patient").should("be.visible");
    cy.contains("Start Visit").should("be.disabled");
    cy.contains("Edit Patient").click();
    cy.contains("Edit Patient").should("be.visible");
    cy.get("#saveBtn").should("be.visible");
    cy.get("#cancelBtn").should("be.visible");

    // THIS WAS COPIED FROM THE REGISTRATION PAGE
    cy.get("#patientType")
      .click()
      .then(() => {
        cy.contains("Other").click();
      });
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

    // Skip to edit the phone number because field cannot be cleared
    // cy.get(
    //   ".col-sm-9 > :nth-child(1) > .p-1 > .col-12.ng-star-inserted > .row > .col-12 > app-field > :nth-child(1) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex"
    // ).type("0987654321");
    cy.get(
      ".col-sm-9 > .d-flex > :nth-child(1) > .p-1 > .col-12.ng-star-inserted > .row > .col-12 > app-field > :nth-child(1) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex"
    )
      .click()
      .then(() => cy.contains("Msewe Village").click());
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
    cy.get("#kfname").type("Kin Fname");
    cy.get("#klname").type("Kin Lname");
    cy.get("#relationshipType")
      .click()
      .then(() => cy.contains("Parent").click());
    cy.get(
      ":nth-child(1) > .d-flex > app-form > .p-1 > .col-12.ng-star-inserted > .row > .col-12 > app-field > :nth-child(1) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex"
    ).type("0987654321");

    // cy.get("#saveBtn").should("be.disabled");
    cy.get("#cancelBtn").should("be.visible");
    cy.get("#saveBtn").should("be.not.disabled");
    // cy.get("#saveBtn").click();
  });
});
