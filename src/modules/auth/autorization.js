// import jwt from 'jsonwebtoken'

import { getStorageItem, setStorageItem, removeStorageItem } from '../../services/storage/index'

const isAuthenticated = () => {
  const token = getStorageItem('token-info')
  return token && token.expirationDate > Date.now()
}

const updateToken = (apiResponseToken) => {
  const token = apiResponseToken.access_token
  const currentDate = new Date()
  const expirationDate = currentDate.setTime(currentDate.getTime() + apiResponseToken.expires_in * 1000)
  const newTokenData = { token, expirationDate }
  setStorageItem('token-info', newTokenData)
  return newTokenData
}

const logout = () => {
  removeStorageItem('token-info')
  removeStorageItem('user')
}

const getCurrentUser = () => {
  return getStorageItem('user')
}

const isAuthorized = (roles) => {
  if (roles.find((role) => role === '*')) {
    return true
  }
  return false
}

// export const getUserData = () => {
//   const user = getStorageItem('user')
//   if (user) {
//     return user
//   }
//   const tokenInfo = getStorageItem('token-info')
//   const tokenData = jwt.decode(tokenInfo.token)

//   const newUser = {
//     name: tokenData.name,
//     login: tokenData.login,
//     roles: tokenData.data.roles,
//     groups: tokenData.data.groups,
//     initials: tokenData.login.substring(0, 2).toUpperCase(),
//   }
//   setStorageItem('user', newUser)
//   return newUser
// }

// export const hasValidRole = (roles) => {
//   if (roles.find((role) => role === '*')) {
//     return true
//   }
//   const tokenUser = getUserData()
//   if (tokenUser && tokenUser.data) {
//     if (tokenUser.data.roles) {
//       return !!tokenUser.data.roles.find((role) =>
//         roles.find((routeRole) => routeRole.toUpperCase() === role.toUpperCase())
//       )
//     }
//   }
//   return false
// }

// export const hasValidGroup = (groups) => {
//   if (groups.find((group) => group === '*')) {
//     return true
//   }
//   const tokenUser = getUserData()
//   if (tokenUser && tokenUser.data) {
//     if (tokenUser.data.groups) {
//       return !!tokenUser.data.groups.find((group) =>
//         groups.find((routeGroup) => routeGroup.toUpperCase() === group.toUpperCase())
//       )
//     }
//   }
//   return false
// }

export { isAuthenticated, updateToken, logout, getCurrentUser, isAuthorized }
