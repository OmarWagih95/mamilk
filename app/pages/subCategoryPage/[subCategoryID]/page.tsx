'use client'
import ProductCard from '@/app/components/ProductCard'
import constants from '@/app/constants'
import { wishListContext } from '@/app/context/wishListContext'
import { Collection, Product } from '@/app/interfaces/interfaces'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from "next/navigation";
import axios from 'axios'


const CategoryPage = () => {
  // const [categoryData, setCategoryData] = useState(null);
const [collection,setCollection]=useState<Collection>()
  const { subCategoryID } = useParams();
  useEffect(() => {
    if (!subCategoryID) return;
    console.log(subCategoryID)
    const fetchSubCategoryData = async () => {
      try {
        const res = await axios(`/api/subCollections?categoryID=${subCategoryID}`);
        const data = res.data.data;
        setCollection(data);
      } catch (error) {
        console.error("Error fetching category data:", error);
      }
      try {
        const res = await axios(`/api/categoryProducts?categoryID=${subCategoryID}`);
        const data = res.data.data;
        console.log('categoryProducts'+data.length)
        setProductList(data);
      } catch (error) {
        console.error("Error fetching category data:", error);
      }
    };

    fetchSubCategoryData();
  }, [subCategoryID]);

  // if (!categoryData) return <p>Loading...</p>; // Get the dynamic param

  const [productList, setProductList] = useState<Product[]>([])
  const {wishList,setWishList,wishListUpdated,setWishListUpdated}= useContext(wishListContext);
  //   useEffect(() => {
  //   const fetchProducts = async () => {
  //     // Assuming your product data is available through constants
  //     setProductList([])
  //     setProductList(constants.products)
      
  //   }
  //   fetchProducts()
  // }, [wishList,wishListUpdated]) // Only depend on `wishList`, not `setWishList`

  return (
    <div className="bg-pink0">
      <div className="font-sans pt-12 w-screen min-h-screen h-auto p-4 mx-auto lg:max-w-6xl md:max-w-4xl">
        <h2 className="text-2xl sm:text-3xl font-bold text-pink3  my-4">{collection?.collectionName}</h2>

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
