const outputDir = 'dist';
const inputDir = 'src';

const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const markdownItBlockEmbed = require("markdown-it-block-embed");
const faviconsPlugin = require("eleventy-plugin-gen-favicons");

// Returns Cloudinary URL for images
const cloudinaryUrl = function(imagePath, options) {
  // TODO: use site.url?

  // Full options list here: https://cloudinary.com/documentation/image_transformation_reference
  // For now only supporting: width, height
  // There's a Cloudinary SDK that handles this, but I don't want to include the whole package

  const optionsString = Object.entries(options)
    .map(option => {
      const key = option[0];
      const value = option[1];

      if (!value) {
        return null;
      }

      switch(key) {
        case 'width':
          return `w_${value}`;
        case 'height':
          return `h_${value}`;
        default:
          return null;
      }
    })
    .filter(value => value !== null)
    .join(',');

  return `https://res.cloudinary.com/dcelqcs5j/image/fetch/${optionsString ? `${optionsString},` : ''}f_auto,c_fill/https://matsuko.ca/assets${imagePath}`;
};

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

  // Add Cloudinary URL shortcode
  eleventyConfig.addShortcode("cloudinaryUrl", function(imagePath, options) {
    return cloudinaryUrl(imagePath, options);
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
