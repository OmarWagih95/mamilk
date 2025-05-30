'use client'
import { Berkishire } from '@/app/layout';
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
      <footer className="bg-primary text-blue2 py-10 sm:px-10 px-6 tracking-wide">
        <div className="flex-col-reverse w-full flex md:flex-row gap-8">
          <div className='md:w-1/4'>
            <h4 className={`text-2xl ${Berkishire.className} font-bold mb-6`}>Policies</h4>
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
            <h4 className={`text-2xl ${Berkishire.className} font-bold mb-6`}>Socials</h4>
            <ul className="space-y-1">
              <li><Link target='#' href="https://www.facebook.com/profile.php?id=61565209649532&mibextid=LQQJ4d" className="text-white hover:text-secondary text-sm">
                FACEBOOK</Link></li>
              <li><Link target='#' href="https://www.instagram.com/mamilk_breastfeeding/profilecard" className="text-white hover:text-secondary text-sm">
                INSTAGRAM</Link></li>
              <li><Link target='#' href="https://wa.me/201223453899?text=Hello%2C%20I%20am%20interested%20in%20your%20products
" className="text-white hover:text-secondary text-sm">
                WHATSAPP</Link></li>
            </ul>
          </div>

          <div className="max-w-xl md:w-1/2 mx-auto text-start">
            <h3 className={`text-2xl ${Berkishire.className} font-bold`}>Newsletter</h3>
            <p className="text-sm mt-4 text-white">Subscribe to our newsletter and stay up to date with the latest news,
              updates, and exclusive offers. Get valuable insights. Join our community today!</p>

            <div className="bg-gray-100 flex px-2 py-1.5 rounded-2xl text-left mt-8">
              <input
                onChange={(e) => setName(e.target.value)}
                type='text'
                placeholder='Name'
                value={name}
                className="w-full text-primary mx-2 border-none outline-none bg-transparent text-sm pl-4"
              />
              <input
                onChange={(e) => setWhatsappNumber(e.target.value)}
                type='text'
                placeholder='WhatsApp number'
                value={number}
                className="w-full outline-none border-none text-primary bg-transparent text-sm pl-4"
              />
              <button
                onClick={handleSubmit} type='button'
                className={`bg-primary hover:bg-accent rounded-2xl text-white text-sm  px-4 py-2 ml-4 transition-all tracking-wide`}>
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
