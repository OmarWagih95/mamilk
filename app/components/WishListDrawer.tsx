import { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import CartItemSmall from './cart/CartItemSmall';
import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";
import { wishListContext } from '../context/wishListContext';
import { cartContext } from '../context/cartContext';
import Swal from 'sweetalert2';
import { IoShareOutline } from 'react-icons/io5';



export default function SideDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const {wishList,setWishList,wishListUpdated,setWishListUpdated}= useContext(wishListContext);
  const {cart,setCart}= useContext(cartContext);
  const[subTotal,setSubTotal]=useState(0)
    const handleShare=()=>{
      const cartJson = encodeURIComponent(JSON.stringify(wishList));
  const shareLink = `https://mamilk.com/pages/share?data=${cartJson}`;
  console.log(shareLink);
  
  navigator.clipboard
  .writeText(shareLink)
  .then(() => {
    console.log('Share link copied to clipboard:', shareLink);
          Swal.fire({
        
            background:'#FFFFF',
            color:'black',
            toast:false,
            iconColor:'#473728',
          position: "bottom-right",
          // icon: "success",
          text: "YOUR WISHLIST LINK HAS BEEN COPIED TO YOUR CLIPBOARD.",
          showConfirmButton: false,
          timer: 2500,
          customClass: {
            popup: 'no-rounded-corners small-popup'
          }
        
        }
        )
  })
  .catch((err) => {
    console.error('Failed to copy the link to clipboard:', err);
  });
    }
  useEffect(() => {
    
    wishList.map((item)=> setSubTotal(subTotal + item.price*item.quantity))
  
  }, [wishList])

  // Function to toggle the drawer open/closed
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };
  const addAllToCart = ()=>{
    setCart(oldCart=>[...oldCart,...wishList])
    setWishList([...[]]);
    setWishListUpdated((prev) => !prev); // Toggle wishListUpdated
    Swal.fire({
    
      background:'#FFFFF',
      color:'black',
      toast:false,
      iconColor:'#473728',
    position: "bottom-right",
    // icon: "success",
    text: "YOUR PRODUCT HAS BEEN ADDED TO CART",
    showConfirmButton: false,
    timer: 2000,
    customClass: {
      popup: 'no-rounded-corners small-popup'
    }
  }
  )
  }



  return (
    < div className='flex justify-center items-center '  >
    
      {/* Hamburger Icon */}
      <div className='md:text-lg hover:cursor-pointer' onClick={toggleDrawer}>
          {wishList.length===0?<IoIosHeartEmpty/>:<IoIosHeart />  }
        {/* <h2>
        WISHLIST
          </h2>   */}
          </div>

      {/* Side Drawer */}
      <div
        className={`fixed flex py-5 pr-3 flex-col pl-4 justify-start items-start top-0 right-0 h-[120vh] bg-white text-white  w-80 sm:w-96 lg:w-[45vw] z-50 transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-700 ease-in-out`}
      >
            <div className='w-full  flex justify-between'>

<h3 className='text-start mb-3 text-primary text-[14px] font-semibold'>WHISHLIST ({wishList.length})</h3>
<Link href={'/pages/wishlist'} onClick={toggleDrawer}>
<h3 className='text-start text-primary text-[14px] cursor-pointer font-semibold'>VIEW ALL</h3>
</Link>
</div>
<div className='w-full max-h-[60vh] scrollbar-hidden overflow-scroll'>
    <ul>
        {wishList.map((item,index) =>{
         return   <CartItemSmall wishListBool={true} key={index} item={item}/> 
        }
        )}
    </ul>
</div>
<div className='w-full flex justify-between gap-7 py-4 text-sm '>
    <p className='text-gray-400'>SHIPING AND TAXES CALCULATED AT CHECKOUT</p>
    <div onClick={handleShare} className='hover:cursor-pointer flex items-center gap-1 text-primary'>
    <IoShareOutline />

      <p className='underline'>share</p></div>
</div>
<div className='flex flex-col w-full items-center gap-4'>
    {/* <div className='rounded-md w-full flex justify-center border border-primary cursor-pointer px-4 py-2 text-primary  hover:bg-secondary transition duration-300 shadow-md'>
        <Link href={'/wishList'}>View WishList</Link> 
    </div> */}
    <div onClick={addAllToCart} className={`${wishList.length===0? 'disabled-div':''} w-full flex justify-center rounded-md cursor-pointer text-white px-4 py-2 bg-primary hover:text-primary hover:border-primary hover:border  hover:bg-secondary shadow-md`}>
        ADD ALL TO CART
    </div>
</div>

      </div>

      {/* Overlay to close the drawer */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black h-[120vh] opacity-50 z-30"
          onClick={toggleDrawer}
        ></div>
      )}
    </div>
  );
}
