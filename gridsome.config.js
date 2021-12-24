// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const autoprefixer = require('autoprefixer');
const { marked } = require('marked');

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
    {
      use: 'gridsome-plugin-feed',
      options: {
        contentTypes: ['Blog'],
        feedOptions: {
          title: 'Matsuko\'s blog',
          description: 'UX and accessibility on the web, and other miscellanea.'
        },
        rss: {
          enabled: true,
          output: '/blog/feed.xml'
        },
        atom: {
          enabled: true,
          output: '/blog/feed.atom'
        },
        nodeToFeedItem: node => ({
          title: node.title,
          description: node.description,
          date: new Date(node.date),
          content: marked(node.content),
        })
      },
    },
  ],

  css: {
    loaderOptions: {
      postcss: [autoprefixer],
    }
  }

};
