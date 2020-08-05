<template>
  <section>
    <!-- Service Thumbnail -->
    <div
      class="services-thumbnail bg-img jarallax"
      :style="{
        backgroundImage: `url(${require('@/assets/img/bg-img/7.jpg')})`
      }"
    />

    <!-- Service Content -->
    <div class="services-content section-padding-100-50 px-5">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <!-- Section Heading -->
            <div class="section-heading">
              <p>我們所做的</p>
              <h2><span>產品</span></h2>
              <img :src="`${require('@/assets/img/core-img/decor.png')}`" alt="">
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-12 mb-50">
            <p>遵照自然農耕法生產出來的有機蔬菜及有機水果，這些農業者默默地用心傳遞無毒蔬果。
              好羨慕古代劇裡那伸手一拔，張嘴一咬的情景哦！但是市面上的蔬菜、水果往往為了賣相及產量 ，在栽培時加入許多非天然因素，甚至在上架前都會蒙上一層漂亮的面紗，真是讓人又愛又恨啊！不過！現在國內有許多農業者改採用有機農法來栽培農作物，雖然栽培過程困難且生長時間較慢，但是成品可是讓人大吃一驚呢！</p>
          </div>

          <!-- Single Service Area -->
          <div class="col-12 col-lg-6">
            <div class="single-service-area mb-50 wow fadeInUp" data-wow-delay="100ms">
              <!-- Service Title -->
              <div class="service-title mb-3 d-flex align-items-center">
                <img :src="`${require('@/assets/img/core-img/s1.png')}`" alt="">
                <h5>水果 &amp; 蔬菜</h5>
              </div>
              <p>遵照自然農耕法生產出來的有機蔬菜及有機水果，這些農業者默默地用心傳遞無毒蔬果。</p>
            </div>
          </div>

          <!-- Single Service Area -->
          <div class="col-12 col-lg-6">
            <div class="single-service-area mb-50 wow fadeInUp" data-wow-delay="300ms">
              <!-- Service Title -->
              <div class="service-title mb-3 d-flex align-items-center">
                <img :src="`${require('@/assets/img/core-img/s2.png')}`" alt="">
                <h5>肉類 &amp; 雞蛋</h5>
              </div>
              <p>有機水產養殖或生態養殖的原則是鼓勵低能量投入於養殖系統及保育其生產環境，其生產方式是更為友善生產環境。</p>
            </div>
          </div>

          <!-- Single Service Area -->
          <div class="col-12 col-lg-6">
            <div class="single-service-area mb-50 wow fadeInUp" data-wow-delay="500ms">
              <!-- Service Title -->
              <div class="service-title mb-3 d-flex align-items-center">
                <img :src="`${require('@/assets/img/core-img/s3.png')}`" alt="">
                <h5>牛奶 &amp; 起司</h5>
              </div>
              <p>有機水產養殖或生態養殖的原則是鼓勵低能量投入於養殖系統及保育其生產環境，其生產方式是更為友善生產環境。</p>
            </div>
          </div>

          <!-- Single Service Area -->
          <div class="col-12 col-lg-6">
            <div class="single-service-area mb-50 wow fadeInUp" data-wow-delay="700ms">
              <!-- Service Title -->
              <div class="service-title mb-3 d-flex align-items-center">
                <img :src="`${require('@/assets/img/core-img/s4.png')}`" alt="">
                <h5>米 &amp; 玉米</h5>
              </div>
              <p>水稻生長過程中不施用除草劑、化學合成肥料及農藥， 讓未受污染的土壤，培育出最優質的有機稻米。</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Services'
}
</script>

<style scoped>

</style>
