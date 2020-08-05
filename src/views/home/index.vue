<template>
  <div style="">
    <!-- ##### Hero Area Start ##### -->
    <welcome-slides class="hero-area" />
    <!-- ##### Hero Area End ##### -->

    <!-- ##### Famie Benefits Area Start ##### -->
    <benefits class="bg-white famie-benefits-area section-padding-100-0 pb-5" />
    <!-- ##### Famie Benefits Area End ##### -->

    <!-- ##### About Us Area Start ##### -->
    <about-us class="bg-white about-us-area" />
    <!-- ##### About Us Area End ##### -->

    <!-- ##### Services Area Start ##### -->
    <services class="services-area d-flex flex-wrap" />
    <!-- ##### Services Area End ##### -->

    <!-- ##### Our Products Area Start ##### -->
    <our-products class="bg-white our-products-area section-padding-100" />
    <!-- ##### Our Products Area End ##### -->
  </div>
</template>

<script>
import '@/assets/css/style.css'

export default {
  components: {
    WelcomeSlides: () => import('@/components/Home/WelcomeSlides'),
    Benefits: () => import('@/components/Home/Benefits'),
    AboutUs: () => import('@/components/Home/AboutUs'),
    Services: () => import('@/components/Home/Services'),
    OurProducts: () => import('@/components/Home/OurProducts')
  }
}
</script>

<style scoped>

</style>
