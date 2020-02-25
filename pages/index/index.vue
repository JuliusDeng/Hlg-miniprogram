<template>
	<view class="bg-white">
		<!-- 顶部导航栏 -->
		<cu-custom-home bgColor="bg-gradual-blue"><block slot="content">重庆大学校园服务号</block></cu-custom-home>
		<!-- 搜索框 -->
		<!-- <view class="cu-bar search bg-white">
			<view class="search-form round">
				<text class="cuIcon-search"></text>
				<input @focus="InputFocus" @blur="InputBlur" :adjust-position="false" type="text" 
				placeholder="搜索图片、文章、视频" confirm-type="search"></input>
			</view>
			<view class="action">
				<button class="cu-btn bg-green shadow-blur round">搜索</button>
			</view>
		</view> -->
		
		<!-- 轮播图 -->
		<swiper indicator-dots="true" indicator-color="green" indicator-active-color="blue" 
		:autoplay="true" :interval="3000" :duration="500" circular="true" class="square-dot"
		 style="width: 100%;height: 380rpx;">
			<swiper-item class="m-3" >
				<image src="../../static/temp/banner1.jpg" style="width: 690rpx;height: 300rpx;"
				class="rounded-24"></image>
			</swiper-item>
			<swiper-item class="m-3" style="width: 690rpx;height: 300rpx;">
				<image src="../../static/temp/banner2.jpg" style="width: 690rpx;height: 300rpx;"
				class="rounded-24"></image>
			</swiper-item>
			<swiper-item class="m-3" style="width: 690rpx;height: 300rpx;">
				<image src="../../static/temp/banner3.jpg" style="width: 690rpx;height: 300rpx;"
				class="rounded-24"></image>
			</swiper-item>
		</swiper>
		
		<!-- 5个分类 -->
			<!-- 教务处 -->
		<view class="ml-3">
			<text class="cuIcon-title text-cyan"></text>教务信息处
		</view>
		<view class="row j-center m-2">
			<block v-for="(item, index) in office" :key="index">
				<view class="span-4 d-flex flex-column j-center a-center py-1" @click="event(item.nav)">
					<image :src=item.src mode="widthFix" style="width: 60rpx;height: 60rpx;"></image>
					<text class="text-sm text-bold">{{item.title}}</text>
				</view>
			</block>
		</view>
			<!-- 物品交易栏 -->
		<view class="ml-3">
			<text class="cuIcon-title text-pink"></text>物品交易栏
		</view>
		<view class="cate-section">
			<view v-for="(item, index) in category" :key="index">
				<view class="cate-item" @click="event(item.nav)">
					<image :src="item.src" class="imageClass"></image>
					<text class="text-bold">{{item.title}}</text>
				</view>
			</view>
		</view>
		
		<!-- 广告位 -->
		<view class="d-flex j-center bg-white mb-2">
			<image src="/static/temp/banner4.jpg" mode="widthFix" class="mx-2"></image>
		</view>
		<!-- 分割线 -->
		<divider></divider>
		<!-- 物品展示栏 -->
		<view class="" v-for="(item, index) in detailClass" :key="index">
			<!-- 分类标题 -->
			<view class="flex align-center justify-between padding" style="padding-bottom: 10rpx;margin-top: 10rpx;">
				<view>
					<text class="cuIcon-titles" :class="'text-' + item.describe[2]"></text>
					<text class="text-black text-lg text-bold">{{item.title}}</text>
				</view>
				<view class="flex align-center text-gray">
					<text>查看更多</text>
					<text class="cuIcon-right"></text>
				</view>
			</view>
			<!-- 两列物品展示栏 -->
			<view class="mx-2 row j-sb">
				<view class="" style="width:345upx" v-for="i in 8" :key="i">
					<image :src="item.src" style="width: 355upx;height: 380upx;"></image>
					<view class="p-2 pt-1">
						<view class="text-lg text-bold text-black">{{item.describe[0]}}</view>
						<button class="cu-btn round sm" :class="'lines-' + item.describe[2]">{{item.describe[1]}}</button>
					</view>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	import cuCustomHome from "@/colorui/components/cu-custom-home.vue"
	
	export default {
		components: {
			cuCustomHome
		},
		data() {
			return {
				office: [
					{src: "/static/indexnav/1.png", title: "考试安排", nav: "in-books"},
					{src: "/static/indexnav/2.gif", title: "成绩查询", nav: "in-phone"},
					{src: "/static/indexnav/3.gif", title: "校历寒假", nav: "in-life"},
					{src: "/static/indexnav/4.gif", title: "校车时间", nav: "in-beauty"},
					{src: "/static/indexnav/5.gif", title: "其他通知", nav: "in-others"},
				],
				category: [
					{src: "/static/indexnav/6.gif", title: "书籍", nav: "in-books"},
					{src: "/static/indexnav/7.gif", title: "电子", nav: "in-phone"},
					{src: "/static/indexnav/8.gif", title: "日用", nav: "in-life"},
					{src: "/static/indexnav/9.gif", title: "美妆", nav: "in-beauty"},
					{src: "/static/indexnav/10.gif", title: "其他", nav: "in-others"},
				],
				detailClass: [
					{
						title: "新书上架", src: "/static/index/goods/p4.jpg", describe: ["《ES6标准入门》", "西区十公寓", "red"], 
					},
					{
						title: "电子产品", src: "/static/index/goods/p2.jpg", describe: ["华为畅享8S", "西区一公寓", "blue"],
					},
					{
						title: "生活日用", src: "/static/index/goods/p2.jpg", describe: ["白色智能台灯", "西区三公寓", "olive"],
					},
					{
						title: "美妆精品", src: "/static/index/goods/p5.jpg", describe: ["日本SKLL香水", "西区五公寓", "cyan"],
					},
					{
						title: "其他物品", src: "/static/index/goods/p7.jpg", describe: ["编个什么呢", "西区七公寓", "pink"],
					},
				]
			}
		},
		methods: {
			event(path) {
				if(!path) return;
				uni.navigateTo({
					url: `/pages/${path}/${path}`,
					success: res => {},
					fail: () => {console.log("navigate 跳转失败");},
					complete: () => {}
				});
			}
			
		},
	}
</script>

<style>
	.cate-section{
		display: flex;
		justify-content: space-around;
		align-items: center;
		flex-wrap:wrap;
		padding: 30upx 22upx; 
		background: #fff;
	}
	.cate-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		font-size: 25upx;
	}
	.imageClass {
		width: 88upx;
		height: 88upx;
		margin-bottom: 14upx;
		border-radius: 50%;
		/* opacity: .7; */
		box-shadow: 4upx 4upx 20upx rgba(250, 67, 106, 0.3);
	}
</style>
