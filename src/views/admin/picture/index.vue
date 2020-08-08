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
        <el-button type="primary" @click="handleCreateClick">新增圖片</el-button>
      </div>
    </div>
    <div style="height: 20px;" />
    <el-table
      :data="storages"
    >
      <el-table-column width="180">
        <div slot="header">圖片</div>
        <div slot-scope="scope">
          <el-image :src="scope.row.path" style="height: 100px;" />
        </div>
      </el-table-column>
      <el-table-column prop="path" label="網址" />
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
      <div style="height: 100%; width: 100%; padding: 10px; text-align: center;">
        <el-form :model="form">
          <input type="file" @change="processFile($event)">
          <!--          <el-form-item label="輸入圖片網址">-->
          <!--            <el-input v-model="form.file" autocomplete="off" />-->
          <!--          </el-form-item>-->
          <!--          <div style="border: #1abc9c solid 1px;">-->
          <!--            <el-image :lazy="true" :src="form.file" style="width: 100%;" />-->
          <!--          </div>-->
          <div style="margin-top: 40px;">
            <el-button @click="cancelForm">取 消</el-button>
            <el-button type="primary" @click="handleSubmitClick">確 定</el-button>
          </div>
        </el-form>
      </div>
    </el-drawer>
  </div>
</template>

<script>
import { adminStorage } from '@/assets/api/hexschool'

const storage_list = '圖片列表讀取中'
const storage_update = '圖片資料更新中'
// const product_delete = '商品資料刪除中'

export default {
  data () {
    return {
      loading: false,
      loadingText: storage_list,
      dialog: false,
      pagination: {},
      form: {
        file: null
      },
      storages: []
    }
  },
  created () {
    this.fetchStorages()
  },
  methods: {
    processFile (event) {
      this.form.file = event.target.files[0]
    },
    fetchStorages (page) {
      return new Promise(resolve => {
        this.loadingText = storage_list
        this.loading = true
        adminStorage.getAll(page).then(response => {
          const { data, meta } = response
          this.storages = data
          this.pagination = meta.pagination
        }).finally(() => {
          this.loading = false
          resolve()
        })
      })
    },
    handleCreateClick () {
      this.form = {}
      this.dialog = true
    },
    cancelForm () {
      this.loading = false
      this.dialog = false
    },
    handleSubmitClick () {
      return new Promise(resolve => {
        this.loadingText = storage_update
        this.loading = true

        const formData = new FormData()
        formData.append('file', this.form.file)

        adminStorage.post(formData).then(response => {
          return this.updateStorageList()
        }).then(() => {
          this.$refs.drawer.closeDrawer()
        }).finally(() => {
          this.loading = false
          resolve()
        })
      })
    },
    updateStorageList () {
      return this.fetchStorages(this.pagination.current_page)
    }
  }
}
</script>

<style scoped>

</style>
