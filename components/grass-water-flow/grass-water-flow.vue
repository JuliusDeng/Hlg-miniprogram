<template>
	<view class="water-flow-box" :style="{ margin: columnGap + 'px' }">
		<view class="water-flow-column" :style="{ 'margin-right': columnGap + 'px' }" v-for="(col, c) in colunmList" :key="c">
			<view class="item" :id="col.id">
				<view
					v-for="(item, index) in col.list"
					:key="index"
					class="item_content"
					:style="{ 'margin-bottom': columnGap + 'px', height: item.height + 'px', background: item.background }"
				>
					{{ item.id }}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	name: 'grass-water-flow',
	props: {
		fieldKey: {
			//关键比对key
			type: String,
			default: 'id'
		},
		idPrefix: {
			//前缀
			type: String,
			default: 'water-flow-'
		},
		colunmNumber: {
			//瀑布流列数
			type: Number,
			default: 2
		},
		columnGap: {
			//列间隔
			type: Number,
			default: 10
		},
		flowList: {
			// 瀑布流数据
			type: Array,
			required: true,
			default: function() {
				return [];
			}
		}
	},
	data() {
		return {
			colunmList: [], //列
			internalDataList: [], //内部操作数据
			refrenshColunmDataList: [] //记录加载的数据
		};
	},
	watch: {
		colunmNumber: function(v) {
			this.internalDataList = Object.assign([], this.refrenshColunmDataList);
			this.calculateColumn(v, false);
		},
		flowList: function(v) {
			this.internalDataList = Object.assign(this.internalDataList, v);
			if (this.internalDataList.length > 0) {
				this.getPushContainer();
			}
		},
		colunmList: {
			handler() {
				this.$nextTick(function() {
					this.getPushContainer();
				});
			},
			deep: true
		}
	},
	created() {
		this.internalDataList = Object.assign([], this.flowList);
		this.calculateColumn(this.colunmNumber, true);
	},
	mounted() {
		if (this.internalDataList.length > 0) {
			this.colunmList[0].list.push(this.internalDataList[0]);
			let shiftObj = this.internalDataList.shift();
			this.pushLoadData(shiftObj);
		}
	},
	methods: {
		/**
		 * 计算列
		 * @param {Object} size       列数
		 * @param {Object} isCreate   是否初始化创建(created生命周期)
		 */
		calculateColumn: function(size, isCreate) {
			this.colunmList = [];
			for (let i = 1; i <= size; i++) {
				let obj = {};
				obj.id = this.idPrefix + i;
				obj.list = [];
				this.colunmList.push(obj);
			}
			if (!isCreate) {
				if (this.internalDataList.length > 0) {
					this.colunmList[0].list.push(this.internalDataList[0]);
					let shiftObj = this.internalDataList.shift();
					this.pushLoadData(shiftObj);
				}
			}
		},
		/**
		 * 获取节点信息
		 */
		getPushContainer() {
			let sortList = [];
			const query = uni.createSelectorQuery().in(this);
			query
				.selectAll('.item')
				.boundingClientRect()
				.exec(res => {
					if (res) {
						sortList = res[0];
						sortList.sort(function(a, b) {
							return a.height - b.height;
						});
						this.pushShiftData(sortList[0]);
					}
				});
		},
		/**
		 * 处理数据
		 * @param {Object} pushObj
		 */
		pushShiftData(pushObj) {
			if (this.internalDataList.length > 0) {
				for (let i = 0; i < this.colunmList.length; i++) {
					if (this.colunmList[i].id == pushObj.id) {
						this.colunmList[i].list.push(this.internalDataList[0]);
						let shiftObj = this.internalDataList.shift();
						this.pushLoadData(shiftObj);
					}
				}
			}
		},
		/**
		 * 记录加载的数据
		 * @param {Object} obj
		 */
		pushLoadData(obj) {
			if (this.refrenshColunmDataList.length > 0) {
				let result = this.refrenshColunmDataList.some(item => {
					if (item[this.fieldKey] == obj[this.fieldKey]) {
						return true;
					}
				});
				if (!result) {
					this.refrenshColunmDataList.push(obj);
				}
			} else {
				this.refrenshColunmDataList.push(obj);
			}
		},
		/**
		 * 外部刷新数据时，调用此方法，清理掉原有加载数据
		 */
		externalRefrensh() {
			this.refrenshColunmDataList = [];
		}
	}
};
</script>

<style>
/* 瀑布流最外层 */
.water-flow-box {
	/* margin: 10px; */
	display: flex;
	flex-direction: row;
	height: auto;
}

.water-flow-column {
	/* margin-right: 10px; */
	display: flex;
	flex-flow: column wrap;
	width: 100%;
}

.water-flow-box .water-flow-column:last-child {
	margin-right: 0px !important;
}

.water-flow-column > .item > .item_content {
	/* margin-bottom: 10px; */
	color: #ffffff;
	text-align: center;
}
</style>
