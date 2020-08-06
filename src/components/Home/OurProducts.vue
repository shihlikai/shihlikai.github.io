<template>
  <section
    v-loading="loading"
    element-loading-text="加入購物車中"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)"
  >
    <div class="container">
      <div class="row">
        <div class="col-12">
          <!-- Section Heading -->
          <div class="section-heading text-center">
            <p>特色產品</p>
            <h2><span>我們的產品</span> 是高品質</h2>
            <img :src="`${require('@/assets/img/core-img/decor2.png')}`" alt="">
          </div>
        </div>
      </div>

      <div class="row">

        <!-- Single Product Area -->
        <div v-for="(product, index) in products" :key="index" class="col-12 col-sm-6 col-lg-3">
          <div class="single-product-area mb-50 wow fadeInUp" data-wow-delay="100ms">
            <!-- Product Thumbnail -->
            <div class="product-thumbnail">
              <img :src="product.imageUrl[0]" alt="">
              <!-- Product Tags -->
              <span class="product-tags bg-danger">Hot</span>
              <!-- Product Meta Data -->
              <div class="product-meta-data">
                <a title="Add To Cart" @click="handleAddCart(product.id)">
                  <svg-icon icon-class="shopping-cart-add" />
                </a>
              </div>
            </div>
            <!-- Product Description -->
            <div class="product-desc text-center pt-4">
              <a href="#" class="product-title">{{ product.title }}</a>
              <h6 class="price">
                {{ product.price | money }}
                <span class="text-danger">{{ product.origin_price | money }}</span>
              </h6>
            </div>
          </div>
        </div>

      </div>

      <div class="row">
        <div class="col-12">
          <div class="gotoshop-btn text-center wow fadeInUp" data-wow-delay="900ms">
            <router-link to="/shop" class="btn famie-btn">更多商品</router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { getProducts, shopping } from '@/assets/api/hexschool'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

export default {
  name: 'OurProducts',
  data () {
    return {
      loading: false,
      products: []
    }
  },
  created () {
    getProducts(this.randomInteger(1, 20), 4).then(result => {
      this.products = result.data
    })
  },
  methods: {
    handleAddCart (productId) {
      this.loading = true
      shopping.postCart(productId, 1).then(result => {
        this.cartDataList.push(result)
        Swal.fire('Good job', '加入購物車成功', 'success')
      }).catch(error => {
        Swal.fire('Oops...', error.errors[0], 'error')
      })
        .finally(() => {
          this.loading = false
        })
    },
    randomInteger (min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min
    }
  }
}
</script>
