export const setStorageItem = (key, value) => {
  const payload = JSON.stringify(value);
  window.sessionStorage.setItem(key, payload);
};

export const getStorageItem = (key) => {
  const result = window.sessionStorage.getItem(key);
  return result !== undefined && result !== 'undefined' ? JSON.parse(result) : null;
};

export const removeStorageItem = (key) => {
  window.sessionStorage.removeItem(key);
};
