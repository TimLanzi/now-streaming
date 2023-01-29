import React, { PropsWithChildren } from 'react'

export const Container: React.FC<PropsWithChildren> = ({
  children,
}) => {
  return (
    <div className='container mx-auto max-w-5xl px-8 md:px-4'>
      {children}
    </div>
  )
}
