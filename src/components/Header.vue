<template>
<!--
  1.这是页面的头部
  2.分成三个部分 div
  3.flex：1
-->
  <div style="height: 50px; line-height: 50px; border-bottom: 1px solid #ccc; display: flex">
    <div style="width: 200px; padding-left: 30px; font-weight: bold; color: dodgerblue">后台管理</div>
    <div style="flex: 1"></div>
    <div style="width: 100px">下拉框</div>
  </div>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>

</style>