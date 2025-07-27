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
import Image from 'next/image';

const ProductPage = () => {
    const { productID } = useParams();
  
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(product?.variations[0].color!);
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
        // Check if the selected size is out of stock
        if (isAddToCartDisabled()) {
          Swal.fire({
            background:'#dc2626',
            color:'white',
            toast:false,
            position: "center",
            text: "SELECTED SIZE IS OUT OF STOCK",
            showConfirmButton: false,
            timer: 2000,
            customClass: {
              popup: 'no-rounded-corners small-popup'
            }
          });
          return;
        }

        // Check if adding this quantity would exceed available stock
        const availableStock = getSelectedSizeStock();
        const sameProductIndex = cart.findIndex(
          (cartItem) => cartItem.productId === product!._id && cartItem.color === selectedColor && cartItem.size===selectedSize
        );
        
        const currentCartQuantity = sameProductIndex !== -1 ? cart[sameProductIndex].quantity : 0;
        const totalQuantity = currentCartQuantity + quantity;
        
        if (totalQuantity > availableStock) {
          Swal.fire({
            background:'#dc2626',
            color:'white',
            toast:false,
            position: "center",
            text: `ONLY ${availableStock} ITEMS AVAILABLE IN STOCK`,
            showConfirmButton: false,
            timer: 2000,
            customClass: {
              popup: 'no-rounded-corners small-popup'
            }
          });
          return;
        }

        console.log('clicked')
      
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
              imageUrl: product!.variations.find(v=>v.color===selectedColor)!.images[0].url
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
                
                // imageUrl: product.variations.find(v=>v.color==='blue')!.images[0].url,
                imageUrl: product!.variations[0].images[0].url,
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

  // Helper functions for stock management
  const isColorOutOfStock = (color: string) => {
    const variation = product?.variations?.find(v => v.color === color);
    return variation?.sizes?.every(size => size.stock === 0) || false;
  };

  const isSizeOutOfStock = (sizeName: string) => {
    const size = selectedVariation?.sizes?.find(s => s.name === sizeName);
    return size?.stock === 0 || false;
  };

  const getSelectedSizeStock = () => {
    const size = selectedVariation?.sizes?.find(s => s.name === selectedSize);
    return size?.stock || 0;
  };

  const isAddToCartDisabled = () => {
    return isSizeOutOfStock(selectedSize) || getSelectedSizeStock() === 0;
  };

  // Handle quantity changes with stock validation
  const increaseQuantity = () => {
    const maxStock = getSelectedSizeStock();
    setQuantity(prev => prev < maxStock ? prev + 1 : prev);
  };
  
  const decreaseQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  // Update quantity when size changes to ensure it doesn't exceed stock
  useEffect(() => {
    const maxStock = getSelectedSizeStock();
    if (quantity > maxStock && maxStock > 0) {
      setQuantity(maxStock);
    }
  }, [selectedSize, selectedColor]);

  return (
    <div className="bg-primaryLight ">
      <div className="w-full pt-[110px] p-4">
        <div className="grid items-start grid-cols-1 lg:grid-cols-5 gap-8 max-lg:gap-12 max-sm:gap-8">
          
          {/* Product Images */}
          <div className="w-full lg:sticky top-16 lg:col-span-3">
            <div className="grid grid-cols-2 gap-0.5">
              {selectedVariation?.images.map((img, index) => (
                img.type === 'image' ?
                
                <div key={index}>
                  <Image src={img.url} width={450} height={600} alt={`Product ${selectedColor} ${index + 1}`} className="w-full aspect-[182/243] object-top object-cover" >
                  </Image>
                </div> : 
                <video key={index} autoPlay muted loop className="w-full aspect-[182/243] object-top object-cover" controls>
                  <source src={img.url} type="video/mp4" />

                  Your browser does not support the video tag
                  </video>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="w-full lg:sticky top-0 lg:col-span-2 text-primary">
            <div>
              <h3 className={`${Berkishire.className} text-2xl sm:text-4xl lg:text-6xl font-bold `}>{product?.title}</h3>
              <p className="text-gray-500  text-sm">{product?.description}</p>
              <div className="">
                <h4 className=" text-lg sm:text-xl text-gray-400  line-through">{product?.comparedPrice} LE</h4>
                <h4 className=" text-2xl sm:text-3xl font-bold">{product?.price.local} LE</h4>
              </div>
            </div>

            <hr className="my-2 border-pink2" />

            {/* Color Selection */}
            <div>
              <h3 className="text-lg mb-2 sm:text-xl font-bold ">Colors</h3>
              <div className="flex flex-wrap gap-4 ">
                {product?.variations?.map((variation, index) => {
                  const isOutOfStock = isColorOutOfStock(variation.color);
                  return (
                    <button
                      key={index}
                      type="button"
                      onClick={() => !isOutOfStock && setSelectedColor(variation.color)}
                      disabled={isOutOfStock}
                      className={`px-4 py-2 border relative text-sm font-semibold transition-all ${
                        selectedColor === variation.color
                          ? 'bg-accent text-white'
                          : isOutOfStock
                          ? 'border-gray-300 text-gray-400 bg-gray-100 cursor-not-allowed opacity-60'
                          : 'border-primary text-primary bg-pink3 hover:bg-accent hover:text-white'
                      }`}
                    >
                      {variation.color}
                      {isOutOfStock && (
                        <span className="absolute inset-0 flex items-center justify-center">
                          <span className="text-xs text-red-500 font-bold bg-white px-1 rounded">
                            OUT OF STOCK
                          </span>
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            <hr className="my-2 border-pink2" />

            {/* Size Selection */}
            <div>
              <h3 className="text-lg sm:text-xl mb-2 font-bold ">Sizes</h3>
              <div className="flex flex-wrap gap-4 ">
                {selectedVariation?.sizes?.length ? (
                  selectedVariation.sizes.map((size, index) => {
                    const isOutOfStock = size.stock === 0;
                    return (
                      <button
                        key={index}
                        type="button"
                        onClick={() => !isOutOfStock && setSelectedSize(size.name)}
                        disabled={isOutOfStock}
                        className={`min-w-10 text-sm font-semibold min-h-9 border relative transition-all ${
                          selectedSize === size.name
                            ? 'bg-accent text-white'
                            : isOutOfStock
                            ? 'border-gray-300 text-gray-400 bg-gray-100 cursor-not-allowed opacity-60'
                            : 'border-primary text-primary hover:bg-accent hover:text-white'
                        } py-2 px-4 flex items-center justify-center shrink-0`}
                      >
                        <span className={isOutOfStock ? 'line-through' : ''}>{size.name}</span>
                        {isOutOfStock && (
                          <span className="absolute -top-1 -right-1 text-xs text-red-500 bg-white rounded-full px-1">
                            ✕
                          </span>
                        )}
                        {!isOutOfStock && size.stock <= 5 && size.stock > 0 && (
                          <span className="absolute -top-1 -right-1 text-xs text-orange-500 bg-white rounded-full px-1">
                            {size.stock}
                          </span>
                        )}
                      </button>
                    );
                  })
                ) : (
                  <p className="text-sm text-gray-500">No sizes available</p>
                )}
              </div>
              {selectedVariation?.sizes?.length && (
                <div className="mt-2 text-xs text-gray-500">
                  <p>• Crossed out sizes are out of stock</p>
                  <p>• Numbers show remaining stock (when 5 or less)</p>
                </div>
              )}
            </div>

            <hr className="my-2 border-pink2" />

            {/* Quantity Selector */}
            <div>
              <h3 className="text-lg sm:text-xl font-bold ">Quantity</h3>
              <div className="flex items-center ">
                <button
                  onClick={decreaseQuantity}
                  disabled={quantity <= 1}
                  className={`px-4 py-2 border text-sm font-semibold ${
                    quantity <= 1
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-accent hover:bg-primary text-white'
                  }`}
                >
                  -
                </button>
                <span className="px-6 py-2 border border-gray-300 text-pink3 text-lg">{quantity}</span>
                <button
                  onClick={increaseQuantity}
                  disabled={quantity >= getSelectedSizeStock() || getSelectedSizeStock() === 0}
                  className={`px-4 py-2 border text-sm font-semibold ${
                    quantity >= getSelectedSizeStock() || getSelectedSizeStock() === 0
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-accent hover:bg-primary text-white'
                  }`}
                >
                  +
                </button>
              </div>
              {getSelectedSizeStock() > 0 && (
                <p className="text-xs text-gray-500 mt-1">
                  {getSelectedSizeStock()} items available
                </p>
              )}
              {getSelectedSizeStock() === 0 && (
                <p className="text-xs text-red-500 mt-1">
                  This size is currently out of stock
                </p>
              )}
            </div>

            <div className="mt-6 flex flex-wrap gap-4">
              <button
                type="button"
                onClick={addToWishList}
                disabled={isAddToCartDisabled()}
                className={`px-4 py-3 w-[45%] text-sm font-semibold ${
                  isAddToCartDisabled()
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-accent hover:bg-primary text-white'
                }`}
              >
                {isAddToCartDisabled() ? 'Out of Stock' : 'Add to wishlist'}
              </button>
              <button
                onClick={addToCart}
                type="button"
                disabled={isAddToCartDisabled()}
                className={`px-4 py-3 w-[45%] text-sm font-semibold ${
                  isAddToCartDisabled()
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-accent hover:bg-primary text-white'
                }`}
              >
                {isAddToCartDisabled() ? 'Out of Stock' : 'Add to cart'}
              </button>
            </div>
            
            {isAddToCartDisabled() && (
              <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded">
                <p className="text-sm text-red-600 font-medium">
                  ⚠️ This item is currently out of stock in the selected size.
                </p>
                <p className="text-xs text-red-500 mt-1">
                  Please select a different size or check back later.
                </p>
              </div>
            )}

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
