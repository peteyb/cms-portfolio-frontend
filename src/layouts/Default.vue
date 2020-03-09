<template>
  <div class="layout">
    <Navbar />
    <Header />
    <PostSearch />
    <slot/>
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import PostSearch from '@/components/PostSearch.vue';

export default {
  components: {
    Navbar,
    Header,
    Footer,
    PostSearch,
  }
}
</script>

<style lang="scss">
.home-links a {
  margin-right: 1rem;
}

.nav__link {
  margin-left: 20px;
}
</style>
