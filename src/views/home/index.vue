<template>
  <div>
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
  </div>
</template>

<script>
import '@/assets/css/style.css'
import 'jquery-sticky'
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
    require('@/assets/js/active')
  }
}
</script>

<style scoped>

</style>
