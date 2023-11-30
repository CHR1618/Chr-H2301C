<template>
	<div>
		<li v-for="item in $store.state.list" :key="item.id">
			<div>
				<span><input type="checkbox" v-model="item.status"/></span>&ensp;
				<span>{{ item.title }}</span>
			</div>
			<div>
				<button @click="del(item.id)">删除</button>
			</div>
		</li>
	</div>
</template>
<script>
	export default {
		data() {
			return {}
		},
		methods:{
			// 删除方法
			del(id){
				this.$store.commit('del',id)
			}
		}
	}
</script>
