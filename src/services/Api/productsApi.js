import axios from 'axios';
import { apiUrl } from './apiConstants';

export const getAllProductsData = async () => {
  const response = await fetch(`${apiUrl}morita/produtos/`);
  const data = await response.json();
  // console.log(data)
  return data;
};

export async function getProductBySearch(search) {
  try {
    const response = await axios.get(`${apiUrl}morita/produtos/`, {
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
