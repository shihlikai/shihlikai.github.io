import { accessToken } from '@/assets/utils'
import axios from 'axios'

const baseUrl = process.env.VUE_APP_APIPATH
const requestConfig = {}
Object.defineProperties(requestConfig, {
  'authorityUrl': {
    get () {
      let { uuid } = accessToken
      if (!uuid) {
        uuid = process.env.VUE_APP_UUID
      }
      return `${baseUrl}${uuid}`
    }
  },
  'config': {
    get () {
      let { token } = accessToken
      if (!token) {
        token = process.env.VUE_APP_UUID
      }
      return {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }
    }
  }
})

const authorityUrl = requestConfig.authorityUrl
const config = requestConfig.config

export const auth = {
  login (body) {
    return new Promise((resolve, reject) => {
      axios.post(`${baseUrl}auth/login`, body)
        .then(res => {
          resolve(res.data)
        })
        .catch(error => {
          reject(error.response.data)
        })
    })
  },
  logout () {
    return new Promise((resolve, reject) => {
      axios.post(`${baseUrl}auth/logout`, {
        api_token: accessToken.token
      })
        .then(res => {
          resolve(res.data)
        })
        .catch(error => {
          reject(error.response.data)
        })
    })
  },
  check () {
    return new Promise((resolve, reject) => {
      axios.post(`${baseUrl}auth/check`, {
        api_token: accessToken.token
      })
        .then(res => {
          resolve(res.data)
        })
        .catch(error => {
          reject(error.response.data)
        })
    })
  }
}
export const product = {
  getAll (page = 1, paged = 25) {
    return new Promise((resolve, reject) => {
      axios.get(`${authorityUrl}/ec/products?page=${page}&paged=${paged}`, config)
        .then(res => {
          resolve(res.data)
        })
        .catch(error => {
          reject(error)
        })
    })
  }
}
export const shopping = {
  getCart () {
    return new Promise((resolve, reject) => {
      axios.get(`${authorityUrl}/ec/shopping`, config)
        .then(res => {
          resolve(res.data)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  postCart (product, quantity) {
    return new Promise((resolve, reject) => {
      axios.post(`${authorityUrl}/ec/shopping`, { product, quantity }, config)
        .then(res => {
          resolve(res.data)
        })
        .catch(error => {
          reject(error.response.data)
        })
    })
  },
  patchCart (product, quantity) {
    return new Promise((resolve, reject) => {
      axios.patch(`${authorityUrl}/ec/shopping`, { product, quantity }, config)
        .then(res => {
          resolve(res.data)
        })
        .catch(error => {
          reject(error.response.data)
        })
    })
  },
  deleteCart (product) {
    return new Promise((resolve, reject) => {
      axios.delete(`${authorityUrl}/ec/shopping/${product}`, config)
        .then(res => {
          resolve(res.data)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  deleteAllCart () {
    return new Promise((resolve, reject) => {
      axios.delete(`${authorityUrl}/ec/shopping/all/product`, config)
        .then(res => {
          resolve(res.data)
        })
        .catch(error => {
          reject(error)
        })
    })
  }
}
export const orders = {
  post (body) {
    return new Promise((resolve, reject) => {
      axios.post(`${authorityUrl}/ec/orders`, body, config)
        .then(res => {
          resolve(res.data)
        })
        .catch(error => {
          reject(error)
        })
    })
  }
}
export const adminProduct = {
  get (id) {
    return new Promise((resolve, reject) => {
      axios.get(`${authorityUrl}/admin/ec/product/${id}`, config)
        .then(res => {
          resolve(res.data)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  getAll (page = 1) {
    return new Promise((resolve, reject) => {
      axios.get(`${authorityUrl}/admin/ec/products?page=${page}`, config)
        .then(res => {
          resolve(res.data)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  post (body) {
    return new Promise((resolve, reject) => {
      axios.post(`${authorityUrl}/admin/ec/product`, body, config)
        .then(res => {
          resolve(res.data)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  delete (id) {
    return new Promise((resolve, reject) => {
      axios.delete(`${authorityUrl}/admin/ec/product/${id}`, config)
        .then(res => {
          resolve(res.data)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  patch (id, body) {
    return new Promise((resolve, reject) => {
      axios.patch(`${authorityUrl}/admin/ec/product/${id}`, body, config)
        .then(res => {
          resolve(res.data)
        })
        .catch(error => {
          reject(error)
        })
    })
  }
}
export const adminCoupon = {
  post (data) {
    return new Promise((resolve, reject) => {
      axios.post(`${authorityUrl}/admin/ec/coupon`, data, config)
        .then(res => {
          resolve(res.data)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  get (id) {
    return new Promise((resolve, reject) => {
      axios.get(`${authorityUrl}/admin/ec/coupon/${id}`, config)
        .then(res => {
          resolve(res.data)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  getAll (page = 1, paged = 25) {
    return new Promise((resolve, reject) => {
      axios.get(`${authorityUrl}/admin/ec/coupons?page=${page}&paged=${paged}`, config)
        .then(res => {
          resolve(res.data)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  patch (id, data) {
    return new Promise((resolve, reject) => {
      axios.patch(`${authorityUrl}/admin/ec/coupon/${id}`, data, config)
        .then(res => {
          resolve(res.data)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  delete (id) {
    return new Promise((resolve, reject) => {
      axios.delete(`${authorityUrl}/admin/ec/coupon/${id}`, config)
        .then(res => {
          resolve(res.data)
        })
        .catch(error => {
          reject(error)
        })
    })
  }
}
export const adminOrders = {
  get (id) {
    return new Promise((resolve, reject) => {
      axios.get(`${authorityUrl}/admin/ec/orders/${id}`, config)
        .then(res => {
          resolve(res.data)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  getAll (page = 1, paged = 25) {
    return new Promise((resolve, reject) => {
      axios.get(`${authorityUrl}/admin/ec/orders?page=${page}&paged=${paged}`, config)
        .then(res => {
          resolve(res.data)
        })
        .catch(error => {
          reject(error)
        })
    })
  }
}
export const adminStorage = {
  post (data) {
    return new Promise((resolve, reject) => {
      axios.post(`${authorityUrl}/admin/storage`, data, {
        ...config,
        mimeType: 'multipart/form-data'
      })
        .then(res => {
          resolve(res.data)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  getAll (page = 1, paged = 25) {
    return new Promise((resolve, reject) => {
      axios.get(`${authorityUrl}/admin/storage?page=${page}&paged=${paged}`, config)
        .then(res => {
          resolve(res.data)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  delete (id) {
    return new Promise((resolve, reject) => {
      axios.delete(`${authorityUrl}/admin/storage/${id}`, config)
        .then(res => {
          resolve(res.data)
        })
        .catch(error => {
          reject(error)
        })
    })
  }
}
