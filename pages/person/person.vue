<template>
	<view>
		个人大幅度
		
		
		
		<!-- 底部撑起 -->
		<view class="flex">
			<view class="bottonx align-end"></view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	.bottonx {
		background: #007AFF;
		min-height: 100upx;
		padding: 0;
		height: calc(100upx + env(safe-area-inset-bottom) / 2);
		padding-bottom: calc(env(safe-area-inset-bottom) / 2);
	}
</style>
