<template>
  <Layout>
    <p class="home-links">
      <g-link to="/" class="btn btn-primary button--grey">Home page</g-link>
      <g-link to="/posts/" class="btn btn-primary button--grey">Posts page</g-link>
    </p>

    <h1>Blog posts</h1>
    <div class="intro">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fermentum massa ac ante volutpat blandit. Suspendisse facilisis est risus. Phasellus accumsan libero turpis, ac congue elit egestas nec. Nullam in pellentesque velit. Nullam eu velit ut enim pellentesque posuere ut quis lacus. In in lobortis urna. Sed vehicula nibh erat, in rhoncus lorem accumsan eu. Curabitur posuere euismod ipsum vitae semper. Fusce ac vehicula lectus. Proin et molestie turpis. Nam lacinia nisl fringilla metus dictum aliquam. Cras eget augue id lacus molestie blandit. Vivamus a efficitur ante. Sed imperdiet a velit vitae ullamcorper. Duis sed volutpat dui, sit amet viverra velit. Curabitur at venenatis erat.</div>

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
