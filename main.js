import Vue from 'vue'
import App from './App'
import store from './store/index.js'

Vue.prototype.$store = store


// 引入全局分割线
import divider from "@/components/common/divider.vue"
Vue.component('divider', divider)

// 引入全局导航navigate
Vue.prototype.$navigate = function navigate(path) {
		if(!path) return;
		uni.navigateTo({
			url: `/pages/${path}/${path}`,
			success: res => {},
			fail: () => {console.log("navigate 跳转失败");},
			complete: () => {}
		});
	}




Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App,
		store
})
app.$mount()
