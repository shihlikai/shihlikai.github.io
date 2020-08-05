<template>
  <div style="background-color: #FFFFFF;">
    <!-- ##### Breadcrumb Area Start ##### -->
    <div
      class="breadcrumb-area bg-img bg-overlay jarallax"
      :style="{
        backgroundImage: `url(${require('@/assets/img/unsplash/shop/inigo-de-la-maza-s285sDw5Ikc-unsplash.jpg')})`
      }"
    >
      <div class="container h-100">
        <div class="row h-100 align-items-center">
          <div class="col-12">
            <div class="breadcrumb-text">
              <h2>Shop</h2>
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
            <router-link to="/shop">Shop</router-link>
          </mdb-breadcrumb-item>
        </mdb-breadcrumb>
      </div>
    </div>
    <!-- ##### Breadcrumb Area End ##### -->
    <router-view />
  </div>
</template>

<script>
export default {

}
</script>
