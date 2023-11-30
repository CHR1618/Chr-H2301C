<template>
	<div style="padding: 5px;margin-top: 10px;">
		<input type="checkbox" v-model="checkAll" /> &emsp;
		已完成&ensp;{{ $store.state.list.filter(ele=>ele.status).length }}/全部&ensp;{{ $store.state.list.length }}
		<button class="clearBtn" @click="clear">清除已完成任务</button>
	</div>
</template>
<script>
	export default {
		data() {
			return {
			}
		},
		methods:{
			clear(){
				this.$store.commit('clear')
			}
		},
		computed: {
			checkAll: {
				get() {
					return this.$store.state.list.every(ele => ele.status)
				},
				set(value){
					this.$store.state.list.forEach(ele=>ele.status = value)
				}
			}
		}
	}
</script>
<style lang='scss' scoped>
	.clearBtn {
		width: 150px;
		height: 30px;
		border: 0;
		background-color: #c8594f;
		border-radius: 5px;
		color: #fff;
		float: right;
	}
</style>