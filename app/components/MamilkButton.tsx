import React from 'react'

const MamilkButton = ({buttonText,onClick,disabled}:{buttonText:String,onClick:() => void,disabled:boolean}) => {
  return (
<button
  disabled={disabled}
  onClick={onClick}
  className={`border rounded-md transition duration-300 border-primary p-2 text-sm sm:text-lg md:text-xl ${
    disabled
      ? 'cursor-not-allowed bg-gray-300 text-gray-500' // Styles for disabled state
      : 'hover:cursor-pointer bg-primary hover:bg-secondary  text-white'
  }`}
>
  {buttonText}
</button>
  )
}

export default MamilkButton