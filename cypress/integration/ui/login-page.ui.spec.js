describe("Navigation Test 2", () => {
  it("should navigate to the Saucedemo page", () => {
    // Visit the baseUrl
    cy.visit("/");

    // Verify that the URL is correct
    cy.url().should("include", "saucedemo.com");

    // Verify that the login form is visible
    cy.get("form").should("be.visible");
  });
});

describe("Navigation Test selectors", () => {
  it("should navigate to the Saucedemo page", () => {
    // Visit the baseUrl
    cy.visit("/");

    // Verify that the URL is correct
    cy.url().should("include", "saucedemo.com");

    // Verify that the title logo is visible
    cy.get(".login_logo").should("be.visible");

    // Verify that the username input is visible
    cy.get("[data-test=username]").should("be.visible");

    // Verify that the password input is visible
    cy.get("[data-test=password]").should("be.visible");

    // Verify that the login button is visible
    cy.get("[data-test=login-button]").should("be.visible");
  });
});
