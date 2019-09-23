// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const autoprefixer = require('autoprefixer');

const remarkPlugins = [
  [ '@noxify/gridsome-plugin-remark-embed', {
      'enabledProviders' : ['Youtube', 'Twitter', 'Gist', 'Codepen', 'JSFiddle'],
  }]
];

module.exports = {
  siteName: 'Matsuko Friedland',

  transformers: {
    remark: {}
  },

  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "blog/*.md",
        baseDir: "./src/data",
        typeName: "Blog",
        remark: {
          plugins: remarkPlugins,
        },
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "portfolio/*.md",
        baseDir: "./src/data",
        typeName: "Portfolio",
        remark: {
          plugins: remarkPlugins,
        },
      }
    },
  ],

  css: {
    loaderOptions: {
      postcss: [autoprefixer],
    }
  }

};
