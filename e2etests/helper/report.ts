const report = require("multiple-cucumber-html-reporter");

report.generate({
    jsonDir: "test-results",
    reportPath: "test-results/reports/",
    reportName: "Playwright Automation Report",
    pageTitle: "Metro test report",
    displayDuration: false,
    metadata: {
        browser: {
            name: "chrome",
            version: "120",
        },
        device: "PRIMEWORKS_FMOL",
        platform: {
            name: "Windows",
            version: "11",
        },
    },
    customData: {
        title: "Test Info",
        data: [
            { label: "Project", value: "Metro Appliances" },
            { label: "Release", value: "1.0.0" },
            { label: "Cycle", value: "Smoke-1" }
        ],
    },
});