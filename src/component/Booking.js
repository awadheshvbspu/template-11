import React from 'react'

export default function Booking() {
  return (
    <>
        <div id='deals' className='max-w-[1140px] mx-auto w-full p-4'>
            <form className='lg:flex lg:justify-between w-full items-center'>
                <div className='flex flex-col my-2 py-2'>
                    <label>Destination</label>
                    <select name='' id='' className='lg:w-[300px] md:w-full border rounded-md p-2'>
                        <option>Grande Antique</option>
                        <option>Key West</option>
                        <option>Maldives</option>
                        <option>Corumel</option>
                        <option>Goa</option>
                    </select>
                </div>
                <div className='flex w-full'>
                    <div className='flex flex-col w-full lg:max-w-[250px] my-2 p-2'>
                        <label>Check-In</label>
                        <input type='date' className='border rounded-md' />
                    </div>
                    <div className='flex flex-col w-full lg:max-w-[250px] my-2 p-2'>
                        <label>Check-Out</label>
                        <input type='date' className='border rounded-md '/>
                    </div>
                </div>
                <div className='flex flex-col my-2 p-2 w-full'>
                    <label>Search</label>
                    <button className='w-full'>Rates & Avaiabilities</button>
                </div>
            </form>
        </div>
    </>
  )
}
