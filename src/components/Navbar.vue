<template>
  <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
    <div class="container">
      <g-link class="navbar-brand" to="/">{{ $static.metadata.siteName }}</g-link>
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        Menu
        <i class="fas fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <g-link class="nav-link" to="/">Home</g-link>
          </li>
          <li class="nav-item">
            <g-link class="nav-link" to="/about/">About</g-link>
          </li>
          <li class="nav-item">
            <g-link class="nav-link" to="/posts/">Blog</g-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {

}
</script>

<style lang="scss">
#mainNav {
  position: absolute;
  border-bottom: 1px solid $gray-200;
  background-color: white;
  @include sans-serif-font;

  .navbar-brand {
    font-weight: 800;
    color: $gray-800;
  }
  .navbar-toggler {
    font-size: 12px;
    font-weight: 800;
    padding: 13px;
    text-transform: uppercase;
    color: $gray-800;
  }
  .navbar-nav {
    > li.nav-item {
      > a {
        font-size: 12px;
        font-weight: 800;
        letter-spacing: 1px;
        text-transform: uppercase;
      }
    }
  }
  @media only screen and (min-width: 992px) {
    border-bottom: 1px solid transparent;
    background: transparent;
    .navbar-brand {
      padding: 10px 20px;
      color: $white;
      &:focus,
      &:hover {
        color: fade-out($white, .2);
      }
    }
    .navbar-nav {
      > li.nav-item {
        > a {
          padding: 10px 20px;
          color: $white;
          &:focus,
          &:hover {
            color: fade-out($white, .2);
          }
        }
      }
    }
  }
  @media only screen and (min-width: 992px) {
    -webkit-transition: background-color 0.2s;
    -moz-transition: background-color 0.2s;
    transition: background-color 0.2s;
    /* Force Hardware Acceleration in WebKit */
    -webkit-transform: translate3d(0, 0, 0);
    -moz-transform: translate3d(0, 0, 0);
    -ms-transform: translate3d(0, 0, 0);
    -o-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    -webkit-backface-visibility: hidden;
    &.is-fixed {
      /* when the user scrolls down, we hide the header right above the viewport */
      position: fixed;
      top: -67px;
      -webkit-transition: -webkit-transform 0.2s;
      -moz-transition: -moz-transform 0.2s;
      transition: transform 0.2s;
      border-bottom: 1px solid darken($white, .05);
      background-color: fade-out($white, .1);
      .navbar-brand {
        color: $gray-900;
        &:focus,
        &:hover {
          color: $primary;
        }
      }
      .navbar-nav {
        > li.nav-item {
          > a {
            color: $gray-900;
            &:focus,
            &:hover {
              color: $primary;
            }
          }
        }
      }
    }
    &.is-visible {
      /* if the user changes the scrolling direction, we show the header */
      -webkit-transform: translate3d(0, 100%, 0);
      -moz-transform: translate3d(0, 100%, 0);
      -ms-transform: translate3d(0, 100%, 0);
      -o-transform: translate3d(0, 100%, 0);
      transform: translate3d(0, 100%, 0);
    }
  }
}
</style>