import Axios from 'axios';
import { apiUrl } from './apiConstants';
import { updateToken } from '../../modules/auth/autorization';
const deliveryPathAuth = `${apiUrl}rest-auth/login/`;
const deliveryPathRegistration = `${apiUrl}/rest-auth/registration/`;

export async function login(Userdata) {
  try {
    const response = await Axios.post(`${deliveryPathAuth}`, Userdata);
    if (response.data) {
      updateToken(response.data);
      return true;
    }
  } catch (error) {
    return error;
  }
}

export async function registration(Userdata) {
  const response = await Axios.post(`${deliveryPathRegistration}`, Userdata).catch((err) =>
    Promise.reject(new Error(err))
  );
  console.log('response', response);
  return response;
}
