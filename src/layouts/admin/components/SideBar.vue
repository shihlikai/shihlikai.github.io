<template>
  <div>
    <div class="bg-white" style="padding: 15px 0px; text-align: center;">
      <img :src="`${require('@/assets/img/unsplash/fb44bb5a-e563-48c5-b7fb-defbd3e4f8d0_200x200.png')}`">
    </div>
    <el-menu
      :default-active="active"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      :router="true"
    >
      <el-menu-item
        index="/"
        style="width:200px;"
      >
        <i class="el-icon-s-home" />
        <span slot="title">回前端頁面</span>
      </el-menu-item>
      <el-menu-item
        index="/admin/product"
        style="width:200px;"
      >
        <i class="el-icon-s-promotion" />
        <span slot="title">商品列表</span>
      </el-menu-item>
      <el-menu-item
        index="/admin/coupon"
        style="width:200px;"
      >
        <i class="el-icon-s-promotion" />
        <span slot="title">優惠券列表</span>
      </el-menu-item>
      <el-menu-item
        index="/admin/order"
        style="width:200px;"
      >
        <i class="el-icon-s-promotion" />
        <span slot="title">訂單列表</span>
      </el-menu-item>
      <el-menu-item
        index="/admin/picture"
        style="width:200px;"
      >
        <i class="el-icon-s-promotion" />
        <span slot="title">圖片儲存列表</span>
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
      title: app.name,
      active: '/admin/product'
    }
  }
}
</script>
