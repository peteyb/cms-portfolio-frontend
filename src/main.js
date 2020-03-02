// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import Vuex from 'vuex'
import vSelect from 'vue-select'
import BootstrapVue from 'bootstrap-vue'
 
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import DefaultLayout from '~/layouts/Default.vue'

import store from '@/store/index'


export default function (Vue, { router, head, isClient, appOptions }) {
  Vue.use(Vuex)

  appOptions.store = store

  Vue.component('Layout', DefaultLayout)
  Vue.component('v-select', vSelect)
  Vue.use(BootstrapVue)
}
