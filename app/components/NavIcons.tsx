import React, { useEffect, useState } from 'react';
import CartModal from './cart/CartModal';
import SideCart from './SideCart';
import WishListDrawer from './WishListDrawer';
import SearchModela from './SearchModela';
import ShopModal from './ShopModal'; // Import the new modal

const NavIcons = () => {
  const [isProfileOpen, setProfileOpen] = useState(false);
  const [isCartOpen, setCartOpen] = useState(false);
  const [isCategoriesOpen, setCategoriesOpen] = useState(false); // State for categories modal

  const closingModels = (e:any) => {
    // Close profile modal if clicked outside
    if (isProfileOpen && e.target instanceof Element && !e.target.closest('.x')) {
      setProfileOpen(false);
    }
    
    // Close cart modal if clicked outside
    if (isCartOpen && e.target instanceof Element && !e.target.closest('.cart-modal')) {
      setCartOpen(false);
    }

    // Close categories modal if clicked outside
    if (isCategoriesOpen && e.target instanceof Element && !e.target.closest('.categories-modal')) {
      setCategoriesOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', closingModels);
    return () => {
      document.removeEventListener('click', closingModels);
    };
  }, [isProfileOpen, isCartOpen, isCategoriesOpen]);

  return (
    <div className='hover:cursor-pointer flex items-center gap-4 xl:gap-6'>
      <h2 onClick={() => setCategoriesOpen(!isCategoriesOpen)} className='hidden md:flex'>
        SHOP
      </h2>
      
      <SearchModela />
      <WishListDrawer />
      <div className='flex items-center gap-1'>
        <SideCart />
      </div>
      {isCartOpen && <CartModal isOpen={isCartOpen} toggleDrawer={setCartOpen} />}
      {isCategoriesOpen && <ShopModal isOpen={isCategoriesOpen} onClose={() => setCategoriesOpen(false)} />}
    </div>
  );
};

export default NavIcons;