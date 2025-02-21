'use client'
import { CartItem } from '@/app/interfaces/interfaces'
import Image from 'next/image'
import React, { useContext, useState } from 'react'
import { cartContext } from '@/app/context/cartContext'
import { wishListContext } from '@/app/context/wishListContext'


const CartItemSmall = ({item,wishListBool}:{item:CartItem,wishListBool:boolean}) => {
  const [quantity, setQuantity]=useState(item.quantity);

  const handleQuantity=(opr:string,id:Number)=>{
    if(opr==='-'){
      if(quantity>1){
        const updatedQuantity = quantity-1
        setQuantity(updatedQuantity);
        if (wishListBool===true){
        const updatedWishList = wishList.map((item) =>
          item.id === id ? { ...item, quantity: updatedQuantity } : item
        );
        setWishList(updatedWishList);
      }
      else {
        const updatedCart = cart.map((item) =>
          item.id === id ? { ...item, quantity: updatedQuantity } : item
        );
        setCart(updatedCart);
      }
      }
    else if (quantity===1){
      deleteItem(item.productId)
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
  const {cart,setCart}=useContext(cartContext)
  const {wishList,setWishList}=useContext(wishListContext)
  const deleteItem =(id:string)=>{
   if(wishListBool){
 const newWishList =wishList.filter((item)=>item.productId !== id);
     setWishList(newWishList);
    }
    else {
     const newCart =cart.filter((item)=>item.productId !== id);
         setCart(newCart);

   }

    }
  // const deleteItem =(id:Number)=>{
  //   const newWishList =wishList.filter((item)=>item.id !== id);
  //   setCart(newWishList);
  // }

  const transferItemToCart =()=>{
    setCart((oldCart)=>([...oldCart,item]));

  }
  


    return (
      <div className=''>

        <div className="flex w-full h-full border-b border-gray-400 py-2  gap-4">
          <div  className='cursor-pointer h-full flex justify-start items-start'><span onClick={()=>deleteItem(item.productId)} className='text-[12px] text-primary'>x</span></div>
        <div className='relative min-w-[80px] min-h-[80px]'>

        <Image
     fill
          src={item.imageUrl}
          alt=""
          className="size-16 rounded object-cover"
        />
        </div>
    
        <div className='flex w-full flex-col justify-between '>
         <div>
         <h3 className="text-sm w-full text-black">{item.productName}</h3>
          </div> 
          <div className='flex w-full  text-[10px] text-gray-400 justify-between'> 
            <h3 className=''>COLOR : {item.color}</h3>
            <h3 className=''>PRICE : {item.price}</h3>
          </div>
    
          <div className="mt-0.5 flex justify-between   text-[10px] text-gray-400">
            <div>
              QUANTITY : 
              {/* <dt className="inline">Quantity:</dt> */}
              {/* <span className='cursor-pointer' onClick={()=>handleQuantity('-',item.id)}>- </span> */}
           { item.quantity}
          {/* <span onClick={()=>handleQuantity('+',item.id)} className='cursor-pointer'> +</span> */}

            </div>
    
            <div>
            TOTAL :  {item.quantity*item.price} LE
            </div>
          </div>
         {wishListBool && <h1   onClick={()=>{

           transferItemToCart(); // Properly invoke the function
           deleteItem(item.productId);  // Properly invoke with the item ID
         }
  }
           className='text-primary text-[10px] hover:cursor-pointer'>ADD TO CART</h1>}
        </div>

      </div>
      {/* {modalAppear && <div className='absolute z-20 top-[40%] sm:top-[30%] sm:right-[35%] bg-backgroundColor left-[10%] w-[80vw] sm:w-[30vw] px-2 h-auto min-h-[20vh]'>
            <span onClick={()=>toggleRemoveModal(false)} className='hover:cursor-pointer hover:rotate-180 transition-transform inline-block duration-700' >x</span>
            <h1 className='py-6 text-center text-primary text-sm'>ARE YOU SURE YOU WANT TO REMOVE THIS ITEM FROM YOUR CART ?</h1>
            <div className='flex w-full justify-center gap-3 py-4'>
            <AnchuvaButton  buttonText={'DECLINE'} onClick={()=>toggleRemoveModal(false)}/>
            <AnchuvaButton buttonText={'CONFIRM'} onClick={()=>{
                deleteItem(item.id);
                toggleRemoveModal(false)
            }}/>


            </div>
            </div>}
        {modalAppear && (
        <div
          className="fixed inset-0 bg-black h-[120vh] opacity-20 z-10"
          onClick={()=>toggleRemoveModal(false)}
        ></div>
      )} */}
      </div>
      )
}

export default CartItemSmall