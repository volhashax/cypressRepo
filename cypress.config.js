const { defineConfig } = require("cypress");

module.exports = {
  e2e: {
    baseUrl: "https://www.saucedemo.com",
    supportFile: "cypress/support/e2e.js",
    specPattern: "cypress/{e2e,integration}/**/*.{js,jsx,ts,tsx}",
    env: {
      environment: "development",
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
};
