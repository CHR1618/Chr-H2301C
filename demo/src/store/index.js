import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
// 	state: {
// 		list: [{
// 				id: 0,
// 				status: false,
// 				title: '抽烟'
// 			},
// 			{
// 				id: 1,
// 				status: false,
// 				title: '喝酒'
// 			},
// 			{
// 				id: 2,
// 				status: false,
// 				title: '烫头'
// 			}
// 		]
// 	},
// 	getters: {},
// 	mutations: {
// 		// 添加方法
// 		add(state, obj) {
// 			state.list.unshift(obj)
// 		},

// 		// 删除方法
// 		del(state, id) {
// 			let i = state.list.findIndex(ele => ele.id == id)
// 			state.list.splice(i, 1)
// 			console.log(state);
// 		},

// 		// 清除已完成方法
// 		clear(state) {
// 			state.list = state.list.filter(ele => ele.status == false)
			
// 		}
// 	},
// 	actions: {},
// 	modules: {}
})