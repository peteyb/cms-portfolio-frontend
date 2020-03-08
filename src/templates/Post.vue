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
import { mapState } from 'vuex'
import PostExtraContent from '@/components/PostExtraContent.vue'

export default {
  components: {
    PostExtraContent
  },
  computed: {
    ...mapState('post', ['extra',])
  },
  async mounted() {
    let token = localStorage.getItem('token')
    if (token && this.$context.restricted) {
      this.$store.dispatch('post/fetchPost', this.$context.id)
    }
  }
}
</script>
