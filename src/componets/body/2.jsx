import React, { useEffect, useState } from "react";


export default function Article_2(){
    const[delay1 , setDelay1]=useState(true)


    useEffect(()=>{
        if(true){
        setDelay1(false)
       }else{
        setDelay1(true)
       }
       })
    return(
        <>
        <div className={delay1 ? `py-[60px]  duration-[1s] opacity-0` : `py-[60px] duration-[1s] opacity-100`} >
            <div className="flex flex-col items-center justify-center gap-10 text-white lg:flex-row ">

                <div className=" bg-gray-800 xl:w-[20vw] w-[80vw] py-10 rounded-2xl flex flex-col items-center hover:bg-teal-500 duration-500">
                    <p className="text-[45px] font-bold">Unlimited</p>
                    <p className="text-[15px] text-gray-300">SUPPORT DURATION</p>
                </div>

                <div className=" bg-gray-800 xl:w-[20vw] w-[80vw] py-10 rounded-2xl flex flex-col items-center hover:bg-teal-500 duration-500">
                    <p className="text-[45px] font-bold">9</p>
                    <p className="text-[15px] text-gray-300">SUPPORTED BLOCKCHAINS</p>
                </div>

                <div className=" bg-gray-800 xl:w-[20vw] w-[80vw] py-10 rounded-2xl flex flex-col items-center hover:bg-teal-500 duration-500">
                    <p className="text-[45px] font-bold">20K+</p>
                    <p className="text-[15px] text-gray-300">MEMBERS</p>
                </div>

            </div>
        </div>
        </>
    )
}