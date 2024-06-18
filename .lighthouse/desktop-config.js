module.exports = {
  ci: {
    collect: {
      settings: {
        formFactor: "desktop",
        screenEmulation: {
          mobile: false,
          width: 1200,
          height: 800,
          deviceScaleFactor: 1,
          disabled: false,
        },
        onlyCategories: [
          "performance",
          "accessibility",
          "best-practices",
          "seo",
        ],
      },
    },
  },
};
