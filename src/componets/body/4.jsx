import React, { useEffect, useRef, useState } from "react";
import ReactPlayer from 'react-player'
export default function Article_4(){
    const[delay3 ,setDelay3]=useState(true)
    // useEffect(()=>{
    //     window.onscroll=function name(){
    //     let height1 = window.pageYOffset
    //     if(height1>1000){
    //     setDelay3(false)
    //     console.log(height1)
    //    }else{
    //     setDelay3(true)
    //    }
    // }
    // })
    
    return(
        <>
        <div className={delay3 ? `flex xl:flex-row flex-col px-3 items-center xl:px-[200px] md:pt-[120px] md:pb-[80px] opacity-0 duration-1000`:`flex xl:flex-row flex-col px-3 items-center xl:px-[200px] md:pt-[120px] md:pb-[80px] opacity-100 duration-1000`}>
            <div className="xl:basis-1/2 flex flex-col  md:items-left">
                <p className="text-teal-500 text-center lg:text-left pb-8">WHAT IS IT?</p>
                <p className="xl:text-[43px] text-[30px] text-white font-semibold mb-8">🤔 HOW DOES OUR SOFTWARE WORK?</p>
                <div className="text-slate-500 flex flex-col gap-4 text-[20px] font-normal	">
                    <p>🔺 Every wallet has a <b>12-WORD MNEMONIC PHRASE</b>, it’s like a back up code so you can enter to your wallet through any device or crypto wallet application.</p>
                    <p>🔺 These words are <b>automatically generated</b>  by a special algorithm when you create a wallet through any crypto wallet app.</p>
                    <p>🔺 <b>THE GOAL OF OUR SOFTWARE</b> is <b>to generate this 12 words</b> by a specific algorithm, restore the wallet using it and check for coins on it (BTC, ETH, BNB and etc.)</p>
                    <p>🔺 The software goes through<b>hundreds of millions of these combinations</b> . After he finds a wallet with a crypto on it, <b>he gives you a 12 word mnemonic phrase from that exact wallet.</b></p>
                    <p>⁉️ <b>And WHAT YOU NEED TO DO with it?</b></p>
                    <p>1️⃣<b>Using the received mnemonic phrase</b> , you can log into this wallet using the<b>Trust Wallet application</b>  (Or Exodus, Metamask, Trustee and others).</p>
                    <p>2️⃣ <b>You will get full access to the cryptocurrency on this wallet</b> and will be able to transfer it anywhere, to your wallet or to the exchange (Binance, Coinbase and any other).</p>
                    <p>3️⃣ <b>That’s it, enjoy the profit! 💰💰💰</b></p>
                </div>
            </div>
            <div className="xl:basis-1/2 hidden xl:block ">
                <ReactPlayer  height={800} controls={true} url={"./assesst/how-works.mp4"}/>
            </div>
            <div className="xl:basis-1/2 md:hidden">
                <ReactPlayer height={350} width={250} controls={true} url={"./assesst/how-works.mp4"}/>
            </div>
            <div className="xl:basis-1/2 hidden md:block xl:hidden">
                <ReactPlayer height={350} width={500} controls={true} url={"./assesst/how-works.mp4"}/>
            </div>
        </div>
        </>
    )
}