// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const autoprefixer = require('autoprefixer');

module.exports = {
  siteName: 'Matsuko Friedland',

  siteUrl: 'https://www.matsuko.ca',

  transformers: {
    remark: {
      plugins: [
        [
          'remark-autolink-headings',
          {
            linkProperties: {
              ariaHidden: true, // Default, TODO: Add screen-reader text
              class: 'rich-text__heading-anchor',
            },
            content: {
              type: 'element',
              tagName: 'span',
              children: [{type: 'text', value: '#'}]
            },
          },
        ],
        [
          '@noxify/gridsome-plugin-remark-embed',
          {
            'enabledProviders' : ['Youtube', 'Twitter', 'Gist', 'Codepen', 'JSFiddle'],
            'Youtube' : {
              margin: false,
            },
          }
        ],
      ],
    },
  },

  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "blog/*.md",
        baseDir: "./src/data",
        typeName: "Blog",
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "portfolio/*.md",
        baseDir: "./src/data",
        typeName: "Portfolio",
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
    },
  ],

  css: {
    loaderOptions: {
      postcss: [autoprefixer],
    }
  }

};
