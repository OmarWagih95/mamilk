'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { CiMenuBurger } from 'react-icons/ci';
import { motion } from 'framer-motion';
import { fadeInMenu } from '../variants/fadIn';
import { FaArrowRight } from 'react-icons/fa6';
import constants from '../constants';
import { Collection } from '../interfaces/interfaces';
import axios from 'axios';
// import { useRouter } from 'next/navigation';
// import { menuItemStyle, pagePadding } from '../styles';

const Menu: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false); // Menu open/close state
  const [activeCategory, setActiveCategory] = useState<number|null>(null);
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);
  // const router = useRouter();
  const [collections, setCollections] = useState<Collection[]>([])
  const [summary,setSummary] = useState(false)

  // useEffect(() => {
  //   const fetchCollections = async () => {
  //     try {
  //       const res = await axios.get(`/api/collections?categoryID=all`);
  //       setCollections(res.data.data);
  //     } catch (error) {
  //       console.error("Error fetching collections:", error);
  //     }
  //   };
  //   fetchCollections();
  // }, []);

  // Close the menu
  // const toggleDrawer = () => setOpen(false);

  return (
    <div className="ml-4" >
      <CiMenuBurger onClick={() => setOpen(prev => !prev)} className="text-xl" />

      {open && (
        <motion.div
          variants={fadeInMenu({ direction: 'down', delay: 0.05 })}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.0 }}
          className={` bg-primary test text-white w-full items-center justify-center  fixed z-40 top-0 left-0 min-h-screen gap-8 flex flex-col`}
        >
            <span
            onClick={() => setOpen(prev => !prev)}
            className='absolute top-3  text-lg font-semibold right-3'>x</span>
          <div className='relative flex w-full pt-0 gap-32 items-center justify-center flex-col'> 
<div className='flex flex-col gap-16 text-lg font-semibold'>
          <Link onClick={() => setOpen(prev => !prev)} className={``} href="/" >
            HOME
          </Link>

          <div className='flex items-center' onClick={() => setSummary(!summary)}>
  SHOP <FaArrowRight className={`${summary ? 'rotate-90' : ''} transition mx-2 duration-700`} />
</div>

<div
  className={`transition-all duration-700 ease-in-out overflow-hidden ${
    summary ? "max-h-[60vh] opacity-100 flex flex-col gap-2" : "max-h-0 opacity-0 hidden"
  }`}
  style={{
    padding: summary ? "0.25rem 0.25rem" : "0",
  }}
>
  {constants.Categories.map((category, index) => (
    <div key={index} className='flex flex-col gap-2 text-white'>
      <div 
        className='flex items-center cursor-pointer'
        onClick={() => setActiveCategory(activeCategory === index ? null : index)}
      >
        {category.categoryName}
        <FaArrowRight className={`${activeCategory === index ? 'rotate-90' : ''} transition mx-2 duration-700 text-sm`} />
      </div>
      
      <div 
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          activeCategory === index ? "max-h-24 opacity-100" : "max-h-0 opacity-0"
        } flex flex-col gap-2 pl-4`}
        style={{
          padding: activeCategory === index ? "0.25rem 0.25rem" : "0",
        }}
      >
        <Link 
          onClick={() => setOpen(prev => !prev)} 
          href={`/pages/productsPage?categoryID=${category._id}&season=summer`}
          className="text-gray-300 hover:text-white"
        >
          Summer
        </Link>
        <Link 
          onClick={() => setOpen(prev => !prev)} 
          href={`/pages/productsPage?categoryID=${category._id}&season=winter`}
          className="text-gray-300 hover:text-white"
        >
          Winter
        </Link>
      </div>
    </div>
  ))}
</div>

          <Link
          onClick={() => setOpen(prev => !prev)}
          className={``}
            href="/pages/wishlist"
          >
            WISHLIST
          </Link>
          <Link 
          onClick={() => setOpen(prev => !prev)}
          className={``}
          href="/pages/cart" >
            CART
          </Link>

          <Link 
          onClick={() => setOpen(prev => !prev)}
          className={``}
          href="/pages/about">
            ABOUT
          </Link>


     
          <Link 
          onClick={() => setOpen(prev => !prev)}
          className={``}
          href="/pages/policies" >
            POLICIES
          </Link>
          <Link 
          onClick={() => setOpen(prev => !prev)}
          className={``}
          href="/pages/contact" >
            CONTACT
          </Link>
          {/* <Link 
          className={``}
          target='#' href={'https://www.instagram.com/anchuva__/'} >
            INSTAGRAM
          </Link>
          <Link 
          className={``}
          target='#' href={'https://web.facebook.com/anchuva/?_rdc=1&_rdr'} >
            FACEBOOK
          </Link> */}
          </div>


          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Menu;
