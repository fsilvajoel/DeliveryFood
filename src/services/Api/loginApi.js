import Axios from 'axios'
import { apiUrl } from './apiConstants'

const deliveryPath = `${apiUrl}/rest-auth/login/`

export async function login(Userdata) {
  const response = await Axios.post(`${deliveryPath}`, Userdata).catch((err) => Promise.reject(new Error(err)))
  console.log('response', response)
  return response
}
