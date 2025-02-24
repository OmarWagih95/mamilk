import { useContext, useEffect, useState } from 'react';
import { cartContext } from '../context/cartContext';
import Link from 'next/link';
import CartItemSmall from './cart/CartItemSmall';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';
import { IoShareOutline } from "react-icons/io5";
import { BsBag } from "react-icons/bs";



export default function SideDrawer() {
  let total=0;

  const [isOpen, setIsOpen] = useState(false);
  const {cart}= useContext(cartContext);
  const[subTotal,setSubTotal]=useState(0)
  const router=useRouter()
  useEffect(() => {
    
  cart.map((item)=> setSubTotal(subTotal + item.price*item.quantity))
  
  }, [cart])

  // Function to toggle the drawer open/closed
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const handleShare=()=>{
    const cartJson = encodeURIComponent(JSON.stringify(cart));
const shareLink = `https://anchuva.com/pages/share?data=${cartJson}`;
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
        text: "YOUR CART LINK HAS BEEN COPIED TO YOUR CLIPBOARD.",
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

  return (
    < div className='flex justify-center items-center '>
    
      {/* Hamburger Icon */}
    <div className='hover:cursor-pointer flex gap-2 mr-2 items-center'  onClick={toggleDrawer}>
      <div className='relative'>

    <div className='md:text-lg' onClick={toggleDrawer} >
    <BsBag />

    </div>
    <div className={`absolute top-[-2px] text-white right-[-6px] flex justify-center items-center rounded-full text-sm w-3 h-3 bg-primary`}>
        {cart.length>0?cart.length:''}
        </div>
    </div>
      {/* <h2
        className=" text-primary hidden md:block focus:outline-none"
      >
        CART
      </h2>
      <div className={` ${cart.length>0?'w-4 h-4':'w-[6px] h-[6px]'} rounded-full flex justify-center items-center bg-primary text-[12px] text-white`}>{cart.length>0?cart.length:''}</div> */}

    </div>

      {/* Side Drawer */}
      <div
        className={`fixed flex py-5 pr-3 flex-col pl-4 justify-start items-start top-0 right-0 h-[120vh] bg-white text-white  w-80 sm:w-96 lg:w-[45vw] z-40 transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-700 ease-in-out`}
      >
            <div className='w-full  flex justify-between'>

<h3 className='text-start mb-3 text-[14px] text-primary font-semibold'>CART ({cart.length})</h3>
<Link onClick={toggleDrawer} href={'/pages/cart'}>
<h3 className='text-start text-[14px] text-primary cursor-pointer font-semibold'>VIEW ALL</h3>
</Link>
</div>
<div className='w-full max-h-[60vh] scrollbar-hidden overflow-scroll'>
    <div className='space-y-3'>
        {cart.map((item,index) =>{
                      total += item.price * item.quantity

         return   <CartItemSmall wishListBool={false} key={index} item={item}/> 
        }
        )}
    </div>
</div>

<div className='w-full flex justify-between gap-7 py-4 text-sm '>
    <p className='text-gray-400'>SHIPING AND TAXES CALCULATED AT CHECKOUT</p>
    <div onClick={handleShare} className='hover:cursor-pointer flex items-center gap-1 text-primary'>
    <IoShareOutline />

      <p className='underline'>share</p></div>
</div>
<div className='flex w-full py-2 text-gray-600 justify-between '>
  <h1>TOTAL:</h1>
  <h1>{total}</h1>
</div>
<div className='flex flex-col w-full items-center gap-4'>
    <Link href={'/pages/cart'} onClick={toggleDrawer} className='rounded-sm w-full flex justify-center border border-primary cursor-pointer px-4 py-2 text-primary hover:cursor-pointer hover:bg-secondary hover:text-white transition duration-300 shadow-md'>
        {/* <button onClick={toggleDrawer} href={'/pages/cart'}>VIEW CART</button>  */}
        <button onClick={()=>{toggleDrawer()
          router.push('/pages/cart')
        }} >VIEW CART</button> 
    </Link>
{  cart.length>0?  <Link  onClick={toggleDrawer} href={'/pages/checkout'} className=' w-full rounded-sm flex justify-center  cursor-pointer text-white px-4 py-2 bg-primary hover:cursor-pointer hover:border-primary hover:border hover:bg-secondary shadow-md'>
        <button >CHECKOUT</button> 
        
    </Link>:
    <button  onClick={()=>{}}  className=' w-full rounded-sm flex justify-center  text-white px-4 py-2 bg-gray-300     shadow-md'>
        <div>CHECKOUT
          </div> 
        
    </button>}
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
