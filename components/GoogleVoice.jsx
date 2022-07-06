// import dynamic from 'next/dynamic'
import Head from 'next/head'
import { useGetProducts } from '../services'
import React, { useState } from 'react'
import { options } from '../services/category'
// const Selects = dynamic(
//   import('react-select').then((mod) => mod.Selects),
//   { ssr: false }
// )
import Select from 'react-select'
import { Product } from './Product'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export const GoogleVoice = () => {
  const [category, setCategory] = useState('')
  const [label, setLabel] = useState('')

  const { isLoading, data: products } = useGetProducts(category)

  const showSkeleton = (num) => {
    return (
      <>
        {Array.from(Array(num).keys()).map((el, index) => (
          <Skeleton key={index} className="h-16" inline={true} />
        ))}
      </>
    )
  }
  const handleSelect = (selectedData) => {
    const { value, label } = selectedData
    setCategory(value)
    setLabel(label)
  }
  return (
    <>
      <Head>
        <title>Buy Google Voice</title>
      </Head>
      <div className="bg-gray-200 min-h-screen py-4 container relative mx-auto flex flex-col items-center justify-center px-4 lg:px-10">
        <div className="mb-5 relative z-50">
          <Select
            isSearchable
            placeholder="Choode State"
            options={options}
            onChange={handleSelect}
            className="w-80"
            id="long-value-select"
            instanceId="long-value-select"
          />
        </div>
        <div className="bg-white rounded shadow-md border-gray-200 px-2 py-8 lg:px-8 w-full mx-auto max-w-full overflow-y-scroll grid lg:grid-cols-3 gap-4 h-[600px] content-start">
          {isLoading && showSkeleton(18)}
          {products?.map((item) => (
            <Product key={item?.id} item={item} />
          ))}
          {isLoading ||
            (products?.length === 0 && (
              <div className="text-xl font-josefin font-medium text-rose-600">
                No Number Available For <span className="font-bold capitalize text-sky-600">"{label}"</span> State Right Now ! Please Select Another State !
              </div>
            ))}
        </div>
      </div>
    </>
  )
}
