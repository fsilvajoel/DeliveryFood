import axios from 'axios'
import { apiUrl } from './apiConstants'

// export const getComida = () => {
//   return data;
// };
// const response = await fetch("https://delivery.growtechnologies.com.br/morita/produtos/");

export const getAllProductsData = async () => {
  const response = await fetch(`${apiUrl}/`)
  const data = await response.json()
  // console.log(data)
  return data
}
