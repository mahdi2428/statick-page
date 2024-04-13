import React from "react";
import ReactPlayer from "react-player";
export default function Article_11(){
    return(
        <>
        <div className="flex flex-col items-center gap-4 mt-10">
           <div className="flex flex-col gap-5">
            <p className="text-white font-bold text-[43px]">✅ WITHDRAWAL TUTORIAL</p>
            <p className="text-gray-400 text-[20px] mt-4">💰Withdrawing funds from software is the most enjoyable thing in the world.</p>
            <p className="text-gray-400 text-[20px]">🖥 <b>JUST A FEW CLICKS</b> and the money is in my account. Who would refuse it?</p>
            </div> 
        </div>
            <div className="flex justify-center mt-10 z-0">
                <ReactPlayer height={500} width={1200} controls={true} url={"./assesst/withdrawal-cfmine.mp4"}/>
            </div>
        
        </>
    )
}