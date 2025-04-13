'use client'
import { sendMail } from '@/app/lib/email';
import emailValidation from '@/app/lib/validations/emailValidation';
import axios from 'axios';
import Link from 'next/link'
import React, { useState } from 'react'
// import { useForm } from 'react-hook-form';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { Slide, toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'; // Ensure this is present
import Swal from 'sweetalert2';

// import { z } from 'zod';


const ContactPage = () => {
    const handleChange=(key:string,value:string)=>{
    setState((prevState)=>({
        ...prevState,
        [key]: value
    }))
    // setErrors(emailValidation(state))

    }
    const [state,setState]=useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    

    type ErrorType = {
        name?: string;
        email?: string;
        subject?: string;
        message?: string;
      };
    const [errors,setErrors]=useState<ErrorType>({})
    const [loading,setLoading]=useState(false)
    const showErrorToast = (errorMessage: string) => {
        console.log('showing error toast:', errorMessage); // Debugging line
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
            className:"toastAnchuva"
        });
    }
    const showSuccesToast = (Message: string) => {
        console.log('showing error toast:', Message); // Debugging line
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
            className:"toastAnchuva"

        });
    }
    const handleSubmit=async(e:React.FormEvent)=>{
        e.preventDefault();
        setLoading(true)
        console.log('clicked')
        const validationErrors = emailValidation(state);

        // Update the errors state
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length === 0) {
              console.log('Errors are cleared. Proceeding with state:', state);
         const res = await axios.post('/api/contact',state)

        if(res.status === 200) {
            setLoading(false)
            Swal.fire({
          
              background:'#FFFFF',
              color:'black',
              toast:false,
              iconColor:'#473728',
            position: "bottom-right",
            // icon: "success",
            text: "YOUR EMAIL HAS BEEN SENT SUCCESSFULLY! WE WILL GET BACK TO YOU SOON",
            showConfirmButton: false,
            timer: 2000,
            customClass: {
              popup: 'no-rounded-corners small-popup'
            }
          
          }
          )
        }
        else{
            setLoading(false)
            Swal.fire({
          
              background:'#FFFFF',
              color:'black',
              toast:false,
              iconColor:'#473728',
            position: "bottom-right",
            // icon: "success",
            text: "THERE WAS A PROBLEM SENDING YOUR EMAIL PLEASE TRY AGAIN LATER!",
            showConfirmButton: false,
            timer: 2000,
            customClass: {
              popup: 'no-rounded-corners small-popup'
            }
          
          }
          )
            console.log("problem")
        }

        }
        setLoading(false)
        return
    }
    
  return (
    <>     
<div className='min-h-screen pt-16 pb-1 text-primary bg-white'>
<div className="max-w-6xl max-lg:max-w-3xl mx-auto bg-backgroundColor shadow-[0_4px_6px_rgba(0,0,0,0.1),0_-4px_6px_rgba(0,0,0,0.1),6px_0_6px_rgba(0,0,0,0.1),-6px_0_6px_rgba(0,0,0,0.1)]">
            <div className="grid lg:grid-cols-2 items-center gap-14 sm:p-8 p-4 ">
                <div>
                    <h1 className="text-4xl uppercase font-bold text-primary">Get in Touch</h1>
                    <p className="text-sm text-primary mt-4 leading-relaxed">
Have questions? Want to discuss your ideas? Reach out to us today, </p>

                    <ul className="mt-12 space-y-8">
                        <li className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill='#fff'
                                viewBox="0 0 479.058 479.058">
                                <path
                                    d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                                    data-original="#000000" />
                            </svg>
                            <a href="javascript:void(0)" className="text-white text-sm ml-4">
                                orders@mamilk-breastfeeding.com
                            </a>
                        </li>

                    </ul>

                    <ul className="flex mt-12 space-x-4">
                        <li className="bg-primary  h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                        <Link target='#' href="https://www.instagram.com/mamilk_breastfeeding/profilecard" className="hover:text-secondary hover:border-secondary ">
            <FaInstagram className='text-white text-[20px]' />
            </Link>   
                        </li>
                        <li className="bg-primary  h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                        <Link target='#' href="https://www.facebook.com/profile.php?id=61565209649532&mibextid=LQQJ4d" className="hover:text-secondary   py-1 ">
          <FaFacebookF className='text-white text-[20px]' />

            </Link>     
                        </li>

                        <li className="bg-primary  h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                        <Link target='#' href="https://www.tiktok.com/@anchuva" className="hover:text-secondary hover:border-secondary  py-1 ">
            <FaTiktok className='text-white text-[20px]' />
            </Link>  
                        </li>
                    </ul>
                </div>

                <div className=" p-6 rounded-lg">
                    <form 
                     onSubmit={(e)=>handleSubmit(e)}
                    className="mt-8 space-y-3">
                        <div className='flex flex-col gap-1'>
                        <input value={state.name} onChange={(e)=>handleChange('name',e.target.value)} type='text'  placeholder='Name'
                            className="w-full bg-babyBlue py-3 px-4 text-gray-800 text-sm outline-primary" />
                                                {errors.name && <p className='text-xs text-red-500'>{errors.name}</p>}
                        </div>

                        <div className='flex flex-col gap-1'>
                        <input value={state.email} onChange={(e)=>handleChange('email',e.target.value)} type='email' placeholder='Email'
                            className="w-full bg-babyBlue py-3 px-4 text-gray-800 text-sm outline-primary" />
                                {errors.email && <p className='text-xs text-red-500'>{errors.email}</p>}
</div>
<div className='flex flex-col gap-1'>
                        <input value={state.subject} onChange={(e)=>handleChange('subject',e.target.value)} type='text' placeholder='Subject'
                            className="w-full bg-babyBlue py-3 px-4 text-gray-800 text-sm outline-primary" />
                                                 {errors.subject && <p className='text-xs text-red-500'>{errors.subject}</p>}
</div>
<div className='flex flex-col gap-1'>
                                
                        <textarea value={state.message} onChange={(e)=>handleChange('message',e.target.value)} placeholder='Message' rows={6}
                            className="w-full bg-babyBlue px-4 text-gray-800 text-sm pt-3 outline-primary"></textarea>
                                                                            {errors.message && <p className='text-xs text-red-500'>{errors.message}</p>}
                            </div>

                       {loading?<button disabled type='submit'
                       
                       className="text-white bg-gray-400  tracking-wide  text-sm px-4 py-3 flex items-center justify-center w-full !mt-6">
    
                       Loading ...
                   </button> :<button type='submit'
                       
                            className="text-white bg-primary   tracking-wide text-sm px-4 py-3 flex items-center justify-center w-full !mt-6">
              
                            SEND EMAIL
                        </button>}
                    </form>
                </div>
            </div>
        </div>
</div>
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
/></>
  )}
export default ContactPage ;
