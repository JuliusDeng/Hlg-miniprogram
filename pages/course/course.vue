<template>
	<view class="bg-white" style="height: 100vh;">
		<view class="d-flex a-center j-center text-lg text-bold bg-gray">
			第14周 (当前)
		</view>
		<!-- 课表顶部时间 -->
		<view class="d-flex border">
			<view class="d-flex j-center a-center text-orange text-bold" style="width: 70rpx; height: 70rpx;">
				01月
			</view>
			<view class="d-flex flex-wrap" style="width: 680rpx;">
				<!-- 星期 -->
				<view class="d-flex j-center a-center text-pink text-bold" style="width: 97rpx;height: 40rpx;"
				v-for="(item, index) in topTimes" :key="index">
					{{item.week}}
				</view>
				<!-- 日期 -->
				<view class="text-sm text-bold text-olive d-flex j-center a-center" style="width: 97rpx;height: 30rpx;"
				v-for="(item, index) in topTimes" :key="index">
					{{item.day}}
				</view>
			</view>
		</view>
		
		<!-- 每节课展示 -->
		<view class="d-flex">
			<!-- 左侧 -->
			<view style="width: 70rpx;">
				<block class="" v-for="(item, index) in classTimes" :key="index">
					<view class="border-bottom d-flex flex-column j-center " style="height: 210rpx;">
						<view class="d-flex j-center a-center">
							{{item.begin}}
						</view>
						<view class="d-flex j-center a-center">
							{{item.over}}
						</view>
					</view>
				</block>
			</view>
			
			<!-- 右侧 -->
			<view class="d-flex flex-column flex-wrap" style="width: 680rpx;height: 1050rpx;">
				<!-- 周一 -->
				<view class="" v-for="(item, idx) in classDetail" :key="idx" style="width: 97rpx;">
					<view class=" p d-flex j-center a-center" style="width: 97rpx;height: 210rpx;">
						<view class="d-flex j-center a-center rounded text-bold text-xs bg-red"
						style="width: 87rpx;height: 100%;">
							{{item.room}}{{item.title}}
						</view>
					</view>
				</view>
				<!-- 周二 -->
				<view class="" v-for="(item, idx) in classDetail" :key="idx" style="width: 97rpx;">
					<view class=" p d-flex j-center a-center" style="width: 97rpx;height: 210rpx;">
						<view class="d-flex j-center a-center rounded text-bold text-xs bg-orange"
						style="width: 87rpx;height: 100%;">
							{{item.room}}{{item.title}}
						</view>
					</view>
				</view>
				
				<view class="" v-for="(item, idx) in classDetail" :key="idx" style="width: 97rpx;">
					<view class=" p d-flex j-center a-center" style="width: 97rpx;height: 210rpx;">
						<view class="d-flex j-center a-center rounded text-bold text-xs bg-olive"
						style="width: 87rpx;height: 100%;">
							{{item.room}}{{item.title}}
						</view>
					</view>
				</view>
				<view class="" v-for="(item, idx) in classDetail" :key="idx" style="width: 97rpx;">
					<view class=" p d-flex j-center a-center" style="width: 97rpx;height: 210rpx;">
						<view class="d-flex j-center a-center rounded text-bold text-xs bg-cyan"
						style="width: 87rpx;height: 100%;">
							{{item.room}}{{item.title}}
						</view>
					</view>
				</view>
				<view class="" v-for="(item, idx) in classDetail" :key="idx" style="width: 97rpx;">
					<view class=" p d-flex j-center a-center" style="width: 97rpx;height: 210rpx;">
						<view class="d-flex j-center a-center rounded text-bold text-xs bg-mauve"
						style="width: 87rpx;height: 100%;">
							{{item.room}}{{item.title}}
						</view>
					</view>
				</view>
				<view class="" v-for="(item, idx) in classDetail" :key="idx" style="width: 97rpx;">
					<view class=" p d-flex j-center a-center" style="width: 97rpx;height: 210rpx;">
						<view class="d-flex j-center a-center rounded text-bold text-xs bg-green"
						style="width: 87rpx;height: 100%;">
							{{item.room}}{{item.title}}
						</view>
					</view>
				</view>
				<view class="" v-for="(item, idx) in classDetail" :key="idx" style="width: 97rpx;">
					<view class=" p d-flex j-center a-center" style="width: 97rpx;height: 210rpx;">
						<view class="d-flex j-center a-center rounded text-bold text-xs bg-pink"
						style="width: 87rpx;height: 100%;">
							{{item.room}}{{item.title}}
						</view>
					</view>
				</view>
				
				
			</view>
			
		</view>
		
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				topTimes: [
					{week: "星期一", day: "11日"},
					{week: "星期二", day: "12日"},
					{week: "星期三", day: "13日"},
					{week: "星期四", day: "14日"},
					{week: "星期五", day: "15日"},
					{week: "星期六", day: "16日"},
					{week: "星期日", day: "17日"},
				],
				classTimes: [
					{begin: "08:10", over: "09:50"},
					{begin: "10:10", over: "11:50"},
					{begin: "13:30", over: "15:10"},
					{begin: "15:20", over: "17:00"},
					{begin: "18:00", over: "19:40"},
				],
				classDetail: [
					{room: "@西区H520", title: "电力电子技术1"},
					{room: "@西区H520", title: "通信原理技术2"},
					{room: "@西区H520", title: "通信原理技术3"},
					{room: "@西区H520", title: "电力电子技术4"},
					{room: "@西区H520", title: "电力电子技术5"},
				]
			}
		}
	}
</script>

<style>
</style>
