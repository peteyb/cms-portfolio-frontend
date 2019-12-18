<template>
  <Layout>
    <h1>Blog posts</h1>
    <div v-for="blog in $page.wagtail.pages" :key="blog.id">
      <h2>{{ blog.title }}</h2>
      <span v-html="blog.body"></span>
    </div>
  </Layout>
</template>

<page-query>
query {
  wagtail {
    pages {
      ...on wagtailTypes_BlogPage {
        id
        title
        date
        body
      }
    }
  } 
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Blog'
  }
}
</script>
