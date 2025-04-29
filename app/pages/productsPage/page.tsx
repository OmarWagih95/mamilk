'use client'

import { Category, Product } from '@/app/interfaces/interfaces'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import axios from 'axios'
import ProductCard from '@/app/components/ProductCard'

const categories = [
  { _id: '67e2b261630c109896771f90', categoryName: 'Tops', description: 'wolf' },
  { _id: '67e2dfbd630c109896771f91', categoryName: 'Dresses' },
  { _id: '67e2e60dad1aeb81400d9970', categoryName: 'Bottoms' },
  { _id: '67e3c7112fe97723301d6ff4', categoryName: 'Maternity' },
  { _id: '67e3c7182fe97723301d6ff8', categoryName: 'Sets' },
]

const ProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [sortBy, setSortBy] = useState<string>('default')
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  
  const searchParams = useSearchParams() // Call useSearchParams at top level
  useEffect(() => {
    async function fetchProducts() {
      setLoading(true)
      try {
        const categoryID = searchParams.get('categoryID')
        const season = searchParams.get('season')
        const collectionID = searchParams.get('collectionID')

        console.log('Query params:', { categoryID, season, collectionID }) // Debug params

        let url = '/api/products'
        if (collectionID) {
          url = `/api/collections?collectionID=${collectionID}`
        } else if (categoryID && season) {
          url = `/api/products?categoryID=${categoryID}&season=${season}`
        }

        console.log('Fetching URL:', url)
        const response = await axios(url)
        const data = collectionID
          ? response.data.data.products
          : response.data.data || response.data

        console.log('Fetched data:', data) // Debug API response
        setProducts(data)
        setFilteredProducts(data)
      } catch (error) {
        console.error('Error fetching products:', error)
        setProducts([])
        setFilteredProducts([])
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [searchParams.toString()]) // Depend on query string to re-run when parameters change

  useEffect(() => {
    let updatedProducts = [...products]

    if (selectedCategory !== 'All') {
      updatedProducts = updatedProducts.filter(
        (product) => product.categoryID === selectedCategory
      )
    }

    if (sortBy === 'priceHigh') {
      updatedProducts.sort((a, b) => {
        const aPrice = typeof a.price.local === 'number' ? a.price.local : 0
        const bPrice = typeof b.price.local === 'number' ? b.price.local : 0
        return bPrice - aPrice
      })
    } else if (sortBy === 'priceLow') {
      updatedProducts.sort((a, b) => {
        const aPrice = typeof a.price.local === 'number' ? a.price.local : 0
        const bPrice = typeof b.price.local === 'number' ? b.price.local : 0
        return aPrice - bPrice
      })
    }

    setFilteredProducts(updatedProducts)
  }, [products, sortBy, selectedCategory])

  return (
    <div className="bg-white text-primary pt-[110px]">
      <div className="font-sans w-screen min-h-screen h-auto p-4 mx-auto lg:max-w-6xl md:max-w-4xl">
        <div className="flex flex-col sm:flex-row mb-6 gap-4">
          <div>
            <label className="mr-2 text-primary">Sort by price:</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border rounded px-2 py-1 text-primary bg-white"
            >
              <option value="default">Default</option>
              <option value="priceHigh">Price: High to Low</option>
              <option value="priceLow">Price: Low to High</option>
            </select>
          </div>
          <div>
            <label className="mr-2 text-primary">Category:</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="border rounded px-2 py-1 text-primary bg-white"
            >
              <option value="All">All Categories</option>
              {categories.map((category) => (
                <option key={category._id} value={category._id}>
                  {category.categoryName}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid my-2 md:my-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {loading ? (
            <div className="flex justify-center items-center h-screen">
              <p className="text-lg text-primary">Loading...</p>
            </div>
          ) : filteredProducts.length === 0 ? (
            <div className="flex w-screen justify-center text-center items-center h-[100vh]">
              <p className="text-lg text-center text-primary">No products found</p>
            </div>
          ) : (
            filteredProducts.map((product: Product, index: number) => (
              <ProductCard
                favorite={false}
                product={product}
                color="black"
                search={false}
                key={product._id || index} // Use product._id if available
              />
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductsPage