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
        @current-change="handleCurrentChange"
      />
      <div style="position: absolute; right: 0px; margin-right: 20px;">
        <el-button type="primary" @click="handleCreateClick">新增產品</el-button>
      </div>
    </div>
    <div style="height: 20px;" />
    <el-table
      :data="products"
      :row-style="handleRowStyle"
    >
      <el-table-column width="120">
        <div slot="header">圖片</div>
        <div slot-scope="scope">
          <el-image :src="scope.row.imageUrl[0]" style="height: 100px; width: 100px;" />
        </div>
      </el-table-column>
      <el-table-column prop="category" label="分類" width="120" />
      <el-table-column prop="title" label="產品名稱" />
      <el-table-column prop="origin_price" label="原價" width="80" />
      <el-table-column prop="price" label="售價" width="80" />
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
      size="60%"
      style="height: 100%;"
    >
      <div style="height: 100%; width: 100%; padding: 10px; text-align: center;">
        <el-form :model="form">
          <div style="display: flex;">
            <div style="width: 50%; padding-right: 20px;">
              <el-form-item label="輸入圖片網址">
                <el-input v-model="form.imageUrl[0]" autocomplete="off" />
              </el-form-item>
              <div style="border: #1abc9c solid 1px;">
                <el-image :lazy="true" :src="form.imageUrl[0]" style="width: 100%;" />
              </div>
              <div style="margin-top: 40px;">
                <el-button @click="cancelForm">取 消</el-button>
                <el-button type="primary" @click="handleSubmitClick">確 定</el-button>
              </div>
            </div>
            <div style="width: 50%;">
              <el-form-item label="標題">
                <el-input v-model="form.title" autocomplete="off" />
              </el-form-item>
              <div style="display: flex;">
                <el-form-item label="分類" style="width: 50%; padding-right: 20px;">
                  <el-input v-model="form.category" autocomplete="off" />
                </el-form-item>
                <el-form-item label="單位" style="width: 50%;">
                  <el-input v-model="form.unit" autocomplete="off" />
                </el-form-item>
              </div>
              <div style="display: flex;">
                <el-form-item label="原價" style="width: 50%; padding-right: 20px;">
                  <el-input-number v-model="form.origin_price" :min="1" controls-position="right" style="width:100%;" />
                </el-form-item>
                <el-form-item label="售價" style="width: 50%;">
                  <el-input-number v-model="form.price" :min="1" controls-position="right" style="width:100%;" />
                </el-form-item>
              </div>
              <el-form-item label="產品描述">
                <el-input
                  v-model="form.description"
                  type="textarea"
                  :autosize="{ minRows: 4, maxRows: 4}"
                  autocomplete="off"
                />
              </el-form-item>
              <el-form-item label="說明內容">
                <el-input
                  v-model="form.content"
                  type="textarea"
                  :autosize="{ minRows: 4, maxRows: 4}"
                  autocomplete="off"
                  resize="none"
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
            </div>
          </div>
        </el-form>
      </div>
    </el-drawer>
  </div>
</template>

<script>
import { getAdminProducts, getAdminProduct, patchAdminProduct, postAdminProduct, deleteAdminProduct } from '@/assets/api/hexschool'
const product_list = '商品列表讀取中'
const product_update = '商品資料更新中'
const product_delete = '商品資料刪除中'
const product_load = '商品資料讀取中'
const formTemplate = {
  origin_price: 1,
  price: 1,
  enabled: true,
  imageUrl: []
}
Object.freeze(formTemplate)

export default {
  data: function () {
    return {
      loadingText: product_list,
      loading: true,
      dialog: false,
      products: [],
      pagination: {},
      form: this.deepCopy(formTemplate)
    }
  },
  created () {
    this.fetchProducts()
  },
  methods: {
    handleRowStyle ({ row, rowIndex }) {
      const { enabled } = row
      if (!enabled) {
        return {
          backgroundColor: '#E6A23C',
          color: '#303133'
        }
      }
    },
    fetchProducts (page) {
      return new Promise(resolve => {
        this.loadingText = product_list
        this.loading = true
        getAdminProducts(page).then(response => {
          const { data, meta } = response
          this.products = data
          this.pagination = meta.pagination
        }).finally(() => {
          this.loading = false
          resolve()
        })
      })
    },
    handleCurrentChange (page) {
      this.fetchProducts(page)
    },
    handleEditClick ({ row }) {
      this.loading = true
      this.loadingText = product_load
      getAdminProduct(row.id).then(res => {
        this.form = res.data// this.deepCopy(row)
        this.dialog = true
      }).catch(error => {
        console.error(error)
      }).finally(() => {
        this.loading = false
      })
    },
    handleDeleteClick ({ row }) {
      return this.$confirm(`${row.title} 商品資料?`, '確認刪除', {
        confirmButtonText: '確定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        return new Promise(resolve => {
          this.loadingText = product_delete
          this.loading = true
          deleteAdminProduct(row.id)
            .then(() => {
              return this.updateProductsList()
            }).finally(() => {
              this.loading = false
              resolve()
            })
        })
      })
    },
    handleSubmitClick () {
      return new Promise(resolve => {
        this.loadingText = product_update
        this.loading = true
        const id = this.form.id
        let instance
        if (id) {
          instance = patchAdminProduct(id, this.form)
        } else {
          instance = postAdminProduct(this.form)
        }
        instance.then(response => {
          return this.updateProductsList()
        }).then(() => {
          this.$refs.drawer.closeDrawer()
        }).finally(() => {
          this.loading = false
          resolve()
        })
      })
    },
    handleCreateClick () {
      this.form = this.deepCopy(formTemplate)
      this.dialog = true
    },
    cancelForm () {
      this.loading = false
      this.dialog = false
    },
    updateProductsList () {
      return this.fetchProducts(this.pagination.current_page)
    },
    deepCopy (obj) {
      return JSON.parse(JSON.stringify(obj))
    }
  }
}
</script>

<style>
.el-image__error {
  height: 415px;
}
</style>
