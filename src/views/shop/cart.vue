<template>
  <div class="container">
    <h5 class="text-center">購物車</h5>
    <div v-loading="loading" class="p-1">
      <div class="pb-1 d-flex align-items-center justify-content-between">
        <h6>訂單內容</h6>
        <button v-if="cartDataList.length > 0" type="button" class="btn btn-danger btn-sm" @click="clearCart">
          <font-awesome-icon icon="trash-alt" size="lg" />
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
                  <font-awesome-icon icon="trash-alt" size="lg" />
                </button>
              </td>
              <td class="align-middle">{{ cart.product.title }}</td>
              <td class="align-middle text-center">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text cursor-pointer" @click="handleQuantityPlus($event, cart)">
                      <svg-icon icon-class="plus" />
                    </span>
                  </div>
                  <input type="number" class="form-control text-center" :value="cart.quantity">
                  <div class="input-group-prepend">
                    <span class="input-group-text cursor-pointer" @click="handleQuantityMinus($event, cart)">
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
        <ValidationProvider v-slot="{ errors }" name="收件人姓名" rules="required">
          <div class="form-group required">
            <label for="recipient">收件人姓名</label>
            <input id="recipient" v-model="form.recipient" type="text" class="form-control" autocomplete="off">
            <p class="text-danger">{{ errors[0] }}</p>
          </div>
        </ValidationProvider>
        <ValidationProvider v-slot="{ errors }" name="Email" rules="required|email">
          <div class="form-group required">
            <label for="email">Email</label>
            <input id="email" v-model="form.email" type="email" class="form-control" autocomplete="off">
            <p class="text-danger">{{ errors[0] }}</p>
          </div>
        </ValidationProvider>
        <ValidationProvider
          v-slot="{ errors }"
          name="手機號碼"
          :rules="{ required: true, regex:/^((?=(09))[0-9]{10})$/ }"
        >
          <div class="form-group required">
            <label for="phone">手機號碼</label>
            <input id="phone" v-model="form.phone" type="tel" class="form-control" autocomplete="off">
            <p class="text-danger">{{ errors[0] }}</p>
          </div>
        </ValidationProvider>
        <ValidationProvider v-slot="{ errors }" name="地址" rules="required">
          <div class="form-group required">
            <label for="address">地址</label>
            <input id="address" v-model="form.address" type="text" class="form-control" autocomplete="off">
            <p class="text-danger">{{ errors[0] }}</p>
          </div>
        </ValidationProvider>
        <ValidationProvider v-slot="{ errors }" name="付款方式" rules="required">
          <div class="form-group required">
            <label>付款方式</label>
            <div>
              <div class="btn-group btn-group-toggle">
                <label
                  v-for="(payment) in payments"
                  :key="payment"
                  class="btn btn-dark-green"
                  :class="form.payment === payment ? 'active':''"
                >
                  <input v-model="form.payment" type="radio" :value="payment" autocomplete="off"> {{ payment }}
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
          <button :disabled="cartDataList.length === 0 || invalid" type="submit" class="btn btn-dark-green">送出訂單</button>
        </div>
      </ValidationObserver>
    </div>
  </div>
</template>

<script>
import { ValidationObserver, ValidationProvider, localize } from 'vee-validate/dist/vee-validate.full'
import LOCALE_TW from 'vee-validate/dist/locale/zh_TW.json'
import { shopping } from '@/assets/api/hexschool'

import 'sweetalert2/dist/sweetalert2.css'
import Swal from 'sweetalert2/dist/sweetalert2.js'

localize('zh_TW', LOCALE_TW)
export default {
  name: 'ShoppingCart',
  components: {
    ValidationProvider, ValidationObserver
  },
  data () {
    return {
      form: {
        recipient: '',
        email: '',
        phone: '',
        address: '',
        payment: null
      },
      cartDataList: [],
      loading: false,
      payments: [
        'WebATM', 'ATM', 'Barcode', 'Credit', 'ApplePay', 'GooglePay'
      ]
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
  created () {
    this.getCart()
  },
  mounted () {
  },
  methods: {
    handleSubmit () {
      this.clearCart()
      Swal.fire('', '訂單送出完成', 'success')
    },
    handleQuantityPlus ($event, cart) {
      if ($event.target.getAttribute('isLocked')) {
        return
      }

      $event.target.setAttribute('isLocked', true)
      const plus = cart.quantity + 1
      this.updateCart(cart.product.id, plus, () => {
        $event.target.removeAttribute('isLocked')
        cart.quantity = plus
      })
    },
    handleQuantityMinus ($event, cart) {
      if (cart.quantity === 1) {
        return
      }

      if ($event.target.getAttribute('isLocked')) {
        return
      }

      $event.target.setAttribute('isLocked', true)
      const minus = cart.quantity - 1
      this.updateCart(cart.product.id, minus, () => {
        $event.target.removeAttribute('isLocked')
        cart.quantity = minus
      })
    },
    getCart () {
      this.loading = true
      shopping.getCart().then(result => {
        this.cartDataList = result.data
      }).finally(() => {
        this.loading = false
      })
    },
    updateCart (productId, quantity, complateHandle) {
      this.loading = true
      shopping.patchCart(productId, quantity)
        .then(() => {
          this.getCart()
        }).catch(error => {
          Swal.fire('', error.errors[0], 'error')
        }).finally(() => {
          complateHandle()
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
/deep/ .el-loading-mask {
  z-index: 0;
}
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
