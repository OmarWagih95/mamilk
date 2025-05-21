'use client';

import { useState, useContext } from 'react';
import Image from 'next/image';
import { IoIosHeart } from 'react-icons/io';
import { FaRegHeart } from 'react-icons/fa6';
import Swal from 'sweetalert2';
import { cartContext } from '../context/cartContext';
import { wishListContext } from '../context/wishListContext';
import { Product } from '../interfaces/interfaces';
import { useRouter } from 'next/navigation';
import { Berkishire } from '@/app/layout';
import { useModal } from '../context/ModalContext'  // Import the modal hook


const ProductCard = ({ product, search, favorite }: { favorite: boolean; product: Product; color: string; search: boolean }) => {
  const [heartIsEmpty, setHeartIsEmpty] = useState(!favorite);
  const { openModal } = useModal()  // Use the hook to get the openModal function

  const { wishList, setWishList } = useContext(wishListContext);
  const { cart, setCart } = useContext(cartContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState(product.variations[0].color);
  const [selectedSize, setSelectedSize] = useState(product.variations[0].sizes[0].name);
  const [quantity, setQuantity] = useState(1); // New state for quantity
  const router = useRouter();
  const isOutOfStock = product.variations.every((variation) =>
    variation.sizes.every((size) => size.stock <= 0)
  );
  const toggleHeart = () => {
    setHeartIsEmpty(!heartIsEmpty);
  };
  const handleOpenModal = () => {

    openModal(product)  // Use the context function instead of local state
  }
  // const openModal = () => {
  //   setIsModalOpen(true);
  //   setQuantity(1); // Reset quantity when opening modal
  // };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const addToCart = () => {
    const selectedVariation = product.variations.find((v) => v.color === selectedColor);
    if (!selectedVariation) return;

    const selectedSizeObj = selectedVariation.sizes.find((s) => s.name === selectedSize);
    if (!selectedSizeObj || selectedSizeObj.stock <= 0) {
      Swal.fire({
        background: '#cb808b',
        color: 'white',
        toast: false,
        iconColor: '#473728',
        position: 'center',
        text: 'Selected size is out of stock!',
        showConfirmButton: false,
        timer: 2000,
        customClass: {
          popup: 'no-rounded-corners small-popup',
        },
      });
      return;
    }

    if (quantity > selectedSizeObj.stock) {
      Swal.fire({
        background: '#cb808b',
        color: 'white',
        toast: false,
        iconColor: '#473728',
        position: 'center',
        text: `Only ${selectedSizeObj.stock} items available in stock!`,
        showConfirmButton: false,
        timer: 2000,
        customClass: {
          popup: 'no-rounded-corners small-popup',
        },
      });
      return;
    }

    const sameProductIndex = cart.findIndex(
      (cartItem) => cartItem.productId === product._id && cartItem.color === selectedColor && cartItem.size === selectedSize
    );

    if (sameProductIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[sameProductIndex].quantity += quantity; // Add selected quantity
      setCart(updatedCart);
    } else {
      setCart((oldCart) => [
        ...oldCart,
        {
          id: cart.length,
          productId: product._id,
          productName: product.title,
          price: product.price.local,
          color: selectedColor,
          quantity: quantity, // Use selected quantity
          size: selectedSize,
          imageUrl: selectedVariation.images[0].url,
        },
      ]);
    }

    Swal.fire({
      background: '#cb808b',
      color: 'white',
      toast: false,
      iconColor: '#473728',
      position: 'center',
      text: 'YOUR PRODUCT HAS BEEN ADDED TO CART',
      showConfirmButton: false,
      timer: 2000,
      customClass: {
        popup: 'no-rounded-corners small-popup',
      },
    });

    closeModal();
  };

  const addToWishList = () => {
    if (heartIsEmpty) {
      setWishList((oldWishList) => [
        ...oldWishList,
        {
          id: wishList.length,
          productId: product._id,
          productName: product.title,
          price: product.price.local,
          quantity: 1,
          color: product.variations[0].color,
          size: product.variations[0].sizes[0].name,
          imageUrl: product.variations[0].images[0].url,
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
          popup: 'no-rounded-corners small-popup',
        },
      });
    } else {
      const newWishList = wishList.filter((item) => item.productId !== product._id);
      setWishList(newWishList);
    }
    toggleHeart();
  };

  const selectedVariation = product.variations.find((v) => v.color === selectedColor);

  return (
    <>
      <div className="bg-primaryLight text-primary flex max-md:min-w-[40vw] flex-col rounded-2xl overflow-hidden shadow-md cursor-pointer hover:scale-[1.01] transition-all">
        <div className="w-full relative">
        <Image
  src={product.variations[0].images[0].url} 
  alt={product.title}
  width={230}
  height={307}
  className="w-full object-cover max-h-[50vh] object-top aspect-[230/307] cursor-pointer"
  onClick={() => {
    router.push(`/pages/productPage/${product._id}`);
  }}
/>
                    {isOutOfStock && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <span className="text-white font-bold text-lg">Out of Stock</span>
            </div>
          )}
        </div>

        <div className="p-4 flex-1 gap-3 flex flex-col">
          <div className="flex-1">
            <h5 className={`text-sm md:text-base xl:text-base sm:text-base ${Berkishire.className} font-bold  line-clamp-1`}>{product.title}</h5>
            <div className="flex items-center flex-wrap">
             <div>

              {product?.comparedPrice > 0 && <h6 className="text-[10px] text-gray-400 sm:text-xs line-through font-bold">{product.comparedPrice} EGP</h6>}
              <h6 className="text-sm sm:text-base font-bold">{product.price.local} EGP</h6>
             </div>
              <div
                onClick={addToWishList}
                className="border-primary border-2 w-8 h-8 flex items-center justify-center font-bold rounded-full cursor-pointer ml-auto"
                title="Wishlist"
              >
                {heartIsEmpty ? <FaRegHeart /> : <IoIosHeart />}
              </div>
            </div>
          </div>
          <button
            onClick={handleOpenModal}
            type="button"
            disabled={isOutOfStock}
            className={`bg-primary text-white hover:bg-accent rounded-xl px-4 py-2 ${
              isOutOfStock ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            Add to cart
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
  <div 
    onClick={() => setIsModalOpen(false)} 
    className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4 animate-fadeIn"
  >
    <div 
      onClick={(e) => e.stopPropagation()}
      className="bg-primaryLight text-primary rounded-2xl shadow-xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col md:flex-row"
      role="dialog"
      aria-modal="true"
      aria-labelledby="product-modal-title"
    >
      {/* Close button */}
      <button 
        onClick={() => setIsModalOpen(false)}
        className="absolute top-4 right-4 bg-white bg-opacity-80 rounded-full p-1 hover:bg-opacity-100 transition-colors"
        aria-label="Close modal"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      
      {/* Left side - Image */}
      <div className="md:w-1/2 p-6 flex flex-col items-center justify-center bg-white">
        <h2 
          id="product-modal-title"
          className={`text-xl font-bold text-center mb-4 ${Berkishire.className}`}
        >
          {product.title}
        </h2>
        <div className="relative w-full h-64 md:h-80">
          <img
            src={selectedVariation?.images[0].url || product.variations[0].images[0].url}
            alt={product.title}
            className="w-full h-full object-contain rounded-lg"
          />
        </div>
        
        {/* Thumbnail navigation if multiple images */}
        {selectedVariation?.images && selectedVariation.images.length > 1 && (
  <div className="flex gap-2 mt-4 overflow-x-auto pb-2 w-full justify-center">
    {selectedVariation?.images.map((img, index) => (
      <button 
        key={index}
        className="h-16 w-16 rounded-md border-2 border-gray-200 hover:border-primary focus:border-primary focus:outline-none"
        onClick={() => {
          // Add image selection functionality here
        }}
      >
        <img src={img.url} alt={`View ${index + 1}`} className="h-full w-full object-cover rounded" />
      </button>
    ))}
  </div>
)}
      </div>
      
      {/* Right side - Product info */}
      <div className="md:w-1/2 p-6 bg-primaryLight overflow-y-auto">
        <div className="flex justify-between items-start mb-6">
          <p className="text-2xl font-bold text-primary">{product.price.local} EGP</p>
          <div className="bg-primary text-white px-3 py-1 rounded-full text-sm">In Stock</div>
        </div>
        
        {/* Color Selection */}
        <div className="mb-6">
          <h3 className="font-semibold text-lg mb-2">Color</h3>
          <div className="flex flex-wrap gap-3">
            {product.variations.map((variation) => (
              <button
                key={variation.color}
                onClick={() => {
                  setSelectedColor(variation.color);
                  setSelectedSize(variation.sizes[0].name); // Reset size when color changes
                }}
                className={`w-10 h-10 rounded-full border-2 flex items-center justify-center ${
                  selectedColor === variation.color ? 'border-primary ring-2 ring-primary ring-opacity-50' : 'border-gray-300'
                } transition-all focus:outline-none`}
                aria-label={`Select ${variation.color} color`}
                aria-pressed={selectedColor === variation.color}
              >
                <span 
                  className="w-8 h-8 rounded-full" 
                  style={{ backgroundColor: variation.color.toLowerCase() }}
                  title={variation.color}
                ></span>
              </button>
            ))}
          </div>
        </div>

        {/* Size Selection */}
        <div className="mb-6">
          <h3 className="font-semibold text-lg mb-2">Size</h3>
          <div className="flex flex-wrap gap-2">
            {selectedVariation?.sizes.map((size) => (
              <button
                key={size.name}
                onClick={() => setSelectedSize(size.name)}
                disabled={size.stock <= 0}
                className={`px-4 py-2 rounded-lg border-2 transition-colors ${
                  selectedSize === size.name
                    ? 'border-primary bg-primary text-white'
                    : size.stock <= 0
                    ? 'border-gray-300 bg-gray-100 text-gray-400 cursor-not-allowed opacity-60'
                    : 'border-gray-300 hover:border-primary'
                }`}
                aria-label={`Select size ${size.name}${size.stock <= 0 ? ' - Out of Stock' : ''}`}
                aria-pressed={selectedSize === size.name}
                aria-disabled={size.stock <= 0}
              >
                {size.name}
                {size.stock <= 0 && (
                  <span className="block text-xs mt-1">Out of Stock</span>
                )}
              </button>
            ))}
          </div>
        </div>
        
        {/* Quantity Selector */}
        <div className="mb-6">
          <h3 className="font-semibold text-lg mb-2">Quantity</h3>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
              className="w-10 h-10 flex items-center justify-center border-2 border-gray-300 rounded-lg hover:border-primary transition-colors"
              aria-label="Decrease quantity"
            >
              <span className="text-xl font-bold">−</span>
            </button>
            <input
              type="number"
              value={quantity}
              onChange={(e) => {
                const value = parseInt(e.target.value);
                if (!isNaN(value) && value >= 1) setQuantity(value);
              }}
              className="w-16 h-10 text-center border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none"
              min="1"
              aria-label="Quantity"
            />
            <button
              onClick={() => setQuantity((prev) => prev + 1)}
              className="w-10 h-10 flex items-center justify-center border-2 border-gray-300 rounded-lg hover:border-primary transition-colors"
              aria-label="Increase quantity"
            >
              <span className="text-xl font-bold">+</span>
            </button>
          </div>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={addToCart}
          className="w-full bg-primary text-white hover:bg-accent rounded-xl px-4 py-3 mt-4 font-semibold transition-colors flex items-center justify-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          Add to Cart
        </button>
      </div>
    </div>
  </div>
)}
    </>
  );
};

export default ProductCard;
