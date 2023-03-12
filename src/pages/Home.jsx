import { useWindowWidth } from '@react-hook/window-size';
import classNames from 'classnames';
import React, { useEffect, useRef } from 'react'


export default function Home() {
    const ref = useRef()
    const windowWith = useWindowWidth();


    const test = [
        {
            url: "https://c4.wallpaperflare.com/wallpaper/764/505/66/baby-groot-4k-hd-superheroes-wallpaper-preview.jpg",
            name: "kullanıcı 1",
            star: "***",
            p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias non error unde architecto aspernatur maiores vitae nostrum, harum exercitationem tempora repellat nihil natus omnis atque quisquam magnam excepturi reiciendis culpa."
        },
        {
            url: "https://c4.wallpaperflare.com/wallpaper/146/872/985/baby-groot-groot-5k-hd-wallpaper-preview.jpg",
            name: "kullanıcı 2",
            star: "****",
            p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias non error unde architecto aspernatur maiores vitae nostrum, harum exercitationem tempora repellat nihil natus omnis atque quisquam magnam excepturi reiciendis culpa."
        },
        {
            url: "https://c4.wallpaperflare.com/wallpaper/838/731/651/baby-groot-5k-hd-4k-wallpaper-preview.jpg",
            name: "kullanıcı 3",
            star: "*****",
            p: " adipisicing elit. Molestias non error unde architecto  harum exercitationem tempora repellat nihil natus omnis atque quisquam magnam excepturi reiciendis culpa.Lorem ipsum dolor sit amet consectetur, adipisicing elit. "
        }
    ]

    useEffect(() => {
        let images = ref.current.querySelectorAll("#rs"),
            total = images.length,
            current = 0
        //console.log(total)
        const imageSlider = () => {
            images[(current > 0 ? current : total) - 1].classList.add('opacity-0')
            images[current].classList.remove('opacity-0')
            current = current === total - 1 ? 0 : current + 1;
        }

        imageSlider()
        let interval = setInterval(imageSlider, 3000)
        return () => {
            clearInterval(interval)
        }
    }, [ref])


    //console.log(test)

    return (
        <div className=' h-full w-full  py-10 px-10'>
            <div className='flex items-center justify-center'>
                <div className=' h-[1px] w-full bg-gray-300 rounded-full'></div>
                <div className=' h-[5px] w-[10px]  mx-10 rounded-full bg-gray-300'></div>
                <div className=' h-[1px] w-full  rounded-full bg-gray-300'></div>

            </div>
            <div className='container max-w-screen-xl   mx-auto px-8 md:mt-10'>
                <div className='w-full h-screen relative  pt-20' ref={ref}>
                    <div >
                        {test.map((res, key) =>

                            <div key={key} id="rs" className={classNames({
                                "shadow-2xl  rounded-lg flex items-center justify-center  absolute transition-opacity opacity-0 duration-1000 ease-linear": true,
                                "px-3 gap-x-8 w-[900px] h-[400px]  top-[45px] left-[160px]": windowWith > 768,
                                "px-3 inset-x-1/2 -translate-x-1/2 h-96 min-w-full": windowWith <= 768
                            })}>

                                <img className={classNames({
                                    "px-5 h-[250px] w-[400px] rounded-full": windowWith > 768,
                                    "h-[150px]  max-w-[220px] -left-[32%] absolute rounded-r-full": windowWith <= 768,
                                    "h-[150px]  max-w-[200px] -left-[32%] absolute rounded-r-full": windowWith <= 512,
                                    "h-[150px]  max-w-[175px] -left-[32%] absolute rounded-r-full": windowWith <= 375
                                    
                                    
                                    })} src={res.url} ></img>
                                <div className={classNames({
                                    " py-10 pt-28": windowWith > 768,
                                    "pt-2": windowWith <= 768
                                })}>

                                    <div className={classNames({
                                        "w-[400px] h-[300px]": windowWith > 768,
                                        "w-full  h-full flex  flex-col items-center": windowWith <= 768
                                    })}>

                                        <div className='pb-4  flex flex-col items-center'>
                                            <div>{res.star}</div>
                                            <h1 className='font-semibold'>{res.name}</h1>
                                        </div>
                                        <div>
                                            <div className=' w-[110px]  h-[150px] float-left'></div>
                                            <p className='font-thin text-sm'>{res.p}</p>
                                        </div>

                                    </div>
                                </div>
                            </div>


                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
