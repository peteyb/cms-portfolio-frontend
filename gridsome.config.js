// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

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
  ]
}
