// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Portfolio 2020',
  siteUrl: 'http://cms-portfolio-backend.herokuapp.com',
  host: 'cms-portfolio-backend.herokuapp.com',
  port: 5200,
  plugins: [
    {
      use: '@gridsome/source-graphql',
      options: {
        url: 'http://cms-portfolio-backend.herokuapp.com/graphql',
        fieldName: 'wagtail',
        typeName: 'wagtailTypes',

        headers: {
          Authorization: `Bearer ${process.env.AUTH_TOKEN}`,
        },
      },
    },
  ]
}
