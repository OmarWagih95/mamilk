'use client'
import ProductCard from '@/app/components/ProductCard'
import constants from '@/app/constants'
import { wishListContext } from '@/app/context/wishListContext'
import { Category, Product, SubCategory } from '@/app/interfaces/interfaces'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from "next/navigation";
import axios from 'axios'
import SubCategoryCard from '@/app/components/SubCategoryCard'


const CategoryPage = () => {
  // const [categoryData, setCategoryData] = useState(null);
const [category,setCategory]=useState<Category>()
  const { categoryID } = useParams();
  useEffect(() => {
    const fetchCategoryData = async () => {
      try {
        const res = await axios(`/api/categories?categoryID=${categoryID}`);
        const data = res.data.data;
        setCategory(data);
      } catch (error) {
        console.error("Error fetching category data:", error);
      }
    };
    fetchCategoryData()
    if (!categoryID) return;
    console.log(categoryID)
    const fetchCategorySubCategory = async () => {
      try {
        const res = await axios(`/api/subCollections?collectionID=${categoryID}`);
        const data = res.data;
        console.log(data.length)
        setSubCollectionsList(data);
      } catch (error) {
        console.error("Error fetching category data:", error);
      }
      // try {
      //   const res = await axios(`/api/categoryProducts?categoryID=${categoryID}`);
      //   const data = res.data.data;
      //   console.log('categoryProducts'+data.length)
      //   setProductList(data);
      // } catch (error) {
      //   console.error("Error fetching category data:", error);
      // }
    };

    fetchCategorySubCategory();
  }, [categoryID]);


  const [SubCollectionsList, setSubCollectionsList] = useState<SubCategory[]>([])
  return (
    <div className="bg-pink0">
      <div className="font-sans pt-12 w-screen min-h-screen h-auto p-4 mx-auto lg:max-w-6xl md:max-w-4xl">
        <h2 className="text-2xl sm:text-3xl font-bold text-pink3  my-4">{category?.categoryName}</h2>

        <div className="grid my-2 md:my-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {SubCollectionsList.map((SubCategory, index) => (
 <SubCategoryCard SubCategory={SubCategory} key={index}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CategoryPage
