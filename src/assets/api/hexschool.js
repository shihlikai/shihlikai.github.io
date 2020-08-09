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
      axios.get(`${requestConfig.authorityUrl}/ec/products?page=${page}&paged=${paged}`, requestConfig.config)
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
      axios.get(`${requestConfig.authorityUrl}/ec/shopping`, requestConfig.config)
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
      axios.post(`${requestConfig.authorityUrl}/ec/shopping`, { product, quantity }, requestConfig.config)
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
      axios.patch(`${requestConfig.authorityUrl}/ec/shopping`, { product, quantity }, requestConfig.config)
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
      axios.delete(`${requestConfig.authorityUrl}/ec/shopping/${product}`, requestConfig.config)
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
      axios.delete(`${requestConfig.authorityUrl}/ec/shopping/all/product`, requestConfig.config)
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
      axios.post(`${requestConfig.authorityUrl}/ec/orders`, body, requestConfig.config)
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
      axios.get(`${requestConfig.authorityUrl}/admin/ec/product/${id}`, requestConfig.config)
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
      axios.get(`${requestConfig.authorityUrl}/admin/ec/products?page=${page}`, requestConfig.config)
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
      axios.post(`${requestConfig.authorityUrl}/admin/ec/product`, body, requestConfig.config)
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
      axios.delete(`${requestConfig.authorityUrl}/admin/ec/product/${id}`, requestConfig.config)
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
      axios.patch(`${requestConfig.authorityUrl}/admin/ec/product/${id}`, body, requestConfig.config)
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
      axios.post(`${requestConfig.authorityUrl}/admin/ec/coupon`, data, requestConfig.config)
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
      axios.get(`${requestConfig.authorityUrl}/admin/ec/coupon/${id}`, requestConfig.config)
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
      axios.get(`${requestConfig.authorityUrl}/admin/ec/coupons?page=${page}&paged=${paged}`, requestConfig.config)
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
      axios.patch(`${requestConfig.authorityUrl}/admin/ec/coupon/${id}`, data, requestConfig.config)
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
      axios.delete(`${requestConfig.authorityUrl}/admin/ec/coupon/${id}`, requestConfig.config)
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
      axios.get(`${requestConfig.authorityUrl}/admin/ec/orders/${id}`, requestConfig.config)
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
      axios.get(`${requestConfig.authorityUrl}/admin/ec/orders?page=${page}&paged=${paged}`, requestConfig.config)
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
  createPostRequest (data) {
    return axios.post(`${requestConfig.authorityUrl}/admin/storage`, data, {
      ...requestConfig.config,
      mimeType: 'multipart/form-data'
    })
  },
  post (data) {
    return new Promise((resolve, reject) => {
      axios.post(`${requestConfig.authorityUrl}/admin/storage`, data, {
        ...requestConfig.config,
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
      axios.get(`${requestConfig.authorityUrl}/admin/storage?page=${page}&paged=${paged}`, requestConfig.config)
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
      axios.delete(`${requestConfig.authorityUrl}/admin/storage/${id}`, requestConfig.config)
        .then(res => {
          resolve(res.data)
        })
        .catch(error => {
          reject(error)
        })
    })
  }
}
