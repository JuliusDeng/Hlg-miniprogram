<template>
	<view class="">
		<swiper :indicator-dots="true" autoplay :interval="3000" :duration="1000" circular  >
			<block v-for="(item, index) in swipers" :key="index">
				<swiper-item > 
					<view class="swiper-item px-3" @tap="event(item)">
						<image :src="item.src" lazy-load class="imagea rounded-24 "></image>
					</view>
				</swiper-item>
			</block>
		</swiper>
		
	</view>
</template>

<script>
	export default {
		props:{
			swipers:Array
		},
		methods:{
			event(item){
				console.log('点击了轮播图')
			}
		}
	}
</script>

<style>
	.imagea{
		height: 300upx;
		width: 100%;
	}
</style>
