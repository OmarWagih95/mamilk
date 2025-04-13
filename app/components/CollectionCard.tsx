import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { Collection } from '../interfaces/interfaces'

const CollectionCard = ({ collection }: { collection: Collection }) => {
  return (
    <Link 
      href={`/pages/productsPage?collectionID=${collection._id}`} 
      className="group relative flex flex-shrink-0 flex-col gap-4 overflow-hidden w-full sm:w-[70%] md:w-[50%] lg:w-[32.333%] "
    >
      {/* Maintain Aspect Ratio using padding-top trick */}
      <div className="relative w-full pt-[133%]"> 
        <Image
          src={collection.imageURL}
          alt={collection.collectionName}
          fill
          className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
        />
        <h1 className="absolute inset-x-0 bottom-16 text-center text-white font-extrabold text-2xl  lg:text-3xl drop-shadow-lg">
          {collection.collectionName}
        </h1>
        <p className="absolute inset-x-0 bottom-10 text-center text-white font-medium text-xl  lg:text-2xl drop-shadow-lg">
          {collection.description}
        </p>
      </div>
    </Link>
  );
};

export default CollectionCard;
