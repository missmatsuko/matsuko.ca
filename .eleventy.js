const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const markdownItBlockEmbed = require("markdown-it-block-embed");

module.exports = function(eleventyConfig) {
  /* TODO: sort and filter blog and portfolio items better? */

  // Define blog posts collection
  eleventyConfig.addCollection("blogPosts", function(collectionApi) {
    return collectionApi
      .getFilteredByGlob("src/blog/**/*.md")
      .sort((a, b) => {
        return b.data.date - a.data.date;
      });
  });

  // Define portfolio items collection
  eleventyConfig.addCollection("portfolioItems", function(collectionApi) {
    return collectionApi
      .getFilteredByGlob("src/portfolio/**/*.md")
      .filter((portfolioItem) => {
        return portfolioItem.data.featured;
      })
      .sort((a, b) => {
        return b.data.date - a.data.date;
      });
  });

  // Define passthrough copy files
  eleventyConfig.addPassthroughCopy("src/assets");

  // Markdown
  let markdownLibrary = markdownIt({
  })
  .use(markdownItAnchor, {
    permalink: markdownItAnchor.permalink.headerLink(),
  })
  .use(markdownItBlockEmbed);

  eleventyConfig.setLibrary("md", markdownLibrary);

  // Eleventy configuration
  return {
    // Set input and output directories
    dir: {
      input: "src",
      output: "dist",
    },
  }
};
