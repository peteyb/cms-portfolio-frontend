<template>
  <Layout>
    <p class="home-links">
      <g-link to="/" class="button--grey">Home page</g-link>
      <g-link to="/posts/" class="button--grey">Posts page</g-link>
      <g-link to="/posts/7/" class="button--grey">Post 7</g-link>
    </p>

    <h1>{{ $context.title }}</h1>
    <span v-html="$context.body"></span>
    <div v-for="item in $context.extra" :key="item.id">
      <h1 v-if="item.type == 'heading'">{{ item.value }}</h1>
      <span v-if="item.type == 'paragraph'" v-html="item.value"></span>
      <cld-image 
        v-if="item.type == 'image'" 
        :cloudName="$context.cloudName"
        :publicId="item.value" 
        width="300" 
        crop="scale" />
    </div>
  </Layout>
</template>
