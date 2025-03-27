'use client'
import BigCartItem from '@/app/components/BigCartItem'
import { pagePadding } from '@/app/styles'
import React, { useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { wishListContext } from '@/app/context/wishListContext'
import CartItemSmall from '@/app/components/cart/CartItemSmall'

const WishlistPage = () => {
  let total=0;
  const router=useRouter();
  const{wishList}=useContext(wishListContext)
  // const [total,setTotal]=useState(0)
  // useEffect(() => {
  //   cart.map((item)=>setTotal(total+item.price*item.quantity))
  

  // }, [cart])
  // const deleteItem =(id:Number)=>{
  //   const newCart =cart.filter((item)=>item.id !== id);
  //   setCart(newCart);
  // }
  
  return ( wishList.length > 0 ? <div  className={`relative pt-20 pb-4 justify-between text-primary min-h-screen ${pagePadding} bg-pink0 flex flex-col text-primary`}>
     <div className='w-full'>

      <div className='flex w-full gap-4 flex-col'>
      {wishList.map((item,index) =>{
         return   <CartItemSmall wishListBool={true} key={index} item={item}/> 
        }
        )}
      </div>
 
     </div>
    </div>
    :<div className={`pt-14 text-primary flex justify-center items-center min-h-screen ${pagePadding} bg-backgroundColor text-primary`} >
      YOUR WISHLIST IS EMPTY.
    </div>
  
 )
}

export default WishlistPage