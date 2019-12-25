<template>
	<view class="container">
		<!-- <view class="user-section">
			<image src="/static/person/user-bg1.jpg" class="bg"></image>
			<view class="user-info-box">
				<view class="portrait-box">
					<image :src="userinfo.avatarUrl || '/static/person/missing-face.png'" class="portrait"></image>
				</view>
				<view class="info-box">
					<text class="username">{{userinfo.nickname || '请登录'}}</text>
				</view>
			</view>
		</view> -->
		<!-- <view class="vip-card-box px-2">
			<view class="tit">
				<text class="yticon icon-iLinkapp-"></text>
				哈尔滨理工大学专属应用
			</view>
			<text class="e-m">风筝误</text>
			<text class="e-b">风筝误 悟满相思挂苍苔</text>
		</view> -->
		<!-- 头部 -->
		<view class="position-relative d-flex a-center" style="height: 380rpx;">
			<image src="/static/person/user-bg1.jpg" style="height: 380rpx;width: 100%;"></image>
			<view class="d-flex a-center position-absolute left-0">
				<image :src="userinfo.avatarUrl || '/static/person/missing-face.png'" 
				style="width: 145rpx;height: 145rpx;border: 5rpx solid;" class="rounded-circle border-light ml-4"></image>
				<view class="ml-2 font-md">请登录</view>
			</view>
		</view>
		<!-- 黑色背景 -->
		<view class="d-flex j-center a-center position-relative" style="margin-top: -80rpx;">
			<view class="px-2 bg-danger " style="width: 710rpx;height: 160rpx;">
				<view class="title">
					<text class="cuIcon-favor text-red"></text>
					<text>信息1</text>
				</view>
			</view>
		</view>
		
		<!-- 底部撑起 -->
		<view class="flex">
			<view class="bottonx align-end"></view>
		</view>
	</view>
</template>

<script>
	
	export default {
		components: {
		},
		data() {
			return {
				// iconx: cuIcon-taxi cuIcon-same cuIcon-shop
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	.bottonx {
		background: #007AFF;
		min-height: 100upx;
		padding: 0;
		height: calc(100upx + env(safe-area-inset-bottom) / 2);
		padding-bottom: calc(env(safe-area-inset-bottom) / 2);
	}
	
	.container {
		background-color: #F5F5F5;
		min-height: 100vh;
	}
	
	.user-section {
		height: 520upx;
		padding: 100upx 30upx 0;
		position: relative;
	
		.bg {
			position: absolute;
			left: 0;
			top: 0;
			width: 100%;
			height: 100%;
			filter: blur(1px);
			opacity: .7;
		}
	}
	
	.user-info-box {
		height: 180upx;
		display: flex;
		align-items: center;
		position: relative;
		z-index: 1;
	
		.portrait {
			width: 130upx;
			height: 130upx;
			border: 5upx solid #fff;
			border-radius: 50%;
		}
	
		.username {
			font-size: 36upx;
			margin-left: 20upx;
		}
	}
	
	.vip-card-box {
		display: flex;
		flex-direction: column;
		color: #f7d680;
		height: 240upx;
		background: linear-gradient(left, #333333, #000000);
		border-radius: 16upx 16upx 0 0;
		overflow: hidden;
		position: relative;
		margin: -240upx 0 0 0;
		padding: 20upx 24upx;
	
		.tit {
			// font-size: $font-base+2upx;
			font-size: 40upx;
			color: #f7d680;
			margin-bottom: 28upx;
	
			.yticon {
				color: #f6e5a3;
				margin-right: 16upx;
			}
		}
	
		.e-b {
			// font-size: $font-sm;
			color: #d8cba9;
			margin-top: 10upx;
		}
	}
</style>
