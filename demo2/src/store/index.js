import Vue from 'vue'
import Vuex from 'vuex'
import myHeader from './module/myHeader'
import myContent from './module/myContent'
import myFooter from './module/myFooter'
import a from 'vuex-persistedstate'
Vue.use(Vuex)

export default new Vuex.Store({
	state: {

	},
	getters: {},
	mutations: {
	},
	actions: {},
	modules: {
		myHeader, myContent, myFooter
	},
	plugins: [
		a()
	]
})