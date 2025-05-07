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

// Given Login page opened
// When user reviews the page
// Then user should see Title
// Then user should see Username field with placeholder and empty value
// Then user should see Password field with placeholder, password type and empty value
// Then user should see Login button

// When user logins with valid credentials
// Then user should be navigated to the Inventory page

// When user logouts
// Then user should see Title
// Then user should see Username field with placeholder and empty value
// Then user should see Password field with placeholder, password type and empty value
// Then user should see Login button
// Then error message should not be displayed

// When user clicks on the Login without passing credentials
// Then colored error message about missing username should be shown
// Then error close button should be show
// Then username field should be highlighted and contain error icon
// Then password field should be highlighted and contain error icon

// When user clicks on Error close button
// Then error message should not be displayed
// Then username field should not be highlighted and contain error icon
// Then password field should not be highlighted and contain error icon

// When user types actual username without password
// Then colored error message about missing password should be shown
// Then error close button should be shown
// Then username field should not be highlighted and not contain error icon
// Then password field should be highlighted and contain error icon

// When user types actual password without username
// Then colored error message about missing username should be shown
// Then error close button should be shown
// Then username field should be highlighted and contain error icon
// Then password field should be highlighted and contain error icon

// When user types valid username and invalid password
// Then colored error message about credentials do not match any existing user should be shown
// Then error close button should be shown
// Then username field should be highlighted and contain error icon
// Then password field should be highlighted and contain error icon

// When user tries to use locked account
// Then colored error message about locked user should be shown
// Then error close button should be shown
// Then username field should be highlighted and contain error icon
// Then password field should be highlighted and contain error icon

// When user tries to navigate to Inventory page without login
// Then user should be navigated to the Login page
// Then colored error message about locked user should be shown
// Then error close button should be shown
// Then username field should be highlighted and contain error icon
// Then password field should be highlighted and contain error icon
