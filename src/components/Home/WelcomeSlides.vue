<template>
  <div>
    <div class="welcome-slides owl-carousel owl-theme">
      <div
        v-for="(src, index) in images"
        :key="index"
        class="single-welcome-slides bg-img bg-overlay jarallax"
        :style="{
          backgroundImage: `url(${src})`
        }"
      >
        <div class="container h-100">
          <div class="row h-100 align-items-center">
            <div class="col-12 col-lg-10">
              <div class="welcome-content">
                <h2 data-animation="fadeInUp" data-delay="200ms">用心的堅持</h2>
                <p data-animation="fadeInUp" data-delay="400ms">有機農業是遵守自然資源循環永續利用原則，不允許使用合成化學物質，強調水土資源保育與生態平衡之管理系統，並達到生產自然安全農產品目標之農業。</p>
<!--                <a href="#" class="btn famie-btn mt-4" data-animation="bounceInUp" data-delay="600ms">Contact Us</a>-->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'

export default {
  name: 'WelcomeSlides',
  data () {
    return {
      images: [
        require('@/assets/img/unsplash/slides/jake-gard-CetB-bTDBtY-unsplash.jpg'),
        require('@/assets/img/unsplash/slides/juan-camilo-guarin-p-G4jOCMCXxhE-unsplash.jpg'),
        require('@/assets/img/unsplash/slides/arnaldo-aldana-HfH5yd70ox8-unsplash.jpg'),
        require('@/assets/img/unsplash/slides/chandan-chaurasia-0-43q3kUGE0-unsplash.jpg'),
        require('@/assets/img/unsplash/slides/joshua-j-cotten-M3NF-IS6L0E-unsplash.jpg'),
        require('@/assets/img/unsplash/slides/max-O_TVsaeZNlE-unsplash.jpg')
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
