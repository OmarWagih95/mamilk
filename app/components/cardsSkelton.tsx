import React from 'react'

interface CardsSkeletonProps {
  height: number
  width: number
  count?: number
}

const CardsSkeleton: React.FC<CardsSkeletonProps> = ({ height, width, count = 4 }) => {
  return (
    <div className="px-3 w-screen lg:px-[2vw] min-h-[80vh] py-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-9">
      {Array.from({ length: count }).map((_, idx) => (
        <div
          key={idx}
          className="rounded-t-lg px-1 py-1 flex-1 bg-gray-500 hover:border-2 animate-pulse"
          style={{ height: `${height}px`, width: `${width}px` }}
        />
      ))}
    </div>
  );
};

export default CardsSkeleton;
