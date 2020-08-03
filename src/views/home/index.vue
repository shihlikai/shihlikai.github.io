<template>
  <div style="">
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

    <!-- ##### About Us Area Start ##### -->
    <section class="about-us-area">
      <div class="container">
        <div class="row align-items-center">

          <!-- About Us Content -->
          <div class="col-12 col-md-8">
            <div class="about-us-content mb-100">
              <!-- Section Heading -->
              <div class="section-heading">
                <p>About us</p>
                <h2><span>Let Us</span> Tell You Our Story</h2>
                <img src="img/core-img/decor.png" alt="">
              </div>
              <p>Lorem ipsum dolor sit amet, consectetu adipiscing elit. Etiam nunc elit, pretium atlanta urna veloci, fermentum malesuda mina. Donec auctor nislec neque sagittis, sit amet dapibus pellentesque donal feugiat. Nulla mollis magna non
                sanaliquet, volutpat do zutum, ultrices consectetur, ultrices at purus.</p>
              <a href="#" class="btn famie-btn mt-30">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- ##### About Us Area End ##### -->

    <!-- ##### Services Area Start ##### -->
    <section class="services-area d-flex flex-wrap">
      <!-- Service Thumbnail -->
      <div class="services-thumbnail bg-img jarallax" style="background-image: url('img/bg-img/7.jpg');" />

      <!-- Service Content -->
      <div class="services-content section-padding-100-50 px-5">
        <div class="container-fluid">
          <div class="row">
            <div class="col-12">
              <!-- Section Heading -->
              <div class="section-heading">
                <p>What we do</p>
                <h2><span>Our Produce</span> Is Mainstay For Us</h2>
                <img src="img/core-img/decor.png" alt="">
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-12 mb-50">
              <p>Mauris fermentum nunc quis massa lacinia consequat. Suspendisse orci magna, pharetra sedonia risus ut,
                elementum mollis nisin. Nunc in sapien turpis. Donec egeto david orci pulvinar ultrices necto drax turpis.
                Pellentesque justo metus, semper nec ullamcorper id, gravida ultricies arcu.</p>
            </div>

            <!-- Single Service Area -->
            <div class="col-12 col-lg-6">
              <div class="single-service-area mb-50 wow fadeInUp" data-wow-delay="100ms">
                <!-- Service Title -->
                <div class="service-title mb-3 d-flex align-items-center">
                  <img src="img/core-img/s1.png" alt="">
                  <h5>Fruit &amp; Vegetable</h5>
                </div>
                <p>Intiam eu sagittis est, aster cosmo lacini libero. Praesent dignissim sed odio velo aliquam manta legolas. </p>
              </div>
            </div>

            <!-- Single Service Area -->
            <div class="col-12 col-lg-6">
              <div class="single-service-area mb-50 wow fadeInUp" data-wow-delay="300ms">
                <!-- Service Title -->
                <div class="service-title mb-3 d-flex align-items-center">
                  <img src="img/core-img/s2.png" alt="">
                  <h5>Meat &amp; Eggs</h5>
                </div>
                <p>Intiam eu sagittis est, aster cosmo lacini libero. Praesent dignissim sed odio velo aliquam manta legolas. </p>
              </div>
            </div>

            <!-- Single Service Area -->
            <div class="col-12 col-lg-6">
              <div class="single-service-area mb-50 wow fadeInUp" data-wow-delay="500ms">
                <!-- Service Title -->
                <div class="service-title mb-3 d-flex align-items-center">
                  <img src="img/core-img/s3.png" alt="">
                  <h5>Milk &amp; Cheese</h5>
                </div>
                <p>Intiam eu sagittis est, aster cosmo lacini libero. Praesent dignissim sed odio velo aliquam manta legolas. </p>
              </div>
            </div>

            <!-- Single Service Area -->
            <div class="col-12 col-lg-6">
              <div class="single-service-area mb-50 wow fadeInUp" data-wow-delay="700ms">
                <!-- Service Title -->
                <div class="service-title mb-3 d-flex align-items-center">
                  <img src="img/core-img/s4.png" alt="">
                  <h5>Rice &amp; Corn</h5>
                </div>
                <p>Intiam eu sagittis est, aster cosmo lacini libero. Praesent dignissim sed odio velo aliquam manta legolas. </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
    <!-- ##### Services Area End ##### -->
  </div>
</template>

<script>
import $ from 'jquery'
import '@/assets/css/style.css'
export default {
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
  mounted () {
    const welcomeSlide = $('.welcome-slides')
    welcomeSlide.owlCarousel({
      items: 1,
      margin: 0,
      loop: true,
      dots: false,
      autoplay: true,
      autoplayTimeout: 5000,
      smartSpeed: 1000
    })

    welcomeSlide.on('translate.owl.carousel', function () {
      const slideLayer = $('[data-animation]')
      slideLayer.each(function () {
        const anim_name = $(this).data('animation')
        $(this).removeClass('animated ' + anim_name).css('opacity', '0')
      })
    })
    welcomeSlide
      .on('translated.owl.carousel', function () {
        const slideLayer = welcomeSlide.find('.owl-item.active').find('[data-animation]')
        slideLayer.each(function () {
          const anim_name = $(this).data('animation')
          $(this).addClass('animated ' + anim_name).css('opacity', '1')
        })
      })

    $('[data-delay]').each(function () {
      const anim_del = $(this).data('delay')
      $(this).css('animation-delay', anim_del)
    })

    $('[data-duration]').each(function () {
      const anim_dur = $(this).data('duration')
      $(this).css('animation-duration', anim_dur)
    })
  }
}
</script>

<style scoped>

</style>
