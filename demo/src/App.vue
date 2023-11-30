<template>
	<div class="content">
		<div ref="div" class="list">
			<myHeader ref="header"></myHeader>
			<myList ref="list"></myList>
			<myFooter ref="footer"></myFooter>
		</div>
	</div>
</template>
<script>
	import myHeader from "./components/myHeader.vue"
	import myList from "./components/myList.vue"
	import myFooter from "./components/myFooter.vue"
	export default {
		data() {
			return {

			}
		},
		components: {
			myFooter,
			myHeader,
			myList
		}
	}
</script>
<style lang='scss' scoped>
	.content {
		width: 100%;
		height: 100%;

		.list {
			width: 600px;
			margin: 150px auto;
			border: 1px solid #999;
			padding: 10px;
		}
	}
</style>