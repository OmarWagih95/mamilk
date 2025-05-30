'use client'
import { sectionStyle } from '@/app/styles'
import { EmblaOptionsType } from 'embla-carousel'
import React, { useEffect, useState } from 'react'
import EmblaCarouselAutoScroll from '../embla/EmblaCarouselAutoScroll'
import '../embla/embla.css'
import { Collection, Product } from '@/app/interfaces/interfaces'
import axios from 'axios'
import CartsListSkeleton from '../cardsSkelton'
import CardsSkeleton from '../cardsSkelton'
import { Berkishire } from '@/app/layout'
import ProductCard from '../ProductCard'
import Link from 'next/link'

const BestSellers = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [collection, setCollection] = useState<Collection>();
  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios('/api/collections?collectionID=67ffaa228416009f14c31e4c');
        const collectionData = res?.data?.data;
        console.log("collectionData"+ collectionData.collection.collectionName)
  
        if (!collectionData || !Array.isArray(collectionData.products)) {
          console.error("Invalid collection data:", collectionData);
          return;
        }
  
        setCollection(collectionData.collection);
        setProducts(collectionData.products.slice(0, 4)); // Only 4 products
      } catch (err) {
        console.error("Fetch failed:", err);
      }
    };
  
    fetchProducts();
  }, []);
    
    
      const OPTIONS: EmblaOptionsType = { loop: true }

  return (
    <div className='flex  py-8 lg:py-12  flex-col pl-[2vw] pr-[3vw]    items-start justify-center w-full h-auto gap-2 md:gap-8 lg:gap-10 bg-primaryLight'>
        <h2 className={`${Berkishire.className}  font-semibold text-xl max-md:pl-2 md:text-2xl lg:text-4xl text-primary`}>Best sellers</h2>
    {products.length>0?<div className={`${sectionStyle} grid grid-cols-2 lg:grid-cols-4 text-center justify-center min-w-screen h-auto`}>
    {products?.slice(0, 4).map((product, index) => (
  <ProductCard key={index} product={product} favorite={false} color="black" search={false} />
))}

    </div>:<CardsSkeleton variant='product' count={4}  containerClassName='grid grid-cols-2 md:grid-cols-4 gap-4'/>}
    <div className='flex  items-center text-center text-accent justify-center w-full h-auto'>
<Link href={`/pages/productsPage?collectionID=67ffaa228416009f14c31e4c`} className='flex font-semibold md:text-lg underline uppercase hover:cursor-pointer items-center text-center text-accent justify-center w-full '>View All</Link>
   </div>
   </div>
  )
}

export default BestSellers