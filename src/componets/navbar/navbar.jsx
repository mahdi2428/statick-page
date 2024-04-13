import React, { useState } from "react";
import { Link, useActionData, useSearchParams } from "react-router-dom";
export default function Navbar(){

    const[menu,setMenu]=useState(false)

    const[clas ,setClas]=useState(true)

    let pervscroopos = 0;
    window.onscroll=function() {
        let currentscrollpos = window.pageYOffset;
        
        if(100 < currentscrollpos ){
            document.querySelector(".navbar").style.top = "-200px";

        }if(  currentscrollpos < 100 ){
            document.querySelector(".navbar").style.top = "0";
        }else if (currentscrollpos > 800){
            document.querySelector(".navbar").style.top = "0";
        }
    
        pervscroopos=currentscrollpos;
    }

    return(
        <>
        <div className="fixed w-full left-0 top-0 z-20 flex xl:justify-between duration-500 items-center bg-black py-2 xl:px-[150px] xl:py-4 navbar" >


            <div className="xl:hidden w-full">

                <div className="flex items-center justify-center"> 

                    <div className="w-fit">
                    <i onClick={()=>{
                        setMenu(!menu)
                        setClas(!clas)
                        }} className={!menu ? `bi bi-list text-white text-3xl` : `bi bi-x text-white text-3xl`}></i>
                    </div>   

                    <div className=" w-full xl:p-0 xl:hidden flex justify-center">
                        <img className="w-[45vw] md:w-[30vw] xl:w-[9vw]" src="./assesst/logo-cf.png"/>
                    </div>

                </div>


                <div id="anime" className={clas ?  "flex duration-700 flex-col text-white my-2 px-9 w-full h-0  absolute gap-5 left-0 bg-black z-20 " : "flex duration-300 flex-col text-white my-2 px-9 w-full h-[100vh] absolute gap-5 left-0 bg-black anime z-20 "}>
                    {menu && <>
                        <Link className="hover:text-green-500 transition-all ease-in duration-300 border-b border-neutral-700 pb-3 ">Home</Link>
                        <Link className="hover:text-green-500 transition-all ease-in duration-300 border-b border-neutral-700 pb-3">What is it?</Link>
                        <Link className="hover:text-green-500 transition-all ease-in duration-300 border-b border-neutral-700 pb-3">How work</Link>
                        <Link className="hover:text-green-500 transition-all ease-in duration-300 border-b border-neutral-700 pb-3">Why do we sell it?</Link>
                        <Link className="hover:text-green-500 transition-all ease-in duration-300 border-b border-neutral-700 pb-3">Subscriptions</Link>
                        <Link className="hover:text-green-500 transition-all ease-in duration-300 border-b border-neutral-700 pb-3">Feedback</Link>
                        <Link className="hover:text-green-500 transition-all ease-in duration-300 border-b border-neutral-700 pb-3">Blog</Link>
                        <button className="border rounded-full p-1 px-3 hover:text-black hover:bg-white transition-all ease-in duration-300 absolute top-[80%] left-[38%]">70% OFF!</button>
                    </>}
                </div>


            </div>



            <div className="pr-10 xl:p-0 xl:block hidden">
                <img className="w-[45vw] md:w-[30vw] xl:w-[9vw]" src="./assesst/logo-cf.png"/>
            </div>



            <div className=" hidden xl:flex gap-6 text-white items-center anime">
                <Link className="text-green-500 transition-all ease-in duration-300 ">Home</Link>
                <Link className="hover:text-green-500 transition-all ease-in duration-300 ">What is it?</Link>
                <Link className="hover:text-green-500 transition-all ease-in duration-300 ">How work</Link>
                <Link className="hover:text-green-500 transition-all ease-in duration-300 ">Why do we sell it?</Link>
                <Link className="hover:text-green-500 transition-all ease-in duration-300 ">Subscriptions</Link>
                <Link className="hover:text-green-500 transition-all ease-in duration-300 ">Feedback</Link>
                <Link className="hover:text-green-500 transition-all ease-in duration-300 ">Blog</Link>
                <button className="border rounded-full p-1 px-3 hover:text-black hover:bg-white transition-all ease-in duration-300">70% OFF!</button>
            </div>
            



        </div>
        </>
    )
}