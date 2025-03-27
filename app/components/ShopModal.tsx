import React, { useEffect, useState } from 'react';
import constants from '../constants';
import Link from 'next/link';
import { Collection } from '../interfaces/interfaces';
import axios from 'axios';

  const ShopModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [collections, setCollections] = useState<Collection[]>([])
  
    useEffect(() => {
      const fetchCollections = async () => {
        try {
          const res = await axios.get(`/api/collections?categoryID=all`);
          setCollections(res.data.data);
        } catch (error) {
          console.error("Error fetching collections:", error);
        }
      };
      fetchCollections();
    }, []);
    useEffect(() => {
      if (isOpen) {
        // Open the modal
        setIsVisible(true);
      } else {
        // Start the closing animation
        setIsVisible(false);
      }
    }, [isOpen]);

    if (!isOpen && !isVisible) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 w-[100vw] h-[120vh] bg-black bg-opacity-50 z-30 transition-opacity duration-300 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className={`fixed inset-0 flex items-start justify-center z-40 transition-all duration-500 ${
          isVisible ? 'opacity-100 translate-y-14' : 'opacity-0 -translate-y-10'
        }`}
      >
        <div className='bg-pink1 text-primary text-sm gap-2 p-4 flex flex-col shadow-lg w-[100vw] items-center rounded-md'>
          {collections.map((collection, index) => (
            <div key={index} className='flex flex-col gap-2 text-primary hover:text-secondary'>
              <Link onClick={onClose} href={`/pages/categoryPage/${collection._id}`}>
                {collection.collectionName}
              </Link>
            </div>
          ))}
          {/* Close button */}
          <button onClick={onClose} className='mt-2 text-red-500'>
            Close
          </button>
        </div>
      </div>
    </>
  );
};

export default ShopModal;