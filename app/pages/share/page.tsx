'use client'
import { cartContext } from '@/app/context/cartContext'
import { pagePadding } from '@/app/styles'
import React, { useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { CartItem } from '@/app/interfaces/interfaces'
import SharedBigCartItem from '@/app/components/SharedCartItem'

const SharePage = () => {
  let total=0;
  const router=useRouter();
  const [sharedList,setSharedList]=useState<CartItem[]>([])
  const{cart,setCart}=useContext(cartContext)
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
const sharedData = urlParams.get('data');

if (sharedData) {
  const cart = JSON.parse(decodeURIComponent(sharedData));
  console.log(cart);
  setSharedList(cart);
}
  },[])
  // const [total,setTotal]=useState(0)
  // useEffect(() => {
  //   cart.map((item)=>setTotal(total+item.price*item.quantity))
  

  // }, [cart])
  // const deleteItem =(id:Number)=>{
  //   const newCart =cart.filter((item)=>item.id !== id);
  //   setCart(newCart);
  // }
  
  return ( sharedList.length > 0 ? <div  className={`relative pt-20 pb-4 justify-between text-primary min-h-screen ${pagePadding} bg-backgroundColor flex flex-col text-primary`}>
     <div className='w-full'>

      <div className='flex w-full flex-col'>
          {sharedList.map((cartItem,index)=>{
            total += cartItem.price * cartItem.quantity
            return <SharedBigCartItem  cartItem={cartItem} key={index}/>})}
      </div>
      <div className='flex pb-5 justify-between'>
        <div><p>Total</p></div>
        <div className='flex flex-col gap-1 items-end'>
          <p className='text-[12px] lg:text-lg'>{total}LE</p>
          <p className='text-[12px] lg:text-lg'>INCLUDING VAT</p>
        </div>
      </div>
     </div>

    </div>
    :<div className={`pt-14 text-primary flex justify-center items-center min-h-screen ${pagePadding} bg-backgroundColor text-primary`} >
      THERE'S NO ITEMS HERE.
    </div>
  
 )
}

export default SharePage