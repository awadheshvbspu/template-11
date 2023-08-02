import React from 'react'
import gal1 from '../assests/debby-hudson-2vB8q-Qdwrg-unsplash.jpg';
import gal2 from '../assests/arkady-lukashov-ysN7dkne160-unsplash.jpg';
import gal3 from '../assests/elizeu-dias-RN6ts8IZ4_0-unsplash.jpg';
import gal4 from '../assests/alonso-reyes-8NWFh8_i9Ug-unsplash.jpg'
import gal5 from '../assests/manuel-moreno-DGa0LQ0yDPc-unsplash.jpg'

export default function Gallery() {
  return (
    <div id='gallery' className='max-w-[1140px] mx-auto w-full px-4 py-16'>
    <h2 className='text-center text-gray-700 p-4'>Gallary</h2>
      <div className='grid sm:grid-cos-5 gap-4'>
        <div className='sm:col-spna-3 col-span-2 row-span-2'>
            <img src={gal1} alt='' className='w-full h-full object-cover'/>
        </div>
        <div>
            <img src={gal2} alt='' className='w-full h-full object-cover' />
        </div>
        <div>
            <img src={gal3} alt='' className='w-full h-full object-cover'/>
        </div>
        <div>
            <img src={gal4} alt='' className='w-full h-full object-cover' />
        </div>
        <div>
            <img src={gal5} alt=''className='w-full h-full object-cover' />
        </div>
      </div>
    </div>
  )
}
