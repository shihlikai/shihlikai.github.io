<template>
  <div style="background-color: #FFFFFF;">
    <!-- ##### Breadcrumb Area Start ##### -->
    <div
      class="breadcrumb-area bg-img bg-overlay jarallax"
      :style="img"
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
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <router-link to="/home">
                <font-awesome-icon icon="home" /> Home
              </router-link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">Shop</li>
          </ol>
        </nav>
      </div>
    </div>
    <!-- ##### Breadcrumb Area End ##### -->
    <router-view />
  </div>
</template>

<script>
export default {
  data () {
    return {
      img: {
        backgroundImage: `url(${require('@/assets/img/bg-img/18.jpg')})`
      }
    }
  }
}
</script>
