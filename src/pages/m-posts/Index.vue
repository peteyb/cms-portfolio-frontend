<template>
  <Layout>
    <p class="home-links">
      <g-link to="/" class="button--grey">Home page</g-link>
      <g-link to="/posts/" class="button--grey">Posts page</g-link>
      <g-link to="/posts/5/" class="button--grey">Post 5</g-link>
    </p>

    <h1>Blog posts</h1>
    <div v-for="post in posts" :key="post.id">
      <h2>{{ post.title }}</h2>
      <span v-html="post.body"></span>

      <div v-for="item in post.extra" :key="item.id">
        <h1 v-if="item.type == 'heading'">{{ item.value }}</h1>
        <span v-if="item.type == 'paragraph'" v-html="item.value"></span>
        <img v-if="item.type == 'image'" :src="item.value.file" />
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Posts'
  },
  data() {
    return {
      posts: null
    }
  },
  async mounted() {
    const response = await fetch(`http://portfolio.dev.local:9200/api/v2/pages/?type=blog.BlogPage&fields=_,id,title,body,extra`)

    const posts = await response.json()
    this.posts = posts.items
  }
}
</script>
