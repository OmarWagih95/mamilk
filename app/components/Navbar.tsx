'use client'
import Link from 'next/link'
import Menu from './Menu'
// import SearchBar from './SearchBar'
import NavIcons from './NavIcons'
import Image from 'next/image'
// import { useEffect, useState } from 'react'
// import { CartItem } from '../interfaces/interfaces'
// import { CartItem } from '../interfaces/interfaces'

const Navbar = () => {
  // const [isVisible, setIsVisible] = useState(true);
  // const [lastScrollY, setLastScrollY] = useState(0);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const currentScrollY = window.scrollY;

  //     if (currentScrollY > lastScrollY && currentScrollY > 50) {
  //       // Scrolling down, hide header
  //       setIsVisible(false);
  //     } else {
  //       // Scrolling up, show header
  //       setIsVisible(true);
  //     }
  //     setLastScrollY(currentScrollY);
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, [lastScrollY]);

  return (
    <div
    className={`fixed  text-primary  h-14 top-0 left-0 w-full transition-transform duration-500 z-40 px-1 

     bg-backgroundColor`}
    // <div
    // className={`fixed  text-primary  h-14 top-0 left-0 w-full transition-transform duration-500 z-40 px-1 
    //   ${
    //   isVisible ? 'translate-y-0' : '-translate-y-full'
    // }
    //  bg-babyBlue`}
  >
    {/* <div className='bg-backgroundColor text-primary  h-14 relative px-4 md:px-4 lg:px-8 xl:px-16'> */}
      {/* mobile Nav */}
        <div className='flex lg:hidden justify-between items-center h-full'>
            <Link className='text-2xl tracking-wider' href={'/'}><Image alt='logo' width={150} height={70} src='/logo.png'></Image></Link>
            
            <div className='flex items-center'>
              <NavIcons/>
            <Menu/>
              </div>
        </div>
        {/* //meduimSize */}
        <div className='hidden  lg:flex justify-between items-center h-full'>
            <div className='flex w-1/3  items-center justify-start  gap-4'>
            {/* Logo */}
              <Link className='text-2xl tracking-wider' href={'/'}>
              <div className='relative  w-[220px] h-[120px]'>

              <Image fill alt='' src='/logo.png'></Image>
              </div>
              </Link>
              </div>
            {/* <div className='flex justify-start items-center w-1/3 gap-8'>
                <SearchBar/>
            </div> */}
            <div className='flex justify-end items-center w-4/6 gap-8'>
                <NavIcons/>
            </div>
        </div>
    </div>
  )
}

export default Navbar