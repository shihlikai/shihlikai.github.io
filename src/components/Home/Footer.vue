<template>
  <footer>
    <!-- Main Footer Area -->
    <div
      class="main-footer bg-img bg-overlay section-padding-80-0"
      :style="{
        backgroundImage: `url(${require('@/assets/img/unsplash/footer/luisa-brimble-3n1BVMZ5Pls-unsplash.jpg')})`
      }"
    >
      <div class="container">
        <div class="row">

          <!-- Single Footer Widget Area -->
          <div class="col-12 col-sm-6 col-lg-3">
            <div class="footer-widget mb-80">
              <a class="foo-logo d-block mb-30 bg-white pt-1 pb-1 text-center" style="border-radius: 10px;"><img
                :src="`${require('@/assets/img/unsplash/fb44bb5a-e563-48c5-b7fb-defbd3e4f8d0_200x200.png')}`"
                alt=""
              ></a>
              <p>有機農業是遵守自然資源循環永續利用原則，不允許使用合成化學物質，強調水土資源保育與生態平衡之管理系統，並達到生產自然安全農產品目標之農業。</p>
              <div class="contact-info">
                <p><i class="fa fa-map-pin" aria-hidden="true" /><span>{{ config.address }}</span></p>
                <p><i class="fa fa-envelope" aria-hidden="true" /><span>{{ config.email }}</span></p>
                <p><i class="fa fa-phone" aria-hidden="true" /><span>{{ config.telephone }}</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Copywrite Area  -->
    <div class="copywrite-area">
      <div class="container">
        <div class="copywrite-text">
          <div class="row align-items-center">
            <div class="col-md-6">
              <p>
                Copyright &copy; All rights reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Footer',
  computed: {
    ...mapGetters({
      config: 'app/config'
    })
  }
}
</script>
