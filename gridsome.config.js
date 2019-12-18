// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Portfolio 2020',
  siteUrl: 'http://portfolio.dev.local',
  host: 'portfolio.dev.local',
  port: 5200,
  plugins: [
    {
      use: '@gridsome/source-graphql',
      options: {
        url: 'http://portfolio.dev.local:9200/graphql',
        fieldName: 'wagtail',
        typeName: 'wagtailTypes',

        headers: {
          Authorization: `Bearer ${process.env.AUTH_TOKEN}`,
        },
      },
    },
  ]
}
