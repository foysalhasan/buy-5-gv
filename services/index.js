import axios from 'axios'
import { useQuery } from 'react-query'

const getWooProducts = async (cat = '') => {
  try {
    const { data } = await axios.get(`/api/products?cat=${cat}`)
    return data?.products
  } catch (error) {
    console.log(err.message)
  }
}

export const useGetProducts = (cat) => {
  return useQuery(['products', cat], () => getWooProducts(cat))
}
