<template>
  <Layout>
    <h1>JAMstack Portfolio</h1>

    <p>A proof of concept site to experiment with Gridsome and Wagtail to create a SSG JAMstack site</p>

    <p class="home-links">
      <g-link to="/" class="button--grey">Home page</g-link>
      <g-link to="/posts/" class="button--grey">Posts page</g-link>
    </p>
    
    <p>
      Concepts:

      <ol>
        <li>Consuming Wagtail data via graphql - including pagination</li>
        <li>Consuming Wagtail data via DRF - including pagination</li>
        <li>Handling wagtail private pages and fields</li>
        <li>Backend authentication of SSG build phase</li>
        <li>Webhook to build site after content edit in Wagtail</li>
        <li>Load test Django Wagtail pages versus Gridsome SSG equivalents</li>
        <li>Have dynamic functionality in SSG i.e. search for posts</li>
        <li>Have a vuex store</li>
        <li>Handle authentication on search</li>
        <li>Handle image uploading to Cloudinary through Wagtail</li>
        <li>Handle image rendering from Cloudinary through Gridsome Vue.js</li>
        <li>Use Bootstrap framework in frontend</li>
        <li>Add GA to site</li>
      </ol>
    </p>

    <p class="home-links">
      <g-link to="/" class="button--grey">Home page</g-link>
      <g-link to="/posts/" class="button--grey">Posts page</g-link>
    </p>

  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'JAMstack Portfolio'
  }
}
</script>
