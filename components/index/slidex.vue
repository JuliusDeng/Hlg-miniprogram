<template>
	<view>
		<!-- <card>
			<view slot="title" class="d-flex a-center j-sb" v-for="(item, index) in cardtitle" :key="index">
				<text style="font-size: 35upx;" class="font-lg font-weight">{{item}}</text>
				<view class="text-secondary font-md">
					 查看更多<text class="iconfont icon-you font"></text>
				</view>
			</view>
		</card> -->
		<slidex v-for="(item, index) in cardtitle" :key="index">
			<!-- 分类标题项 -->
			<card>
				<view slot="title" class="d-flex a-center j-sb px-3" >
					<text style="font-size: 35upx;" class="font-lg font-weight">{{item}}</text>
					<view class="text-secondary font-md">
						 查看更多<text class="iconfont icon-you font"></text>
					</view>
				</view>
			</card>
			<!-- 横向列表图片 -->
			<scroll-view scroll-x class="scroll-row" >
				<view class="scroll-row-item ml-3 mt-1" style="width: 280upx;height: 400upx;"
				v-for="(item, index) in cardimg" :key="index">
					<image :src="item.src" class="rounded-12"></image>
				</view>
			</scroll-view>
		</slidex>
	</view>
</template>

<script>
	export default{
		props: {
			cardtitle: Array,
			cardimg: Array
		}
	}
</script>

<style>
</style>
