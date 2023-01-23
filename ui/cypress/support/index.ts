export {};
declare global {
  namespace Cypress {
    interface Chainable {
      Login(email: string, password: string): Chainable<void>;

      Logout(): Chainable<void>;
      login1(name): Chainable<void>;
    }
  }
}
