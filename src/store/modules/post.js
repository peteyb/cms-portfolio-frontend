import Vue from 'vue';
import { get } from '@/services/wagtail';
import { createAsyncMutation } from '@/store/mutation-types';

const GET_PICKER_LIST_ASYNC = createAsyncMutation('GET_PICKER_LIST')
const GET_POST_EXTRA_ASYNC = createAsyncMutation('GET_POST_EXTRA')

const state = {
	extra: [],
	picker_list: [],
}

const getters = {
}

const mutations = {
	[GET_PICKER_LIST_ASYNC.SUCCESS] (state, payload) {
    state.picker_list = payload.items
		Vue.delete(state, [GET_PICKER_LIST_ASYNC.errorKey])
	},
	[GET_PICKER_LIST_ASYNC.FAILURE] (state, error) {
		Vue.set(state, [GET_PICKER_LIST_ASYNC.errorKey], error)
	},
	clearPostPicker(state, slug) {
		if (slug) {
			state.picker_list = state.picker_list.filter(x => {
				return x.meta.slug == slug;
			})
		} else {
			state.picker_list = []
		}
	},

	[GET_POST_EXTRA_ASYNC.SUCCESS] (state, payload) {
    state.extra = payload.extra
		Vue.delete(state, [GET_POST_EXTRA_ASYNC.errorKey])
	},
	[GET_POST_EXTRA_ASYNC.FAILURE] (state, error) {
		Vue.set(state, [GET_POST_EXTRA_ASYNC.errorKey], error)
	},
}

const actions = {
	async fetchPosts({commit}, payload) {
		let params = {
			type: 'blog.BlogPage',
			fields: '_,slug,title',
			search: payload.query
		}
		await get(commit, {
			url: `/api/v2/pages/`,
			mutationTypes: GET_PICKER_LIST_ASYNC,
			payload: {params: params}
    })
	},
	async clearPosts({commit}, payload) {
		commit('clearPostPicker', payload);
	},
	async fetchPost({commit}, payload) {
		let params = {
			fields: '_,extra',
		}
		await get(commit, {
			url: `/api/v2/pages/${payload}/`,
			mutationTypes: GET_POST_EXTRA_ASYNC,
			payload: {params: params}
    })
	},
}

export default {
  namespaced: true,
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions,
}