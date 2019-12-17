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
			<view class="cate-item">
				<image src="/static/index/class1.jpg" class="imageClass"></image>
				<text>书籍</text>
			</view>
			<view class="cate-item">
				<image src="/static/index/class2.jpg" class="imageClass"></image>
				<text>电子</text>
			</view>
			<view class="cate-item">
				<image src="/static/index/class3.jpg" class="imageClass"></image>
				<text>日用</text>
			</view>
			<view class="cate-item">
				<image src="/static/index/class4.jpg" class="imageClass"></image>
				<text>美妆</text>
			</view>
			<view class="cate-item">
				<image src="/static/index/class5.jpg" class="imageClass"></image>
				<text>其他</text>
			</view>
		</view>
		<!-- 广告位 -->
		<view class="d-flex j-center bg-white mb-2">
			<image src="../../static/index/ad3.jpg" mode="widthFix" class="mx-2"></image>
		</view>
		<!-- 分割线 -->
		<divider></divider>
		<!-- 物品展示栏 -->
			<!-- 分类标题项 -->
		<view class="flex align-center justify-between padding" style="padding-bottom: 10rpx;margin-top: 10rpx;">
		  <text class="text-black text-lg">新书上架</text>
		  <view class="flex align-center text-gray">
		    <text>查看更多</text>
		    <text class="cuIcon-right"></text>
		  </view>
		</view>
		<!-- 物品 -->
		<view class="product-list">
			<view class="product"  >
				<image mode="widthFix" src="/static/index/goods/p1.jpg"></image>
				<view class="name">ES6标准入门</view>
				<view class="info">
					<view class="cu-avatar lg round margin-left" 
					style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big25002.jpg);"></view>
					<view class="slogan">西区十公寓</view>
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
				swiperList: ['/static/index/banner1.jpg', '/static/index/banner2.jpg', 
				'/static/index/banner3.jpg']
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
