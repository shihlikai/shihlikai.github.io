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
