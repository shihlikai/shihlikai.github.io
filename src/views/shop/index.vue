<template>
  <div>
    <!-- ##### Breadcrumb Area Start ##### -->
    <div
      class="breadcrumb-area bg-img bg-overlay jarallax"
      :style="img"
    >
      <div class="container h-100">
        <div class="row h-100 align-items-center">
          <div class="col-12">
            <div class="breadcrumb-text">
              <h2>Shop</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="famie-breadcrumb">
      <div class="container">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <router-link to="home">
                <font-awesome-icon icon="home" /> Home
              </router-link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">Shop</li>
          </ol>
        </nav>
      </div>
    </div>
    <!-- ##### Breadcrumb Area End ##### -->
    <section
      v-loading.fullscreen.lock="loading"
      :element-loading-text="loadingText"
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(0, 0, 0, 0.8)"
      class="shop-area section-padding-0-100 bg-white"
    >
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="shop-filters mb-30 d-flex align-items-center justify-content-between pt-2">
              <div>
                <h6>Showing {{ startRow + 1 }}–{{ endRow }} of {{ filtered.length }} results</h6>
              </div>
              <div v-if="false">
                <button
                  :disabled="cartDataList.length===0"
                  type="button"
                  class="btn btn-info"
                  @click="showCart = !showCart"
                >
                  <svg-icon icon-class="shopping-cart" class="mr-1" />
                  購物車
                  <span
                    v-if="cartDataList.length>0"
                    class="badge badge-pill badge-danger"
                  >{{ cartDataList.length }}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-md-4 col-lg-3">
            <div class="single-widget-area">
              <h5 class="widget-title">Catagories</h5>
              <ul class="cata-list shop-page">
                <li v-for="(value, key) of categories" :key="key">
                  <a style="cursor: pointer;text-decoration: underline;" @click="changeCategory(key)">{{ key }} ({{
                    value.results }})</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-12 col-md-8 col-lg-9">
            <div id="products" class="row">
              <div v-for="(product, index) in pager" :key="index" class="col-12 col-sm-6 col-lg-4">
                <div class="single-product-area mb-50">
                  <div class="product-thumbnail">
                    <img :src="product.imageUrl[0]" alt="">
                    <!--                <span class="product-tags">Hot</span>-->
                    <div class="product-meta-data">
                      <a title="Add To Cart" @click="handleAddCart(product.id)">
                        <svg-icon icon-class="shopping-cart-add" />
                      </a>
                    </div>
                  </div>
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
            <nav>
              <ul class="pagination mb-0 mt-50">
                <li
                  v-for="(page, index) in pages"
                  :key="index"
                  class="page-item"
                  :class="page === currentPage ? 'active' : ''"
                >
                  <a class="page-link" @click="changePage(page)">{{ page }}</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { getProducts, shopping } from '@/assets/api/hexschool'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

const CATEGORY_ALL = 'All products'
const LOADING_TEXT = {
  loading: '資料載入中',
  joinCart: '加入購物車中'
}

export default {
  data () {
    return {
      img: {
        backgroundImage: `url(${require('@/assets/img/bg-img/18.jpg')})`
      },
      loading: false,
      loadingText: LOADING_TEXT.loading,
      products: [],
      filteredProducts: [],
      categories: {},
      pageRow: 12,
      currentPage: 1,
      category: '',
      pagination: {},
      showCart: false,
      cartDataList: []
    }
  },
  computed: {
    filtered () {
      const vm = this
      if (vm.category && vm.category !== CATEGORY_ALL) {
        return vm.products.filter(product => product.category === vm.category)
      }
      return vm.products
    },
    calculatorPagination () {
      const total = this.filtered.length
      const startRow = (this.currentPage - 1) * this.pageRow
      let endRow = startRow + this.pageRow
      if (endRow > total) {
        endRow = total
      }

      let pages = parseInt(total / this.pageRow)
      if (total % this.pageRow !== 0) {
        pages++
      }
      return {
        pages, startRow, endRow
      }
    },
    pages () {
      return this.calculatorPagination.pages
    },
    startRow () {
      return this.calculatorPagination.startRow
    },
    endRow () {
      return this.calculatorPagination.endRow
    },
    pager () {
      return this.filtered.slice(this.startRow, this.endRow)
    }
  },
  created () {
    this.loadingText = LOADING_TEXT.loading
    this.loading = true
    this.fetchProducts(1).then(() => {
      const total_pages = this.pagination.total_pages
      return Promise.all(Array.from(Array(total_pages), (_, index) => index + 1).slice(1).map(page => this.fetchProducts(page)))
    }).then(() => {
      this.assort()
      // this.render()
    }).finally(() => {
      this.loading = false
    })
    this.periodCart()
  },
  methods: {
    fetchProducts: function (currentPage) {
      const vm = this
      return getProducts(currentPage).then(products => {
        if (products.data.length > 0) {
          vm.products.push(...products.data)
          vm.pagination = products.meta.pagination
        }
        return Promise.resolve()
      })
    },
    assort: function () {
      const categories = {
        [CATEGORY_ALL]: {
          results: this.products.length
        }
      }
      this.products.forEach(product => {
        if (categories[product.category]) {
          categories[product.category].results += 1
        } else {
          categories[product.category] = {
            results: 1
          }
        }
      })
      this.categories = categories
    },
    changePage (page) {
      this.currentPage = page
    },
    changeCategory (category) {
      this.category = category
      this.currentPage = 1
    },
    handleAddCart (productId) {
      this.loadingText = LOADING_TEXT.joinCart
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
    periodCart () {
      shopping.getCart()
        .then(result => {
          this.cartDataList = result.data
          return Promise.resolve()
        }).then(() => {
          setTimeout(() => {
            this.periodCart()
          }, 1000)
        })
    }
  }
}
</script>
<style scoped>
  a:hover {
    cursor: pointer;
  }
</style>
