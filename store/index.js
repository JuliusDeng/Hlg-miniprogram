import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		num: 1,
		list: [
			{id: 1, name: "商品1", status: false, num: 1},
			{id: 2, name: "商品2", status: true, num: 10},
			{id: 3, name: "商品3", status: false, num: 15},
			{id: 4, name: "商品4", status: true, num: 3},
			{id: 5, name: "商品5", status: true, num: 5},
			{id: 6, name: "商品6", status: true, num: 6},
		],
		test: {title: "love"}
	},
	getters: {
		act: (state) => {
			return state.list.filter( v => v.status)
		},
		noAct: (state) => {
			return state.list.filter(v => !v.status )
		},
		getList: (state, getters) => {
			return getters.act.filter(v => {
				return v.num > 5
			})
		},
		getById: (state) => (id) => {
			return state.list.filter(v => {
				return v.id === id
			})
		}
	},
	mutations: {
		inc(state, n) {
			// state.num++
			state.num += n
			console.log("开始使用vue核心技术——vuex");
			console.log(state.num);
		}
	},
	actions: {
		// AsyncInc(context, n) {
		AsyncInc({commit, state}, n) {	
			setInterval(() => {
				// context.commit 它其实相当于 this.$store.commit()
				// context.commit('inc', n)
				// console.log(context.state.num);
				
				commit('inc', n)
				console.log(state.num);
			}, 2000)
		}
	}
})