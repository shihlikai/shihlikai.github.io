<template>
  <div id="cartModalCenter" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true" data-backdrop="static" data-keyboard="false">
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 id="exampleModalLongTitle" class="modal-title">購物車</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div>
            <h5>訂購人</h5>
            <ValidationObserver ref="observer" v-slot="{ invalid }" tag="form" @submit.prevent="handleSubmit">
              <ValidationProvider v-slot="{ errors }" name="recipient" rules="required">
                <div class="form-group required">
                  <label for="recipient">收件人姓名</label>
                  <input id="recipient" v-model="form.recipient" type="text" class="form-control" autocomplete="off">
                  <p class="text-danger">{{ errors[0] }}</p>
                </div>
              </ValidationProvider>
              <ValidationProvider v-slot="{ errors }" name="email" rules="required|email">
                <div class="form-group required">
                  <label for="email">Email</label>
                  <input id="email" v-model="form.email" type="email" class="form-control" autocomplete="off">
                  <p class="text-danger">{{ errors[0] }}</p>
                </div>
              </ValidationProvider>
              <ValidationProvider v-slot="{ errors }" name="phone" :rules="{ required: true, regex:/^((?=(09))[0-9]{10})$/ }">
                <div class="form-group required">
                  <label for="phone">電話</label>
                  <input id="phone" v-model="form.phone" type="tel" class="form-control" autocomplete="off">
                  <p class="text-danger">{{ errors[0] }}</p>
                </div>
              </ValidationProvider>
              <ValidationProvider v-slot="{ errors }" name="address" rules="required">
                <div class="form-group required">
                  <label for="address">地址</label>
                  <input id="address" v-model="form.address" type="text" class="form-control" autocomplete="off">
                  <p class="text-danger">{{ errors[0] }}</p>
                </div>
              </ValidationProvider>
              <ValidationProvider v-slot="{ errors }" name="payment" rules="required">
                <div class="form-group required">
                  <label>付款方式</label>
                  <div>
                    <div class="btn-group btn-group-toggle">
                      <label class="btn btn-outline-dark">
                        <input v-model="form.payment" type="radio" value="WebATM" autocomplete="off"> WebATM
                      </label>
                      <label class="btn btn-outline-dark">
                        <input v-model="form.payment" type="radio" value="ATM" autocomplete="off"> ATM
                      </label>
                      <label class="btn btn-outline-dark">
                        <input v-model="form.payment" type="radio" value="Barcode" autocomplete="off"> Barcode
                      </label>
                      <label class="btn btn-outline-dark">
                        <input v-model="form.payment" type="radio" value="Credit" autocomplete="off"> Credit
                      </label>
                      <label class="btn btn-outline-dark">
                        <input v-model="form.payment" type="radio" value="ApplePay" autocomplete="off"> ApplePay
                      </label>
                      <label class="btn btn-outline-dark">
                        <input v-model="form.payment" type="radio" value="GooglePay" autocomplete="off"> GooglePay
                      </label>
                    </div>
                    <p class="text-danger">{{ errors[0] }}</p>
                  </div>
                </div>
              </ValidationProvider>
              <div class="form-group">
                <label for="message">留言</label>
                <textarea id="message" class="form-control" rows="5" autocomplete="off" />
              </div>
              <div class="form-group text-right">
                <button :disabled="invalid" type="submit" class="btn btn-primary">送出表單</button>
              </div>
            </ValidationObserver>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import { ValidationProvider, ValidationObserver } from 'vee-validate/dist/vee-validate.full'

export default {
  name: 'Cart',
  components: {
    ValidationProvider, ValidationObserver
  },
  props: {
    value: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return {
      container: {},
      form: {
        recipient: '',
        email: '',
        phone: '',
        address: '',
        payment: null
      }
    }
  },
  watch: {
    value () {
      this.container.modal(this.value ? 'show' : 'hide')
    }
  },
  mounted () {
    this.container = $('#cartModalCenter')
    this.container.on('hidden.bs.modal', () => {
      this.$emit('input', false)
    })
  },
  methods: {
    handleSubmit () {
      console.log('handleSubmit')
    }
  }
}
</script>
<style scoped>
  .form-group.required > label:before {
    content:" * ";
    color:red;
  }
</style>
