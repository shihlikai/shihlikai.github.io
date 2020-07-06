<template>
  <div>
    <div style="padding: 15px 0px; text-align: center; color: #FFF;">{{ title }}</div>
    <el-menu
      default-active="1"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1" style="width:200px;">
        <i class="el-icon-s-promotion" />
        <span slot="title">商品列表</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
const app = require('@/app.config')
export default {
  name: 'SideBar',
  data: function () {
    return {
      title: app.name
    }
  }
}
</script>
