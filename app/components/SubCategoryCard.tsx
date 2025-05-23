'use client'
import { useState, useContext, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
// import { motion } from 'framer-motion';
import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";
import Swal from 'sweetalert2';
import { cartContext } from '../context/cartContext';
import { wishListContext } from '../context/wishListContext';
// import { fadeIn } from '../variants/fadIn';
import { Product, SubCategory } from '../interfaces/interfaces';
import { useRouter } from 'next/navigation';
import { Berkishire } from '@/app/layout';
import { gradientButtonStyle } from '../styles/styles';
// import { ExposureRegular } from '../layout';

const SubCategoryCard = ({ SubCategory}: { SubCategory:SubCategory }) => {
 const router = useRouter()
  return (
    <div  className="bg-pink1 flex flex-col rounded overflow-hidden shadow-md cursor-pointer group  hover:rotate-3 duration-1000 transition-all">
    <div className="w-full overflow-hidden ">
      <img
      src={SubCategory.imageUrl} alt={SubCategory.SubCategoryName}
      onClick={()=>{
        router.push(`/pages/subCategoryPage/${SubCategory._id}`)
      }}
        className="w-full hover:scale-[1.3] overflow-hidden duration-1000 ease-in-out object-cover object-top aspect-[230/307]" />
    </div>

    <div className="p-4  flex-1 w-full gap-3 flex flex-col">
      <div className="flex-1 w-full text-center justify-center">
        <h5 className={`text-lg md:text:2xl  ${Berkishire.className} font-bold text-pink3`}>{SubCategory.SubCategoryName}</h5>
        <div className=" flex items-center flex-wrap ">

        </div>
      </div>

   </div>
  </div>
    // {/* </motion.div> */}
  );
};

export default SubCategoryCard;
