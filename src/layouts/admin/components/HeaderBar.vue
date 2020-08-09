<template>
  <div style="display: flex;">
    <div style="padding-top: 10px;">
      <div style="font-size: 20px; font-weight: 900;">{{ $route.meta.name }}</div>
    </div>
    <div style="font-size: 12px; position: absolute; right: 0px;padding: 10px;">
      <span>Admin</span>
      <el-button style="margin-left: 10px;" size="mini" type="info" plain :disabled="disabled" @click="handleLogoutClick">Log out</el-button>
    </div>
  </div>
</template>

<script>
import { removeAccessToken } from '@/assets/utils'
import { auth } from '@/assets/api/hexschool'
export default {
  name: 'HeaderBar',
  data () {
    return {
      disabled: false
    }
  },
  methods: {
    handleLogoutClick () {
      this.disabled = true
      auth.logout()
        .then(_ => {})
        .catch(_ => {})
        .finally(_ => {
          removeAccessToken()
          this.$message({
            duration: 1000,
            message: '登出成功',
            type: 'success',
            onClose: () => {
              this.$router.push('/login')
            }
          })
        })
    }
  }
}
</script>
