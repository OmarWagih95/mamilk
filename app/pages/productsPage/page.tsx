'use client'

import { Category, Product, SubCategory } from '@/app/interfaces/interfaces'
import React, { useContext, useEffect, useState } from 'react'
import { useParams, useSearchParams } from "next/navigation";
import axios from 'axios'
import SubCategoryCard from '@/app/components/SubCategoryCard'
import ProductCard from '@/app/components/ProductCard';


const ProductsPage = () => {

  const searchParams = useSearchParams();
  const [categoryID, setCategoryID] = useState<string | null>(null);
  const [season, setSeason] = useState<string | null>(null);
  const [collectionID, setCollectionID] = useState<string | null>(null);
  
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    setProducts([])
    const categoryID = searchParams.get('categoryID');
    const season = searchParams.get('season');
    const collectionID = searchParams.get('collectionID');
    setCategoryID(categoryID);
    setSeason(season);
    setCollectionID(collectionID);
    async function fetchProducts() {
      setLoading(true);
      if (categoryID && season) {

        try {
          // Replace with your actual API endpoint
          const response = await axios(`/api/products?categoryID=${categoryID}&season=${season}`);
          const data = response.data.data
          setProducts(data);
        } catch (error) {
          console.error('Error fetching products:', error);
        } finally {
          setLoading(false);
        }
      }
      else if (collectionID) {
        try {
          // Replace with your actual API endpoint
          console.log("collectionID", collectionID)
          const response = await axios(`/api/collections?collectionID=${collectionID}`);
          // const response = await axios('/api/collections?collectionID=67ff8a79ad6f2eb3c9425e44');

          const data = await response.data.data.products;
          setProducts(data);
        } catch (error) {
          console.error('Error fetching products:', error);
        } finally {
          setLoading(false);
        }
      }
      else {
        const response = await axios('/api/products');
        setProducts(response.data);
    }
      setLoading(false);
      }
    
      fetchProducts();

  }, [categoryID, season]);


  return (
    <div className="bg-white text-primary pt-[110px] ">
      <div className="font-sans  w-screen min-h-screen h-auto p-4 mx-auto lg:max-w-6xl md:max-w-4xl">
        {/* <h2 className="text-2xl sm:text-3xl font-bold text-pink3  my-4">{category?.categoryName}</h2> */}

        <div className="grid my-2 md:my-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {loading ? (
            <div className="flex justify-center items-center h-screen">
              <p className="text-lg text-primary">Loading...</p>
            </div>
          ) :
          products?.length === 0 ? (
            <div className="flex w-screen justify-center text-center items-center h-[100vh]">
              <p className="text-lg text-center text-primary">No products found</p>
            </div>
          ) :  
          (
            products?.map((product: Product, index: number) => (
              <ProductCard  favorite={false} product={product} color='black' search={false} key={index} />
            ))
          )}
          {/* {SubCollectionsList.map((SubCategory, index) => (
 <SubCategoryCard SubCategory={SubCategory} key={index}/>
          ))} */}
        </div>
      </div>
    </div>
  )
}

export default ProductsPage
