<template>
  <header>
    <!-- Top Header Area -->
    <div class="top-header-area">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="top-header-content d-flex align-items-center justify-content-between">
              <!-- Top Header Content -->
              <div class="top-header-meta">
                <p>歡迎來到 <span>{{ config.name }}</span>, 希望您會喜歡我們的產品</p>
              </div>
              <!-- Top Header Content -->
              <div class="top-header-meta text-right">
                <a data-toggle="tooltip" data-placement="bottom" :title="config.email"><i
                  class="fa fa-envelope-o"
                  aria-hidden="true"
                /> <span>Email: {{ config.email }}</span></a>
                <a data-toggle="tooltip" data-placement="bottom" :title="config.telephone"><i
                  class="fa fa-phone"
                  aria-hidden="true"
                /> <span>Call Us: {{ config.telephone }}</span></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="famie-main-menu">
      <div style="background-color: #2BBBAD;">
        <mdb-container>
          <mdb-navbar color="default-color" dark class="shadow-none">
            <mdb-navbar-brand class="bg-white text-center" style="border-radius: 10px;">
              <img :src="`${require('@/assets/img/unsplash/fb44bb5a-e563-48c5-b7fb-defbd3e4f8d0_200x200.png')}`">
            </mdb-navbar-brand>
            <mdb-navbar-toggler class="ml-5">
              <mdb-navbar-nav>
                <mdb-nav-item to="/home" active>Home</mdb-nav-item>
                <mdb-nav-item to="/shop">Shop</mdb-nav-item>
                <mdb-nav-item to="/about">About</mdb-nav-item>
                <mdb-nav-item to="/admin">Admin</mdb-nav-item>
              </mdb-navbar-nav>
              <form class="mr-4">
                <cart />
              </form>
            </mdb-navbar-toggler>
          </mdb-navbar>
        </mdb-container>
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'
import $ from 'jquery'

export default {
  name: 'Header',
  components: {
    Cart: () => import('@/components/Home/Cart')
  },
  computed: {
    ...mapGetters({
      config: 'app/config'
    })
  },
  mounted () {
    $('.famie-main-menu').sticky({
      topSpacing: 0
    })
  }
}
</script>
<style scoped>
a[disabled="disabled"] {
  pointer-events: none;
}
</style>
