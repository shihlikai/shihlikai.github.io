import { getAccessToken } from '@/assets/utils'
import axios from 'axios'

const baseUrl = `https://course-ec-api.hexschool.io/api/`

function getInfo () {
  const accessToken = getAccessToken()
  return {
    authorityUrl: `${baseUrl}${accessToken.uuid}`,
    config: {
      headers: {
        'Authorization': 'Bearer ' + accessToken.token
      }
    }
  }
}

export function getProducts (page) {
  return new Promise((resolve, reject) => {
    const { authorityUrl, config } = getInfo()
    axios.get(`${authorityUrl}/ec/products?page=${page}`, config)
      .then(res => {
        resolve(res.data)
      })
      .catch(error => {
        reject(error)
      })
  })
}

export function getAdminProducts (page) {
  return new Promise((resolve, reject) => {
    const { authorityUrl, config } = getInfo()
    axios.get(`${authorityUrl}/admin/ec/products?page=${page}`, config)
      .then(res => {
        resolve(res.data)
      })
      .catch(error => {
        reject(error)
      })
  })
}

export function patchAdminProduct (id, body) {
  return new Promise((resolve, reject) => {
    const { authorityUrl, config } = getInfo()
    axios.patch(`${authorityUrl}/admin/ec/product/${id}`, body, config)
      .then(res => {
        resolve(res.data)
      })
      .catch(error => {
        reject(error)
      })
  })
}

export function deleteAdminProduct (id) {
  return new Promise((resolve, reject) => {
    const { authorityUrl, config } = getInfo()
    axios.delete(`${authorityUrl}/admin/ec/product/${id}`, config)
      .then(res => {
        resolve(res.data)
      })
      .catch(error => {
        reject(error)
      })
  })
}

export function postAdminProduct (body) {
  return new Promise((resolve, reject) => {
    const { authorityUrl, config } = getInfo()
    axios.post(`${authorityUrl}/admin/ec/product`, body, config)
      .then(res => {
        resolve(res.data)
      })
      .catch(error => {
        reject(error)
      })
  })
}

export function postAdminLogin (body) {
  return new Promise((resolve, reject) => {
    axios.post(`${baseUrl}auth/login`, body)
      .then(res => {
        resolve(res.data)
      })
      .catch(error => {
        reject(error.response.data)
      })
  })
}

export const shopping = {
  getCart () {
    return new Promise((resolve, reject) => {
      const { authorityUrl, config } = getInfo()
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
      const { authorityUrl, config } = getInfo()
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
      const { authorityUrl, config } = getInfo()
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
      const { authorityUrl, config } = getInfo()
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
      const { authorityUrl, config } = getInfo()
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
