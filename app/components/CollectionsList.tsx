import React from 'react'
import CategoryCard from './CategoryCard'
import constants from '../constants'
import CollectionCard from './CollectionCard'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { sectionStyle } from '../styles';


const CollectionsList = () => {
  return (
    <div className='w-[100vw] bg-white flex justify-center items-center'>

    
    <div className={`${sectionStyle}   overflow-x-scroll scrollbar-hidden `}>
       {
        constants.collections.map((collection,index)=> <CollectionCard key={index} collection={collection} />)
        
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