<template>
	<div>
		<input type="text" v-model.trim="addValue" @keyup.enter="add" placeholder="请输入你的任务名称,按回车确认" />
	</div>
</template>
<script>
	export default {
		data() {
			return {
				addValue: ""
			}
		},
		methods: {
			// 添加方法
			add() {
				// 判空
				if (this.addValue == '') {
					alert('不能为空')
					return false
					// 判重
				} else if (this.$store.state.list.find(ele => ele.title == this.addValue)) {
					alert('不能重复')
					return false
				}
				let obj = {
					id: new Date().getTime(),
					title: this.addValue,
					status: false
				}
				this.$store.commit('add', obj)
				this.addValue = ''
			}
		}
	}
</script>
<style lang='scss' scoped>
	input {
		width: 100%;
		height: 35px;
		border-radius: 5px;
		outline: none;
		border: 1px solid #ccc;
		padding-left: 10px;
	}
</style>