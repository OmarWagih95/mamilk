import Link from 'next/link';
import React from 'react'

const NavItem = ({item}:{item:{
    text: string;
    link: string;
}}) => {
  return (
<Link
  className="relative group h-full font-semibold  p-1 flex justify-center items-center text-white border-loading-effect"
  href={item.link}
>
  <span className="transform group-hover:scale-110 transition-transform duration-500 ease-out">
    {item.text}
  </span>
</Link>



  )
}

export default NavItem