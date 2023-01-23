const eleventyVue = require("@11ty/eleventy-plugin-vue");

module.exports = function(eleventyConfig) {
  // Use Vue templates
  eleventyConfig.addPlugin(eleventyVue);

  // Define blog posts collection
  eleventyConfig.addCollection("blogPosts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/blog/**/*.md");
  });

  // Define portfolio items collection
  eleventyConfig.addCollection("portfolioItems", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/portfolio/**/*.md");
  });

  // Return your Object options:
  return {
    dir: {
      input: "src",
      output: "dist",
      data: "data",
      includes: "includes",
    },
  }
};
