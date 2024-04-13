import React from "react";
import ReactPlayer from 'react-player'


export default function Article_10(){
    return(
        <>
        <div className="flex justify-center mt-10 z-0">
        <ReactPlayer height={500} width={1200} controls={true} url={"./assesst/one-cfmine.mp4"}/>
        </div>
        </>
    )
}