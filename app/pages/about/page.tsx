'use client'
import { pagePadding } from '@/app/styles'
import React, { useContext, useEffect, useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { fadeIn } from '@/app/variants/fadIn'


const AboutPage = ()=>  {
  useEffect(() => {
    const interval = setInterval(() => {
  setActiveIndex((prev) => prev === (images.length - 1)? 0 : prev + 1);
}
    
, 5000);
console.log(activeIndex);
console.log('3000')

    return () => clearInterval(interval);
  }, []);
    
  const [activeIndex, setActiveIndex] = useState(0);

  // Array of images to display in the carousel
  const images = [
    "/about/1.jpg",
    "/about/2.jpg",
  ];

  return (
    <div className={`min-h-screen h-auto ${pagePadding} pt-16 pb-16 md:pb-4  h-auto text-start flex justify-between flex-col items-start bg-backgroundColor`}>
           <motion.div 
                         variants={fadeIn({direction:'up',delay:0.1})}
                         initial='hidden'
                         whileInView={'show'}
                         viewport={{once:true,amount:0.6}}
           className='relative flex  flex-col items-start'>

            <p className={` text-xl text-primary`}>
                our story 
                {/* {user?.email} */}
            </p>
            {/* <SessionProvider >

            <TestComponent/>
            </SessionProvider> */}
            <p className='uppercase leading-tight text-sm text-primary py-2  md:py-2'>
            At <span className='font-semibold'>ANCHUVA</span>, our name carries a rich, multicultural heritage—one that reflects the same timeless elegance and craftsmanship we pour into every piece of luxury leather we create. Inspired by the Basque word Antxoa (Spanish Anchoa) and the Arabic Al-Anshūga, our brand name honors the humble anchovy, a symbol of the Mediterranean's unifying influence on diverse cultures. This small fish has played a pivotal role in shaping culinary traditions across Europe, North Africa, and the Middle East, much like our leather goods seek to transcend borders and bring people together through a shared appreciation for craftsmanship and quality.
            </p>
            <div className="w-full flex justify-center items-center md:hidden h-60 relative overflow-hidden">
  <AnimatePresence>
    {images.map((img, index) =>
      index === activeIndex ? (
        <motion.div
          className="absolute w-[200px] h-[200px] flex justify-center items-center"
          key={img}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          <Image alt="" src={img} width={150} height={250} objectFit="cover" />
        </motion.div>
      ) : null
    )}
  </AnimatePresence>
</div>

            <h4 className='uppercase leading-tight text-sm text-primary py-2  md:py-2'>
            For our family, <span className='font-semibold'>ANCHUVA</span> carries even deeper meaning. The name Sherra, meaning "small fish," has been passed down through generations as a symbol of humility, resilience, and grace. Just as the anchovy thrives in the vibrant waters of the Mediterranean, our brand thrives on the values of tradition, authenticity, and refinement.
At <span className='font-semibold'>ANCHUVA</span>, we craft more than just luxury leather goods—we craft enduring legacies. Each piece is a reflection of the cultural harmony embedded in our name, merging traditional craftsmanship with modern luxury. Every stitch tells a story of elegance and meticulous care, while every leather hide is hand-selected to meet the highest standards of quality and refinement.

            </h4>

            <h2 className='uppercase leading-tight  text-sm text-primary py-2  md:py-2'>
            Just as the anchovy has left its mark on global cuisine, <span className='font-semibold'>ANCHUVA</span> aims to leave an indelible mark on the world of luxury fashion, bringing together cultural richness, timeless style, and the finest materials for those who appreciate true artistry. Welcome to <span className='font-semibold'>ANCHUVA</span>—where tradition meets innovation, and where our family’s heritage shapes the future of luxury.  
            </h2>
            <div className='absolute -bottom-16 left-2'>
                <Image alt='' width={150} height={100} src='/ANCHUVASignature1.png'></Image>
            </div>
           </motion.div>
           <div className="hidden md:flex w-full justify-end">
        <div className="relative hidden md:block w-64 h-64 overflow-hidden">
          <AnimatePresence>
            {images.map((img, index) =>
              index === activeIndex ? (
                <motion.div
                  key={img}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.8, ease: 'easeInOut' }}
                  className="absolute inset-0"
                >
                  <Image alt="" src={img} layout="fill" objectFit="contain" />
                </motion.div>
              ) : null
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

export default AboutPage