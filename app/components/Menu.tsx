'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { CiMenuBurger } from 'react-icons/ci';
import { motion } from 'framer-motion';
import { fadeInMenu } from '../variants/fadIn';
import { FaArrowRight } from 'react-icons/fa6';
import constants from '../constants';
import { useRouter } from 'next/navigation'
import { Collection } from '../interfaces/interfaces';
import axios from 'axios';

const Menu: React.FC = () => {
  const router = useRouter();
  const [open, setOpen] = useState<boolean>(false);
  const [activeCategory, setActiveCategory] = useState<number | null>(null);
  const [summary, setSummary] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <div className="ml-4">
      <CiMenuBurger onClick={() => setOpen(prev => !prev)} className="text-xl" />
      {open && (
        <motion.div
          variants={fadeInMenu({ direction: 'down', delay: 0.05 })}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.0 }}
          className="bg-primary text-white w-full items-center justify-center fixed z-40 top-0 left-0 min-h-screen gap-8 flex flex-col"
        >
          <span
            onClick={() => setOpen(prev => !prev)}
            className="absolute top-3 text-lg font-semibold right-3"
          >
            x
          </span>
          <div className="relative flex w-full pt-0 gap-8 items-center justify-center flex-col">
            <div className="flex flex-col gap-8 text-lg font-semibold">
              <Link onClick={() => setOpen(prev => !prev)} className="py-1" href="/">
                HOME
              </Link>

              <div className="flex flex-col">
                <div className="flex items-center py-1" onClick={() => setSummary(!summary)}>
                  SHOP <FaArrowRight className={`${summary ? 'rotate-90' : ''} transition mx-2 duration-700`} />
                </div>
                <div
                  className={`transition-all duration-700 ease-in-out overflow-hidden ${
                    summary ? 'max-h-[60vh] opacity-100' : 'max-h-0 opacity-0'
                  } flex flex-col gap-2`}
                  style={{
                    paddingTop: summary ? '0.25rem' : '0',
                    paddingBottom: summary ? '0.25rem' : '0',
                  }}
                >
                  {constants.Categories.map((category, index) => (
                    <div key={index} className="flex flex-col gap-2 text-white">
                      <div
                        className="flex items-center cursor-pointer py-1"
                        onClick={() => setActiveCategory(activeCategory === index ? null : index)}
                      >
                        {category.categoryName}
                        <FaArrowRight className={`${activeCategory === index ? 'rotate-90' : ''} transition mx-2 duration-300 text-sm`} />
                      </div>
                      <div
                        className={`transition-all duration-300 ease-in-out overflow-hidden ${
                          activeCategory === index ? 'max-h-24 opacity-100' : 'max-h-0 opacity-0'
                        } flex flex-col gap-2 pl-4`}
                        style={{
                          padding: activeCategory === index ? '0.25rem 0.25rem' : '0',
                        }}
                      >
                        <Link
                          onClick={() => setOpen(prev => !prev)}
                          href={`/pages/productsPage?categoryID=${category._id}&season=summer`}
                          className="text-gray-300 hover:text-white py-1"
                        >
                          Summer
                        </Link>
                        <Link
                          onClick={() => setOpen(prev => !prev)}
                          href={`/pages/productsPage?categoryID=${category._id}&season=winter`}
                          className="text-gray-300 hover:text-white py-1"
                        >
                          Winter
                        </Link>
                      </div>
                    </div>
                  ))}
                    <div  className="relative">
      <button 
        className='lg:text-sm xl:text-base font-bold tracking-wider border-loading-effect gap-4 transform transition-transform duration-500 ease-out'
        onClick={() => {
          setOpen(false)
          router.push(`/pages/productsPage?categoryID=687deebe4dd929c4dd905850&season=all`)}}
      >
        Baby
      </button>
      </div>
                </div>
              </div>

              <Link onClick={() => setOpen(prev => !prev)} className="py-1" href="/pages/wishlist">
                WISHLIST
              </Link>
              <Link onClick={() => setOpen(prev => !prev)} className="py-1" href="/pages/cart">
                CART
              </Link>
              <Link onClick={() => setOpen(prev => !prev)} className="py-1" href="/pages/about">
                ABOUT
              </Link>
              <Link onClick={() => setOpen(prev => !prev)} className="py-1" href="/pages/policies">
                POLICIES
              </Link>
              <Link onClick={() => setOpen(prev => !prev)} className="py-1" href="/pages/contact">
                CONTACT
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Menu;