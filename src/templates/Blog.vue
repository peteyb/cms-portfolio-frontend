<template>
  <Layout>
    <p class="home-links">
      <g-link to="/" class="button--grey">Home page</g-link>
      <g-link to="/posts/" class="button--grey">Posts page</g-link>
      <g-link to="/posts/5/" class="button--grey">Post 5</g-link>
    </p>

    <h1>Blog posts</h1>
    <div v-for="post in $context.items" :key="post.id">
      <h2>{{ post.title }}</h2>
      <span v-html="post.body"></span>
      <g-link :to="`/posts/${post.id}/`" class="button--grey">View details</g-link>
    </div>
  </Layout>
</template>