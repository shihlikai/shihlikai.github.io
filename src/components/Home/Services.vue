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
              <p>What we do</p>
              <h2><span>Our Produce</span> Is Mainstay For Us</h2>
              <img :src="`${require('@/assets/img/core-img/decor.png')}`" alt="">
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-12 mb-50">
            <p>Mauris fermentum nunc quis massa lacinia consequat. Suspendisse orci magna, pharetra sedonia risus ut,
              elementum mollis nisin. Nunc in sapien turpis. Donec egeto david orci pulvinar ultrices necto drax
              turpis.
              Pellentesque justo metus, semper nec ullamcorper id, gravida ultricies arcu.</p>
          </div>

          <!-- Single Service Area -->
          <div class="col-12 col-lg-6">
            <div class="single-service-area mb-50 wow fadeInUp" data-wow-delay="100ms">
              <!-- Service Title -->
              <div class="service-title mb-3 d-flex align-items-center">
                <img :src="`${require('@/assets/img/core-img/s1.png')}`" alt="">
                <h5>Fruit &amp; Vegetable</h5>
              </div>
              <p>Intiam eu sagittis est, aster cosmo lacini libero. Praesent dignissim sed odio velo aliquam manta
                legolas. </p>
            </div>
          </div>

          <!-- Single Service Area -->
          <div class="col-12 col-lg-6">
            <div class="single-service-area mb-50 wow fadeInUp" data-wow-delay="300ms">
              <!-- Service Title -->
              <div class="service-title mb-3 d-flex align-items-center">
                <img :src="`${require('@/assets/img/core-img/s2.png')}`" alt="">
                <h5>Meat &amp; Eggs</h5>
              </div>
              <p>Intiam eu sagittis est, aster cosmo lacini libero. Praesent dignissim sed odio velo aliquam manta
                legolas. </p>
            </div>
          </div>

          <!-- Single Service Area -->
          <div class="col-12 col-lg-6">
            <div class="single-service-area mb-50 wow fadeInUp" data-wow-delay="500ms">
              <!-- Service Title -->
              <div class="service-title mb-3 d-flex align-items-center">
                <img :src="`${require('@/assets/img/core-img/s3.png')}`" alt="">
                <h5>Milk &amp; Cheese</h5>
              </div>
              <p>Intiam eu sagittis est, aster cosmo lacini libero. Praesent dignissim sed odio velo aliquam manta
                legolas. </p>
            </div>
          </div>

          <!-- Single Service Area -->
          <div class="col-12 col-lg-6">
            <div class="single-service-area mb-50 wow fadeInUp" data-wow-delay="700ms">
              <!-- Service Title -->
              <div class="service-title mb-3 d-flex align-items-center">
                <img :src="`${require('@/assets/img/core-img/s4.png')}`" alt="">
                <h5>Rice &amp; Corn</h5>
              </div>
              <p>Intiam eu sagittis est, aster cosmo lacini libero. Praesent dignissim sed odio velo aliquam manta
                legolas. </p>
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
