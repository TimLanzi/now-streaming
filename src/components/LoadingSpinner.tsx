import React from 'react'
import { MutatingDots } from "react-loader-spinner";

export const LoadingSpinner = () => {
  return (
    <div className='w-full flex items-center justify-center'>
      <MutatingDots 
        height="100"
        width="100"
        color=""
        secondaryColor= ''
        radius='12.5'
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass="fill-indigo-700"
        visible={true}
      />
    </div>
  )
}
