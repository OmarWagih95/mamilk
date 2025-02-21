'use client'
import React, { useContext } from 'react'
import { accountTextStyle } from '../styles'
import axios from 'axios';
import { useRouter } from 'next/navigation';



const PolicyTab = ({title,value,activeTab,setActiveTab}:{title:string,value:string,activeTab:string,setActiveTab:React.Dispatch<React.SetStateAction<string>>}) => {
 const router = useRouter();

  const handleClick =async () => {

      setActiveTab(value); // Otherwise, just set the active tab

  };

  return (
    <div 
    onClick={handleClick}
    className={`${value === activeTab ?'text-primary':'text-gray-400'} hover:cursor-pointer text-nowrap ${accountTextStyle}`}>{title}</div>
  )
}

export default PolicyTab