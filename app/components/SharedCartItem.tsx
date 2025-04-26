import React, { useContext, useEffect, useState } from 'react'
import { CartItem } from '../interfaces/interfaces'
import Image from 'next/image'
import { cartContext } from '../context/cartContext'

const SharedBigCartItem = ({cartItem}:{cartItem:CartItem}) => {
    const {cart,setCart}=useContext(cartContext)
    const [quantity, setQuantity]=useState(cartItem.quantity);
    const deleteItem =(id:Number)=>{
      const newCart =cart.filter((item)=>item.id !== id);
      setCart(newCart);
    }


    // const[modalAppear,toggleRemoveModal]=useState(false)
  return (
    <div className='flex w-full border-2 rounded-2xl gap-4 border-primary items-start text-primary mr-28'>

    <div className='flex  pb-2 w-full justify-between items-start text-primary'>
        <div className='relative w-[60px] h-[70px] md:w-[100px] md:h-[120px]'>
        <Image  fill alt={cartItem.productName} src={cartItem.imageUrl}></Image>
        </div>
        <h2 className={`  text-lg`}>{cartItem.productName}</h2>
        <p className='text-[12px] md:w-2/12 lg:text-lg'>COLOR:{cartItem.color}</p>
        <p className='text-[12px] lg:text-lg'> 
          <span className='cursor-pointer' >&lt; </span>
          {quantity}
          <span  className='cursor-pointer'> &gt;</span>
          </p>
        <p className='text-[12px] lg:text-lg'>{cartItem.price} EGP</p>

    </div>
    </div>
  )
}

export default SharedBigCartItem