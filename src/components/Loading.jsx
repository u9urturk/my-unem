import React, { useEffect, useRef } from 'react'
import { GiVacuumCleaner } from "react-icons/gi";


export default function Loading() {
  const ref = useRef()

  useEffect(() => {
    let result = ref.current.querySelectorAll("#icon")
     const test=()=>{
      result[0].classList.add('scale-150')
      setTimeout(() => {
        result[0].classList.remove('scale-150')
      }, 3000);
     }
     const test2 = () =>{
      setTimeout(() => {
        result[0].classList.remove('scale-150')
      }, 1000);
     }
     test()
     test2()
     let interval =setInterval(test,2000)
     return()=>{
      clearInterval(interval)
     }
   
}, [ref])


  return (
    <div ref={ref} className="fixed flex items-center  bg-gradient-to-b  from-lime-600   to-lime-100 justify-center top-0 left-0 h-full w-full  backdrop-blur-sm text-orange-400 ">
      
        <GiVacuumCleaner id='icon'  className=' transition-all' size={100}></GiVacuumCleaner>
      
    </div>
  )
} 
 