import axios from 'axios'
import { useQuery } from 'react-query'

const getWooProducts = async () => {
  try {
    const { data } = await axios.get(`/api/products`)
    return data?.products
  } catch (error) {
    console.log(err.message)
  }
}

export const useGetProducts = () => {
  return useQuery('products', getWooProducts)
}
