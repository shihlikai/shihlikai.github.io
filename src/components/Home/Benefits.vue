<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="benefits-thumbnail mb-50">
            <img :src="`${require('@/assets/img/unsplash/benefits/ja-ma--gOUx23DNks-unsplash.jpg')}`" alt="">
          </div>
        </div>
      </div>

      <div class="row justify-content-center">
        <!-- Single Benefits Area -->
        <div class="col-12 col-sm-4 col-lg">
          <div class="single-benefits-area wow fadeInUp mb-50" data-wow-delay="100ms">
            <img :src="`${require('@/assets/img/core-img/digger.png')}`" alt="">
            <h5>最佳服務</h5>
          </div>
        </div>

        <!-- Single Benefits Area -->
        <div class="col-12 col-sm-4 col-lg">
          <div class="single-benefits-area wow fadeInUp mb-50" data-wow-delay="300ms">
            <img :src="`${require('@/assets/img/core-img/windmill.png')}`" alt="">
            <h5>農場經驗</h5>
          </div>
        </div>

        <!-- Single Benefits Area -->
        <div class="col-12 col-sm-4 col-lg">
          <div class="single-benefits-area wow fadeInUp mb-50" data-wow-delay="500ms">
            <img :src="`${require('@/assets/img/core-img/cereals.png')}`" alt="">
            <h5>100% 天然</h5>
          </div>
        </div>

        <!-- Single Benefits Area -->
        <div class="col-12 col-sm-4 col-lg">
          <div class="single-benefits-area wow fadeInUp mb-50" data-wow-delay="700ms">
            <img :src="`${require('@/assets/img/core-img/tractor.png')}`" alt="">
            <h5>農用設備</h5>
          </div>
        </div>

        <!-- Single Benefits Area -->
        <div class="col-12 col-sm-4 col-lg">
          <div class="single-benefits-area wow fadeInUp mb-50" data-wow-delay="900ms">
            <img :src="`${require('@/assets/img/core-img/sunrise.png')}`" alt="">
            <h5>有機食品</h5>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Benefits'
}
</script>
