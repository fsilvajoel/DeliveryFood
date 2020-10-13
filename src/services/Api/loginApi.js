import Axios from 'axios'
import { apiUrl } from './apiConstants'

const deliveryPathAuth = `${apiUrl}/rest-auth/login/`
const deliveryPathRegistration = `${apiUrl}/rest-auth/registration/`

export async function login(Userdata) {
  const response = await Axios.post(`${deliveryPathAuth}`, Userdata).catch((err) => Promise.reject(new Error(err)))
  console.log('response', response)
  return response
}

export async function registration(Userdata) {
  const response = await Axios.post(`${deliveryPathRegistration}`, Userdata).catch((err) =>
    Promise.reject(new Error(err))
  )
  console.log('response', response)
  return response
}
