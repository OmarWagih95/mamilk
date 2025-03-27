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
import { gradientButtonStyle } from '../styles/styles';
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
        const updatedCart = [...cart];  // Create a new cart array
        updatedCart[sameProductIndex].quantity += 1; 
        setCart(updatedCart); 
       } 
      else{
        setCart(oldCart=>[...oldCart,{
              id:cart.length,
          productId: product._id,
            productName: product.title,
            price: product.price.local,
            color:product.variations[0].color,
            quantity: 1,
            size: product.variations[0].sizes[0].name,
            imageUrl: product.variations[0].images[0]
        }])
      }
      console.log(cart.length)
      Swal.fire({
    
        background:'#cb808b',
        color:'white',
        toast:false,
        iconColor:'#473728',
      position: "center",
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
          price: product.price.local,
          quantity: 1,
          color: product.variations[0].color,
          size: product.variations[0].sizes[0].name,
          
          // imageUrl: product.variations.find(v=>v.color==='blue')!.images[0],
          imageUrl: product.variations[0].images[0],
        },
      ]);
      Swal.fire({
        background: '#cb808b',
        color: 'white',
        toast: false,
        iconColor: '#473728',
        position: 'center',
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
    <div  className="bg-pink1 flex flex-col rounded overflow-hidden shadow-md cursor-pointer hover:scale-[1.01] transition-all">
    <div className="w-full">
      <img src={product.variations[0].images[0]} alt="Product 1"
      onClick={()=>{
        router.push(`/pages/productPage/${product._id}`)
      }}
        className="w-full object-cover object-top aspect-[230/307]" />
    </div>

    <div className="p-4 flex-1 gap-3 flex flex-col">
      <div className="flex-1">
        <h5 className={`text-sm sm:text-base ${Gluten.className} font-bold text-pink3 line-clamp-2`}>{product.title}</h5>
        <div className=" flex items-center flex-wrap ">
          <h6 className="text-sm sm:text-base font-bold text-pink2">{product.price.local} EGP</h6>
          <div onClick={() => {
            addToWishList();
            toggleHeart();
        }} className="bg-pink0 text-pink3 w-8 h-8 flex items-center justify-center rounded-full cursor-pointer ml-auto" title="Wishlist">
          {heartIsEmpty !== true ?   <IoIosHeart />: <IoIosHeartEmpty />}
          </div>
        </div>
      </div>
      <button
  onClick={addToCart}
  type="button"
  className={`${gradientButtonStyle}`}
>
  Add to cart
</button>
   </div>
  </div>
    // {/* </motion.div> */}
  );
};

export default ProductCard;
