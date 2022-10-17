const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: [
      "cypress/integration/folder1/*.cy.{js,jsx,ts,tsx}",
      "cypress/integration/folder2/*.cy.{js,jsx,ts,tsx}",
      "cypress/integration/*.cy.{js,jsx,ts,tsx}",
      "cypress/integration/apiTests/*.cy.{js,jsx,ts,tsx}",
    ],
    retries: 1,
    video: false,
    baseUrl: "http://qamid.tmweb.ru",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
