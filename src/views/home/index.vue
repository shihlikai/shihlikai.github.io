<template>
  <div style="">
    <welcome-slides class="hero-area" />
    <benefits class="bg-white famie-benefits-area section-padding-100-0 pb-5" />
    <about-us class="bg-white about-us-area" />
    <services class="services-area d-flex flex-wrap" />
    <our-products class="bg-white our-products-area section-padding-100" />
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
