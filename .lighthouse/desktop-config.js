module.exports = {
  ci: {
    collect: {
      settings: {
        emulatedFormFactor: "desktop",
        onlyCategories: [
          "performance",
          "accessibility",
          "best-practices",
          "seo",
        ],
      },
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};
