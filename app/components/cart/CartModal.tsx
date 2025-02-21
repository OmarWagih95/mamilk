import { cartContext } from '@/app/context/cartContext'
import React, { useContext, useEffect, useState } from 'react'
import CartItemSmall from './CartItemSmall';
import Link from 'next/link';

const CartModal = ({isOpen,toggleDrawer}:{isOpen:boolean,toggleDrawer:React.Dispatch<React.SetStateAction<boolean>>}) => {
    const {cart}= useContext(cartContext);
    const[subTotal,setSubTotal]=useState(0)
    useEffect(() => {
      
    cart.map((item)=> setSubTotal(subTotal + item.price*item.quantity))
    
    }, [cart])
  return (
    <div className='flex justify-center items-center'>

    <div className= 'cart-modal  text-start justify-start   bg-white text-sm  absolute p-4 z-40 flex flex-col shadow-lg min-w-full w-[300px] items-start right-0 top-12 rounded-md '>
    <div className='w-full  flex justify-between'>

     <h3 className='text-start mb-3 font-semibold'>My Cart ({cart.length})</h3>
     <Link href={''}>
     <h3 className='text-start text-primary cursor-pointer font-semibold'>view all</h3>
     </Link>
    </div>
<div className='w-full max-h-[45vh] scrollbar-hidden overflow-scroll'>
    <ul>
        {cart.map((item,index) =>{
         return   <CartItemSmall wishListBool={false} key={index} item={item}/> 
        }
        )}
    </ul>
</div>
<div className='flex border-t  py-2 border-gray-500 w-full justify-between'>
    <h4>subtotal</h4>
    <h4>${subTotal}</h4>
</div>
<div className='w-full pb-2 text-sm text-gray-400'>
    shiping and taxes calculated at checkout
</div>
<div className='flex justify-between w-full items-center gap-4'>
    <div className='rounded-md cursor-pointer px-4 py-2 text-gray-500 shadow-md'>
        <Link href={'/cart'}>View Cart</Link> 
    </div>
    <div className='rounded-md cursor-pointer text-white px-4 py-2 bg-black shadow-md'>
        Checkout
    </div>
</div>
    </div>
    {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30"
          onClick={()=>toggleDrawer}
        ></div>
      )}
    </div>
  )
}

export default CartModal