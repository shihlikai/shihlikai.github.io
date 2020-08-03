<template>
  <router-link to="/shop/cart" :disabled="cartDataList.length===0" class="text-white">
    <font-awesome-icon icon="shopping-cart" />
    <span
      v-if="cartDataList.length>0"
      class="badge badge-pill badge-danger position-absolute"
      style="top: 5px;"
    >{{ cartDataList.length }}</span>
  </router-link>
</template>

<script>
import { shopping } from '@/assets/api/hexschool'

export default {
  name: 'CartLayout',
  data () {
    return {
      cartDataList: []
    }
  },
  created () {
    this.periodCart()
  },
  methods: {
    periodCart () {
      shopping.getCart()
        .then(result => {
          this.cartDataList = result.data
          return Promise.resolve()
        }).then(() => {
          setTimeout(() => {
            this.periodCart()
          }, 1000)
        })
    }
  }
}
</script>
<style scoped>
a[disabled="disabled"] {
  pointer-events: none;
}
</style>
