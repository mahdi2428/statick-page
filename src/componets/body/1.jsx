import React, { useEffect, useState } from "react";
import img from "../../images/prtlg.png"


export default function Article_1(){

    const[delay , setDelay]=useState(true)

       
       useEffect(()=>{
        if(true){
        setDelay(false)
       }else{
        setDelay(true)
       }
       })
       
    
    return(
        <>
            <div className={delay ? `bg-cover bg-no-repeat duration-[4s] opacity-0 w-full flex flex-col-reverse lg:flex-row items-center px-4 sm:px-[40px] mt-20` : `bg-cover bg-no-repeat duration-[4s] opacity-100 w-full flex flex-col-reverse lg:flex-row items-center px-4 sm:px-[40px] mt-20`}>

                <div className={delay ? `lg:w-1/2  flex flex-col gap-5 xl:pl-[200px] px-5 md:px-[50px] xl:px-[80px]` : `lg:w-1/2 flex  flex-col gap-5 xl:pl-[200px] px-5 md:px-[50px] xl:px-[80px]`}>
                    <h3 className="text-green-600 text-lg font-semibold">Crypto Factory Mining 2.0</h3>
                    <h1 className=" text-white font-extrabold text-[40px] xl:text-[58px]">Change your life by easy make money 🤑</h1>
                    <p className="text-slate-500 text-[18px] font-normal">🔺<strong>Crypto Factory Mining</strong> , The software goes through <b>hundreds of millions of these combinations</b>. After he finds a wallet with a crypto on it, <b> he gives you a 12 word mnemonic phrase from that exact wallet.</b></p>
                    <div className="text-center lg:text-left">
                        <button className="bg-teal-500 py-2 font-semibold text-[18px] font-semibold py-3 rounded-3xl shadow-xl hover:-translate-y-2 duration-500 px-11 ">Get started</button>
                    </div>
                </div>

                <div className="lg:w-1/2 xl:pr-[250px]  bg-contain bg-no-repeat "
                style={{
                    backgroundImage:`url(${img})`,
                }}>
                    <img className="md:w-[50vw] p-4" src="./assesst/earstcg.png"/>
                    
                </div>

            </div>
        </>
    )
}