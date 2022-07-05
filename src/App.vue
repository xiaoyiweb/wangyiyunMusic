<template>
  <div>
    <van-nav-bar :title="$route.meta.title" fixed />

    <div class="main">
      <router-view />
    </div>

    <van-tabbar route>
      <van-tabbar-item replace to="/layout/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/layout/search" icon="search">搜索</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
    
    };
  },
};
</script>

<style>
/* 解决固定定位脱标 */
.main {
  padding-top: 46px;
  padding-bottom: 50px;
}
</style>