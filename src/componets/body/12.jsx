import React from "react";

export default function Article_12(){
    return(
        <>
        <div className="flex flex-col xl:flex-row justify-center items-center">
            <div className="flex items-center xl:items-start flex-col basis-1/2">
                <p className="text-green-500">FEEDBACK</p>
                <p className="text-[30px]  xl:text-[43px]  text-white text-center xl:text-left">Trusted by over 20000 <br/> people around the world</p>
            </div>


            <div className="flex flex-col gap-5"> 
                <div className="flex text-yellow-700 gap-1 basis-1/2 ">
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                </div>
                <div>
                    <img className="xl:w-[20vw] h-[50vh] object-contain" src="./assesst/photo_2024-03-15-12.00.32.jpeg" />
                </div>
                <div className="flex justify-between ">
                    <div >
                        <p className="text-white ">Sheila Carter</p>
                        <p className="text-gray-400">Customer</p>
                    </div>
                    <div className="">
                        <img className="xl:w-[2vw] xl:h-[2vw] md:w-[8vw] md:h-[8vw] lg:w-[5vw] lg:h-[5vw] w-[18vw] h-[18vw] rounded-full" src="./assesst/photo_2024-03-15-12.00.31-768x1024.jpeg" />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}