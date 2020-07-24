<template>
  <div
    id="cartModalCenter"
    class="modal fade"
    tabindex="-1"
    role="dialog"
    aria-hidden="true"
    data-backdrop="static"
    data-keyboard="false"
  >
    <div class="modal-dialog" role="document" style="max-width: 80%;">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">購物車</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div v-loading="loading">
            <div class="pb-1 d-flex align-items-center justify-content-between">
              <h6>訂單內容</h6>
              <button v-if="cartDataList.length > 0" type="button" class="btn btn-danger btn-sm" @click="clearCart">
                <svg-icon icon-class="trash" />
                清空購物車
              </button>
            </div>
            <div class="p-3">
              <table class="table">
                <thead>
                  <tr>
                    <th class="text-center" scope="col" style="width: 80px;">刪除</th>
                    <th class="text-center" scope="col">品名</th>
                    <th class="text-center" scope="col" style="width: 200px;">數量</th>
                    <th class="text-center" scope="col" style="width: 80px;">單位</th>
                    <th class="text-center" scope="col" style="width: 80px;">單價</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(cart, index) in cartDataList" :key="index">
                    <td class="text-center align-middle">
                      <button type="button" class="btn btn-danger btn-sm" @click="deleteCart(cart)">
                        <svg-icon icon-class="trash" />
                      </button>
                    </td>
                    <td class="align-middle">{{ cart.product.title }}</td>
                    <td class="align-middle text-center">
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text cursor-pointer" @click="handelQuantityPlus(cart)">
                            <svg-icon icon-class="plus" />
                          </span>
                        </div>
                        <input type="number" class="form-control text-center" :value="cart.quantity">
                        <div class="input-group-prepend">
                          <span class="input-group-text cursor-pointer" @click="handelQuantityMinus(cart)">
                            <svg-icon icon-class="minus" />
                          </span>
                        </div>
                      </div>
                    </td>
                    <td class="align-middle text-center">{{ cart.product.unit }}</td>
                    <td class="align-middle text-right">{{ cart.product.price | money }}</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td colspan="3" />
                    <td class="text-center">總計</td>
                    <td class="text-right">{{ total | money }}</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
          <div>
            <h6>訂購人</h6>
            <ValidationObserver
              ref="observer"
              v-slot="{ invalid }"
              class="p-3"
              tag="form"
              @submit.prevent="handleSubmit"
            >
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
              <ValidationProvider
                v-slot="{ errors }"
                name="phone"
                :rules="{ required: true, regex:/^((?=(09))[0-9]{10})$/ }"
              >
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
                      <label class="btn btn-outline-dark" :class="form.payment === 'WebATM' ? 'active':''">
                        <input v-model="form.payment" type="radio" value="WebATM" autocomplete="off"> WebATM
                      </label>
                      <label class="btn btn-outline-dark" :class="form.payment === 'ATM' ? 'active':''">
                        <input v-model="form.payment" type="radio" value="ATM" autocomplete="off"> ATM
                      </label>
                      <label class="btn btn-outline-dark" :class="form.payment === 'Barcode' ? 'active':''">
                        <input v-model="form.payment" type="radio" value="Barcode" autocomplete="off"> Barcode
                      </label>
                      <label class="btn btn-outline-dark" :class="form.payment === 'Credit' ? 'active':''">
                        <input v-model="form.payment" type="radio" value="Credit" autocomplete="off"> Credit
                      </label>
                      <label class="btn btn-outline-dark" :class="form.payment === 'ApplePay' ? 'active':''">
                        <input v-model="form.payment" type="radio" value="ApplePay" autocomplete="off"> ApplePay
                      </label>
                      <label class="btn btn-outline-dark" :class="form.payment === 'GooglePay' ? 'active':''">
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
                <button :disabled="invalid" type="submit" class="btn btn-primary">送出訂單</button>
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
import { shopping } from '@/assets/api/hexschool'
import Swal from 'sweetalert2/dist/sweetalert2.js'

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
      },
      cartDataList: [],
      loading: false
    }
  },
  computed: {
    total () {
      return this.cartDataList.reduce((accumulator, cart) => {
        const { quantity, product } = cart
        return accumulator + (product.price * quantity)
      }, 0)
    }
  },
  watch: {
    value () {
      this.container.modal(this.value ? 'show' : 'hide')
    }
  },
  mounted () {
    this.container = $('#cartModalCenter')
    this.container.on('shown.bs.modal', () => {
      this.getCart()
    })
    this.container.on('hidden.bs.modal', () => {
      this.$emit('input', false)
    })
  },
  methods: {
    handleSubmit () {
      Swal.fire('', '訂單送出完成', 'success')
    },
    handelQuantityPlus (cart) {
      cart.quantity = cart.quantity + 1
      this.updateCart(cart)
    },
    handelQuantityMinus (cart) {
      if (cart.quantity === 1) {
        return
      }

      cart.quantity = cart.quantity - 1
      this.updateCart(cart)
    },
    getCart () {
      this.loading = true
      shopping.getCart().then(result => {
        this.cartDataList = result.data
      }).finally(() => {
        this.loading = false
      })
    },
    updateCart (cart) {
      this.loading = true
      shopping.patchCart(cart.product.id, cart.quantity)
        .then(() => {
          this.getCart()
        }).finally(() => {
          this.loading = false
        })
    },
    deleteCart (cart) {
      this.loading = true
      shopping.deleteCart(cart.product.id)
        .then(() => {
          this.getCart()
        }).finally(() => {
          this.loading = false
        })
    },
    clearCart () {
      this.loading = true
      shopping.deleteAllCart()
        .then(() => {
          this.getCart()
        }).finally(() => {
          this.loading = false
        })
    }
  }
}
</script>
<style scoped>
  .form-group.required > label:before {
    content: " * ";
    color: red;
  }

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }

  .cursor-pointer {
    cursor: pointer;
  }
</style>
