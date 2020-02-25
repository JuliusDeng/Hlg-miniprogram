<template>
	<view>
		<view class="cu-custom" :style="[{height:CustomBar + 'px'}]">
			<view class="cu-bar fixed" :style="style" 
			:class="[bgImage!=''?'none-bg text-white bg-img':'',bgColor]">
				<image src="../../static/index/cquni.jpg" class="d-flex hlg ml-5" mode=""></image>
				<!-- <view class="title">
					哈理工校园服务号
				</view> -->
				<view class="content" :style="[{top:StatusBar + 'px'}]">
					<slot name="content"></slot>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				StatusBar: this.StatusBar,
				CustomBar: this.CustomBar
			};
		},
		name: 'cu-custom',
		computed: {
			style() {
				var StatusBar= this.StatusBar;
				var CustomBar= this.CustomBar;
				var bgImage = this.bgImage;
				var style = `height:${CustomBar}px;padding-top:${StatusBar}px;`;
				if (this.bgImage) {
					style = `${style}background-image:url(${bgImage});`;
				}
				return style
			}
		},
		props: {
			bgColor: {
				type: String,
				default: ''
			},
			isBack: {
				type: [Boolean, String],
				default: false
			},
			bgImage: {
				type: String,
				default: ''
			},
		},
		methods: {
			BackPage() {
				if (getCurrentPages().length < 2 && 'undefined' !== typeof __wxConfig) {
					let url = '/' + __wxConfig.pages[0]
					return uni.redirectTo({url})
				}
				uni.navigateBack({
					delta: 1
				});
			}
		}
	}
</script>

<style>
.hlg {
	width: 80upx;
	height: 80upx;
	border-radius: 80upx;
}
.fontx {
	font-size: ;
}
.title {
		margin-left: -850upx;
	}
</style>
