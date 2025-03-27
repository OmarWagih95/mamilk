import React from 'react'
import { gradientButtonStyle, gradientSmallButtonStyle } from '../styles/styles'

const MamilkButton = ({buttonText,onClick,disabled}:{buttonText:String,onClick:() => void,disabled:boolean}) => {
  return (
<button
  disabled={disabled}
  onClick={onClick}
  className={`border rounded-md transition duration-300  p-2 text-sm sm:text-lg md:text-xl ${
    disabled
      ? 'cursor-not-allowed bg-gray-300 text-gray-500' // Styles for disabled state
      : `hover:cursor-pointer ${gradientSmallButtonStyle}  text-white`
  }`}
>
  {buttonText}
</button>
  )
}

export default MamilkButton