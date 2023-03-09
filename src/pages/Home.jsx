import React, { useEffect, useRef } from 'react'

export default function Home() {
    const ref = useRef()

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
            p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias non error unde architecto aspernatur maiores vitae nostrum, harum exercitationem tempora repellat nihil natus omnis atque quisquam magnam excepturi reiciendis culpa.Lorem ipsum dolor sit amet consectetur, adipisicing elit. "
        }
    ]

    useEffect(() => {
        let images = ref.current.querySelectorAll("#rs"),
            total = images.length,
            current = 0
        console.log(total)
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
        <div className=' h-full w-full bg-gradient-to-b  from-lime-600   to-lime-100 py-10 px-10'>
            <div className='flex items-center justify-center'>
                <div className=' h-[1px] w-full bg-gray-300 rounded-full'></div>
                <div className=' h-[5px] w-[10px]  mx-10 rounded-full bg-gray-300'></div>
                <div className=' h-[1px] w-full  rounded-full bg-gray-300'></div>

            </div>
            <div className='container mx-auto px-8'>
                <div className='w-full h-[580px] relative' ref={ref}>
                    <div >
                     
                        {test.map((res, key) =>
                            <div key={key} id="rs" className=' gap-x-8 w-[900px] h-[400px] shadow-2xl  rounded-lg  flex items-center justify-center  absolute top-[45px] left-[160px] transition-opacity opacity-0 duration-1000 ease-linear'>

                                <img className='px-5 h-[250px] w-[400px] rounded-full' src={res.url} ></img>
                                <div className='pt-28'>
                                    <div>{res.star}</div>
                                    <div className='w-[400px] h-[300px]'>
                                        <h1 className='font-semibold'>{res.name}</h1>
                                        <p>{res.p}</p>
                                        
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
