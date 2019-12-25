<template>
	<view>
		<!-- 黄色头部 -->
		<view class="d-flex a-center bgcolor border-radu" style="height: 300rpx;">
			<view class="cuIcon-settings position-absolute" style="font-size: 50rpx;top: 110rpx;right: 60rpx;"></view>
			<view class="d-flex">
				<image :src="userinfo.avatarUrl || '/static/index/goods/p10.jpg'"
				style="width: 145rpx;height: 145rpx;" class="flex-1 rounded-12 border-light ml-2"></image>
				<view class="flex-3 ml-2">
					<view class="text-lg text-bold">没落的师兄辰</view>
					<view class="text-df">昵称：我家宝儿姐人美路子野</view>
					<view class="text-df bg-white d-flex j-center a-center rounded-24" style="width: 148rpx;">
						个人主页<view class="cuIcon-right"></view>
					</view>
				</view>
			</view>
		</view>
		<!-- 白色三列表 -->
		<view class="d-flex j-center a-center" style="margin-top: -55rpx;">
			<view class="px-2 bg-white rounded-24 d-flex a-center j-center" style="width: 710rpx;height: 110rpx;">
				<view class="span24-8 text-df d-flex j-center border-right text-black">
					<!-- <text class="cuIcon-favor text-red"></text> -->
					0超赞
				</view>
				<view class="span24-8 text-df d-flex j-center border-right text-black">
					0关注
				</view>
				<view class="span24-8 text-df d-flex j-center text-black">
					0粉丝
				</view>
			</view>
		</view>
		<!-- 广告图 -->
		<image src="../../static/person/ad2.jpg" class="p-2" mode="widthFix"></image>
		<!-- 卖在咸鱼 -->
		<view class="mx-2 bg-white rounded-24 py-2">
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
		</view>
		<!-- 买在咸鱼 -->
		<view class="mx-2 bg-white rounded-24 py-2 mt-2">
			<view class="text-bold text-df text-black pl-2">买在咸鱼</view>
			<view class="d-flex">
				<view class="span24-12 d-flex flex-column a-center j-center">
					<image src="../../static/index/class3.jpg" style="width:65rpx;height:65rpx"></image>
					<view class="mt-1">买到的1</view>
				</view>
				<view class="span24-12 d-flex flex-column a-center j-center">
					<image src="../../static/index/class4.jpg" style="width:65rpx;height:65rpx"></image>
					<view class="mt-1">我收藏的0</view>
				</view>
				<view class="span24-12 d-flex flex-column a-center j-center">
					<image src="../../static/index/class5.jpg" style="width:65rpx;height:65rpx"></image>
					<view class="mt-1">我租到的0</view>
				</view>
			</view>
		</view>
		<!-- 玩在咸鱼 -->
		<view class="mx-2 bg-white rounded-24 py-2 my-2 ">
			<view class="text-bold text-df text-black pl-2">玩在咸鱼</view>
			<view class="d-flex flex-wrap">
				<view class="span24-6 d-flex flex-column a-center j-center my-2">
					<image src="../../static/index/class1.jpg" style="width:65rpx;height:65rpx"></image>
					<view class="mt-1">我的发布0</view>
				</view>
				<view class="span24-6 d-flex flex-column a-center j-center my-2">
					<image src="../../static/index/class2.jpg" style="width:65rpx;height:65rpx"></image>
					<view class="mt-1">我的卖出0</view>
				</view>
				<view class="span24-6 d-flex flex-column a-center j-center my-2">
					<image src="../../static/index/class1.jpg" style="width:65rpx;height:65rpx"></image>
					<view class="mt-1">我的发布0</view>
				</view>
				<view class="span24-6 d-flex flex-column a-center j-center my-2">
					<image src="../../static/index/class2.jpg" style="width:65rpx;height:65rpx"></image>
					<view class="mt-1">我的卖出0</view>
				</view>
				
				<!-- <view class="mt-2 d-flex flex-wrap"> -->
					<view class="span24-6 d-flex flex-column a-center j-center">
						<image src="../../static/index/class1.jpg" style="width:65rpx;height:65rpx"></image>
						<view class="mt-1">我的发布0</view>
					</view>
					<view class="span24-6 d-flex flex-column a-center j-center">
						<image src="../../static/index/class2.jpg" style="width:65rpx;height:65rpx"></image>
						<view class="mt-1">我的卖出0</view>
					</view>
					<view class="span24-6 d-flex flex-column a-center j-center">
						<image src="../../static/index/class1.jpg" style="width:65rpx;height:65rpx"></image>
						<view class="mt-1">我的发布0</view>
					</view>
					<view class="span24-6 d-flex flex-column a-center j-center">
						<image src="../../static/index/class2.jpg" style="width:65rpx;height:65rpx"></image>
						<view class="mt-1">我的卖出0</view>
					</view>
				<!-- </view> -->
			</view>
			<view class="d-flex j-sb a-center bg-x mx-2 my-1 rounded-12 py-1">
				<view class="d-flex a-center">
					<image src="../../static/index/goods/p2.jpg" style="width: 70rpx;height: 50rpx;" class="pl-1"></image>
					<view class="text-blue ml-1">已签到0天，连签7天得550咸鱼币！</view>
				</view>
				<view class="text-blue rounded-12 text-xs px-1 mr-2" style="border:1rpx solid #007AFF;">去签到</view>	
			</view>
		</view>
		
		
		
		
		
		
		<!-- 底部撑起 -->
		<view class="flex">
			<view class="bottonx align-end"></view>
		</view>
	</view>
</template>

<script>
</script>

<style>
	.bottonx {
		background: #007AFF;
		min-height: 100upx;
		padding: 0;
		height: calc(100upx + env(safe-area-inset-bottom) / 2);
		padding-bottom: calc(env(safe-area-inset-bottom) / 2);
	}
	
	.bgcolor {
		background-color: #FFD84D;
	}
	
	.border-radu{
		border-radius: 0 0 24rpx 24rpx;
	}
	
	.bg-x {
		background-color: #9fc5e8;
	}
	
</style>
