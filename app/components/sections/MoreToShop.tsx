'use client'
import { sectionStyle } from '@/app/styles'
import { EmblaOptionsType } from 'embla-carousel'
import React, { useEffect, useState } from 'react'
import EmblaCarouselAutoScroll from '../embla/EmblaCarouselAutoScroll'
import '../embla/embla.css'
import { Product } from '@/app/interfaces/interfaces'
import axios from 'axios'

const MoreToShop = () => {
    const [products,setProducts] = useState <Product[]>([])
    useEffect(() => {
      const fetchProducts = async () => { 
      const res = await axios('/api/products?moreToShop=true')
        setProducts(res.data.data)
      }
      fetchProducts()

    }, [])
    
      const OPTIONS: EmblaOptionsType = { loop: true }

  return (
    <div className='flex py-4 md:py-[2vw] flex-col md:pl-[2vw] pr-[3vw] items-start justify-start w-full h-auto gap-2 bg-white'>
        <h2 className='uppercase font-semibold text-xl max-md:pl-2 md:text-2xl text-black'>More to shop</h2>
    <div className={`${sectionStyle} flex justify-center w-full h-auto bg-white`}>
              <EmblaCarouselAutoScroll slides={products} options={OPTIONS} />

    </div>
   </div>
  )
}

export default MoreToShop