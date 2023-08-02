import React from 'react';
import main from '../assests/beach.jpg'

export default function Hero() {
  return (
    <>
        <div className='w-full h-[90vh]'>
            <img src={main} alt='' className='w-full h-full object-cover'/>
            <div className='max-w-[1100px] mx-auto'>
            <div className='absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4'>
                <h1 className='font-bold text-4xl'>Find Your Special Trip</h1>
                <h2 className='text-4xl py-4 italic'>With Weekaway</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            </div>
        </div>
    </>
  )
}
