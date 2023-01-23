module.exports = function(eleventyConfig) {
  // Define blog posts collection
  eleventyConfig.addCollection("blogPosts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/blog/**/*.md");
  });

  // Define portfolio items collection
  eleventyConfig.addCollection("portfolioItems", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/portfolio/**/*.md");
  });

  // Define passthrough copy files
  eleventyConfig.addPassthroughCopy("src/assets");

  // Eleventy configuration
  return {
    // Set input and output directories
    dir: {
      input: "src",
      output: "dist",
    },
  }
};
