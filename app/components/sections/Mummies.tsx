import Image from 'next/image'
import React from 'react'

const Mummies = () => {
  return (
    <div className='w-full flex justify-center items-center bg-backgroundColor h-[60vh] md:h-[80vh]'>
        <div className='relative w-4/5 h-[15vh] md:h-[20vh]'>
        <Image fill objectFit='contain' alt='كل الماميز' src={'/mummies.png'}></Image>

        </div>
    </div>
  )
}

export default Mummies