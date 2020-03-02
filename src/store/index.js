import Vue from 'vue';
import Vuex from 'vuex';

import post from './modules/post'

Vue.use(Vuex);

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    post,
  }
});

export default store;
