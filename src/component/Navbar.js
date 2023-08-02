import React, { useState,useEffect } from 'react';
import {FaBars,FaFacebook,FaInstagram,FaGooglePlusG,FaTwitter} from 'react-icons/fa';
import { BsChatSquareDots } from 'react-icons/bs';

export default function Navbar() {
    const[nav,setNav] = useState(false);

    const handleNav = ()=>{
        setNav(!nav)
    }
  return (
    <>
        <div className='w-full min-h-[58px] flex justify-between items-center absolute z-10 text-white bg-gray-700/60'>
        <ul className='hidden sm:flex px-4'>
            <li>
                <a href='/' >Home</a>
            </li>
            <li>
                <a href='#gallary' >Gallary</a>
            </li>
            <li>
                <a href='#deals' >Deals</a>
            </li>
            <li>
                <a href='#contact' >Contact</a>
            </li>
        </ul>
        <div className='flex justify-between'>
            <FaFacebook size={25} className='mx-4'/>
            <FaGooglePlusG size={25} className='mx-4'/>
            <FaInstagram size={25} className='mx-4'/>
            <FaTwitter size={25} className='mx-4'/>
        </div>
            <div className='sm:hidden z-10'>
                <FaBars size={30} className='mr-4 cursor-pointer' onClick={handleNav}/>
            </div>
            {/* <monile menu */}
            <div onClick={handleNav} className={nav ?'overflow-y-hidden md:hidden ease-in duration-300 absolute text-gray-300 left-0 top-0 h-screen w-full bg-black/90 px-4  py-7 flex flex-col':'absolute top-0 h-screen left-[-100%] ease-in duration-300'}>
                <ul className='h-full w-full text-center pt-32'>
                <li className='text-2xl py-8'>
                <a href='/' >Home</a>
            </li>
            <li className='text-2xl py-8'>
                <a href='#gallary' >Gallary</a>
            </li>
            <li className='text-2xl py-8'>
                <a href='#deals' >Deals</a>
            </li>
            <li className='text-2xl py-8'>
                <a href='#contact' >Contact</a>
            </li>
        </ul>
                
            </div>
        </div>
    </>
  )
}
