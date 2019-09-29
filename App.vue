<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	/*官方UI库 */
	@import "/common/uni.css";
	/*第三方动画库 */
	@import "/common/animate.css";
	/*自定义图标库 */
	@import "/common/icon.css";
	/*公共样式 */
	@import "/common/common.css";
	/*UI基础库 */
	@import "/common/zcm-main.css";
	
	/*每个页面公共css */
	/* @import "colorui/main.css";
	@import "colorui/icon.css"; */
</style>
