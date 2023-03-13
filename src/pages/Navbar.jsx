import React from 'react'
import { GiVacuumCleaner } from "react-icons/gi";
import { useWindowWidth } from '@react-hook/window-size';

export default function Navbar() {
  const windowWith = useWindowWidth();
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
    
    <div className='flex items-center justify-center m-8'>
        <div className=' h-[1px] w-full bg-gray-300 rounded-full'></div>
        <div className=' h-[5px] w-[10px]  mx-10 rounded-full bg-gray-300'></div>
        <div className=' h-[1px] w-full  rounded-full bg-gray-300'></div>
      </div>
    </div>
   
  )
}
