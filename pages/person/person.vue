<template>
	<view >
		<!-- 头部个人信息 -->
		<view class="d-flex a-center bgcolor border-radu border" style="height: 220rpx;">
			<view class="border ">
				<image :src="userInfo.avatarUrl || '/static/index/goods/p10.jpg'" style="width: 145rpx;height: 145rpx;" 
				class="flex-1 rounded-12 ml-2"></image>
			</view>
			
			<view class="ml-2 d-flex a-center border">
				<button class="cu-btn round bg-olive" open-type="getUserInfo" @getuserinfo="getUserInfo" v-if="!userInfo.avatarUrl">
					登录使用更多功能
				</button>
				<view class="" v-else>
					<view class="text-lg text-bold">{{userInfo.nickName}}</view>
					<button class="cu-btn round sm bg-grey" >退出登录</button>
				</view>
			</view>
			
			
		</view>
		<!-- 广告图 -->
		<image src="../../static/person/ad2.jpg" class="p-2" mode="widthFix"></image>
		<!-- 物品专栏 -->
		<view class="mx-2 bg-white rounded-24 py-2 mt-2">
			<view class="text-bold text-df text-black pl-2">物品专栏</view>
			<view class="d-flex">
				<view class="span24-12 d-flex flex-column a-center j-center">
					<image src="../../static/index/class3.jpg" style="width:65rpx;height:65rpx"></image>
					<view class="mt-1">我的发布</view>
				</view>
				<view class="span24-12 d-flex flex-column a-center j-center">
					<image src="../../static/index/class4.jpg" style="width:65rpx;height:65rpx"></image>
					<view class="mt-1">我的收藏</view>
				</view>
				<view class="span24-12 d-flex flex-column a-center j-center">
					<image src="../../static/index/class5.jpg" style="width:65rpx;height:65rpx"></image>
					<view class="mt-1">浏览历史</view>
				</view>
			</view>
		</view>
		
		<!-- 底部 -->
		<view class="d-flex j-center a-center mt-3">
			@2020 邓宇辰 周仁倾情奉献
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userInfo: {}
			}
		},
		methods: {
			userMsg() {
				uni.getUserInfo({
					success: (data) => {
						console.log(data, '111');
						this.userInfo = data.userInfo
						console.log(this.userInfo, '---this.userinfo');
					},
					fail: (data) => {
						console.log(data, "获取用户信息失败");
					},
					complete: () => {
						console.log("complete");
					}
				})
			},
			getUserInfo(data) {
				console.log(data, '---111data');
				if(data.mp.detail.rawData) {
					this.userMsg()
				}
			}
		}
		
		
	}
</script>

<style>
	.bgcolor {
		background-color: #FFD84D;
	}
	
	.border-radu{
		border-radius: 0 0 24rpx 24rpx;
	}
</style>
