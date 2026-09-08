const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultbrowser: 'chrome',
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    reporterEnabled: 'cypress-mochawesome-reporter, mocha--junit-reporter',
    mochaJunitReporterReporterOptions: {
      mochaFile: 'cypress/reports/junit,results-[hash].xml'
    },
    cypressMochawesomeReporterReporterOptions: {
      charts: true,
      reportPageTitle: 'Relatorio de testes',
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false
    }
  },
  allowCypressEnv: false,

  e2e: {
    retries: {
      runMode: 2, // Se falhar no terminal, tenta mais 2 vezes automaticamente
      openMode: 1 // No modo gráfico (cypress open)
    },
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on)
      // implement node event listeners here
    },
        viewportWidth: 1366,
    viewportHeight: 768
  },
});