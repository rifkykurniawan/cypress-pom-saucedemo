const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "nay4cp",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  
});
