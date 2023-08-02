import React from 'react';
import contact from '../assests/lalo-hernandez-Amo081zdJsI-unsplash.jpg'

export default function Contact() {
  return (
    <>
        <div id='contact' className='max-w-[1140px] mx-auto w-full p-4 py-16'>
        <h2 className='text-center text-gray-700'>Send us a Message</h2>
        <p className='text-center text-gray-700 py-2'>We're standing by:</p>
        <div className='grid md:grid-cols-2'>
            <img src={contact} alt='' className='w-full md:h-full object-cover p-2 max-h-[500px] h-[200px] rounded'/>
            <form>
                <div className='grid grid-cols-2'>
                    <input className='border m-2 p-2 rounded' type='text' placeholder='First'/>
                    <input className='border m-2 p-2 rounded' type='text' placeholder='Last'/>
                    <input className='border m-2 p-2 rounded' type='email' placeholder='Email'/>
                    <input className='border m-2 p-2 rounded' type='tel' placeholder='Phone'/>
                    <input className='border col-span-2 p-2 m-2 rounded' type='text' placeholder='Address'/>
                    <textarea rows='10' cols='30' className='border col-span-2 m-2 p-2 rounded' ></textarea>
                    <button className='col-span-2 m-2 rounded'>Submit</button>
                </div>
            </form>
        </div>
        </div>
    </>
  )
}
