// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const axios = require('axios')

const authApi = axios.create({
  baseURL: `${process.env.GRIDSOME_WAGTAIL_URL}`,
  withCredentials: false,
  headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Token ${process.env.GRIDSOME_WAGTAIL_TOKEN}`,
  }
})

module.exports = function (api) {
  api.loadSource(({ addCollection }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })

  api.createManagedPages(async ({ createPage }) => {
    const { data } = await authApi.get(`/api/v2/pages/?type=blog.BlogPage&fields=_,id,title,body,extra`)

    createPage({
      path: `/posts`,
      component: './src/templates/Blog.vue',
      context: {
        items: data.items,
        meta: data.meta,
        cloudName: process.env.CLOUDINARY_NAME
      }
    })

    data.items.forEach(item => {
      createPage({
        path: `/posts/${item.id}`,
        component: './src/templates/Post.vue',
        context: {
          title: item.title,
          body: item.body,
          extra: item.extra,
          cloudName: process.env.CLOUDINARY_NAME
        }
      })
    })
  })
}
