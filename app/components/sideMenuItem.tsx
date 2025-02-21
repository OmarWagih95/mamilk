import React from 'react'
import Link from 'next/link'

const SideMenuItem = ({text,link}:{text:string,link:string}) => {
  return (

    <Link className='hover:translate-x-6' href={link}>{text}</Link> 
  )
}

export default SideMenuItem