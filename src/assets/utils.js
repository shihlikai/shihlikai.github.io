const cookie = require('js-cookie')

const PROFILE_KEY = 'accessToken'
export function setAccessToken (accessToken, expired) {
  cookie.set(PROFILE_KEY, JSON.stringify(accessToken), { expires: new Date(expired * 1000) })
}

export function getAccessToken () {
  const accessToken = cookie.get(PROFILE_KEY)
  return accessToken ? JSON.parse(accessToken) : {
    uuid: 'e46ecc3f-dc1f-4bc9-9d41-aa400f535ba4',
    token: 'iOLSm6Ig8QumYi2iIrbXUWnDbvjWGbm6BIZdo3cQ2GX1LKv8XeVqb3MWEOBt'
  }
}

export function checkAccessToken () {
  return Object.keys(getAccessToken()).length !== 0
}

export function removeAccessToken () {
  cookie.remove(PROFILE_KEY)
}
