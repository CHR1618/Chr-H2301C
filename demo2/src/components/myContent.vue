<template>
  <div>
    <li v-for="item in $store.state.myContent.list" :key="item.id">
      <div>
        <span><input type="checkbox" v-model="item.status" @change="checkone" /></span>&ensp;
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
    del(id) {
      this.$store.commit('del', id)
    },
    checkone() {
      this.$store.commit('checkone')
    }
  },
  // 组件名称
  name: 'demo',
  // 组件参数 接收来自父组件的数据
  props: {},
  // 局部注册的组件
  components: {},
  created() {
    this.$store.state.myFooter.list = this.$store.state.myContent.list
  }
}
</script>
<style lang='scss' scoped>
li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #ddd;
  padding: 5px;
  height: 35px;

  button {
    display: none;
    width: 45px;
    height: 25px;
    border: 0;
  }
}

li:hover {
  background-color: #ddd;

  button {
    display: block;
    background-color: #c8594f;
    border-radius: 5px;
    color: #fff;
  }
}
</style>