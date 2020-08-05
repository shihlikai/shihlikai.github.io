<template>
  <div>
    <!--    <div class="preloader d-flex align-items-center justify-content-center">-->
    <!--      <div class="spinner" />-->
    <!--    </div>-->
    <Header class="header-area" />
    <app-main />

    <!-- ##### Footer Area Start ##### -->
    <Footer class="footer-area" />
    <!-- ##### Footer Area End ##### -->
  </div>
</template>
<script>
export default {
  components: {
    AppMain: () => import('@/layouts/home/components/AppMain'),
    Header: () => import('@/components/Home/Header'),
    Footer: () => import('@/components/Home/Footer')
  }
}
</script>
<style scoped>
.shadow-none {
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
}
</style>
