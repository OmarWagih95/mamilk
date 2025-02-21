import constants from '@/app/constants'
import React from 'react'
import CategoryCard from '../CategoryCard'

const Hero = () => {
  return (
    <div className='flex w-full  flex-wrap justify-center'>
        {constants.Categories.map((category,index)=><CategoryCard key={index} category={category}/>)}                                                       
    </div>
  )
}

export default Hero