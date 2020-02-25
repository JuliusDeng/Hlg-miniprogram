<template>
	<view class="container">
		<!-- 上下两角样式 -->
		<view class="left-bottom-sign"></view>
		<view class="right-top-sign"></view>	
		<!-- 正文登录内容 -->
		<view class="wrapper">
			<view class="left-top-sign">I LOVE YOU</view>
			<view class="welcome mt-5">请登录!</view>
			<!-- 用户登录操作	 -->
			<view class="input-content">
				
				<view class="input-item">
					<text class="tit">账号</text>
					<input 
						type="number" 
						:value="mobile" 
						placeholder="请输入学号(学生)/工号(教师)"
						maxlength="10"
						data-key="mobile"
						@input="inputChange"
					/>
				</view>
				
				<view class="input-item">
					<text class="tit">密码</text>
					<input 
						type="mobile" 
						value="" 
						placeholder="请输入密码"
						placeholder-class="input-empty"
						maxlength="20"
						password 
						data-key="password"
						@input="inputChange"
						@confirm="toLogin"
					/>
				</view>
				
			</view>
			
			<button  class="confirm-btn" hover-class="bgcolor">登录</button>
			
		</view>
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	.container{
		padding-top: 115px;
		position: relative;
		width: 100vw;
		height: 100vh;
		overflow: hidden;
		background: #007AFF;
	}
	.left-bottom-sign{
		position: absolute;
		left: -270rpx;
		bottom: -320rpx;
		border: 100rpx solid #d0d1fd;
		border-radius: 50%;
		padding: 180rpx;
	}
	.right-top-sign{
		position: absolute;
		top: 80rpx;
		right: -30rpx;
		z-index: 95;
		&:before, &:after{
			display: block;
			content: "";
			width: 400rpx;
			height: 80rpx;
			background: #b4f3e2;
		}
		&:before{
			transform: rotate(50deg);
			border-radius: 0 50px 0 0;
		}
		&:after{
			position: absolute;
			right: -198upx;
			top: 0;
			transform: rotate(-50deg);
			border-radius: 50px 0 0 0;
			/* background: pink; */
		}
	}
	.wrapper{
		position: relative;
		z-index: 90;
		// background: #fff;
		padding-bottom: 40rpx;
	}
	.left-top-sign{
		font-size: 120rpx;
		color: #f8f6fc;
		position:relative;
		// left: -16upx;
	}
	.welcome{
		position:relative;
		left: 50rpx;
		top: -90rpx;
		font-size: 66rpx;
		color: #3BD81C;
		text-shadow: 1px 0px 1px rgba(0,0,0,.3);
	}
	.input-content{
		padding: 0 60rpx; // 上下 0  左右 60
		// background: #09BB07;
	}
	.input-item{
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
		padding: 0 30rpx;
		background: #FF9700;
		height: 120rpx;
		border-radius: 6rpx;
		margin-bottom: 50rpx;
		&:last-child{
			margin-bottom: 0;
		}
		.tit{
			height: 50rpx;
			line-height: 56rpx;
			font-size: 26rpx;
			color: #F0F0F0;
		}
		input{
			height: 60rpx;
			font-size: 30rpx;
			color: #FFFFFF;
			width: 100%;
		}
	}
	.confirm-btn{
		width: 630rpx;
		height: 76rpx;
		line-height: 76rpx;
		border-radius: 50px;
		margin-top: 70rpx;
		background: #D8D81C;
		color: #fff;
		font-size: 33rpx;
	}	
	.bgcolor{
		background: #1AAD19;
	}
		
</style>
