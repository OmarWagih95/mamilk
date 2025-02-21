import React from 'react'
import { IoIosArrowDown } from 'react-icons/io'

const Collapsable = ({value,faq,setFaq,question,answer}:{answer:React.ReactNode,question:React.ReactNode,value:number,faq:number,setFaq:React.Dispatch<React.SetStateAction<number>>}) => {
    return (
        <div className='w-full flex hover:cursor-pointer flex-col py-2 border-b border-primary justify-start items-start'>

    <div onClick={()=>setFaq(value===faq?0:value)} className='flex gap-1 py-1 justify-center items-center'>
        {question}
    <IoIosArrowDown className={`${faq===value?'rotate-180':''} transition duration-500` }/>
    </div>  
    <div
  className={`transition-all duration-500 ease-in-out overflow-hidden ${
    faq===value
      ? "max-h-[60vh]  opacity-100"
      : "max-h-0  opacity-0"
  } px-1 py-1 flex flex-col gap-2`}
  style={{
    padding: faq===value ? "0.25rem 0.25rem" : "0",
  }}
>
    {answer}

</div>
        </div>
  )
}

export default Collapsable