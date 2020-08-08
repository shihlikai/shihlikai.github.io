<template>
  <div
    v-loading.fullscreen.lock="loading"
    :element-loading-text="loadingText"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)"
  >
    <div style="display: flex;">
      <div class="el-pagination is-background">
        <ul class="el-pager">
          <li class="number active">總筆數：{{ pagination.total }}</li>
        </ul>
      </div>
      <el-pagination
        background
        layout="prev, pager, next"
        :page-size="pagination.count"
        :page-count="pagination.total_pages"
      />
    </div>
    <div style="height: 20px;" />
    <el-table
      :data="orders"
    >
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-table
            :data="props.row.products"
            border
            stripe
          >
            <el-table-column width="120">
              <div slot="header">圖片</div>
              <div slot-scope="scope">
                <el-image :src="scope.row.product.imageUrl[0]" style="height: 100px; width: 100px;" />
              </div>
            </el-table-column>
            <el-table-column prop="product.category" label="分類" width="120" />
            <el-table-column prop="product.title" label="產品名稱" />
            <el-table-column prop="product.origin_price" label="原價" width="80" />
            <el-table-column prop="product.price" label="售價" width="80" />
            <el-table-column prop="quantity" label="數量" width="80" />
            <el-table-column label="小計" width="80">
              <template slot-scope="{row}">
                {{ row.product.price * row.quantity | money }}
              </template>
            </el-table-column>
          </el-table>
        </template>
      </el-table-column>
      <el-table-column prop="created.datetime" label="訂單時間" min-width="33" />
      <el-table-column prop="amount" label="訂單金額" min-width="33">
        <div slot-scope="{row}">
          {{ row.amount | money }}
        </div>
      </el-table-column>
      <el-table-column prop="coupon.title" label="優惠券" min-width="33" />
      <el-table-column prop="payment" label="付款方式" min-width="33" />
    </el-table>
  </div>
</template>

<script>
import { adminOrders } from '@/assets/api/hexschool'

const orders_list = '訂單列表讀取中'
// const coupon_update = '優惠券資料更新中'
// const coupon_delete = '優惠券資料刪除中'
// const coupon_load = '優惠券資料讀取中'

export default {
  data () {
    return {
      loading: false,
      loadingText: orders_list,
      dialog: false,
      pagination: {},
      form: {},
      orders: []
    }
  },
  created () {
    this.fetchOrders()
  },
  methods: {
    cancelForm () {
      this.loading = false
      this.dialog = false
    },
    fetchOrders (page) {
      return new Promise(resolve => {
        this.loadingText = orders_list
        this.loading = true
        adminOrders.getAll(page).then(response => {
          const { data, meta } = response
          this.orders = data
          this.pagination = meta.pagination
        }).finally(() => {
          this.loading = false
          resolve()
        })
      })
    }
  }
}
</script>

<style scoped>

</style>
