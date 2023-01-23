const eleventyVue = require("@11ty/eleventy-plugin-vue");

module.exports = function(eleventyConfig) {
  // Use Vue templates
  eleventyConfig.addPlugin(eleventyVue);

  // Return your Object options:
  return {
    dir: {
      input: "src",
      output: "dist",
      data: "data",
      includes: "includes",
    }
  }
};
