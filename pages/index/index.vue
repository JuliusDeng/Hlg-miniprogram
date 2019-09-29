<template>
	<view class="">
		<!-- 搜索框 -->
		<view class="border m-3 rounded-12" style="height: 80upx;">
			<input type="text" value="请输入你想要搜索的物品" class="px-2 font-blg" style="height: 100%;"/>
		</view>
		<!-- 首页轮播图组件 -->
		<swiper-image :swipers="swipers"></swiper-image>
		<!-- 图标分类组件 -->
		<index-nav :indexnav="indexnav"></index-nav>
		<divider></divider>
		<!-- 首页横向右滑商品组件 -->
		<slidex :cardtitle="cardtitle" :cardimg="cardimg"></slidex>
		
		
		
	</view>
</template>

<script>
	import slidex from "@/components/index/slidex.vue"
	import divider from "@/components/common/divider.vue"
	import indexNav from "@/components/index/index-nav.vue"
	import swiperImage from "@/components/index/swiper-image.vue"
	export default {
		components:{
			swiperImage,
			indexNav,
			divider,
			slidex
		},
		data() {
			return {
				swipers: [
					{src: "/static/images/index/sumslider/demo2.jpg"},
					{src: "/static/images/index/sumslider/demo3.jpg"},
					{src: "/static/images/index/sumslider/demo4.jpg"}
				],
				indexnav:[
					{src: "/static/images/index/indexnav/books.png",title: "书籍"},
					{src: "/static/images/index/indexnav/ditigal.png",title: "数码"},
					{src: "/static/images/index/indexnav/beauty.png",title: "美妆"},
					{src: "/static/images/index/indexnav/life.png",title: "生活"},
					{src: "/static/images/index/indexnav/others.png",title: "其他"},
				],
				cardtitle: [
					'新品发布', '书籍专项', '电子产品', 
				'美妆专场', '生活日用', '窈窕淑女'
				],
				cardimg: [
					{src: "../../static/images/demo/list/1.jpg"},
					{src: "../../static/images/demo/list/2.jpg"},
					{src: "../../static/images/demo/list/3.jpg"},
					{src: "../../static/images/demo/list/4.jpg"},
					{src: "../../static/images/demo/list/5.jpg"},
					{src: "../../static/images/demo/list/6.jpg"}
				]
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	/* 3 */
</style>
