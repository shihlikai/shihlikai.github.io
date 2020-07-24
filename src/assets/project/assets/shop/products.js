import * as api from '../api/hexschool.js'

const CATEGORY_ALL = 'All products'
export default {
  data: {
    products: [],
    filteredProducts: [],
    categories: {},
    pageRow: 18,
    currentPage: 1,
    category: '',
    pagination: {}
  },
  created: function () {
    $.LoadingOverlay('show', {
      text: 'Loading...',
      background: '#FFFFFF'
    })
    const vm = this
    this.fetchProducts(1).then(() => {
      const total_pages = vm.data.pagination.total_pages
      return Promise.all(Array.from(Array(total_pages), (_, index) => index + 1).slice(1).map(page => vm.fetchProducts(page)))
    }).then(() => {
      $.LoadingOverlay('hide')
        this.assort()
        this.render()
    })
  },
  fetchProducts: function (currentPage) {
    const vm = this
    return api.getProducts(currentPage).then(products => {
      if (products.data.length > 0) {
        vm.data.products.push(...products.data)
        vm.data.pagination = products.meta.pagination
      }
      return Promise.resolve()
    })
  },
  assort: function () {
    const categories = {
      [CATEGORY_ALL]: {
        results: this.data.products.length
      }
    }
    this.data.products.forEach(product => {
      if (categories[product.category]) {
        categories[product.category].results += 1
      } else {
        categories[product.category] = {
          results: 1
        }
      }
    })
    this.data.categories = categories
  },
  calculatorPagination: function () {
    const total = this.data.filteredProducts.length
    const startRow = (this.data.currentPage - 1) * this.data.pageRow
    let endRow = startRow + this.data.pageRow
    if (endRow > total) {
      endRow = total
    }

    let pages = parseInt(total / this.data.pageRow)
    if (total % this.data.pageRow !== 0) {
      pages++
    }
    return {
      pages, startRow, endRow
    }
  },
  filtered() {
    const vm = this
    vm.data.filteredProducts = vm.data.products
    if (vm.data.category && vm.data.category !== CATEGORY_ALL) {
      vm.data.filteredProducts = vm.data.filteredProducts.filter(product => product.category === vm.data.category)
    }
  },
  render: function () {
    this.filtered()
    this.renderShowResult()
    this.renderCategories()
    this.renderProducts()
    this.renderPagination()
  },
  renderCategories: function () {
    const vm = this
    let html = ''
    const categories = vm.data.categories
    Object.keys(categories).forEach(key => {
      const category = categories[key]
      const template = `<li><a data-category="${key}" style="cursor: pointer;text-decoration: underline;">${key} (${category.results})</a></li>`
      html += template
    })
    document.querySelector('.cata-list').innerHTML = html
    document.querySelectorAll('a[data-category]')
      .forEach(node => {
        node.addEventListener('click', function () {
          vm.data.category = this.getAttribute('data-category')
          vm.data.currentPage = 1
          vm.render()
        })
      })
  },
  renderShowResult: function () {
    const {startRow, endRow} = this.calculatorPagination()
    const template = `<h6>Showing ${startRow + 1}–${endRow} of ${this.data.filteredProducts.length} results</h6>`
    document.querySelector('.product-show').innerHTML = template
  },
  renderProducts: function () {
    let html = ''
    const {startRow, endRow} = this.calculatorPagination()
    this.data.filteredProducts.slice(startRow, endRow).forEach(product => {
      const template = `<div class="col-12 col-sm-6 col-lg-4">
            <div class="single-product-area mb-50">
              <div class="product-thumbnail">
                <img src="${product.imageUrl[0]}" alt="">
<!--                <span class="product-tags">Hot</span>-->
                <div class="product-meta-data">
<!--                  <a href="#" data-toggle="tooltip" data-placement="top" title="Favourite"><i-->
<!--                          class="icon_heart_alt"></i></a>-->
<!--                  <a href="#" data-toggle="tooltip" data-placement="top" title="Add To Cart"><i-->
<!--                          class="icon_cart_alt"></i></a>-->
                </div>
              </div>
              <div class="product-desc text-center pt-4">
                <a href="#" class="product-title">${product.title}</a>
                <h6 class="price">
                  $${product.price}
                  <span class="text-danger">$${product.origin_price}</span>
                </h6>
              </div>
            </div>
          </div>`
      html += template
    })
    document.querySelector('#products').innerHTML = html
  },
  renderPagination: function () {
    const vm = this
    const {pages} = vm.calculatorPagination()
    let html = ''
    for (let i = 1; i <= pages; i++) {
      const template = `<li class="page-item ${i === vm.data.currentPage ? 'active' : ''}"><a class="page-link" data-pagination-page="${i}">${i}</a></li>`
      html += template
    }
    document.querySelector('.pagination').innerHTML = html
    document.querySelectorAll('a.page-link[data-pagination-page]')
      .forEach(node => {
        node.addEventListener('click', function () {
          vm.data.currentPage = parseInt(this.getAttribute('data-pagination-page'))
          vm.render()
        })
      })
  }
}
