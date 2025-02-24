'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { CiMenuBurger } from 'react-icons/ci';
import { motion } from 'framer-motion';
import { fadeInMenu } from '../variants/fadIn';
import { FaArrowRight } from 'react-icons/fa6';
import constants from '../constants';
// import { useRouter } from 'next/navigation';
// import { menuItemStyle, pagePadding } from '../styles';

const Menu: React.FC = () => {
  // const router = useRouter();
  const [summary,setSummary] = useState(false)

  const [open, setOpen] = useState<boolean>(false); // Menu open/close state

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
          className={` bg-backgroundColor test text-primary w-full items-start justify-start pt-5 pl-2 absolute z-40 top-0 left-0 h-[120vh] gap-8 flex flex-col`}
        >
            <span
            onClick={() => setOpen(prev => !prev)}
            className='absolute top-3 right-3'>x</span>
          <div className='relative flex w-full pt-0 gap-32  flex-col'> 
<div className='flex flex-col gap-4'>
          <Link onClick={() => setOpen(prev => !prev)} className={``} href="/" >
            HOME
          </Link>

          <div className='' onClick={()=>setSummary((prevState)=>!prevState)}>
<div className='flex items-center'>

            SHOP                 <FaArrowRight className={`${summary?'rotate-90':''} transition mx-2 duration-700` }/>
</div>
            <div
  className={`transition-all duration-700 ease-in-out overflow-hidden ${
    summary
      ? "max-h-[60vh]  opacity-100"
      : "max-h-0  opacity-0"
  }  flex flex-col gap-2`}
  style={{
    padding: summary ? "0.25rem 0.25rem" : "0",
  }}
>
  {constants.Categories.map((category,index)=>
            <div key={index} className='flex flex-col gap-2 text-primary hover:text-secondary'>
            <Link onClick={() => setOpen(prev => !prev)}  href={`/pages/categoryPage/${category.id}`}>
              {category.categoryName}
            </Link>
          </div>  )}

</div>
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
