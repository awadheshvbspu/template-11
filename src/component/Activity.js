import React from 'react';
import resorts from '../assests/ahmed-yaaniu-RDnYlufMFAw-unsplash.jpg';
import cruise from '../assests/georgy-trofimov-xEJoSsDCnR8-unsplash.jpg'
import diving from '../assests/sebastian-pena-lambarri-7i5HMCGupVw-unsplash.jpg'

export default function Activity() {
  return (
    <>
        <div className='max-w-[1140px] mx-auto w-full md:flex mt-[-75px]'>
            <div className='relative p-4'>
                <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold'>Resorts</h3>
            <img src={resorts} alt='/' className='w-full h-full object-cover relative border-4 border-white shadow-lg'/>
            </div>
            <div className='relative p-4'>
                <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold'>Cruise</h3>
            <img src={cruise} alt='/' className='w-full h-full object-cover relative border-4 border-white shadow-lg'/>
            </div>
            <div className='relative p-4'>
                <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold'>Excursion</h3>
            <img src={diving} alt='/' className='w-full h-full object-cover relative border-4 border-white shadow-lg'/>
            </div>
            
        </div>
    </>
  )
}
