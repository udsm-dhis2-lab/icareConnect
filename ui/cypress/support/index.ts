/// <reference types="cypress" />
export {};
declare global {
  namespace Cypress {
    interface Chainable {
      Login(email: string, password: string): Chainable<void>;

      Logout(): Chainable<void>;
      login1(name): Chainable<void>;
      selectRegistrationModule(): Chainable<void>;
      selectNursingModule(): Chainable<void>;
      selectClinicModule(): Chainable<void>;
      selectIpdObservationModule(): Chainable<void>;
      selectCashierModule(): Chainable<void>;
      selectLaboratoryModule(): Chainable<void>;
      selectDispensingModule(): Chainable<void>;
      selectSocialWelfareModule(): Chainable<void>;
      selectEClaimModule(): Chainable<void>;
      selectReportsModule(): Chainable<void>;
      selectSettingsModule(): Chainable<void>;
      selectStoreModule(): Chainable<void>;
      selectRadiologyModule(): Chainable<void>;
      selectDHIS2Module(): Chainable<void>;
      selectTheatreModule(): Chainable<void>;
      autoInterceptor(context, routeMatcher): Chainable<void>;
      autoInterceptorFixture(context): Chainable<void> | Promise<void>;
      autoInterceptorSaver(context): Chainable<void>;
      writeApiUrls(filename): Chainable<void>;
      writeApiUrl(filename): Chainable<void>;
    }
  }
}
