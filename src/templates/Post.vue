<template>
  <Layout>
    <p class="home-links">
      <g-link to="/" class="button--grey">Home page</g-link>
      <g-link to="/posts/" class="button--grey">Posts page</g-link>
      <g-link to="/posts/5/" class="button--grey">Post 5</g-link>
    </p>

    <h1>{{ $context.title }}</h1>
    <span v-html="$context.body"></span>
    <div v-for="item in $context.extra" :key="item.id">
      <h1 v-if="item.type == 'heading'">{{ item.value }}</h1>
      <span v-if="item.type == 'paragraph'" v-html="item.value"></span>
      <img v-if="item.type == 'image'" :src="item.value.file" />
    </div>
  </Layout>
</template>
