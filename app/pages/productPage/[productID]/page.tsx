'use client';
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import constants from '@/app/constants';
import { Product } from '@/app/interfaces/interfaces';
import { cartContext } from '@/app/context/cartContext';
import Swal from 'sweetalert2';
import { Berkishire } from '@/app/layout';
import { gradientSmallButtonStyle } from '@/app/styles/styles';
import { wishListContext } from '@/app/context/wishListContext';
import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";
import axios from 'axios';
import MoreToShop from '@/app/components/sections/MoreToShop';

const ProductPage = () => {
    const { productID } = useParams();
  
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [quantity, setQuantity] = useState<number>(1); // New quantity state
  const {cart,setCart}=useContext(cartContext)
    const { wishList, setWishList } = useContext(wishListContext);
  
  const [selectedSize, setSelectedSize] = useState<string>(product?.variations[0].sizes[0].name!);

  useEffect(() => {
      const fetchProduct= async()=>{
        const res = await axios(`/api/products?productID=${productID}`);
        const product = res.data.data;
        setProduct(product);
            if (product?.variations?.length) {
      setSelectedColor(product.variations[0].color); // Default to first color
      setSelectedSize(product.variations[0].sizes[0].name!); // Default to first color
    }
      }
      fetchProduct();
    // const productID = params.id as string;
    // const foundProduct = constants.products.find((p) => p._id === productID);
    
    // setProduct(foundProduct || null);
    
    // if (foundProduct?.variations?.length) {
    //   setSelectedColor(foundProduct.variations[0].color); // Default to first color
    //   setSelectedSize(foundProduct.variations[0].sizes[0].name!); // Default to first color
    // }
  }, [productID]);
      const addToCart=()=>{
        console.log('clicked')
        const sameProductIndex = cart.findIndex(
          (cartItem) => cartItem.productId === product!._id && cartItem.color === selectedColor && cartItem.size===selectedSize
        );
      
        if (sameProductIndex !== -1) {
          // If the product exists, update its quantity
          const updatedCart = [...cart];  // Create a new cart array
          updatedCart[sameProductIndex].quantity += quantity; 
           // Update the quantity of the existing item
      
          setCart(updatedCart); 
         } // Se
        else{
          setCart(oldCart=>[...oldCart,{
                id:cart.length,
            productId: product!._id,
              productName: product!.title,
              price: product!.price.local,
              color:selectedColor!,
              size: selectedSize,
              quantity: quantity,
              imageUrl: product!.variations.find(v=>v.color===selectedColor)!.images[0]
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
          
            setWishList(oldWishList => [
              ...oldWishList,
              {
                id: wishList.length,
                productId: product!._id,
                productName: product!.title,
                price: product!.price.local,
                quantity: 1,
                color: 'blue',
                size: product!.variations[0].sizes[0].name,
                
                // imageUrl: product.variations.find(v=>v.color==='blue')!.images[0],
                imageUrl: product!.variations[0].images[0],
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

          console.log(wishList.length)
        }; // Depend on params.id

  // Find the selected color variation
  const selectedVariation = product?.variations?.find(variation => variation.color === selectedColor);

  // Handle quantity changes
  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="bg-primaryLight ">
      <div className="w-full pt-[110px] p-4">
        <div className="grid items-start grid-cols-1 lg:grid-cols-5 gap-8 max-lg:gap-12 max-sm:gap-8">
          
          {/* Product Images */}
          <div className="w-full lg:sticky top-16 lg:col-span-3">
            <div className="grid grid-cols-2 gap-0.5">
              {selectedVariation?.images.map((img, index) => (
                <div key={index}>
                  <img src={img} alt={`Product ${selectedColor} ${index + 1}`} className="w-full aspect-[182/243] object-top object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="w-full lg:sticky top-0 lg:col-span-2 text-primary">
            <div>
              <h3 className={`${Berkishire.className} text-xl sm:text-2xl lg:text-4xl font-bold `}>{product?.title}</h3>
              <p className="text-gray-500  text-sm">{product?.description}</p>
              <div className="flex items-center flex-wrap gap-4 ">
                <h4 className=" text-2xl sm:text-3xl font-bold">{product?.price.local} LE</h4>
              </div>
            </div>

            <hr className="my-2 border-pink2" />

            {/* Color Selection */}
            <div>
              <h3 className="text-lg mb-2 sm:text-xl font-bold ">Colors</h3>
              <div className="flex flex-wrap gap-4 ">
                {product?.variations?.map((variation, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setSelectedColor(variation.color)}
                    className={`px-4 py-2 border ${selectedColor === variation.color ? 'bg-accent hover:bg-primary' : 'border-gray-300 bg-pink3 '} text-white text-sm font-semibold`}
                  >
                    {variation.color}
                  </button>
                ))}
              </div>
            </div>

            <hr className="my-2 border-pink2" />

            {/* Size Selection */}
            <div>
              <h3 className="text-lg sm:text-xl mb-2 font-bold ">Sizes</h3>
              <div className="flex flex-wrap gap-4 ">
                {selectedVariation?.sizes?.length ? (
                  selectedVariation.sizes.map((size, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setSelectedSize(size.name)}
                      className={`w-10 h-9 border ${selectedSize === size.name ? 'bg-accent hover:bg-primary' : 'border-gray-300 bg-pink3 '} text-white text-sm flex items-center justify-center shrink-0`}
                    >
                      {size.name}
                    </button>
                  ))
                ) : (
                  <p className="text-sm text-gray-500">No sizes available</p>
                )}
              </div>
            </div>

            <hr className="my-2 border-pink2" />

            {/* Quantity Selector */}
            <div>
              <h3 className="text-lg sm:text-xl font-bold ">Quantity</h3>
              <div className="flex items-center ">
                <button
                  onClick={decreaseQuantity}
                  className={`px-4 py-2 border bg-accent hover:bg-primary text-white text-sm font-semibold`}
                >
                  -
                </button>
                <span className="px-6 py-2 border border-gray-300 text-pink3 text-lg">{quantity}</span>
                <button
                  onClick={increaseQuantity}
                  className={`px-4 py-2 border bg-accent hover:bg-primary text-white text-sm font-semibold`}
                >
                  +
                </button>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-4">
              <button type="button" onClick={addToWishList} className={`px-4 py-3 w-[45%]  bg-accent hover:bg-primary  text-white text-sm font-semibold`}>
                Add to wishlist
              </button>
              <button onClick={addToCart} type="button" className={` bg-accent hover:bg-primary px-4 py-3 w-[45%]  text-white text-sm font-semibold`}>
                Add to cart
              </button>
            </div>

            <hr className="my-6 border-gray-300" />

            <div>
              <h3 className="text-lg sm:text-xl font-bold ">Product Information</h3>
              <ul className="text-sm text-gray-600 mt-2">
                {product?.productDetails?.map((detail, index) => (
                  <li key={index}>• {detail}</li>
                ))}
              </ul>
            </div>

            <hr className="my-6 border-gray-300" />
          </div>
        </div>
      </div>
      <MoreToShop/>
    </div>
  );
};

export default ProductPage;
