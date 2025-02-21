'use client'
import ProductCard from '@/app/components/ProductCard'
import constants from '@/app/constants'
import { wishListContext } from '@/app/context/wishListContext'
import { Product } from '@/app/interfaces/interfaces'
import React, { useContext, useEffect, useState } from 'react'

const CategoryPage = () => {
  const [productList, setProductList] = useState<Product[]>([])
  const {wishList,setWishList,wishListUpdated,setWishListUpdated}= useContext(wishListContext);
    useEffect(() => {
    const fetchProducts = async () => {
      // Assuming your product data is available through constants
      setProductList([])
      setProductList(constants.products)
      
    }
    fetchProducts()
  }, [wishList,wishListUpdated]) // Only depend on `wishList`, not `setWishList`

  return (
    <div className="bg-white">
      <div className="font-sans w-screen min-h-screen h-auto bg-white p-4 mx-auto lg:max-w-6xl md:max-w-4xl">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-800 mb-6 sm:mb-10">Premium Threads</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {productList.map((product, index) => (
            <ProductCard
              search={false}
              color="blue"
              key={index}
              product={product}
              favorite={wishList.some((wish) => wish.productId === product._id)} // Check if the product is in the wishlist
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default CategoryPage
