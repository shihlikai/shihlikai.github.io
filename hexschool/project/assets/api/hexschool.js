import profile from './profile.js'

const baseUrl = `https://course-ec-api.hexschool.io/api/${profile.uuid}`
const config = {
  headers: {
    'Authorization': 'Bearer ' + profile.token
  }
}

export function getProducts(page) {
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
