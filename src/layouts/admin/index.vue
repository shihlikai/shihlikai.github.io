<template>
  <el-container style="height: 100%;">
    <el-aside width="200px" style="background-color: #545c64;">
      <side-bar />
    </el-aside>
    <el-container>
      <el-header height="50px">
        <header-bar />
      </el-header>
      <el-main>
        <app-main />
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {
  components: {
    SideBar: () => import('@/layouts/admin/components/SideBar'),
    AppMain: () => import('@/layouts/admin/components/AppMain'),
    HeaderBar: () => import('@/layouts/admin/components/HeaderBar')
  }
}
</script>
