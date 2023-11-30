<template>
  <div style="width: 500px;margin: auto;padding: 30px;border: 1px solid rgba(0, 0, 0, 0.089);">
    <myHeader></myHeader>
    <myContent></myContent>
    <myFooter></myFooter>
  </div>
</template>

<script>
import myHeader from '../components/myHeader.vue'
import myContent from '../components/myContent.vue'
import myFooter from '../components/myFooter.vue'

export default {
  // 组件状态值
  data() {
    return {}
  },
  // 计算属性
  computed: {},
  // 侦听器
  watch: {},
  // 组件方法
  methods: {
    add() {
      console.log(this.$store);
    }
  },
  // 组件名称
  name: 'demo',
  // 组件参数 接收来自父组件的数据
  props: {},
  // 局部注册的组件
  components: {
    myContent, myHeader, myFooter
  },
}
</script>

<style lang="scss" scoped></style>