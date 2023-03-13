import React, { useEffect, useRef, useState } from 'react'

export default function Home() {
    const ref =useRef();
    const[slideIndex, setSlideIndex] = useState(0)
    const slides = [
        {
            url:require("../images/1.jpg")
        },
        {
            url:require("../images/2.jpg")
        },
        {
            url:require("../images/3.jpg")
        },
    ]


    useEffect(() => {
      const slider = ()=>{
        if(slideIndex === slides.length -1 ){
            setTimeout(() => {
                setSlideIndex(0)
            }, 3000);
        }else{
            setTimeout(() => {
                setSlideIndex(slideIndex + 1)
            }, 3000);
        }
      }
     
      slider();
      return () => {
        
      }
    }, [slideIndex])
    
    return (
        <div className='max-w-[1000px] m-auto w-full h-screen py-10 px-10 relative'>
            
            <div className='w-full max-h-96 h-full'>
            <div  style={{backgroundImage:`url(${slides[slideIndex].url})`}} className='w-full mt-10 h-full  ml-1/2  rounded-2xl bg-center  bg-cover duration-700 '  >
                
                </div>
            </div>
                        
        </div>
    )
}
