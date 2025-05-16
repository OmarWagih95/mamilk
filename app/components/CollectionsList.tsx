'use client'
import React, { useEffect, useState } from 'react'
import CategoryCard from './CategoryCard'
import constants from '../constants'
import CollectionCard from './CollectionCard'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { sectionStyle } from '../styles';
import axios from 'axios'
import { Collection } from '../interfaces/interfaces'
import CardsSkeleton from './cardsSkelton'


const CollectionsList = () => {
  const [collections, setCollections] = useState<Collection[]>([])
  useEffect(() => {
    const fetchCollections = async () => {
      const response = await axios(`/api/collections?collectionName=section`);
      setCollections(response.data as Collection[]);
    }

    fetchCollections()

  }, [])
  
  return (
    <div className='w-[100vw]   bg-white flex justify-center items-center'>

    
    <div className={`${sectionStyle}   overflow-x-scroll scrollbar-hidden `}>
       {
        collections.length>0?
        collections?.map((collection,index)=> <CollectionCard key={index} collection={collection} />):
        <CardsSkeleton variant='collection' count={3} containerClassName='flex overflow-x-hidden gap-4'/>
        
       }
       
    </div>
    {/* <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >      
     {
        constants.collections.map((collection,index)=> 
        <SwiperSlide key={index}>
          {index}
        {/* <CollectionCard key={index} collection={collection} /> */}
        {/* </SwiperSlide>
        )
        
       }
       
       </Swiper> */}
    </div>
  )
}

export default CollectionsList