import profile from './profile.js'
import axios from 'axios'

const baseUrl = `https://course-ec-api.hexschool.io/api/${profile.uuid}`
const config = {
  headers: {
    'Authorization': 'Bearer ' + profile.token
  }
}

export function getProducts (page) {
  return new Promise((resolve, reject) => {
    axios.get(`${baseUrl}/ec/products?page=${page}`, config)
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
    axios.get(`${baseUrl}/admin/ec/products?page=${page}`, config)
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
    axios.patch(`${baseUrl}/admin/ec/product/${id}`, body, config)
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
    axios.delete(`${baseUrl}/admin/ec/product/${id}`, config)
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
    axios.post(`${baseUrl}/admin/ec/product`, body, config)
      .then(res => {
        resolve(res.data)
      })
      .catch(error => {
        reject(error)
      })
  })
}
