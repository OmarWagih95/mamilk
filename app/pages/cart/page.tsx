'use client'
import BigCartItem from '@/app/components/BigCartItem'
import { cartContext } from '@/app/context/cartContext'
import { pagePadding } from '@/app/styles'
import React, { useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import MamilkButton from '@/app/components/MamilkButton'

const page = () => {
  let total=0;
  const router=useRouter();
  const{cart,setCart}=useContext(cartContext)
  // const [total,setTotal]=useState(0)
  // useEffect(() => {
  //   cart.map((item)=>setTotal(total+item.price*item.quantity))
  

  // }, [cart])
  // const deleteItem =(id:Number)=>{
  //   const newCart =cart.filter((item)=>item.id !== id);
  //   setCart(newCart);
  // }
  
  return ( cart.length > 0 ? <div  className={`relative pt-20 pb-4 ${pagePadding} justify-between  min-h-screen  bg-backgroundColor flex flex-col text-primary`}>
     <div className='w-full'>

      <div className='flex w-full flex-col'>
          {cart.map((cartItem,index)=>{
            total += cartItem.price * cartItem.quantity
            return <BigCartItem  cartItem={cartItem} key={index}/>})}
      </div>
      <div className='flex pb-5 justify-between'>
        <div><p>Total</p></div>
        <div className='flex flex-col gap-1 items-end'>
          <p className='text-[12px] lg:text-lg'>{total} LE</p>
          <p className='text-[12px] lg:text-lg'>INCLUDING VAT</p>
        </div>
      </div>
     </div>
      <div className='flex py-8 w-full flex-col justify-center items-center gap-2  sm:justify-between sm:flex-row'>
        <p className='text-[12px] sm:max-w-[350px]'>BY CONTINUING,I DECLARE THAT I HAVE READ AND ACCEPT THE PURCHASE CONDITIONS AND UNDERSTAND THE REFUND POLICY.</p>
       
       <div className='flex'>
       <MamilkButton disabled={cart.length>0?false:true} buttonText={'CHECKOUT'}  onClick={()=>router.push('/pages/checkout')}/>
        </div> 

      </div>
    </div>
    :<div className={`pt-14 text-primary flex justify-center items-center min-h-screen ${pagePadding} bg-backgroundColor text-primary`} >
      YOUR CART IS EMPTY.
    </div>
  
 )
}

export default page