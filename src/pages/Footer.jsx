import React from 'react'
import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare } from 'react-icons/ai'
import { TfiWorld } from 'react-icons/tfi'

export default function Footer() {
    return (
        <div className='w-max-[1400px] container  mx-auto h-20 flex flex-col'>
            <div className='flex items-center justify-center '>
                <div className=' h-[1px] w-full bg-gray-400 rounded-full'></div>

                <div className='px-2 w-48 gap-x-2 text-gray-500 flex items-center justify-center'>
                    <div className=' hover:text-orange-500 transition-colors cursor-pointer '><AiFillFacebook size={20}></AiFillFacebook></div>
                    <div className=' hover:text-orange-500 transition-colors cursor-pointer '><AiFillInstagram size={20}></AiFillInstagram></div>
                    <div className=' hover:text-orange-500 transition-colors cursor-pointer '><AiFillTwitterSquare size={20}></AiFillTwitterSquare></div>
                </div>

                <div className=' h-[1px] w-full  rounded-full bg-gray-400'></div>
            </div>
            <div className='flex items-center justify-between px-8'>
                <div className='flex items-center justify-center text-gray-600'>
                    2023 &copy;<p className='text-xs'> Uğur Türk</p>
                </div>
                <div>
                    <div className='text-sm flex items-center gap-x-2 hover:text-orange-500 justify-center text-gray-500'><TfiWorld></TfiWorld><p>Türkçe(TR)</p></div>
                </div>
            </div>

        </div>
    )
}
