const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "**/*.spec.js",
    supportFile: "cypress/support/e2e.js",
    baseUrl: "https://www.saucedemo.com",
  },
});
