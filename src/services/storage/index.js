const setStorageItem = (key, value) => {
  const payload = JSON.stringify(value)
  window.sessionStorage.setItem(key, payload)
}

const getStorageItem = (key) => {
  const result = window.sessionStorage.getItem(key)
  return result !== undefined && result !== 'undefined' ? JSON.parse(result) : null
}

const removeStorageItem = (key) => {
  window.sessionStorage.removeItem(key)
}

export { setStorageItem, getStorageItem, removeStorageItem }
