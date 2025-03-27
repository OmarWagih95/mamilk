import React, { useEffect, useState } from 'react';
import CartModal from './cart/CartModal';
import SideCart from './SideCart';
import WishListDrawer from './WishListDrawer';
import SearchModela from './SearchModela';
import ShopModal from './ShopModal';
import { IoSearchOutline } from 'react-icons/io5';
import SearchModal from './SearchModal';
import Link from 'next/link';

const NavIcons = () => {
  const [isProfileOpen, setProfileOpen] = useState(false);
  const [isCartOpen, setCartOpen] = useState(false);
  const [isCategoriesOpen, setCategoriesOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);

  const closingModels = (e:any) => {
    if (isProfileOpen && e.target instanceof Element && !e.target.closest('.x')) {
      setProfileOpen(false);
    }
    if (isCartOpen && e.target instanceof Element && !e.target.closest('.cart-modal')) {
      setCartOpen(false);
    }
    if (isCategoriesOpen && e.target instanceof Element && !e.target.closest('.categories-modal')) {
      setCategoriesOpen(false);
    }
    // if (isSearchOpen && e.target instanceof Element && !e.target.closest('.search-modal')) {
    //   setSearchOpen(false);
    // }
  };

  useEffect(() => {
    document.addEventListener('click', closingModels);
    return () => {
      document.removeEventListener('click', closingModels);
    };
  }, [isProfileOpen, isCartOpen, isCategoriesOpen, isSearchOpen]);

  return (
    <div className='hover:cursor-pointer flex items-center gap-4 xl:gap-6'>
     <Link className='hidden md:flex' href={'/pages/about'}>ABOUT</Link>
      <h2 onClick={() => setCategoriesOpen(!isCategoriesOpen)} className='hidden md:flex'>
        SHOP
      </h2>
      <IoSearchOutline onClick={(e) => { e.stopPropagation(); setSearchOpen((prev) => !prev); }} className='' />
      <WishListDrawer />
      <div className='flex items-center gap-1'>
        <SideCart />
      </div>
      {isSearchOpen && <SearchModal isOpen={isSearchOpen} onClose={() => setSearchOpen(false)} />}
      {isCartOpen && <CartModal isOpen={isCartOpen} toggleDrawer={setCartOpen} />}
      {isCategoriesOpen && <ShopModal isOpen={isCategoriesOpen} onClose={() => setCategoriesOpen(false)} />}
    </div>
  );
};

export default NavIcons;