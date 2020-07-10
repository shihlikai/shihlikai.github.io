const cookie = require('js-cookie')

const PROFILE_KEY = 'accessToken'
export function setAccessToken (accessToken, expired) {
  cookie.set(PROFILE_KEY, JSON.stringify(accessToken), { expires: new Date(expired * 1000) })
}

export function getAccessToken () {
  const accessToken = cookie.get(PROFILE_KEY)
  return accessToken ? JSON.parse(accessToken) : {}
}

export function checkAccessToken () {
  return Object.keys(getAccessToken()).length !== 0
}

export function removeAccessToken () {
  cookie.remove(PROFILE_KEY)
}
