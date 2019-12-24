<template>
	<view class="bg-white">
		<!-- 顶部导航栏 -->
		<cu-custom-home bgColor="bg-gradual-blue"><block slot="content">哈理工校园服务号</block></cu-custom-home>
		<!-- 搜索框 -->
		<view class="cu-bar search bg-white">
			<view class="search-form round">
				<text class="cuIcon-search"></text>
				<input @focus="InputFocus" @blur="InputBlur" :adjust-position="false" type="text" 
				placeholder="搜索图片、文章、视频" confirm-type="search"></input>
			</view>
			<view class="action">
				<button class="cu-btn bg-green shadow-blur round">搜索</button>
			</view>
		</view>
		
		<!-- 轮播图 -->
		<swiper class="screen-swiper square-dot" :indicator-dots="true" :circular="true" :autoplay="true" 
			interval="5000" duration="500" indicator-color="#8799a3" indicator-active-color="#0081ff">
			<swiper-item v-for="(item,index) in swiperList" :key="index">
				<image :src="item" class="imgx px-2 roundx"></image>
			</swiper-item>
		</swiper>
		
		<!-- 5个分类 -->
		<view class="cate-section">
			<view v-for="(item, index) in category" :key="index">
				<view class="cate-item">
					<image :src="item.src" class="imageClass"></image>
					<text class="text-bold">{{item.title}}</text>
				</view>
			</view>
		</view>
		
		<!-- 广告位 -->
		<view class="d-flex j-center bg-white mb-2">
			<image src="../../static/index/ad3.jpg" mode="widthFix" class="mx-2"></image>
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
			
		
		
		
		
		<!-- 底部撑起 -->
	  <view class="flex">
	  	<view class="bottonx"></view>
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
				PageCur: 'index',
				modalName: null,
				swiperList: ['/static/index/banner1.jpg', '/static/index/banner2.jpg', '/static/index/banner3.jpg'],
				category: [
					{src: "/static/index/class2.jpg", title: "书籍"},
					{src: "/static/index/class1.jpg", title: "电子"},
					{src: "/static/index/class3.jpg", title: "日用"},
					{src: "/static/index/class4.jpg", title: "美妆"},
					{src: "/static/index/class5.jpg", title: "其他"},
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
			NavChange: function(e) {
				this.PageCur = e.currentTarget.dataset.cur
				console.log(e);
			},
			showModal(e) {
				this.modalName = e.currentTarget.dataset.target
			},
			hideModal(e) {
				this.modalName = null
			}
			
			
		},
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
	.imgx {
		height: 160upx;
	}
	.roundx {
		border-radius: 12upx !important;
	}
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
