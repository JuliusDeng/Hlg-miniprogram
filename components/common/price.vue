<template>
	<view class="d-flex line-h" :class="priceSize+' '+color">
		<text class="a-self-start" :class="unitSize">￥</text><slot />
	</view>
</template>

<script>
	export default {
		props:{
			priceSize:{
				type:String,
				default:"font-md"
			},
			unitSize:{
				type:String,
				default:"font-sm"
			},
			color:{
				type:String,
				default:"main-text-color"
			}
		}
	}
</script>

<style>
</style>
