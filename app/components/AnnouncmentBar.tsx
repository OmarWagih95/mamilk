'use client'
import React, { useEffect, useState } from 'react'

const AnnouncmentBar = () => {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setVisible(scrollPosition <= 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div
      className={`
        fixed top-0 left-0 w-full z-20 h-10 
        flex justify-center items-center 
        bg-pink3 text-white text-semibold text-lg md:text-xl
        transition-all duration-500 ease-in-out 
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'}
      `}
    >
      أهم حاجة ندلع الأم
    </div>
  )
}

export default AnnouncmentBar
