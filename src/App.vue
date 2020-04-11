<template>
  <div>
   <!-- 头部组件 -->
   <top />
   <!--主体组件 -->
   <index />
  </div>
</template>

<script>
import top from './components/top'
import index from './components/index'
  export default {
    // 组件注册
    components:{
      top,
      index
    }
}
</script>

<style lang="less" scoped>
</style>
