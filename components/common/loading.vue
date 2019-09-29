<template>
	<view class="position-fixed top-0 left-0 right-0 bottom-0 loading-model"
	v-if="show">
		<view class="spinner">
		  <view class="double-bounce1"></view>
		  <view class="double-bounce2"></view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			show:{
				type:Boolean,
				default:false
			}
		}
	}
</script>

<style scoped>
.loading-model{
	background: rgba(255, 255, 255, 0.6);
	z-index: 1000;
}
.spinner {
  width: 60px;
  height: 60px;
 
  position: relative;
  margin: 300upx auto;
  z-index: 1000;
}
 
.double-bounce1, .double-bounce2 {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #FD6801;
  opacity: 0.6;
  position: absolute;
  top: 0;
  left: 0;
  animation: bounce 2.0s infinite ease-in-out;
  z-index: 1000;
}
 
.double-bounce2 {
  animation-delay: -1.0s;
}
 
 
@keyframes bounce {
  0%, 100% {
    transform: scale(0.0);
  } 50% {
    transform: scale(1.0);
  }
}
</style>
