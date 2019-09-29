<template>
	<view class="j-center row p-3">
		<view class="span-4 d-flex flex-column a-center j-center index-nav"
		v-for="(item, index) in indexnav" :key="index">
			<image :src="item.src"  style="width: 60upx;height: 60upx;" mode="widthFix"></image>
			<text class="font text-muted">{{item.title}}</text>
		</view>	
	</view>		
</template>

<script>
	export default{
		props:{
			indexnav: Array
		}
	}
</script>

<style>
</style>
