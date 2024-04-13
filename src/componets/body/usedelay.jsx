import React, { useEffect, useState } from "react";


export default function UseDlay( putheight,putname){
    
    useEffect(()=>{
        let putname = true
        window.onscroll=function name1(){
           let height = window.pageYOffset
           console.log(height)
           if(height>putheight){
            putname=false
           
          }else{
            putname=true
          }
        }
           
        
       },[putheight,putname])

    return(
        <>
        
        </>
    )
}