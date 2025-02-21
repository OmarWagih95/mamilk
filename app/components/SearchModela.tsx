import { motion } from 'framer-motion'
import React, { useContext, useState } from 'react'
import { IoSearchOutline } from 'react-icons/io5'
import { fadeInMenu } from '../variants/fadIn'
import { pagePadding } from '../styles'
import axios from 'axios'
import { Product } from '../interfaces/interfaces'
import ProductCard from './ProductCard'
import { wishListContext } from '../context/wishListContext'

const SearchModela = () => {
      const [searchData, setSearchData] = useState([]);
      const [message, setMessage] = useState('');
      const{wishList} =useContext(wishListContext)
    
    const handleSubmit = async(e:React.FormEvent)=>{
        e.preventDefault();
        
        setMessage('LOADING...')
        try{const res= await axios(`/api/search/?searchValue=${searchValue.trim()}`)
        const status = res.status;
        const { message } = res.data;
        if(status !== 200){
            setMessage(message)
        
        }
        setMessage('');
        setSearchData(res.data)

      }
        catch(error){
            if (axios.isAxiosError(error)) {
                const message = error.response?.data?.message || 'An error occurred';
                const status = error.response?.status || 500;

                console.log('Error caught:', message);
                console.log('Error status:', status);
                setMessage(message);
            }

        }
      }
      const [searchValue, setSearchValue] = useState('');
    
      const[isSearchOpen,setSearchOpen]=useState(false)
    
  return (
    <div>

    
    <div className='md:text-lg' onClick={()=>setSearchOpen(true)}>
        {/* <h2  className='hidden md:block cursor-pointer'>
      SEARCH

    </h2> */}
    <IoSearchOutline className=''/>
        </div>
    {isSearchOpen &&   <motion.div

            variants={fadeInMenu({ direction: 'down', delay: 0.00 })}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.0 }}
      className={`search-modal ${pagePadding} bg-babyBlue text-sm gap-2 absolute p-4 z-50 flex flex-col shadow-lg w-[100vw] h-[100vh] items-center left-0 top-0 rounded-md
        `}
    >
      <div className='flex w-full justify-between'>
    <form onSubmit={handleSubmit}>

      <div className='flex gap-3 w-[80vw]'>
                <label className='text-primary text-nowrap' >SEARCH HERE</label>
                <input value={searchValue} type='text' onChange={(e)=>setSearchValue(e.target.value)} className='border-b outline-none w-full h-6 border-primary bg-babyBlue px-1 text-sm'/>

              </div>
    </form>
    <span onClick={()=>setSearchOpen(false)} className='hover:cursor-pointer mr-4 hover:rotate-180 transition duration-700'>x</span>

    </div>

      {/* Modal Content */}
     {message===''? <div 
      onClick={()=>{setSearchOpen(false)
        setSearchData([]);
        setSearchValue('')
      }}
      className={` flex justify-between   lg:justify-start w-full flex-wrap  sm:items-start items-center gap-y-8 gap-x-[8vw] lg:gap-x-[18.7vw]  py-2  h-auto`}>
      {/* {searchData.map((product:Product,index:number) => 
           <ProductCard search={true} key={index} color={product.variations[0].color} product={product} />
      
      )} */}
      {searchData.map((product: Product) => {
      const productID=product._id;
   const products= product.variations.map((variant, index) => {
    const color=variant.color
const fav = wishList.find((favorite) =>(favorite.productId===productID && favorite.color === color) )
            return (
              <ProductCard
              favorite={fav?false:true}
                search={false}
                key={index}
                color={variant.color}
                product={product}
              />
            );
          return null;
        })
      return products
 } )}
      
      
      </div>: <div className='flex justify-center  w-screen h-screen text-lg items-center'>{message}</div>}
    </motion.div>}

    </div>
  )
}

export default SearchModela