'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { CiMenuBurger } from 'react-icons/ci';
import { motion } from 'framer-motion';
import { fadeInMenu } from '../variants/fadIn';
// import { useRouter } from 'next/navigation';
// import { menuItemStyle, pagePadding } from '../styles';

const Menu: React.FC = () => {
  // const router = useRouter();
  const [open, setOpen] = useState<boolean>(false); // Menu open/close state

  // Close the menu
  // const toggleDrawer = () => setOpen(false);

  return (
    <div className="ml-4" onClick={() => setOpen(prev => !prev)}>
      <CiMenuBurger className="text-xl" />

      {open && (
        <motion.div
          variants={fadeInMenu({ direction: 'down', delay: 0.05 })}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.0 }}
          className={`bg-backgroundColor test text-primary w-full items-start justify-center absolute z-40 top-0 left-0 h-[100vh] gap-8 flex flex-col`}
        >
          <div className='flex w-full pt-0 gap-32 justify-between flex-col'>
<div className='flex flex-col gap-4'>
          <Link className={``} href="/" >
            HOME
          </Link>

          <Link
          className={``}
            href="/pages/wishlist"
          >
            WISHLIST
          </Link>
          <Link 
          className={``}
          href="/pages/cart" >
            CART
          </Link>

          <Link 
          className={``}
          href="/pages/about">
            ABOUT
          </Link>


     
          <Link 
          className={``}
          href="/pages/policies" >
            POLICIES
          </Link>
          <Link 
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
