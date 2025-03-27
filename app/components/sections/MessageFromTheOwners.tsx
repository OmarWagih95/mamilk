'use client'
import React from 'react'
import {motion} from 'framer-motion'
import { fadeIn } from '@/app/variants/fadIn'
import { Gluten } from '@/app/layout'
const MessageFromTheOwners = () => {
  return (
    <div className='flex flex-col gap-6 justify-center text-center items-center px-4 md:px-8 w-full h-[60vh] md:h-[80vh] bg-pink3'>
        <motion.h1 
                variants={fadeIn({ direction: 'up', delay: 0.1 })}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.6 }}
        className={`text-3xl md:text-5xl ${Gluten.className} text-white`}>Message From The Owners</motion.h1>
        <motion.h1 
                variants={fadeIn({ direction: 'up', delay: 0.2 })}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.9 }}
        className='text-2xl md:text-4xl text-white'>" In Mamilk, we believe that breastfeeding is a beautiful and powerful experience that deserves to be celebrated. That's why we're dedicated to creating clothing that's not only functional but also fashionable and comfortable. "</motion.h1>
    </div>
  )
}

export default MessageFromTheOwners