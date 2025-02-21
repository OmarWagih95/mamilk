import React, { useContext, useEffect, useState } from 'react'
import { CartItem } from '../interfaces/interfaces'
import Image from 'next/image'
import { cartContext } from '../context/cartContext'

const BigCartItem = ({cartItem}:{cartItem:CartItem}) => {
    const {cart,setCart}=useContext(cartContext)
    const [quantity, setQuantity]=useState(cartItem.quantity);
    const deleteItem =(id:Number)=>{
      const newCart =cart.filter((item)=>item.id !== id);
      setCart(newCart);
    }
    const handleQuantity=(opr:string,id:Number)=>{
      if(opr==='-'){
        if(quantity>1){
          const updatedQuantity = quantity-1
          setQuantity(updatedQuantity);
          const updatedCart = cart.map((item) =>
            item.id === id ? { ...item, quantity: updatedQuantity } : item
          );
          setCart(updatedCart);

        }
      else if (quantity===1){
        toggleRemoveModal(true)
      }
      }

      else if(opr==='+'){
        const updatedQuantity = quantity+1
        setQuantity(updatedQuantity);

        // Update the quantity in the global cart context
        const updatedCart = cart.map((item) =>
          item.id === id ? { ...item, quantity: updatedQuantity } : item
        );
        setCart(updatedCart);
      }
    }

    const[modalAppear,toggleRemoveModal]=useState(false)
  return (
    <div className='flex w-full border-b border-primary items-start text-primary mr-28'>
        <span onClick={()=>toggleRemoveModal((prevState)=>!prevState)} className='hover:cursor-pointer mr-10 md:mr-20 lg:mr-24 hover:rotate-180 transition duration-700'>x</span>

    <div className='flex  pb-2 w-full justify-between items-start text-primary'>
        <div className='relative w-[60px] h-[70px] md:w-[100px] md:h-[120px]'>
        <Image  fill alt={cartItem.productName} src={cartItem.imageUrl}></Image>
        </div>
        <h2 className={` text-lg`}>{cartItem.productName}</h2>
        <p className='text-[12px] lg:text-lg'>COLOR:{cartItem.color}</p>
        <p className='text-[12px] lg:text-lg'> 
          <span className='cursor-pointer' onClick={()=>handleQuantity('-',cartItem.id)}>&lt; </span>
          {quantity}
          <span onClick={()=>handleQuantity('+',cartItem.id)} className='cursor-pointer'> &gt;</span>
          </p>
        <p className='text-[12px] lg:text-lg'>{cartItem.price} LE </p>
        {modalAppear && <div className='absolute z-20 top-[40%] sm:top-[30%] sm:left-[30%] bg-backgroundColor left-[10%] w-[80vw] sm:w-[40vw] px-2 h-auto min-h-[20vh]'>
            <span onClick={()=>toggleRemoveModal(false)} className='hover:cursor-pointer hover:rotate-180 transition-transform inline-block duration-700' >x</span>
            <h1 className='py-6 text-center text-sm'>ARE YOU SURE YOU WANT TO REMOVE THIS ITEM FROM YOUR CART ?</h1>
            <div className='flex w-full justify-center gap-3 py-4'>
            {/* <AnchuvaButton disabled={false} buttonText={'DECLINE'} onClick={()=>toggleRemoveModal(false)}/>
            <AnchuvaButton  disabled={false} buttonText={'CONFIRM'} onClick={()=>{ */}
                {/* deleteItem(cartItem.id);
                toggleRemoveModal(false)
            }}/> */}


            </div>
            </div>}
        {modalAppear && (
        <div
          className="fixed inset-0 bg-black h-[120vh] opacity-20 z-10"
          onClick={()=>toggleRemoveModal(false)}
        ></div>
      )}
    </div>
    </div>
  )
}

export default BigCartItem