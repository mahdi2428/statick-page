import React from "react";
import img from "../../images/rvrvs.png"

export default function Article_8(){

const data = [
    {
        price: 400 ,
        text:"You can choose your blockchain after pay! BTC, LTC or..." ,
        number : "ONE",
        bgcolor : "bg-green-400",
        textcolor: "text-green-400",
    },
    {
        price: 799 ,
        text:"You can choose your blockchain after pay! BTC, LTC or..." ,
        number : "TWO",
        bgcolor : "bg-blue-400",
        textcolor: "text-blue-400",
    },
    {
        price: 1199 ,
        text:"You can choose your blockchain after pay! BTC, LTC or..." ,
        number : "THREE",
        bgcolor : "bg-purple-400",
        textcolor: "text-purple-400",
    },
    {
        price: 1499 ,
        text:"You can choose your blockchain after pay! BTC, LTC or..." ,
        number : "FOUR",
        bgcolor : "bg-green-400",
        textcolor: "text-green-400",
    },
    {
        price: 1899 ,
        text:"You can choose your blockchain after pay! BTC, LTC or..." ,
        number : "FIVE",
        bgcolor : "bg-blue-400",
        textcolor: "text-blue-400",
    },
    {
        price: 2299 ,
        text:"You can choose your blockchain after pay! BTC, LTC or..." ,
        number : "SIX",
        bgcolor : "bg-purple-400",
        textcolor: "text-purple-400",
    },
    {
        price: 2599 ,
        text:"You can choose your blockchain after pay! BTC, LTC or..." ,
        number : "SEVEN",
        bgcolor : "bg-green-400",
        textcolor: "text-green-400",
    },
    {
        price: 2999 ,
        text:"You can choose your blockchain after pay! BTC, LTC or..." ,
        number : "EIGHT",
        bgcolor : "bg-blue-400",
        textcolor: "text-blue-400",
    },
    {
        price: 3199 ,
        text:"You can choose your blockchain after pay! BTC, LTC or..." ,
        number : "NINE",
        bgcolor : "bg-purple-400",
        textcolor: "text-purple-400",
    },
]

    return(
        <>
        <div>
            <div className="xl:bg-contain bg-center xl:h-[30vh] overflow-hidden bg-no-repeat flex  justify-center  w-full pt-5" 
            style={{
                backgroundImage:`url(${img})`
            }}>
                <div className="flex flex-col items-center justify-center ">
                    <p className="text-green-500 xl:text-[27px] text-[25px]">SUBSCRIPTION</p>
                    <p className="text-white xl:text-[40px] text-[26px] font-semibold">Choose your Subscription</p>
                    <p className="text-gray-500 xl:text-[24px] text-[20px] text-center pt-4">ETH | BTC | BNB | SOL | TRX | XRP | DOGE | LTC | TON</p>
                </div>
            </div>

            <div className="flex flex-wrap gap-12 justify-center items-center lg:p-[50px]">
                {data.map((item)=>(
                    <>
                    <div className="bg-gray-900 rounded-2xl p-5 flex flex-col justify-between items-cnter gap-5 xl:w-[18vw] h-[40vh] mx-8 xl:mx-0">
                        <div className="flex justify-center">
                            <p className={`capitalize ${item.textcolor}`}>{item.number} BLOCKCHIN</p>
                        </div>
                        <div className="flex justify-center ">
                            <p className="font-bold text-[52px] text-white border-b border-gray-600 ">{item.price}$</p>
                        </div>
                        <div className="flex items-center gap-5">
                            <i class={`bi bi-check-circle ${item.textcolor}`}></i>
                            <p className='text-gray-400'>{item.text}</p>
                        </div>
                        <div className="flex justify-center">
                            <button className={`${item.bgcolor} py-2 px-8 rounded-full text-[18px] font-semibold hover:bg-white hover:text-black duration-500`}>BUY</button>
                        </div>
                    </div>
                    </>
                ))}

            </div>
        </div>
        </>
    )
}