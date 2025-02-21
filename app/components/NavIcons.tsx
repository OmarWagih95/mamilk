'use client'
import React, {  useEffect, useState } from 'react'
// import Image from 'next/image'
// import Link from 'next/link'
import CartModal from './cart/CartModal'
// import { cartContext } from '../context/cartContext'
import SideCart from './SideCart'

import WishListDrawer from './WishListDrawer'
import SearchModela from './SearchModela'




// import { cartContext } from '../context/cartContext'

const NavIcons = () => {

  const[isProfileOpen,setProfileOpen]=useState(false)
  
  const[isCartOpen,setCartOpen]=useState(false)



  const closingModels = (e: MouseEvent) => {
    // Close profile modal if clicked outside
    if (isProfileOpen && e.target instanceof Element && !e.target.closest('.x')) {
      setProfileOpen(false);
    }
    
    // Close cart modal if clicked outside
    if (isCartOpen && e.target instanceof Element && !e.target.closest('.cart-modal')) {
      setCartOpen(false);
    }

  };
  
    useEffect(() => {
      document.addEventListener('click', closingModels);
      return () => {
        document.removeEventListener('click', closingModels);
      };
    }, [isProfileOpen, isCartOpen]);
  useEffect(() => {
    document.addEventListener('click', closingModels);
    return () => {
      document.removeEventListener('click', closingModels);
    };
  }, [isProfileOpen, isCartOpen]);

  return (
    <div className='hover:cursor-pointer flex items-center gap-4 xl:gap-6  md:px-10 '>
      {/* <Link href={'/pages/'} className='hidden md:flex'>SHOP</Link> */}
      <h2  className='hidden md:flex'>SHOP</h2>
      
      <SearchModela/>
{/* 
      <h2 onClick={handleProfile} className='hidden relative md:flex cursor-pointer'>
        ACCOUNT
      {isProfileOpen && <div className='x  bg-white text-sm gap-2 absolute p-4 z-40 flex flex-col shadow-lg w-[400%] items-center -left-32 top-12 rounded-md '>
       {user.email &&  <Link href='/pages/account'>ACCOUNT</Link>}
         {!user.email && <Link href='/pages/auth/signUp'>SIGN UP</Link>}
       { !user.email &&  <Link href='/pages/auth/signIn'>SIGN IN</Link> }
         { user.email && <div onClick={handleSignOut} className='hover:cursor-pointer'>LOGOUT</div>}
      </div>}
      </h2> */}
          <WishListDrawer/>
            
      {/* <Image onClick={handleProfile} src='/profile.png' alt='' width={22} height={22} className='cursor-pointer'></Image>
      {isProfileOpen && <div className='x  bg-white text-sm gap-2 absolute p-4 z-40 flex flex-col shadow-lg w-full items-center left-0 top-12 rounded-md '>
          <Link href='/'>profile</Link>
          <div>logout</div>
      </div>} */}
      {/* <Image src='/notification.png' alt='' width={22} height={22} className='cursor-pointer'></Image> */}
        <div className='flex items-center gap-1'>
          <SideCart></SideCart>
        {/* <h2 onClick={handleCart} className='cursor-pointer'>CART</h2> */}
     {/* <Image onClick={handleCart} src='/cart.png' alt='' width={22} height={22} ></Image> */}
        </div>
      {
        isCartOpen && <CartModal isOpen={isCartOpen} toggleDrawer={setCartOpen}/>
      }
    </div>
  )
}

export default NavIcons