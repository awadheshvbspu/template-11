import React from 'react';
import { BsChatSquareDots } from 'react-icons/bs';

export default function Footer() {
  return (
    <>
       <div className='max-w-[1540px] w-full py-8 mx-auto border-t-4'>
       <div className='flex items-center justify-center mx-auto'>
            <BsChatSquareDots size={30} className='text-[var(--primary-dark)] mr-2'/>
            <h1 className='text-xl font-bold text-gray-700'>WEEKAWAY</h1>
        </div>
       </div>
    </>
  )
}
