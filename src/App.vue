<template>
  <div id="app">
    <div>
      <router-link to="/tabindex">主页</router-link>
      <router-link to="/tabclassify">分类</router-link>
      <router-link to="/taborder">订单</router-link>
      <router-link to="/tabmy">我的</router-link>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style></style>
