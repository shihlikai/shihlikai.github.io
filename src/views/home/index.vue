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
    <section class="bg-white famie-benefits-area section-padding-100-0 pb-5">
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
    <section class="bg-white about-us-area">
      <div class="container">
        <div class="row align-items-center">

          <!-- About Us Content -->
          <div class="col-12 col-md-8">
            <div class="about-us-content mb-100">
              <!-- Section Heading -->
              <div class="section-heading">
                <p>About us</p>
                <h2><span>Let Us</span> Tell You Our Story</h2>
                <img :src="`${require('@/assets/img/core-img/decor.png')}`" alt="">
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
                elementum mollis nisin. Nunc in sapien turpis. Donec egeto david orci pulvinar ultrices necto drax turpis.
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
                <p>Intiam eu sagittis est, aster cosmo lacini libero. Praesent dignissim sed odio velo aliquam manta legolas. </p>
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
                <p>Intiam eu sagittis est, aster cosmo lacini libero. Praesent dignissim sed odio velo aliquam manta legolas. </p>
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
                <p>Intiam eu sagittis est, aster cosmo lacini libero. Praesent dignissim sed odio velo aliquam manta legolas. </p>
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
                <p>Intiam eu sagittis est, aster cosmo lacini libero. Praesent dignissim sed odio velo aliquam manta legolas. </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
    <!-- ##### Services Area End ##### -->

    <!-- ##### Our Products Area Start ##### -->
    <section class="bg-white our-products-area section-padding-100">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <!-- Section Heading -->
            <div class="section-heading text-center">
              <p>Featured Products</p>
              <h2><span>Our Product</span> Are Highest Quality</h2>
              <img :src="`${require('@/assets/img/core-img/decor2.png')}`" alt="">
            </div>
          </div>
        </div>

        <div class="row">

          <!-- Single Product Area -->
          <div class="col-12 col-sm-6 col-lg-3">
            <div class="single-product-area mb-50 wow fadeInUp" data-wow-delay="100ms">
              <!-- Product Thumbnail -->
              <div class="product-thumbnail">
                <img :src="`${require('@/assets/img/bg-img/p1.jpg')}`" alt="">
                <!-- Product Tags -->
                <span class="product-tags">Hot</span>
                <!-- Product Meta Data -->
                <div class="product-meta-data">
                  <a href="#" data-toggle="tooltip" data-placement="top" title="Favourite"><i class="icon_heart_alt" /></a>
                  <a href="#" data-toggle="tooltip" data-placement="top" title="Add To Cart"><i class="icon_cart_alt" /></a>
                  <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><i class="arrow_left-right_alt" /></a>
                </div>
              </div>
              <!-- Product Description -->
              <div class="product-desc text-center pt-4">
                <a href="#" class="product-title">Strawberry</a>
                <h6 class="price">$17.99</h6>
              </div>
            </div>
          </div>

          <!-- Single Product Area -->
          <div class="col-12 col-sm-6 col-lg-3">
            <div class="single-product-area mb-50 wow fadeInUp" data-wow-delay="300ms">
              <!-- Product Thumbnail -->
              <div class="product-thumbnail">
                <img :src="`${require('@/assets/img/bg-img/p2.jpg')}`" alt="">
                <!-- Product Meta Data -->
                <div class="product-meta-data">
                  <a href="#" data-toggle="tooltip" data-placement="top" title="Favourite"><i class="icon_heart_alt" /></a>
                  <a href="#" data-toggle="tooltip" data-placement="top" title="Add To Cart"><i class="icon_cart_alt" /></a>
                  <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><i class="arrow_left-right_alt" /></a>
                </div>
              </div>
              <!-- Product Description -->
              <div class="product-desc text-center pt-4">
                <a href="#" class="product-title">Baked Breads</a>
                <h6 class="price">$9.99</h6>
              </div>
            </div>
          </div>

          <!-- Single Product Area -->
          <div class="col-12 col-sm-6 col-lg-3">
            <div class="single-product-area mb-50 wow fadeInUp" data-wow-delay="500ms">
              <!-- Product Thumbnail -->
              <div class="product-thumbnail">
                <img :src="`${require('@/assets/img/bg-img/p3.jpg')}`" alt="">
                <!-- Product Meta Data -->
                <div class="product-meta-data">
                  <a href="#" data-toggle="tooltip" data-placement="top" title="Favourite"><i class="icon_heart_alt" /></a>
                  <a href="#" data-toggle="tooltip" data-placement="top" title="Add To Cart"><i class="icon_cart_alt" /></a>
                  <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><i class="arrow_left-right_alt" /></a>
                </div>
              </div>
              <!-- Product Description -->
              <div class="product-desc text-center pt-4">
                <a href="#" class="product-title">Prime Beef</a>
                <h6 class="price">$59.99</h6>
              </div>
            </div>
          </div>

          <!-- Single Product Area -->
          <div class="col-12 col-sm-6 col-lg-3">
            <div class="single-product-area mb-50 wow fadeInUp" data-wow-delay="700ms">
              <!-- Product Thumbnail -->
              <div class="product-thumbnail">
                <img :src="`${require('@/assets/img/bg-img/p4.jpg')}`" alt="">
                <!-- Product Tags -->
                <span class="product-tags bg-danger">Sale</span>
                <!-- Product Meta Data -->
                <div class="product-meta-data">
                  <a href="#" data-toggle="tooltip" data-placement="top" title="Favourite"><i class="icon_heart_alt" /></a>
                  <a href="#" data-toggle="tooltip" data-placement="top" title="Add To Cart"><i class="icon_cart_alt" /></a>
                  <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><i class="arrow_left-right_alt" /></a>
                </div>
              </div>
              <!-- Product Description -->
              <div class="product-desc text-center pt-4">
                <a href="#" class="product-title">Pure Honey</a>
                <h6 class="price"><span>$29.99</span> $19.99</h6>
              </div>
            </div>
          </div>

        </div>

        <div class="row">
          <div class="col-12">
            <div class="gotoshop-btn text-center wow fadeInUp" data-wow-delay="900ms">
              <a href="shop.html" class="btn famie-btn">Go to Store</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- ##### Our Products Area End ##### -->

    <!-- ##### Footer Area Start ##### -->
    <footer class="footer-area">
      <!-- Main Footer Area -->
      <div
        class="main-footer bg-img bg-overlay section-padding-80-0"
        :style="{
          backgroundImage: `url(${require('@/assets/img/bg-img/3.jpg')})`
        }"
      >
        <div class="container">
          <div class="row">

            <!-- Single Footer Widget Area -->
            <div class="col-12 col-sm-6 col-lg-3">
              <div class="footer-widget mb-80">
                <a href="#" class="foo-logo d-block mb-30"><img :src="`${require('@/assets/img/core-img/logo2.png')}`" alt=""></a>
                <p>Lorem ipsum dolor sit amet, consecte stare adipiscing elit. In act honcus risus atiner Pellentesque risus.</p>
                <div class="contact-info">
                  <p><i class="fa fa-map-pin" aria-hidden="true" /><span>120 Raymond Rd, New York</span></p>
                  <p><i class="fa fa-envelope" aria-hidden="true" /><span>info.deercreative@gmail.com</span></p>
                  <p><i class="fa fa-phone" aria-hidden="true" /><span>+84 223 9000</span></p>
                </div>
              </div>
            </div>

            <!-- Single Footer Widget Area -->
            <div class="col-12 col-sm-6 col-lg-3">
              <div class="footer-widget mb-80">
                <h5 class="widget-title">QUICK LINK</h5>
                <!-- Footer Widget Nav -->
                <nav class="footer-widget-nav">
                  <ul>
                    <li><a href="#">Purchase</a></li>
                    <li><a href="#">Policities</a></li>
                    <li><a href="#">Shipping</a></li>
                    <li><a href="#">FAQs</a></li>
                    <li><a href="#">Return</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Payments</a></li>
                    <li><a href="#">Partners</a></li>
                    <li><a href="#">Guide</a></li>
                    <li><a href="#">Standard</a></li>
                    <li><a href="#">News</a></li>
                    <li><a href="#">Brands</a></li>
                  </ul>
                </nav>
              </div>
            </div>

            <!-- Single Footer Widget Area -->
            <div class="col-12 col-sm-6 col-lg-3">
              <div class="footer-widget mb-80">
                <h5 class="widget-title">RECENT NEWS</h5>

                <!-- Single Recent News Start -->
                <div class="single-recent-blog d-flex align-items-center">
                  <div class="post-thumbnail">
                    <img src="img/bg-img/4.jpg" alt="">
                  </div>
                  <div class="post-content">
                    <a href="#" class="post-title">WA’s largest farming business on the market</a>
                    <div class="post-date">18 Aug 2018</div>
                  </div>
                </div>

                <!-- Single Recent News Start -->
                <div class="single-recent-blog d-flex align-items-center">
                  <div class="post-thumbnail">
                    <img src="img/bg-img/5.jpg" alt="">
                  </div>
                  <div class="post-content">
                    <a href="#" class="post-title">Beef retail prices hit a record</a>
                    <div class="post-date">18 Aug 2018</div>
                  </div>
                </div>

              </div>
            </div>

            <!-- Single Footer Widget Area -->
            <div class="col-12 col-sm-6 col-lg-3">
              <div class="footer-widget mb-80">
                <h5 class="widget-title">STAY CONNECTED</h5>
                <!-- Footer Social Info -->
                <div class="footer-social-info">
                  <a href="#">
                    <i class="fa fa-facebook" aria-hidden="true" />
                    <span>Facebook</span>
                  </a>
                  <a href="#">
                    <i class="fa fa-twitter" aria-hidden="true" />
                    <span>Twitter</span>
                  </a>
                  <a href="#">
                    <i class="fa fa-pinterest" aria-hidden="true" />
                    <span>Pinterest</span>
                  </a>
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
                <p><!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
                  Copyright &copy;<!--<script>document.write(new Date().getFullYear());</script>--> All rights reserved | This template is made with <i class="fa fa-heart-o" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                  <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
                </p>
              </div>
              <div class="col-md-6">
                <div class="footer-nav">
                  <nav>
                    <ul>
                      <li><a href="#">About</a></li>
                      <li><a href="#">Produce</a></li>
                      <li><a href="#">Practice</a></li>
                      <li><a href="#">Products</a></li>
                      <li><a href="#">News</a></li>
                      <li><a href="#">Contact</a></li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <!-- ##### Footer Area End ##### -->
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
