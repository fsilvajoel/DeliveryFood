import axios from 'axios'
import { apiUrl } from './apiConstants'

export const getAllProductsData = async () => {
  const response = await fetch(`${apiUrl}morita/produtos/`)
  const data = await response.json()
  // console.log(data)
  return data
}
