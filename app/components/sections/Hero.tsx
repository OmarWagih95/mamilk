import constants from '@/app/constants'
import React from 'react'
import CategoryCard from '../CategoryCard'

const Hero = () => {
  return (
    <div  className='relative  bg-transparent w-full h-[calc(100vh-56px)] md:h-[200vh] bg-backgroundColor flex justify-center  text-black items-center'>
    <video
      className="w-full absolute -z-10 h-full md:object-fill object-cover pointer-events-none"
      autoPlay
      muted
      loop
      playsInline
      src="/vedios/vedio.mp4"
    ></video>
    

      {/* <div  className='w-[90vw] bg-transparent left-[5vw] sm:w-[80vw] sm:h-[40vh] sm:left-[10vw] sm:top-[10vh] h-[20vh] top-[20vh] md:w-[80vw] xl:w-[70vw] xl:h-[70vh] xl:top-[15vh]  xl:left-[15vw] md:left-[10vw] md:h-[50vh] md:top-[25vh] absolute'><Image fill alt='anchuva' src={'/Artboard1.png'}></Image> </div> */}
    </div>
  )
}

export default Hero