<template>
  <section
    id="loginBody"
    v-loading.fullscreen.lock="loading"
    class="login-frame"
    element-loading-text="登入驗證中"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)"
  >
    <div class="frame-bg" />
    <div class="frame-opacity" />
    <div class="frame-container">
      <main class="UI-frame">
        <div class="Animation-frame">
          <div class="SwitchUI-frame">
            <div class="SwitchUI-bg" />
            <div class="SwitchUI-op" />
          </div>
          <div id="uiFrame1" class="LogInUI-frame">
            <div class="LogInUI-bg" />
            <div class="LogInUI-bg-opacity" />
            <div id="loginPanel" class="LogInUI-contenter">
              <div id="slideUIFrameLogin" class="slide-frame">
                <div class="LogInUI-contenter-title">
                  <div>登入</div>
                </div>
                <div class="LogInUI-contenter-section">
                  <div>
                    <label for="email">
                      Email:
                    </label>
                  </div>
                  <input id="email" v-model="email" type="email">
                  <br>
                  <div>
                    <label for="password">
                      Passowrd:
                    </label>
                  </div>
                  <input id="password" v-model="password" type="password" @keydown.enter="handleLoginClick">
                  <br>
                  <br>
                  <button type="button" @click="handleLoginClick">Log in</button>
                  <br>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </section>
</template>

<script>
import { postAdminLogin } from '@/assets/api/hexschool'
import { setAccessToken } from '@/assets/utils'

export default {
  name: 'Login',
  data () {
    return {
      loading: false,
      email: '',
      password: ''
    }
  },
  methods: {
    handleLoginClick () {
      const { email, password } = this
      this.loading = true
      postAdminLogin({
        email, password
      }).then(result => {
        const { success, message, uuid, token, expired } = result
        if (success) {
          setAccessToken({ uuid, token }, expired)
          this.$message({
            duration: 1000,
            message: message,
            type: 'success',
            onClose: () => {
              this.$router.push('/product')
            }
          })
        } else {
          this.$message.error(message)
        }
      }).catch(error => {
        // eslint-disable-next-line prefer-const
        let { message, errors } = error
        if (errors) {
          message = ''
          Object.keys(errors).forEach(key => {
            message += errors[key].join(',')
          })
        }
        this.$message.error(message)
      }).finally(() => {
        this.loading = false
      })
    }
  }
}
</script>
<style scoped src="../../../assets/scss/login.css"></style>
