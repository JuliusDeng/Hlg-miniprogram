<template>
	<view class="card">
		<!-- head -->
		<view v-if="showhead" class="p-2 main-border-color"
		:class="getHeadClass">
			<slot name="title">
				<text v-if="headTitle" class="font-md"
				:class="headTitleWeight?'font-weight':''">{{headTitle}}</text>
			</slot>
		</view>
		<!-- body -->
		<view :class="getBodyClass" :style="bodyStyle">
			<image v-if="bodyCover" :src="bodyCover" 
			mode="widthFix"></image>
			<slot />
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			bodyStyle:String,
			// 头部标题
			headTitle:String,
			// 封面图
			bodyCover:String,
			// 是否显示头部
			showhead:{
				type:Boolean,
				default:true
			},
			// 是否显示下边线
			headBorderBottom:{
				type:Boolean,
				default:true
			},
			// 标题是否加粗
			headTitleWeight:{
				type:Boolean,
				default:true
			},
			// 是否给body加padding
			bodyPadding:{
				type:Boolean,
				default:false
			}
		},
		computed: {
			getHeadClass() {
				let BorderBottom = this.headBorderBottom ? 'border-bottom':''
				return `${BorderBottom}`
			},
			getBodyClass(){
				let padding = this.bodyPadding ? 'p-2' : ''
				return `${padding}`
			}
		},
	}
</script>

<style>
</style>
