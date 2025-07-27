// ProductModal.tsx
'use client'
import React, { useContext, useState, useEffect } from 'react'
import { useModal } from '../context/ModalContext'
import { Berkishire } from '@/app/layout' // Make sure to import your font
import { cartContext } from '../context/cartContext'
import Swal from 'sweetalert2'

const ProductModal = () => {
  const { isModalOpen, closeModal, modalProduct: product } = useModal()
  const { cart, setCart } = useContext(cartContext)
  
  // Always initialize state, even if the modal is closed
  const [selectedColor, setSelectedColor] = useState('')
  const [selectedSize, setSelectedSize] = useState('')
  const [quantity, setQuantity] = useState(1)
  const [selectedImage,setSelectedImage]=useState(product?.variations?.[0]?.images?.[0]?.url || '')
  
  // Debug log when cart changes
  useEffect(() => {
    console.log('Cart updated:', cart);
  }, [cart,setCart]);
  
  // Update state when product changes
  useEffect(() => {
    if (product) {
      setSelectedColor(product.variations[0]?.color || '')
      setSelectedSize(product.variations[0]?.sizes[0]?.name || '')
      setQuantity(1)
      setSelectedImage(product.variations[0]?.images[0]?.url || '')
    }
  }, [product])
  
  // Return null if modal is closed or no product - AFTER initializing hooks
  if (!isModalOpen || !product) return null
  
  // Find selected variation
  const selectedVariation = product.variations.find(
    variation => variation.color === selectedColor
  )
  
  const addToCart = () => {
    console.log('===== ADDING TO CART - DEBUG INFO =====')
    console.log('Cart before update:', cart)
    
    // Get all necessary values before updating
    const newItemId = cart.length;
    const productId = product._id;
    const productName = product.title;
    const price = product.price.local;
    const color = selectedColor;
    const size = selectedSize;
    const currentQuantity = quantity;
    const selectedVariationForImage = product.variations.find(v => v.color === selectedColor);
    
    // Ensure imageUrl is never undefined (use first variation's first image as fallback)
    const imageUrl = selectedVariationForImage?.images[0].url || product.variations[0].images[0].url;
    
    // Log all values
    console.log({ newItemId, productId, productName, price, color, size, currentQuantity, imageUrl });
    
    // Find if this product is already in cart
    const sameProductIndex = cart.findIndex(
      (cartItem) => cartItem.productId === productId && cartItem.color === color && cartItem.size === size
    );
    console.log('Same product index:', sameProductIndex);
    
    // Create a function to handle the cart update for better debugging
    const updateCart = () => {
      if (sameProductIndex !== -1) {
        console.log('Updating existing product in cart');
        // Create a completely new cart array to ensure React detects the change
        const updatedCart = cart.map((item, index) => {
          if (index === sameProductIndex) {
            return { ...item, quantity: item.quantity + currentQuantity };
          }
          return item;
        });
        console.log('Updated cart will be:', updatedCart);
        setCart(updatedCart);
      } else {
        console.log('Adding new product to cart');
        const newItem = {
          id: newItemId,
          productId,
          productName,
          price,
          color,
          size,
          quantity: currentQuantity,
          imageUrl // This is now guaranteed to be a string, not undefined
        };
        console.log('New cart item:', newItem);
        
        // Create a completely new array to ensure React detects the change
        const newCart = [...cart, newItem];
        console.log('New cart will be:', newCart);
        setCart(newCart);
      }
    };
    
    // Execute the cart update
    updateCart();
    
    // Show success message
    Swal.fire({
      background: '#cb808b',
      color: 'white',
      toast: false,
      iconColor: '#473728',
      position: "center",
      text: "YOUR PRODUCT HAS BEEN ADDED TO CART",
      showConfirmButton: false,
      timer: 2000,
      customClass: {
        popup: 'no-rounded-corners small-popup'
      }
    });
    
    closeModal();
  };

  return (
    <div 
      onClick={closeModal} 
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
          onClick={closeModal}
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
              src={selectedImage}
              alt={product.title}
              className="w-full h-full object-contain rounded-lg"
            />
          </div>
          
          {/* Thumbnail navigation if multiple images */}
          {selectedVariation?.images && selectedVariation.images.length > 1 && (
            <div className="flex gap-2 mt-4 overflow-x-auto pb-2 w-full justify-center">
              {selectedVariation.images.map((img, index) => (
                <button 
                onClick={()=>setSelectedImage(img.url)}
                  key={index}
                  className="h-16 w-16 rounded-md border-2 border-gray-200 hover:border-primary focus:border-primary focus:outline-none"
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
                  className={`px-4 py-2 border-2 transition-colors ${
                    selectedColor === variation.color 
                      ? 'border-primary bg-primary text-white' 
                      : 'border-gray-300 hover:border-primary'
                  }`}
                  aria-label={`Select ${variation.color} color`}
                  aria-pressed={selectedColor === variation.color}
                >
                  {variation.color}
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
  )
}

export default ProductModal