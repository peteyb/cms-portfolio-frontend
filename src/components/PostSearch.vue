<template>
  <v-select 
    v-model="form.selectedPost" 
    label="title"
    index="id"
    placeholder="Search for post"
    :noDrop="searchLength < minSearchLength"
    :options="picker_list"
    :filterable="false"
    :clearable="picker_list.length > 0"
    :clearSearchOnSelect="false"
    @input="select"
    @search="onSearch">
  </v-select>
</template>

<script>
import { mapState } from 'vuex'
import _ from 'lodash'

let initForm = {
  selectedPost: null,
}

export default {
  data: function () {
    return {
      searchText: '',
      searchLength: 0,
      minSearchLength: 3,
      form: {...initForm},
    }
  },
  computed: {
    ...mapState('post', ['picker_list',])
  },
  methods: {
    select() {
      if (this.form.selectedPost) {
        this.$router.push({ path: `/posts/${this.form.selectedPost.id}` })
        this.clearForm()
      }
    },
    clearForm() {
      this.form = {...initForm}
      this.$store.dispatch('post/clearPosts')
    },
    onSearch(search, loading) {
      this.searchText = search
      this.searchLength = search.length
      if (this.searchLength >= this.minSearchLength) {
        loading(true)
        this.search(loading, search, this)
      } else {
        this.$store.dispatch('post/clearPosts')
      }
    },
    search: _.debounce((loading, search, vm) => {
      vm.$store.dispatch('post/fetchPosts', {
        query: search,
      }).then(() => {
        loading(false);
      })
    }, 350),
  },
}
</script>
