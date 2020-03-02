import Vue from 'vue';
import { get } from '@/services/wagtail';
import { createAsyncMutation } from '@/store/mutation-types';

const GET_PICKER_LIST_ASYNC = createAsyncMutation('GET_PICKER_LIST')

const state = {
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
	clearPostPicker(state, id) {
		if (id) {
			state.picker_list = state.picker_list.filter(x => {
				return x.id == id;
			})
		} else {
			state.picker_list = []
		}
	},
}

const actions = {
	async fetchPosts({commit}, payload) {
		let params = {
			type: 'blog.BlogPage',
			fields: '_,id,title',
			search: payload.query
		}
		// change to getAll if more than 10 results required in display
		await get(commit, {
			url: `/api/v2/pages/`,
			mutationTypes: GET_PICKER_LIST_ASYNC,
			payload: {params: params}
    })
	},
	async clearPosts({commit}, payload) {
		commit('clearPostPicker', payload);
	},
}

export default {
  namespaced: true,
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions,
}