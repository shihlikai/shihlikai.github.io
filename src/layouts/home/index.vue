<template>
  <div>
    <div class="preloader d-flex align-items-center justify-content-center">
      <div class="spinner" />
    </div>
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
        <mdb-navbar color="success-color-dark" dark>
          <mdb-navbar-brand href="https://mdbootstrap.com/">
            {{ name }}
          </mdb-navbar-brand>
          <mdb-navbar-toggler>
            <mdb-navbar-nav>
              <mdb-nav-item to="home" active>首頁</mdb-nav-item>
              <mdb-nav-item to="about">關於我們</mdb-nav-item>
              <mdb-nav-item to="admin">後台</mdb-nav-item>
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
          </mdb-navbar-toggler>
        </mdb-navbar>
      </div>
    </header>
    <app-main />
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  components: {
    AppMain: () => import('@/layouts/home/components/AppMain')
  },
  computed: {
    ...mapGetters({
      name: 'app/name'
    })
  }
}
</script>
<style>
</style>
