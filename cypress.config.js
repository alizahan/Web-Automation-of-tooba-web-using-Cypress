const { defineConfig } = require("cypress"); // importing cypress

module.exports = defineConfig({
  watchForFileChanges: false, // disabling file changes
  reporter: "cypress-mochawesome-reporter", // using mochawesome reporter
  e2e: {
    experimentalStudio: true, // enabling experimental studio
    video: true, // enabling video recording
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on); //using mochawesome reporter plugin
      return config;
    },
  },
});
