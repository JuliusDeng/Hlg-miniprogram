<template>
	"29_t5X9BMbdAn3KcZzgCwvprzJ3oQriFgxCEoiMREGfeeO_LuJakqmt5haVfr4"
	cloudID: "29_tfZNEmrchBk_in18SB9v9hd3bo3uNvBxxblIk4YiKOPSPUhsdfEeQdNVTrA"
	signature: "eb8289245b064e126cd944de9d13b42b9b5809c6"
	<view>
		<!-- 黄色头部 -->
		<view class="d-flex a-center bgcolor border-radu border" style="height: 220rpx;">
			<!-- <view class="cuIcon-settings position-absolute" style="font-size: 50rpx;top: 110rpx;right: 60rpx;"></view> -->
			<view class="d-flex j-center">
				<image :src="userinfo.avatarUrl || '/static/index/goods/p10.jpg'"
				style="width: 145rpx;height: 145rpx;" class="flex-1 rounded-12 border-light ml-2"></image>
				<view class="flex-3 ml-2">
					<view class="text-lg text-bold">JuliusDeng</view>
					<button class="cu-btn round sm bg-green">退出登录</button>
				</view>
			</view>
		</view>
		<!-- 白色三列表 -->
		<!-- <view class="d-flex j-center a-center" style="margin-top: -55rpx;">
			<view class="px-2 bg-white rounded-24 d-flex a-center j-center" style="width: 710rpx;height: 110rpx;">
				<view class="span24-8 text-df d-flex j-center border-right text-black">
					<text class="cuIcon-favor text-red"></text>
					0超赞
				</view>
				<view class="span24-8 text-df d-flex j-center border-right text-black">
					0关注
				</view>
				<view class="span24-8 text-df d-flex j-center text-black">
					0粉丝
				</view>
			</view>
		</view> -->
		<!-- 广告图 -->
		<image src="../../static/person/ad2.jpg" class="p-2" mode="widthFix"></image>
		<!-- 卖在咸鱼 -->
		<!-- <view class="mx-2 bg-white rounded-24 py-2">
			<view class="text-bold text-df text-black pl-2">卖在咸鱼</view>
			<view class="d-flex">
				<view class="span24-12 d-flex flex-column a-center j-center">
					<image src="../../static/index/class1.jpg" style="width:65rpx;height:65rpx"></image>
					<view class="mt-1">我的发布0</view>
				</view>
				<view class="span24-12 d-flex flex-column a-center j-center">
					<image src="../../static/index/class2.jpg" style="width:65rpx;height:65rpx"></image>
					<view class="mt-1">我的卖出0</view>
				</view>
			</view>
			<view class="d-flex j-sb a-center bg-x mx-2 my-1 rounded-12 py-1">
				<view class="d-flex a-center">
					<image src="../../static/index/goods/p2.jpg" style="width: 70rpx;height: 50rpx;" class="pl-1"></image>
					<view class="text-blue ml-1">交易已成功，给对方一个评价吧</view>
				</view>
				<view class="text-blue rounded-12 text-xs px-1 mr-2" style="border:1rpx solid #007AFF;">去评价</view>	
			</view>
		</view> -->
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
		
		<view class="d-flex j-center a-center">
			服务校园小程序
			@2020 邓宇辰
		</view>
		
		
		
		
		
		<!-- 底部撑起 -->
		<!-- <view class="flex">
			<view class="bottonx align-end"></view>
		</view> -->
	</view>
</template>

<script>
</script>

<style>
	.bgcolor {
		background-color: #FFD84D;
	}
	
	.border-radu{
		border-radius: 0 0 24rpx 24rpx;
	}
	
	
</style>
