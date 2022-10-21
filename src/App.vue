<template>
  <!--
    1.App.vue 页面可以用于布局页面
    2.<router-view/> 就是路由指令
    3.会把路由到的页面内容，展/替换示到<router-view/>

    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view/>
  -->
  <div>
    <!--   引入Header组件/界面-->
    <Header/>
    Home页面  <el-button  type="info">我的提交</el-button>
  </div>
</template>

<script>
  import Header from "@/components/Header";
  export default {
    name: "Layout",
    components: {
      Header
    }
  }
</script>

<style>

</style>
