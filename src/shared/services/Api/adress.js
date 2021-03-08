import axios from 'axios';
import { apiUrl, partner } from './apiConstants';

export const getAdressData = async (atribute) => {
  console.log('atributo', atribute);
  const response = await fetch(`${apiUrl}${partner}/${atribute}/`);
  const data = await response.json();
  console.log(`retorno de endredeço, ${atribute}`, data);
  return data;
};
export const getAdressUserData = async () => {
  const response = await fetch(`${apiUrl}${partner}/enderecos/`);
  const data = await response.json();
  console.log(`retorno de endredeço do usuário`, data);
  return data;
};

export const PostAdressUserData = async (param) => {
  const response = await axios
    .post(`${apiUrl}${partner}/enderecos/`, param)
    .catch((err) => console.log('houve um erro', err));
  console.log('resposta do Post:', response);
  return response;
};
export const GetAdressUserData = async () => {
  const response = await axios.get(`${apiUrl}/enderecos/`).catch((err) => console.log('houve um erro', err));
  console.log('resposta do GET endereço do user:', response);
  return response;
};
