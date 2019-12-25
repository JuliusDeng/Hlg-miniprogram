<template>
	<view>
		<index v-if="PageCur=='index'"></index>
		<community v-if="PageCur=='community'"></community>
		<course v-if="PageCur=='course'"></course>
		<person v-if="PageCur=='personal'"></person>
		
		<view class="cu-bar tabbar bg-white shadow foot">
			<view class="action" @click="NavChange" data-cur="index">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/index' + [PageCur=='index'?'-ac':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='index'?'text-green':'text-gray'">首页</view>
			</view>
			
			<view class="action" @click="NavChange" data-cur="course">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/course' + [PageCur == 'course'?'-ac':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='course'?'text-green':'text-gray'">课表</view>
			</view>
			
			<view class="action" @click="NavChange" data-cur="community">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/community' + [PageCur == 'community'?'-ac':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='community'?'text-green':'text-gray'">社区</view>
			</view>
			
			<view class="action" @click="NavChange" data-cur="personal">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/personal' + [PageCur == 'personal'?'-ac':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='personal'?'text-green':'text-gray'">我的</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				PageCur: 'index'
			}
		},
		methods: {
			NavChange: function(e) {
				this.PageCur = e.currentTarget.dataset.cur
				console.log(e);
			}
		},
		onLoad() {
			
		}
	}
</script>

<style>
.cont {
	background: #007AFF;
}
</style>
