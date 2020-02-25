<template>
	<view>
		<view class="">
			斯蒂芬斯蒂芬斯蒂芬说的
		</view>
	</view>
</template>

<script>
	import {mapState, mapGetters, mapMutations, mapActions} from "vuex"
	
	export default {
		data() {
			return {
				
			}
		},
		onLoad() {
			// state 用法
			// console.log(JSON.stringify(this.$store.state.list));
			// console.log(JSON.stringify(this.list));
			// console.log(JSON.stringify(this.test));
			// console.log(JSON.stringify(this.newList));
			
			// getters 用法
			// console.log(JSON.stringify(this.$store.getters.act));
			// console.log(JSON.stringify(this.inact));
			// console.log(JSON.stringify(this.innoact));
			// console.log(JSON.stringify(this.getList));
			// console.log(JSON.stringify(this.getById(1)));
			
			// mutations 方式一 $store调用
			// this.$store.commit('inc')
			// mutations 方式二 mapMutations 函数调用
			this.inc2("love")
			
			// actions 方式一 $store调用
			// this.$store.dispatch('AsyncInc')
			// actions 方式二 mapActions
			this.AsyncInc(100)
		},
		// computed: mapState({
		// 	list: state => state.list
		// }),
		computed: {
			// ...mapState({
			// 	list: state => state.list,
			// 	test: "test", // 注意是字符串
			// 	newList(state) {
			// 		return state.list.filter(v => v.status)
			// 	}
			// })
			// ...mapState([
			// 	"list"
			// ])
			
			// ...mapGetters(['act', 'noAct'])
			...mapGetters({
				inact: "act",
				innoact: "noAct",
				getList: "getList",
				getById: "getById"
			})
		},
		methods: {
			// ...mapMutations(['inc'])
			...mapMutations({
				inc2: "inc"
			}),
			
			...mapActions(['AsyncInc'])
		}
	}
</script>

<style>

</style>
