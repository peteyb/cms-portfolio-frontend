<template>
  <Layout>
    <p class="home-links">
      <g-link to="/" class="btn btn-primary button--grey">Home page</g-link>
      <g-link to="/posts/" class="btn btn-primary button--grey">Posts page</g-link>
    </p>

    <h1>Blog posts</h1>
    <div v-for="post in $context.items" :key="post.id">
      <h2>{{ post.title }}</h2>
      <span v-html="post.body"></span>
      <g-link :to="`/posts/${post.meta.slug}/`" class="button--grey">View details</g-link>
    </div>
  </Layout>
</template>

<style lang="scss">
.button--grey {
  color: orangered;
}
</style>

// todo - load db content via api on published pages