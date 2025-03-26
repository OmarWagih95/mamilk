'use client'
import { useRouter } from 'next/navigation'
import React from 'react'
import Image from 'next/image'
import { Gluten } from '@/app/layout'
const ShopByCategories = () => {
    const router = useRouter()

  return (
    <div className='bg-pink1 space-y-4 w-full min-h-[50vh] px-4 md:px-8 py-8 md:py-16 h-auto text-center'>
<h2 className={`${Gluten.className} text-pink3 mb-8 md:mb-16 text-3xl md:text-4xl lg:text-5xl`}>
  Shop By Collection
</h2>       
{/* <h2 className={`${Gluten.className} text-transparent bg-clip-text bg-gradient-to-bl from-blue-500 via-purple-500 to-pink-600 mb-8 md:mb-16 text-3xl md:text-4xl lg:text-5xl`}>
  Shop By Collection
</h2>        */}
 <div className='flex uppercase w-full justify-between rounded-md h-[30vh] md:h-[70vh]'>
            <div 
            onClick={()=>router.push(`/pages/categoryPage/67e2dfbd630c109896771f91`)}
            className='rounded-md overflow-hidden hover:cursor-pointer group relative w-[55%] h-full'>
                        <Image className='group-hover:scale-110 transition duration-700' alt='category' src={'/category8.jpeg'} objectFit='cover' layout='fill'></Image>
                        <div className='bg-black/15 absolute left-0 top-0 z-10 w-full items-center h-full flex justify-center'>
            
            <div className='bg-pink2 flex justify-center items-center px-4 py-2 rounded-md mt-[20vh] md:mt-[30vh]'>
            <h1 className={`font-bold text-sm md:text-2xl xl:text-4xl ${Gluten.className} `}>DRESSES</h1>
                </div>
        </div>
            </div>
            <div 
            onClick={()=>router.push(`/pages/categoryPage/67e2b261630c109896771f90`)}
            className='rounded-md overflow-hidden hover:cursor-pointer group relative w-[44%] h-full'>
                        <Image className='group-hover:scale-110 transition duration-700' alt='category' src={'/category5.jpeg'} objectFit='cover' layout='fill'></Image>
                        <div className='bg-black/15 absolute left-0 top-0 z-10 w-full items-center h-full flex justify-center'>
            
            <div className='bg-pink2 flex justify-center items-center px-3 py-2 rounded-md mt-[20vh] md:mt-[30vh]'>
            <h1 className={`font-bold text-sm md:text-2xl xl:text-4xl ${Gluten.className}`}>TOPS</h1>
                </div>
        </div>
            </div>
        </div>
        {/* 2nd Row */}
        <div className='flex uppercase w-full justify-between rounded-md h-[20vh] md:h-[50vh]'>
            <div 
            onClick={()=>router.push(`/pages/categoryPage/67e2e60dad1aeb81400d9970`)}
            className='rounded-md overflow-hidden hover:cursor-pointer group relative w-[36%] h-full'>
                        <Image className='group-hover:scale-110 transition duration-700' alt='category' src={'/category8.jpeg'} objectFit='cover' layout='fill'></Image>
                        <div className='bg-black/15 absolute left-0 top-0 z-10 w-full items-center h-full flex justify-center'>
            
            <div className='bg-pink2 flex justify-center items-center px-4 py-2 rounded-md mt-[15vh] md:mt-[20vh]'>
            <h1 className={`font-bold text-sm md:text-2xl xl:text-4xl ${Gluten.className} `}>Bottoms</h1>
                </div>
        </div>
            </div>
            <div 
            onClick={()=>router.push(`/pages/categoryPage/67e3c7112fe97723301d6ff4`)}
            className='rounded-md overflow-hidden hover:cursor-pointer group relative w-[33%] h-full'>
                        <Image className='group-hover:scale-110 transition duration-700' alt='category' src={'/category2.jpeg'} objectFit='cover' layout='fill'></Image>
                        <div className='bg-black/15 absolute left-0 top-0 z-10 w-full items-center h-full flex justify-center'>
            
            <div className='bg-pink2 flex justify-center items-center px-4 py-2 rounded-md mt-[15vh] md:mt-[20vh]'>
            <h1 className={`${Gluten.className} font-bold text-sm md:text-2xl xl:text-4xl `}>Maternity</h1>
                </div>
        </div>
            </div>
            <div 
            onClick={()=>router.push(`/pages/categoryPage/67e3c7182fe97723301d6ff8`)}
            className='rounded-md overflow-hidden hover:cursor-pointer group relative w-[30%] h-full'>
                        <Image className='group-hover:scale-110 transition duration-700' alt='category' src={'/category2.jpeg'} objectFit='cover' layout='fill'></Image>
                        <div className='bg-black/15 absolute left-0 top-0 z-10 w-full items-center h-full flex justify-center'>
            
            <div className='bg-pink2 flex justify-center items-center px-4 py-2 rounded-md mt-[15vh] md:mt-[20vh]'>
            <h1 className={`font-bold text-sm md:text-2xl xl:text-4xl ${Gluten.className}`}>SETS</h1>
                </div>
        </div>
            </div>
        </div>
    </div>
  )
}

export default ShopByCategories