<template>
	<view>
		<!-- 搜索框 -->
		<view class="cu-bar search bg-white">
			<view class="search-form round">
				<text class="cuIcon-search"></text>
				<input :adjust-position="false" type="text" placeholder="搜索图片、文章、视频" confirm-type="search"></input>
			</view>
		</view>
		<!-- 分类项 -->
		<view class="d-flex border-top border-light-secondary" style="height: 100%;box-sizing: border-box;">
			
			
			<scroll-view id="leftScroll" scroll-y style="flex: 1;height: 100%;" 
			class="border-right border-light-secondary" :scroll-top="leftScrollTop">
				<view class="border-bottom border-light-secondary py-1 left-scroll-item"
				hover-class="bg-light-secondary"
				v-for="(item,index) in cate" :key="index"
				@tap="changeCate(index)">
					<view class="py-1 font-md text-muted text-center"
					:class="activeIndex === index ? 'class-active' : ''">
						{{item.name}}</view>
				</view>
			</scroll-view>
			<scroll-view scroll-y style="flex: 3.5;height: 100%;" 
			:scroll-top="rightScrollTop" :scroll-with-animation="true"
			@scroll="onRightScroll">
				<view class="row right-scroll-item" v-for="(item,index) in list" 
				:key="index">
					<view class="span24-8 text-center py-2"
					v-for="(item2,index2) in item.list" :key="index2">
						<image :src="item2.src"
						style="width: 120upx;height: 120upx;"></image>
						<text class="d-block">{{item2.name}}</text>
					</view>
				</view>
			</scroll-view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				showLoading:true,
				// 当前选中的分类
				activeIndex:0,
				cate:[],
				list:[],
				leftDomsTop:[],
				rightDomsTop:[],
				rightScrollTop:0,
				leftScrollTop:0,
				cateItemHeight:0
			}
		},
		watch: {
			async activeIndex(newValue, oldValue) {
				// 获取scroll-view高度，scrollTop
				let data = await this.getElInfo({
					size:true,
					scrollOffset:true
				})
				let H = data.height
				let ST = data.scrollTop
				// 下边
				if ((this.leftDomsTop[newValue]+this.cateItemHeight) > (H+ST) ) {
					 return this.leftScrollTop = this.leftDomsTop[newValue]+this.cateItemHeight - H
				}
				// 上边
				if (ST > this.cateItemHeight) {
					this.leftScrollTop = this.leftDomsTop[newValue]
				}
			}
		},
		onLoad() {
			this.getData()
		},
		onReady() {
			this.getElInfo({
				all:'left',
				size:true,
				rect:true
			}).then(data=>{
				this.leftDomsTop = data.map(v=>{
					this.cateItemHeight = v.height
					return v.top
				})
			})
			this.getElInfo({
				all:'right',
				size:false,
				rect:true
			}).then(data=>{
				this.rightDomsTop = data.map(v=> v.top)
			})
		},
		methods: {
			// 获取节点信息
			getElInfo(obj = {}){
				return new Promise((res,rej)=>{
					let option = {
						size:obj.size ? true : false,
						rect:obj.rect ? true : false,
						scrollOffset:obj.scrollOffset ? true : false,
					}
					const query = uni.createSelectorQuery().in(this);
					let q = obj.all ? query.selectAll(`.${obj.all}-scroll-item`):query.select('#leftScroll')
					q.fields(option,data => {
					  res(data)
					}).exec();
				})
			},
			getData(){
				for (let i = 0; i < 20; i++) {
					this.cate.push({
						name:"分类"+i
					})
					this.list.push({
						list:[]
					})
				}
				for (let i = 0; i < this.list.length; i++) {
					for (let j = 0; j < 24; j++) {
						this.list[i].list.push({ 
							src:"/static/temp/cate1.jpg",
							name:`分类${i}-商品${j}`,
						})
					}
				}
				this.$nextTick(()=>{
					this.showLoading = false
				})
			},
			// 点击左边分类
			changeCate(index){
				this.activeIndex = index
				// 右边scroll-view滚动到对应区块
				this.rightScrollTop = this.rightDomsTop[index]
			},
			// 监听右边滚动事件
			async onRightScroll(e){
				// 匹配当前scrollTop所处的索引
				this.rightDomsTop.forEach((v,k)=>{
					if (v < e.detail.scrollTop) {
						this.activeIndex = k
						return false
					}
				})
			}
		}
	}
</script>

<style>
.class-active{
	border-left: 8upx solid #FD6801;color: #FD6801!important;
}
</style>
