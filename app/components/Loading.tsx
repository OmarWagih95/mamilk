import React from 'react'
import { gradientSmallButtonStyle } from '../styles/styles'

const Loading = () => {
  return (
    <div className='fixed w-screen h-screen  inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50'>
<div className="bg-accent text-white w-20 h-12 rounded-2xl  justify-center items-center text-center">
  <h2>
  Loading…
    </h2>
</div>
    </div>
  )
}

export default Loading