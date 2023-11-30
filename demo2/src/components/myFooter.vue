<template>
  <div style="padding: 5px;margin-top: 10px;">
    <input type="checkbox" v-model="$store.state.myFooter.checkAll" @change="allcheck"/> 
    已完成 {{ list.filter(i=>i.status == true).length }} / 全部 {{ list.length }}
     <button class="clearBtn" @click="clear">清除已完成任务</button> 
  </div>                                                
</template>

<script>
import { mapState } from 'vuex'
export default {
  // 组件状态值
  data() {
    return {}
  },
  // 计算属性
  computed: {
    ...mapState({list:state => state.myContent.list})

  },
  // 侦听器
  watch: {},
  // 组件方法
  methods: {
    allcheck(){
      this.$store.commit('allcheck',this.$store.state.myFooter.checkAll)
    },
    clear(){
      this.$store.commit('clear')
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
  },
  updated(){
    console.log(this.list);
  }
}
</script>

<style lang="scss" scoped>
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