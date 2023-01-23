const outputDir = 'dist';
const inputDir = 'src';

const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const markdownItBlockEmbed = require("markdown-it-block-embed");
const faviconsPlugin = require("eleventy-plugin-gen-favicons");

const formatDate = function(UTCDate) {
  const date = new Date(UTCDate);
  return date.toLocaleDateString('en-CA', {
    dateStyle: 'long',
  });
}

module.exports = function(eleventyConfig) {
  /* TODO: sort and filter blog and portfolio items better? */
  /* TODO: show only posts with date in the past? */

  // Define blog posts collection
  eleventyConfig.addCollection("blogPosts", function(collectionApi) {
    return collectionApi
      .getFilteredByGlob(`${inputDir}/blog/**/*.md`)
      .map((blogPost) => {
        blogPost.data['formattedDate'] = formatDate(blogPost.data.date);
        return blogPost;
      })
      .sort((a, b) => {
        return b.data.date - a.data.date;
      });
  });

  // Define portfolio items collection
  eleventyConfig.addCollection("portfolioItems", function(collectionApi) {
    return collectionApi
      .getFilteredByGlob(`${inputDir}/portfolio/**/*.md`)
      .filter((portfolioItem) => {
        return portfolioItem.data.featured;
      })
      .map((portfolioItem) => {
        portfolioItem.data['formattedDate'] = formatDate(portfolioItem.data.date);
        return portfolioItem;
      })
      .sort((a, b) => {
        return b.data.date - a.data.date;
      });
  });

  // Define passthrough copy files
  eleventyConfig.addPassthroughCopy(`${inputDir}/assets`);

  // Markdown plugins
  let markdownLibrary = markdownIt({
  })
  .use(markdownItAnchor, {
    permalink: markdownItAnchor.permalink.headerLink(),
  })
  .use(markdownItBlockEmbed);

  eleventyConfig.setLibrary("md", markdownLibrary);

  // Generate favicons and manifest
  // TODO: Add more content to manifest?
  eleventyConfig.addPlugin(faviconsPlugin, {
    outputDir: outputDir,
  });

  // Eleventy configuration
  return {
    // Set input and output directories
    dir: {
      input: inputDir,
      output: outputDir,
    },
  }
};
