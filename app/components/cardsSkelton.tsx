import React from 'react'

type SkeletonVariant = 'product' | 'collection'

interface CardsSkeletonProps {
  variant?: SkeletonVariant
  count?: number
  containerClassName?: string
  itemClassName?: string
}

/**
 * Responsive sizes for each variant.
 * You can adjust these Tailwind classes to match your ProductCard and CollectionCard.
 */
const variantClasses: Record<SkeletonVariant, string> = {
  product:
    // Responsive height, rounded, and aspect ratio for product cards
    'rounded-2xl aspect-[230/307] max-md:min-w-[40vw] w-full',
  collection:
    // Responsive height, rounded, and aspect ratio for collection cards
    ' w-[85vw] sm:w-[70vw] md:w-[50vw] lg:w-[32.333vw] flex-nowrap  aspect-[250/307]',
}

const CardsSkeleton: React.FC<CardsSkeletonProps> = ({
  variant = 'product',
  count = 4,
  containerClassName = '',
  itemClassName = '',
}) => {
  return (
    <div
      className={`px-3 w-full lg:px-[2vw] min-h-[40vh] py-3  ${containerClassName}`}
    >
      {Array.from({ length: count }).map((_, idx) => (
        <div
          key={idx}
          className={`${variantClasses[variant]} bg-gray-200 animate-pulse ${itemClassName}`}
        />
      ))}
    </div>
  )
}

export default CardsSkeleton
