module.exports = {
    extends: 'lighthouse:default',
    settings: {
      emulatedFormFactor: 'desktop',
      onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
    },
  };
  