<template>
  <header class="masthead">
    <div class="overlay"></div>
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          <div class="site-heading">
            <h1>JAMstack Blog</h1>
            <span class="subheading">A testing blog for Headless CMS experimentation</span>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {

}
</script>

<style lang="scss">
header.masthead {
  margin-bottom: 50px;
  background: no-repeat center center;
  background-color: $gray-600;
  background-attachment: scroll;
  background-image: url('~@/assets/img/home-bg.jpg');
  position: relative;
  @include background-cover;
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: $gray-900;
    opacity: 0.5;
  }
  .page-heading,
  .post-heading,
  .site-heading {
    padding: 200px 0 150px;
    color: white;
    @media only screen and (min-width: 768px) {
      padding: 200px 0;
    }
  }
  .page-heading,
  .site-heading {
    text-align: center;
    h1 {
      font-size: 50px;
      margin-top: 0;
    }
    .subheading {
      font-size: 24px;
      font-weight: 300;
      line-height: 1.1;
      display: block;
      margin: 10px 0 0;
      @include sans-serif-font;
    }
    @media only screen and (min-width: 768px) {
      h1 {
        font-size: 80px;
      }
    }
  }
  .post-heading {
    h1 {
      font-size: 35px;
    }
    .meta,
    .subheading {
      line-height: 1.1;
      display: block;
    }
    .subheading {
      font-size: 24px;
      font-weight: 600;
      margin: 10px 0 30px;
      @include sans-serif-font;
    }
    .meta {
      font-size: 20px;
      font-weight: 300;
      font-style: italic;
      @include serif-font;
      a {
        color: $white;
      }
    }
    @media only screen and (min-width: 768px) {
      h1 {
        font-size: 55px;
      }
      .subheading {
        font-size: 30px;
      }
    }
  }
}
</style>