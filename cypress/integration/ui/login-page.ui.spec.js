import selectors from "../../support/selectors";

describe("LoginPage: Given Login page opened", () => {
  context("When User navigates to Login page", () => {
    beforeEach(() => {
      cy.visit("/");
    });

    it("Then User should see Username field", () => {
      cy.get(selectors.loginPage.username).should("be.visible");
    });

    it("Then User should see Password field", () => {
      cy.get(selectors.loginPage.password).should("be.visible");
    });

    it("Then User should see Login button", () => {
      cy.get(selectors.loginPage.loginButton).should("be.visible");
    });
  });
});

context("LoginPage: When user logins with valid credentials", () => {
  it.skip("Then user should navigate to the Inventory page", () => {
    // Not implemented yet
  });
});
