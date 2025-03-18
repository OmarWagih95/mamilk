'use client'
import { useState, useContext, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
// import { motion } from 'framer-motion';
import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";
import Swal from 'sweetalert2';
import { cartContext } from '../context/cartContext';
import { wishListContext } from '../context/wishListContext';
// import { fadeIn } from '../variants/fadIn';
import { Product } from '../interfaces/interfaces';
import { useRouter } from 'next/navigation';
import { Gluten } from '@/app/layout';
// import { ExposureRegular } from '../layout';

const ProductCard = ({ product,search ,favorite}: { favorite:boolean,product: Product,color:string,search:boolean }) => {
  const [heartIsEmpty, setHeartIsEmpty] = useState(!favorite);
  const { wishList, setWishList } = useContext(wishListContext);
  const { cart, setCart } = useContext(cartContext);
 const router = useRouter()
  const toggleHeart = () => {
    setHeartIsEmpty(!heartIsEmpty);
  };

  

    const addToCart=()=>{
      console.log('clicked')
      const sameProductIndex = cart.findIndex(
        (cartItem) => cartItem.productId === product._id && cartItem.color === product.variations[0].color
      );
    
      if (sameProductIndex !== -1) {
        // If the product exists, update its quantity
        const updatedCart = [...cart];  // Create a new cart array
        updatedCart[sameProductIndex].quantity += 1; 
         // Update the quantity of the existing item
    
        setCart(updatedCart); 
       } // Se
      else{
        setCart(oldCart=>[...oldCart,{
              id:cart.length,
          productId: product._id,
            productName: product.title,
            price: product.price,
            color:product.variations[0].color,
            quantity: 1,
            imageUrl: product.variations[0].images[0]
            // imageUrl: product.variations.find(v=>v.color===product.variations[0].color)!.images[0]
        }])
      }
      console.log(cart.length)
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

  const addToWishList = () => {
    console.log(heartIsEmpty)
    if (heartIsEmpty) {
      setWishList(oldWishList => [
        ...oldWishList,
        {
          id: wishList.length,
          productId: product._id,
          productName: product.title,
          price: product.price,
          quantity: 1,
          color: 'blue',
          // imageUrl: product.variations.find(v=>v.color==='blue')!.images[0],
          imageUrl: product.variations[0].images[0],
        },
      ]);
      Swal.fire({
        background: '#FFFFF',
        color: 'black',
        toast: false,
        iconColor: '#473728',
        position: 'bottom-right',
        text: 'YOUR PRODUCT HAS BEEN ADDED TO YOUR WISHLIST',
        showConfirmButton: false,
        timer: 2000,
        customClass: {
          popup: 'no-rounded-corners small-popup'
        }
      });
    } else {
      const newWishList = wishList.filter(item => item.productId !== product._id);
      setWishList(newWishList);
    }
    console.log(wishList.length)
  };

  return (
    // <motion.div
    //   // style={{ aspectRatio: '16/5' }}
    //   variants={fadeIn({ direction: 'up', delay: 0.1 })}
    //   initial="hidden"
    //   whileInView="show"
    //   viewport={{ once: true, amount: 0.6 }}
     
    <div  className="bg-pink1 flex flex-col rounded overflow-hidden shadow-md cursor-pointer hover:scale-[1.01] transition-all">
    <div className="w-full">
      <img src={product.variations[0].images[0]} alt="Product 1"
      onClick={()=>{
        router.push(`/pages/productPage/${product._id}`)
      }}
        className="w-full object-cover object-top aspect-[230/307]" />
    </div>

    <div className="p-4 flex-1 flex flex-col">
      <div className="flex-1">
        <h5 className={`text-sm sm:text-base ${Gluten.className} font-bold text-pink3 line-clamp-2`}>{product.title}</h5>
        <div className="mt-2 flex items-center flex-wrap gap-2">
          <h6 className="text-sm sm:text-base font-bold text-pink2">{product.price} EGP</h6>
          <div onClick={() => {
            addToWishList();
            toggleHeart();
        }} className="bg-pink0 text-pink3 w-8 h-8 flex items-center justify-center rounded-full cursor-pointer ml-auto" title="Wishlist">
          {heartIsEmpty !== true ?   <IoIosHeart />: <IoIosHeartEmpty />}
          </div>
        </div>
      </div>
      <button onClick={addToCart} type="button" className="px-2 h-9 font-semibold w-full mt-4 bg-gradient-to-r from-pink3  to-primary hover:bg-primary text-white tracking-wide ml-auto outline-none border-none rounded">Add to cart</button>
    </div>
  </div>
    // {/* </motion.div> */}
  );
};

export default ProductCard;
