import React, { useState } from 'react'
import { GiVacuumCleaner } from "react-icons/gi";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaTimes } from "react-icons/fa"
import { useWindowWidth } from '@react-hook/window-size';
import classNames from 'classnames';


export default function Navbar() {
  const windowWith = useWindowWidth();

  const [isActive, setisActive] = useState(false)
  return (
    <div>
      <header className='w-max-[1400px] mx-auto  h-12 flex justify-center md:justify-between pl-12 pr-12 items-centerbg-gradient-to-b  from-lime-600   to-[#6ea919] pt-10'>
        <div className='flex transition-all justify-center gap-x-3 font-semibold items-center text-sm  text-gray-100 hover:cursor-pointer hover:text-orange-300  hover:text-lg'>
          <span><GiVacuumCleaner className='hover:rotate-180 transition-transform ' size={40}></GiVacuumCleaner></span>
          <h1 className='tracking-wide ' >ÜNEM KOLTUK YIKAMA</h1>
        </div>
        {
          windowWith > 768 && <div className='flex justify-center  items-center    gap-x-3 font-semibold  text-sm  text-gray-100  '>
            <div>
              <button className='hover:text-orange-300 hover:scale-125  tracking-wider transition-all'>İletişim</button>
            </div>
            <div>
              <button className='hover:text-orange-300 hover:scale-125  tracking-wider transition-all'>Hakkında </button>
            </div>
            <div>
              <button className='hover:text-orange-300 hover:scale-125  tracking-wider transition-all'>Giriş Yap </button>
            </div>
            <div>
              <button className='hover:text-orange-300 hover:scale-125  tracking-wider transition-all'>Kayıt Ol </button>
            </div>
          </div>
        }


      </header>

      <div className='flex items-center justify-center m-8 '>
        <div className=' h-[1px] w-full bg-gray-300  rounded-full'></div>
        {windowWith > 768 && <div className=' h-[5px] w-[10px]  mx-10 rounded-full bg-gray-300'></div>}
        {windowWith <= 768 && isActive === false && <div>

          <div className="px-6 text-gray-300  cursor-pointer	" onClick={() => { setisActive(true) }}> <RxHamburgerMenu size={24}></RxHamburgerMenu></div>


        </div>}
        {windowWith <= 768 && isActive === true && <div>

          <div className="px-6 text-gray-300 cursor-pointer	 " onClick={() => { setisActive(false) }}> <FaTimes size={24}></FaTimes></div>


        </div>}
        <div className=' h-[1px] w-full  rounded-full bg-gray-300'></div>
      </div>
      <div onClick={()=>{setisActive(false)}} className={classNames({
        "hidden":isActive === false,
        'fixed inset-0 bg-black bg-opacity-30 backdrop-blur-[2px] z-10  transition-all duration-1000 ease-in-out   flex items-center justify-center':isActive === true
      })}>
        <div className='h-[300px] w-[200px] bg-orange-500 shadow-orange-300 opacity-95 rounded-3xl shadow-2xl flex flex-col gap-y-6 items-center justify-center '>
        <div>
              <button className='hover:text-white hover:scale-125 w-[150px] shadow-md shadow-gray-200  rounded-xl px-10 py-2 bg-gradient-to-br from-green-600 to-green-200  tracking-wider transition-all'>İletişim</button>
            </div>
            <div>
              <button className='hover:text-white hover:scale-125 w-[150px] shadow-md shadow-gray-200 rounded-xl px-10 py-2 bg-gradient-to-br from-green-600 to-green-200   tracking-wider transition-all'>Hakkında </button>
            </div>
            <div>
              <button className='hover:text-white hover:scale-125 w-[150px] shadow-md shadow-gray-200 rounded-xl px-10 py-2 bg-gradient-to-br from-green-600 to-green-200   tracking-wider transition-all'>Giriş Yap </button>
            </div>
            <div>
              <button className='hover:text-white hover:scale-125 w-[150px] shadow-md shadow-gray-200 rounded-xl px-10 py-2 bg-gradient-to-br from-green-600 to-green-200   tracking-wider transition-all'>Kayıt Ol </button>
            </div>
        </div>
      </div>
    </div>

  )
}
