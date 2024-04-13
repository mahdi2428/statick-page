import React, { useEffect, useState } from "react";
import img from "../../images/rvrvs.png"
import UseDlay from "./usedelay";


export default function Article_3(){
    
    UseDlay(500,delay2)
    
    
    return(
        <>
        <div className={delay2  ? `flex flex-col justify-center items-center mt-10 py-14 duration-1000 opacity-0` : `flex flex-col justify-center items-center mt-10 py-14 duration-1000 opacity-100`}>
            <div className="bg-contain bg-center h-[25vh] overflow-hidden bg-no-repeat flex  justify-center  w-full " 
            style={{
                backgroundImage:`url(${img})`
            }}>
                <div className="text-center mb-10">
                    <p className="text-teal-500 xl:text-[16px] text-[16px] font-bold">SOFTWARE REVIEW</p>
                    <p className="text-white xl:text-[43px] text-[43px] font-semibold mb-7" >The best wallet mining!</p>
                    <p className="text-slate-500 xl:text-[20px] text-[20px] font-normal	">Easy , Fast , Powerfull</p>
                </div>
            </div>

            
            <div className="">
                <img className="rounded-2xl w-full xl:w-full " src="./assesst/2024-03-14-20.09.46.jpg"/>
            </div>

            
        </div>
        </>
    )
}