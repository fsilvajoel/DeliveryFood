import axios from 'axios';
import { apiUrl, partner } from './apiConstants';

export const getAllProductsData = async () => {
  const response = await fetch(`${apiUrl}/parceiro/${partner}/produtos/`);
  const data = await response.json();
  // console.log(data)
  return data;
};

export async function getProductBySearch(search) {
  try {
    const response = await axios.get(`${apiUrl}${partner}/produtos/`, {
      params: {
        q: search,
      },
    });
    if (response.data) {
      console.log('retorno do GetProductBySearch', response.data);
      return true;
    }
  } catch (error) {
    return error;
  }
}

export async function getComplements() {
  const response = await axios.get(`${apiUrl}${partner}/complements/`);
  console.log('resposta COMPLEMENTOS', response.data);
  return response.data;
}
