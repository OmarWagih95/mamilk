'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'
import { Gluten } from '../layout'


const CategoryCard = ({category}:{category:Category}) => {
    const router = useRouter();
  return (
    <div onClick={()=>router.push(`/pages/categoryPage/${category._id}`)} className='overflow-hidden hover:cursor-pointer group h-[calc((100vh-56px)/2)] md:h-[60vh] p-14 w-[50vw] md:w-[33.3vw] relative'>
        {/* <Image className='group-hover:scale-110 transition duration-700' alt='category' src={category.imageURL} objectFit='cover' layout='fill'></Image> */}
        <div className='bg-black/15 absolute left-0 top-0 z-10 w-full items-center h-full flex justify-center'>
            <h1 className={`font-bold text-2xl md:text-4xl xl:text-5xl mt-[10vh] md:mt-[10vh] ${Gluten.className}`}>{category.categoryName}</h1>
        </div>
    </div>
  )
}

export default CategoryCard