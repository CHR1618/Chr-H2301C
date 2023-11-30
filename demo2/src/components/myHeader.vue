<template>
  <div>
    <div>
      <input type="text" v-model.trim="$store.state.myHeader.addValue" @keyup.enter="add" placeholder="请输入你的任务名称,按回车确认" />
    </div>
  </div>
</template>

<script>
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
    add(){
      this.$store.commit('adds',this.$store.state.myHeader.addValue)
      this.$store.state.myHeader.addValue = ''
    }
  },
  // 组件名称
  name: 'demo',
  // 组件参数 接收来自父组件的数据
  props: {},
  // 局部注册的组件
  components: {},
  created(){
    console.log(this.$store);
  }
}
</script>

<style lang="scss" scoped>
input {
  width: 100%;
  height: 35px;
  border-radius: 5px;
  outline: none;
  border: 1px solid #ccc;
  padding-left: 10px;
}
</style>