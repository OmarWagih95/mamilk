import { useState } from 'react';
import SideMenuItem from './sideMenuItem';
import { motion } from 'framer-motion';
import fadeInDifferentDelay from '../variants/fadeInDifferentDelay';
import constants from '../constants';

export default function SideDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the drawer open/closed
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };



  return (
    < div className='flex justify-center items-center lg:hidden'>
      {/* Hamburger Icon */}
      <button
        onClick={toggleDrawer} 
        className=" text-white  focus:outline-none"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>

      {/* Side Drawer */}
      <div
        className={`fixed flex pl-4 justify-start items-center top-0 left-0 h-[100vh] bg-black text-white w-64 z-40 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-100 ease-in-out`}
      >
        <div className="p-4">
          <ul>
                {constants.NavMenu.map((item,index)=>
                <motion.li
                onClick={toggleDrawer}

                variants={fadeInDifferentDelay({delay:0.27,duration:0})}
                initial="initial"
                whileInView='animate'
                  viewport={{once:false}}
                  custom={index}
                  
            
                className='my-3 flex hover:translate-x-6 duration-500' key={index}>
                  <SideMenuItem text={item.text} link={item.link}/>
                </motion.li>
                )}
          </ul>
        </div>
      </div>

      {/* Overlay to close the drawer */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30"
          onClick={toggleDrawer}
        ></div>
      )}
    </div>
  );
}
