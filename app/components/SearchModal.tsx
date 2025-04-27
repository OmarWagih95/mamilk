import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { wishListContext } from '../context/wishListContext';
import ProductCard from './ProductCard';
import { Product } from '../interfaces/interfaces';

const SearchModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [searchData, setSearchData] = useState([]);
  const [message, setMessage] = useState('');
  const { wishList } = useContext(wishListContext);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [isOpen]);

  if (!isOpen && !isVisible) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('LOADING...');
    try {
      const res = await axios(`/api/search/?searchValue=${searchValue.trim()}`);
      const status = res.status;
      const { message } = res.data;
      if (status !== 200) {
        setMessage(message);
      }
      setMessage('');
      setSearchData(res.data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const message = error.response?.data?.message || 'An error occurred';
        const status = error.response?.status || 500;
        console.log('Error caught:', message);
        console.log('Error status:', status);
        setMessage(message);
      }
    }
  };

  return (
    <>
      <div
        className={`fixed inset-0 w-[100vw] h-[120vh] bg-black bg-opacity-50 z-30 transition-opacity duration-300 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
      />
      <div
        className={`fixed pl-[2vw] pr-[3vw] inset-0 flex flex-col overflow-y-scroll gap-4 items-start justify-start bg-primaryLight min-h-[90vh] pb-4 h-auto w-[100vw] z-40 transition-all duration-500 ${
          isVisible ? 'opacity-100 translate-y-14' : 'opacity-0 -translate-y-10'
        }`}
        onClick={(e) => e.stopPropagation()} // Prevent clicks inside modal from triggering backdrop onClose
      >
        <form className='w-full text-primary px-3 md:px-6' onSubmit={handleSubmit}>
          <div className='flex gap-3 mt-3 w-full justify-between'>
            <label className='text-primary text-nowrap'>SEARCH HERE</label>
            <input
              value={searchValue}
              type='text'
              onChange={(e) => setSearchValue(e.target.value)}
              className='border-b rounded-2xl px-2 py-1 outline-none w-full h-6 border-primary bg-primaryLight text-sm'
            />
            <span
              onClick={onClose}
              className='hover:cursor-pointer text-primary mr-4 hover:rotate-180 transition duration-700'
            >
              x
            </span>
          </div>
        </form>
        {message === '' ? (
          <div
            className={`grid grid-cols-2 lg:grid-cols-4 justify-between lg:justify-start w-full sm:items-start items-center gap-y-8 gap-2 md:gap-8 py-2 h-auto`}
          onClick={onClose}
          >
            {searchData.map((product: Product) => {
              const productID = product._id;
              const products = product.variations.map((variant, index) => {
                const color = variant.color;
                const fav = wishList.find(
                  (favorite) => favorite.productId === productID && favorite.color === color
                );
                return (
                  <ProductCard
                    favorite={fav ? true : false}
                    search={false}
                    key={index}
                    color={variant.color}
                    product={product}
                  />
                );
              });
              return products;
            })}
          </div>
        ) : (
          <div className='flex justify-center w-screen h-screen text-lg items-center'>{message}</div>
        )}
      </div>
    </>
  );
};

export default SearchModal;     