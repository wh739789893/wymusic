<template>
  <div class="index">
    <!-- 左侧 -->
    <div class="nav">
      <ul>
        <li><router-link to="/discovery">发现音乐</router-link></li>
        <li><router-link to="/playlist">推荐歌单</router-link></li>
        <li><router-link to="/songs">最新音乐</router-link></li>
        <li><router-link to="/mvs">最新MV</router-link></li>
      </ul>
    </div>
    <!-- 右侧 -->
    <div class="main">
      <!-- 显示组件 -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.index{
  display: flex;
  height: 830px;
}
.index.nav{
  width: 200px;
  background-color: #ededed;
}
.index.nav li{
  text-align: center;
  margin: 10px;
}
.main{
  background-color: orange;
  // 剩余尺寸
  flex: 1;
}
//  点击高亮
a.router-link-active{
  color: white;
  background-color: orange;
}
</style>
