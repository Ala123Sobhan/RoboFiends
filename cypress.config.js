const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "2couyw",
  defaultCommandTimeout: 8000,
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    charts: true,
    reportPageTitle: "CYPRESS-TESTS",
    embeddedScreenshots: true,
    inlineAssets: true,
    reportDir: "./cypress/mochawesome-report",
    overwrite: false,
    html: true,
    json: true, // This is crucial for generating JSON reports
  },
  env: {
    url: "https://rahulshettyacademy.com",
  },
  retries: {
    runMode: 1,
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require("cypress-mochawesome-reporter/plugin")(on);
    },

    specPattern: "cypress/integration/examples/RoboFiendTest.js",
    experimentalSourceRewriting: false,
  },
});
