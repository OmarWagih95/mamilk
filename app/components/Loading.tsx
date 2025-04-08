import React from 'react'
import { gradientSmallButtonStyle } from '../styles/styles'

const Loading = () => {
  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'>
        <button type="button" className={`${gradientSmallButtonStyle} rounded-md px-2 py-1 ...`} disabled>
  <svg className="mr-3 size-5 animate-spin ..." viewBox="0 0 24 24">
  </svg>
  Processing…
</button>
    </div>
  )
}

export default Loading