'use client'
import PolicyTab from '@/app/components/PolicyTab';
import { accountTextStyle, pagePadding } from '@/app/styles'
import React, { useEffect, useState } from 'react'
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsAndConditions from './components/TermsAndConditions';
import ReturnAndExchange from './components/ReturnAndExchange';

const PoliciesPage = () => {
  const [activeTab, setActiveTab] = useState("privacy-policy");
  const [title, setTitle] = useState('PRIVACY POLICY');
  useEffect(() => {
    // الحصول على المعلمات من URL
    const searchParams = new URLSearchParams(window.location.search);
    const firstParam = searchParams.keys().next().value;

    // تحديث التبويب النشط إذا كانت القيمة موجودة وصحيحة
    if (firstParam) {
      setActiveTab(firstParam);
    }
  }, []);
  useEffect(() => {
    const title = profileTabs.find(tab=>tab.value ===activeTab)
    if(title) setTitle(title.title)
  
  

  }, [activeTab,setActiveTab])
  



        const profileTabs =[
          {title:'PRIVACY POLICY',value:"privacy-policy"},
          {title:'TERMS AND CONDITIONS',value:"terms-and-conditions"},
          // {title:'COOKIE POLICY',value:"cookie-policy"},
          {title:'RETURN AND EXCHANGE',value:"return-and-exchange"},

        ]
  return (
    <div>
            <div className={`${pagePadding} pt-16 min-h-screen h-auto w-full text-primary bg-backgroundColor flex flex-col ${accountTextStyle} justify-start items-center`}>
      <div className='py-6 lg:py-16 flex flex-col gap-6 w-full justify-start items-start border-b border-primary'>
        <div className={`flex  w-full`}>
          <div className='w-1/4'>POLICY</div>
          <div>{title}</div>
        </div>
        {/* <h1 className=' '>
        BONJOUR,{user.firstName}
        </h1> */}
        <div className={`w-full  lg:hidden flex gap-6 overflow-y-hidden scrollbar-hidden`} >
          {
            profileTabs.map((tab,index)=><PolicyTab key={index} title={tab.title} value={tab.value} activeTab={activeTab} setActiveTab={setActiveTab}/>
            )
          }

        </div>
      </div>
      <div className='flex w-full'>
        <div className='hidden w-1/4 h-auto min-h-screen relative lg:block  '>
        <div className={`flex  sticky mt-24 top-20 left-1 flex-col gap-5`}>
        {
            profileTabs.map((tab,index)=><PolicyTab key={index} title={tab.title} value={tab.value} activeTab={activeTab} setActiveTab={setActiveTab}/>
            )
          }
        </div>

        </div>
        <div className='w-full py-10 lg:py-20 lg:w-3/4 h-auto min-h-screen flex flex-col'>
        <PrivacyPolicy selectedTab={activeTab} setSelectedTab={setActiveTab} />
        <TermsAndConditions selectedTab={activeTab} setSelectedTab={setActiveTab} />
        <ReturnAndExchange selectedTab={activeTab} setSelectedTab={setActiveTab} />
        {/* <Overview selectedTab={activeTab} setSelectedTab={setActiveTab}/>
        <MyOrders selectedTab={activeTab} />
        <Information selectedTab={activeTab} />
        <Wishlist selectedTab={activeTab} /> */}
        </div>
        <div></div>
      </div>
      </div>
    </div>
  )
}

export default PoliciesPage