<template>
  <div
    v-loading.fullscreen.lock="loading"
    :element-loading-text="loadingText"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)"
  >
    <div style="position: relative;display: flex;">
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
      <el-table-column width="100" label="編輯">
        <div slot-scope="scope">
          <el-button type="danger" @click="handleDeleteClick(scope)">刪除</el-button>
        </div>
      </el-table-column>
    </el-table>
    <el-drawer
      ref="drawer"
      :visible.sync="dialog"
      :with-header="false"
      direction="rtl"
      size="16%"
      style="height: 100%;"
    >
      <div style="padding: 10px; text-align: center;">
        <el-upload
          ref="upload"
          action="fake"
          list-type="picture-card"
          :before-upload="beforeUpload"
          :on-preview="uploadPreview"
          :on-success="uploadSuccess"
          :on-error="uploadError"
          :http-request="createHttpRequest"
        >
          <i class="el-icon-plus" />
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
      </div>
    </el-drawer>
  </div>
</template>

<script>
import { adminStorage } from '@/assets/api/hexschool'

const storage_list = '圖片列表讀取中'
const storage_update = '圖片資料更新中'
const storage_delete = '圖片資料刪除中'

export default {
  data () {
    return {
      adminStorage: adminStorage,
      loading: false,
      loadingText: storage_list,
      dialog: false,
      pagination: {},
      form: {
        file: null
      },
      storages: [],
      dialogImageUrl: '',
      dialogVisible: false
    }
  },
  watch: {
    dialog () {
      setTimeout(() => {
        this.$refs.upload.clearFiles()
      }, 0)
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
    handleDeleteClick ({ row }) {
      return this.$confirm(`
        <div style="display: flex; justify-content: center; align-items: center;">
          <div>
            <img src="${row.path}" width="50" height="50"/>
          </div>
          <div style="word-break: break-all; padding: 5px;">${row.path}</div>
        </div>`, '確認刪除', {
        dangerouslyUseHTMLString: true,
        confirmButtonText: '確定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        return new Promise(resolve => {
          this.loadingText = storage_delete
          this.loading = true
          adminStorage.delete(row.id)
            .then(() => {
              return this.updateStorageList()
            }).finally(() => {
              this.loading = false
              resolve()
            })
        })
      }).catch(_ => {})
    },
    updateStorageList () {
      return this.fetchStorages(this.pagination.current_page)
    },
    uploadPreview (file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    uploadSuccess () {
      this.loading = false
      this.updateStorageList()
        .then(_ => {
          this.$refs.drawer.closeDrawer()
        })
    },
    uploadError (error) {
      this.loading = false
      console.error('error', error.response.data)
    },
    beforeUpload () {
      this.loadingText = storage_update
      this.loading = true
    },
    createHttpRequest (options) {
      const formData = new FormData()
      formData.append('file', options.file)
      return adminStorage.createPostRequest(formData)
    }
  }
}
</script>

<style scoped>

</style>
