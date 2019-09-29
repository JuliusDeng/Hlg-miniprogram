export default {
	data() {
		return {
			beforeReady: true,
		}
	},
	onReady() {
		this.$nextTick(() => {
			setTimeout(() => {
				this.beforeReady = false
			}, 500)
		})
	}
}