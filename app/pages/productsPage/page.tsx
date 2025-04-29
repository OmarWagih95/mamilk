import React, { Suspense } from 'react'
import ProductsPageClient from './ProductsPageClient'

// Fallback component to show during Suspense
const ProductsPageFallback = () => (
  <div className="flex justify-center items-center h-screen">
    <p className="text-lg text-primary">Loading products...</p>
  </div>
)

export default function ProductsPage() {
  return (
    <Suspense fallback={<ProductsPageFallback />}>
      <ProductsPageClient />
    </Suspense>
  )
}

// Optional: Disable prerendering if needed
export const dynamic = 'force-dynamic'