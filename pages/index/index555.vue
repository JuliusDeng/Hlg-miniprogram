<template>
	<view>
		
		<block v-for="(item1, index1) in showList" :key="index1">
			<!-- 分类标题项 -->
			<view class="cu-list menu">
				<view class="cu-item arrow">
					<view class="content">
						<text class="text-grey text-lg">{{item1.title.title}}</text>
					</view>
					<view class="action">
						<text class="text-grey text-df">查看更多</text>
					</view>
				</view>
			</view>	
			<!-- 横向列表图片 -->
			<scroll-view scroll-x class="scroll-row" >
				<view class="scroll-row-item ml-2 mt-1" style="width: 280upx;height: 400upx;"
				v-for="(item2, index2) in item1.posters" :key="index2">
					<image :src="item2.bgUrl" class="rounded-12" @tap="showModal" data-target="bottomModal"></image>
					<!-- 点击预览 -->
					<view class="cu-modal bottom-modal" :class="modalName=='bottomModal'?'show':''" @tap="hideModal">
						<view class="cu-dialog" @tap.stop="">
							<view class="cu-bar bg-white">
								<view class="action text-blue" @tap="hideModal">取消</view>
								<view class="action text-gray cuIcon-favorfill pr-5">收藏</view>
							</view>
							<image src="../../static/images/demo/demo1.jpg" mode="" class="btimg rounded-24"></image>
							<view class="padding flex flex-direction">
								<button class="cu-btn bg-red margin-tb-lg lg">立即使用</button>
							</view>
						</view>
					</view>
				</view>
			</scroll-view>
			
			
		</block>
		
		
		
		
	</view>
</template>

<script>
</script>

<style>
</style>
