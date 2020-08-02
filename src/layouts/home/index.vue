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
              <mdb-nav-item href="#" active>Home</mdb-nav-item>
              <mdb-nav-item href="#">Features</mdb-nav-item>
              <mdb-nav-item href="#">Pricing</mdb-nav-item>
              <mdb-dropdown tag="li" class="nav-item">
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

    <!-- ##### Hero Area Start ##### -->
    <div class="hero-area">
      <div class="welcome-slides owl-carousel owl-theme">
        <!-- Single Welcome Slides -->
        <div class="single-welcome-slides bg-img bg-overlay jarallax" :style="welcomes[0]">
          <div class="container h-100">
            <div class="row h-100 align-items-center">
              <div class="col-12 col-lg-10">
                <div class="welcome-content">
                  <h2 data-animation="fadeInUp" data-delay="200ms">The hearth of the farm is the true center of our
                    universe.</h2>
                  <p data-animation="fadeInUp" data-delay="400ms">Mauris vestibulum dolor nec lacinia facilisis. Fusce
                    interdum sagittis volutpat. Praesent eget varius ligula, malesuada eleifend purus. Aenean euismod
                    est at mauris mollis ultricies.
                    Morbi arcu mi, dictum eu luala, dapibus
                    interdum mollis.</p>
                  <a href="#" class="btn famie-btn mt-4" data-animation="bounceInUp" data-delay="600ms">Contact Us</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Single Welcome Slides -->
        <div class="single-welcome-slides bg-img bg-overlay jarallax" :style="welcomes[1]">
          <div class="container h-100">
            <div class="row h-100 align-items-center">
              <div class="col-12 col-lg-10">
                <div class="welcome-content">
                  <h2 data-animation="fadeInDown" data-delay="200ms">The hearth of the farm is the true center of our
                    universe.</h2>
                  <p data-animation="fadeInDown" data-delay="400ms">Mauris vestibulum dolor nec lacinia facilisis. Fusce
                    interdum sagittis volutpat. Praesent eget varius ligula, malesuada eleifend purus. Aenean euismod
                    est at mauris mollis ultricies.
                    Morbi arcu mi, dictum eu luala, dapibus
                    interdum mollis.</p>
                  <a href="#" class="btn famie-btn mt-4" data-animation="bounceInDown" data-delay="600ms">Contact Us</a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
    <!-- ##### Hero Area End ##### -->

    <!-- ##### Famie Benefits Area Start ##### -->
    <section class="famie-benefits-area section-padding-100-0 pb-5">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="benefits-thumbnail mb-50">
              <img :src="`${require('@/assets/img/bg-img/2.jpg')}`" alt="">
            </div>
          </div>
        </div>

        <div class="row justify-content-center">
          <!-- Single Benefits Area -->
          <div class="col-12 col-sm-4 col-lg">
            <div class="single-benefits-area wow fadeInUp mb-50" data-wow-delay="100ms">
              <img :src="`${require('@/assets/img/core-img/digger.png')}`" alt="">
              <h5>Best Services</h5>
            </div>
          </div>

          <!-- Single Benefits Area -->
          <div class="col-12 col-sm-4 col-lg">
            <div class="single-benefits-area wow fadeInUp mb-50" data-wow-delay="300ms">
              <img :src="`${require('@/assets/img/core-img/windmill.png')}`" alt="">
              <h5>Farm Experiences</h5>
            </div>
          </div>

          <!-- Single Benefits Area -->
          <div class="col-12 col-sm-4 col-lg">
            <div class="single-benefits-area wow fadeInUp mb-50" data-wow-delay="500ms">
              <img :src="`${require('@/assets/img/core-img/cereals.png')}`" alt="">
              <h5>100% Natural</h5>
            </div>
          </div>

          <!-- Single Benefits Area -->
          <div class="col-12 col-sm-4 col-lg">
            <div class="single-benefits-area wow fadeInUp mb-50" data-wow-delay="700ms">
              <img :src="`${require('@/assets/img/core-img/tractor.png')}`" alt="">
              <h5>Farm Equipment</h5>
            </div>
          </div>

          <!-- Single Benefits Area -->
          <div class="col-12 col-sm-4 col-lg">
            <div class="single-benefits-area wow fadeInUp mb-50" data-wow-delay="900ms">
              <img :src="`${require('@/assets/img/core-img/sunrise.png')}`" alt="">
              <h5>Organic food</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- ##### Famie Benefits Area End ##### -->

    <app-main style="display: none;" />
  </div>
</template>
<script>
import '@/assets/css/style.css'
// import '@/assets/js/classynav'
import { mapGetters } from 'vuex'

export default {
  components: {
    AppMain: () => import('@/layouts/home/components/AppMain')
  },
  data () {
    return {
      welcomes: [
        {
          backgroundImage: `url(${require('@/assets/img/bg-img/1.jpg')})`
        },
        {
          backgroundImage: `url(${require('@/assets/img/bg-img/7.jpg')})`
        }
      ]
    }
  },
  computed: {
    ...mapGetters({
      name: 'app/name'
    })
  },
  mounted () {
    require('@/assets/js/active')
  }
}
</script>
<style>
</style>
