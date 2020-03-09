// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import Vuex from 'vuex'
import vSelect from 'vue-select'
import BootstrapVue from 'bootstrap-vue'
import Cloudinary from 'cloudinary-vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vue-select/dist/vue-select.css'
import '@fortawesome/fontawesome-svg-core/styles.css'
import '@/assets/sass/_variables.scss'

import DefaultLayout from '~/layouts/Default.vue'

import store from '@/store/index'

config.autoAddCss = false;
library.add(faGithub, faTwitter)


export default function (Vue, { router, head, isClient, appOptions }) {
  Vue.use(Vuex)

  appOptions.store = store

  Vue.component('font-awesome', FontAwesomeIcon)
  Vue.component('Layout', DefaultLayout)
  Vue.component('v-select', vSelect)

  Vue.use(BootstrapVue)
  Vue.use(Cloudinary, {
    configuration: {
      cloudName: process.env.CLOUDINARY_NAME,
      apiKey: process.env.CLOUDINARY_KEY,
      apiSecret: process.env.CLOUDINARY_SECRET,
      secure: true
    }
  })
}
