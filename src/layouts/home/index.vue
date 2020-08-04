<template>
  <div>
    <!--    <div class="preloader d-flex align-items-center justify-content-center">-->
    <!--      <div class="spinner" />-->
    <!--    </div>-->
    <header class="header-area">
      <!-- Top Header Area -->
      <div class="top-header-area">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="top-header-content d-flex align-items-center justify-content-between">
                <!-- Top Header Content -->
                <div class="top-header-meta">
                  <p>Welcome to <span>Farmie</span>, we hope you will enjoy our products and have good experience</p>
                </div>
                <!-- Top Header Content -->
                <div class="top-header-meta text-right">
                  <a href="#" data-toggle="tooltip" data-placement="bottom" title="infodeercreative@gmail.com"><i
                    class="fa fa-envelope-o"
                    aria-hidden="true"
                  /> <span>Email: infodeercreative@gmail.com</span></a>
                  <a href="#" data-toggle="tooltip" data-placement="bottom" title="+1 234 122 122"><i
                    class="fa fa-phone"
                    aria-hidden="true"
                  /> <span>Call Us: +84 223 9000</span></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="famie-main-menu">
        <div style="background-color: #007e33;">
          <mdb-container>
            <mdb-navbar color="success-color-dark" dark class="shadow-none">
              <mdb-navbar-brand>
                {{ name }}
              </mdb-navbar-brand>
              <mdb-navbar-toggler class="ml-5">
                <mdb-navbar-nav>
                  <mdb-nav-item to="/home" active>Home</mdb-nav-item>
                  <mdb-nav-item to="/shop">Shop</mdb-nav-item>
                  <mdb-nav-item to="/about">About</mdb-nav-item>
                  <mdb-nav-item to="/admin">Admin</mdb-nav-item>
                  <mdb-dropdown tag="li" class="d-none nav-item">
                    <mdb-dropdown-toggle slot="toggle" tag="a" nav-link color="success-color-dark" waves-fixed>Dropdown
                    </mdb-dropdown-toggle>
                    <mdb-dropdown-menu>
                      <mdb-dropdown-item>Action</mdb-dropdown-item>
                      <mdb-dropdown-item>Another action</mdb-dropdown-item>
                      <mdb-dropdown-item>Something else here</mdb-dropdown-item>
                    </mdb-dropdown-menu>
                  </mdb-dropdown>
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
    <app-main />
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import $ from 'jquery'
export default {
  components: {
    AppMain: () => import('@/layouts/home/components/AppMain'),
    Cart: () => import('@/layouts/home/components/Cart')
  },
  computed: {
    ...mapGetters({
      name: 'app/name'
    })
  },
  mounted () {
    $('.famie-main-menu').sticky({
      topSpacing: 0
    })
  },
  methods: {

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
