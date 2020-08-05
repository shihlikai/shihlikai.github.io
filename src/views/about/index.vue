<template>
  <div>
    <div
      class="breadcrumb-area bg-img bg-overlay jarallax"
      :style="{
        backgroundImage: `url(${require('@/assets/img/unsplash/about/phuc-long-aqrIcYonB-o-unsplash.jpg')})`
      }"
    >
      <div class="container h-100">
        <div class="row h-100 align-items-center">
          <div class="col-12">
            <div class="breadcrumb-text">
              <h2>About Us</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="famie-breadcrumb">
      <div class="container">
        <mdb-breadcrumb>
          <mdb-breadcrumb-item>
            <router-link to="/home">
              <font-awesome-icon icon="home" /> Home
            </router-link>
          </mdb-breadcrumb-item>
          <mdb-breadcrumb-item>
            About
          </mdb-breadcrumb-item>
        </mdb-breadcrumb>
      </div>
    </div>
    <benefits />
    <about-us />
  </div>
</template>

<script>
export default {
  components: {
    Benefits: () => import('@/components/Home/Benefits'),
    AboutUs: () => import('@/components/Home/AboutUs')
  }
}
</script>

<style scoped>

</style>
