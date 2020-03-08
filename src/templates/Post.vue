<template>
  <Layout>
    <p class="home-links">
      <g-link to="/" class="button--grey">Home page</g-link>
      <g-link to="/posts/" class="button--grey">Posts page</g-link>
    </p>

    <h1>{{ $context.title }}</h1>
    <span v-html="$context.body"></span>

    <template v-if="!$context.restricted">
      <PostExtraContent :content="$context.extra" />
    </template>
    <template v-else>
      <PostExtraContent :content="extra" />
    </template>

    <p><g-link to="/posts/" class="button--grey">Return to blog</g-link></p>
  </Layout>
</template>

<script>
import PostExtraContent from '@/components/PostExtraContent.vue';

export default {
  components: {
    PostExtraContent
  },
  data() {
    return {
      extra: null
    }
  },
  async mounted() {
    let token = localStorage.getItem('token')
    if (token && this.$context.restricted) {
      const response = await fetch(
        `http://portfolio.dev.local:9200/api/v2/pages/${this.$context.id}/?fields=_,extra`, {
          headers: { 'Authorization' : `Token ${token}`}
        })

      const data = await response.json()
      this.extra = data.extra
    }
  }
}
</script>
