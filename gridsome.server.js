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

const getAll = async (url) => {
  let items = []
  let keepGoing = true
  let offset = 0
  let limit = 20
  let payload = {}
  while (keepGoing) {
    // get data
    payload = {
      params: {
        offset: offset,
        limit: limit
      }
    }
    let { data } = await authApi.get(url, payload)

    // exit if no more items
    if (data.items.length == 0) {
      keepGoing = false
      return {
        meta: data.meta,
        items: items
      }
    }

    // push items
    await items.push.apply(items, data.items)
    offset += 20
  }
}

module.exports = function (api) {
  api.loadSource(({ addCollection }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })

  api.createManagedPages(async ({ createPage }) => {
    const data = await getAll(`/api/v2/pages/?type=blog.BlogPage&fields=_,id,title,body,extra,slug,restricted`)

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
        path: `/posts/${item.meta.slug}`,
        component: './src/templates/Post.vue',
        context: {
          restricted: item.restricted.length > 0,
          id: item.id,
          title: item.title,
          body: item.body,
          extra: item.extra,
          cloudName: process.env.CLOUDINARY_NAME
        }
      })
    })
  })
}
