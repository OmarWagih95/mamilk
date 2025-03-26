'use client'
import { gradientSmallButtonStyle } from '@/app/styles/styles';
import axios from 'axios';
import Link from 'next/link'
import React, { useState } from 'react'
import { Slide, toast, ToastContainer } from 'react-toastify'

const Footer = () => {
  const [name, setName] = useState('');
  const [number, setWhatsappNumber] = useState('');

  const showErrorToast = (errorMessage: string) => {
    toast.error(`${errorMessage}`, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Slide,
      className: "toastAnchuva"
    });
  }

  const showSuccesToast = (Message: string) => {
    toast.success(`${Message}`, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Slide,
      className: "toastAnchuva"
    });
  }

  async function handleSubmit() {
    console.log('Form submitted'); // Debugging line
    try {
      const res = await axios.post('/api/newSletter', { name, number });
      console.log('Axios request done:', res.data); // Debugging line
      const { message } = res.data;
      const status = res.status;

      console.log('Message:', message);
      console.log('Status:', status);
      showSuccesToast('THANK YOU FOR SUBSCRIBING!');
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const message = error.response?.data?.message || 'An error occurred';
        const status = error.response?.status || 500;

        console.log('Error caught:', message);
        console.log('Error status:', status);
        showErrorToast(message || 'An error occurred');
      }
    }
    setName('');
    setWhatsappNumber('');
  }

  return (
    <>
      <footer className="bg-pink2 text-blue2 py-10 sm:px-10 px-6 tracking-wide">
        <div className="flex-col-reverse w-full flex md:flex-row gap-8">
          <div className='md:w-1/4'>
            <h4 className="text-base font-bold mb-6">POLICIES</h4>
            <ul className="space-y-1">
              <li><Link href="/pages/policies?privacy-policy" className="text-white hover:text-secondary text-sm">
                PRIVACY POLICY</Link></li>
              <li><Link href="/pages/policies?terms-and-conditions" className="text-white hover:text-secondary text-sm">
                TERMS AND CONDITIONS</Link></li>
              <li><Link href="/pages/policies?return-and-exchange" className="text-white hover:text-secondary text-sm">
                RETURN AND EXCHANGE</Link></li>
            </ul>
          </div>

          <div className='md:w-1/4'>
            <h4 className="text-base font-bold mb-6">SOCIALS</h4>
            <ul className="space-y-1">
              <li><Link target='#' href="https://www.facebook.com/profile.php?id=61565209649532&mibextid=LQQJ4d" className="text-white hover:text-secondary text-sm">
                FACEBOOK</Link></li>
              <li><Link target='#' href="https://www.instagram.com/mamilk_breastfeeding/profilecard" className="text-white hover:text-secondary text-sm">
                INSTAGRAM</Link></li>
            </ul>
          </div>

          <div className="max-w-xl md:w-1/2 mx-auto text-start">
            <h3 className="text-2xl font-bold">Newsletter</h3>
            <p className="text-sm mt-4 text-white">Subscribe to our newsletter and stay up to date with the latest news,
              updates, and exclusive offers. Get valuable insights. Join our community today!</p>

            <div className="bg-gray-100 flex px-2 py-1.5 rounded-md text-left mt-8">
              <input
                onChange={(e) => setName(e.target.value)}
                type='text'
                placeholder='Enter your name'
                value={name}
                className="w-full mx-2 outline-none bg-transparent text-sm pl-4"
              />
              <input
                onChange={(e) => setWhatsappNumber(e.target.value)}
                type='text'
                placeholder='Enter your WhatsApp number'
                value={number}
                className="w-full outline-none bg-transparent text-sm pl-4"
              />
              <button
                onClick={handleSubmit} type='button'
                className={`${gradientSmallButtonStyle} text-white text-sm rounded-md px-4 py-2 ml-4 transition-all tracking-wide`}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </footer>

      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}

export default Footer;
