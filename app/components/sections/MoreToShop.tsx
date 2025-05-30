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

const MoreToShop = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [collection, setCollection] = useState<Collection>();
  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios('/api/collections?collectionID=67ff8a79ad6f2eb3c9425e44');
        console.log("Response:", res?.data);
        const collectionData = res?.data?.data ;
        if (!collectionData) {
          console.error("No collection data found");
          return;
        }
        console.log("Collection Name:", collectionData.collection?.collectionName);
        if (!collectionData || !Array.isArray(collectionData.products)) {
          console.error("Invalid collection data:", collectionData);
          return;
        }
        setCollection(collectionData.collection);
        setProducts(collectionData.products.slice(0, 4));
      } catch (err : any) {
        console.error("Fetch failed:", err.response || err.message);
      }
    };
  
    fetchProducts();
  }, []);
    
      const OPTIONS: EmblaOptionsType = { loop: true }

  return (
    <div className='flex py-8 lg:py-12  flex-col md:pl-[2vw] pr-[3vw] items-start justify-center w-full h-auto gap-2 md:gap-8 lg:gap-10 bg-white'>
        <h2 className={`${Berkishire.className}  font-semibold text-xl max-md:pl-2 md:text-2xl lg:text-4xl text-primary`}>More to shop</h2>
    {products.length>0?<div className={`${sectionStyle} flex justify-center w-full h-auto bg-white`}>
              <EmblaCarouselAutoScroll slides={products} options={OPTIONS} />

    </div>:<CardsSkeleton containerClassName='flex overflow-x-hidden gap-4' variant='product' count={4}/>}
   </div>
  )
}

export default MoreToShop