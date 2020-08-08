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
      <div style="position: absolute; right: 0px; margin-right: 20px;">
        <el-button type="primary" @click="handleCreateClick">新增優惠券</el-button>
      </div>
    </div>
    <div style="height: 20px;" />
    <el-table
      :data="coupons"
    >
      <el-table-column label="名稱">
        <div slot-scope="{ row }" :class="!row.enabled?'enabled': ''">
          {{ row.title }}
        </div>
      </el-table-column>
      <el-table-column prop="code" label="序號" />
      <el-table-column prop="percent" label="折扣%" width="80"/>
      <el-table-column prop="deadline.datetime" label="到期日" width="180" />
      <el-table-column width="200">
        <div slot="header">編輯</div>
        <div slot-scope="scope">
          <el-button type="primary" @click="handleEditClick(scope)">編輯</el-button>
          <el-button type="danger" @click="handleDeleteClick(scope)">刪除</el-button>
        </div>
      </el-table-column>
    </el-table>
    <el-drawer
      ref="drawer"
      :visible.sync="dialog"
      :with-header="false"
      :wrapper-closable="false"
      direction="rtl"
      size="30%"
      style="height: 100%;"
    >
      <div style="padding: 10px; text-align: center;">
        <el-form :model="form">
          <el-form-item label="名稱">
            <el-input v-model="form.title" autocomplete="off" />
          </el-form-item>
          <el-form-item label="序號">
            <el-input v-model="form.code" autocomplete="off" />
          </el-form-item>
          <el-form-item label="折扣百分比">
            <br>
            <el-slider v-model="form.percent" style="padding-left: 10px;" show-input input-size="mini" />
          </el-form-item>
          <el-form-item label="到期日">
            <br>
            <el-date-picker
              v-model="form.deadline_at"
              style="width: 100%;"
              type="datetime"
              value-format="yyyy-MM-dd HH:mm:ss"
              placeholder="選擇日期時間"
            />
          </el-form-item>
          <el-form-item style="text-align: left;">
            是否啟用
            <el-switch
              v-model="form.enabled"
              :active-value="true"
              :inactive-value="false"
              inactive-color="#F56C6C"
            />
          </el-form-item>
          <el-button @click="cancelForm">取 消</el-button>
          <el-button type="primary" @click="handleSubmitClick">確 定</el-button>
        </el-form>
      </div>
    </el-drawer>
  </div>
</template>

<script>
import { adminCoupon } from '@/assets/api/hexschool'

const coupon_list = '優惠券列表讀取中'
const coupon_update = '優惠券資料更新中'
const coupon_delete = '優惠券資料刪除中'
const coupon_load = '優惠券資料讀取中'

const formTemplate = {
  'title': '',
  'code': '',
  'percent': 0,
  'enabled': true,
  'deadline_at': ''
}

Object.freeze(formTemplate)
export default {
  data () {
    return {
      loading: false,
      loadingText: coupon_list,
      dialog: false,
      pagination: {},
      form: {},
      coupons: []
    }
  },
  created () {
    this.fetchCoupons()
  },
  methods: {
    handleCreateClick () {
      this.dialog = true
      this.form = Object.assign({}, formTemplate)
    },
    cancelForm () {
      this.loading = false
      this.dialog = false
    },
    handleSubmitClick () {
      return new Promise(resolve => {
        this.loadingText = coupon_update
        this.loading = true
        const id = this.form.id
        let instance
        if (id) {
          instance = adminCoupon.patch(id, this.form)
        } else {
          instance = adminCoupon.post(this.form)
        }
        instance.then(response => {
          return this.updateCouponsList()
        }).then(() => {
          this.$refs.drawer.closeDrawer()
        }).finally(() => {
          this.loading = false
          resolve()
        })
      })
    },
    updateCouponsList () {
      return this.fetchCoupons(this.pagination.current_page)
    },
    fetchCoupons (page) {
      return new Promise(resolve => {
        this.loadingText = coupon_list
        this.loading = true
        adminCoupon.getAll(page).then(response => {
          const { data, meta } = response
          this.coupons = data
          this.pagination = meta.pagination
        }).finally(() => {
          this.loading = false
          resolve()
        })
      })
    },
    handleEditClick ({ row }) {
      this.loading = true
      this.loadingText = coupon_load
      adminCoupon.get(row.id).then(res => {
        this.form = res.data
        this.form.deadline_at = this.form.deadline.datetime
        this.dialog = true
      }).catch(error => {
        console.error(error)
      }).finally(() => {
        this.loading = false
      })
    },
    handleDeleteClick ({ row }) {
      return this.$confirm(`${row.title} 優惠券資料?`, '確認刪除', {
        confirmButtonText: '確定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        return new Promise(resolve => {
          this.loadingText = coupon_delete
          this.loading = true
          adminCoupon.delete(row.id)
            .then(() => {
              return this.updateCouponsList()
            }).finally(() => {
              this.loading = false
              resolve()
            })
        })
      })
    }
  }
}
</script>

<style scoped>
.d-flex {
  display: flex;
}
.enabled:before{
  content: '(未啟用)';
  font-weight: bold;
  font-style: italic;
  color: #F56C6C;
}
</style>
