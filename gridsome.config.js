// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const path = require('path')

function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/assets/sass/*.scss'),
      ],
    })
}


module.exports = {
  siteName: 'Portfolio 2020',
  siteUrl: process.env.GRIDSOME_SITE_URL,
  host: process.env.GRIDSOME_HOST,
  port: process.env.GRIDSOME_PORT,
  plugins: [
    {
      use: '@gridsome/source-graphql',
      options: {
        url: `${process.env.GRIDSOME_WAGTAIL_URL}/graphql`,
        fieldName: 'wagtail',
        typeName: 'wagtailTypes',

        headers: {
          Authorization: `Bearer ${process.env.AUTH_TOKEN}`,
        },
      },
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: `${process.env.GRIDSOME_GA_CODE}`
      }
    }
  ],
  chainWebpack (config) {
    // Load variables for all vue-files
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    
    // load global scss
    types.forEach(type => {
      addStyleResource(config.module.rule('scss').oneOf(type))
    })
	}
}
