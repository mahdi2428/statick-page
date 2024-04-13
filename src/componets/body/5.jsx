import React from "react";

export default function Article_5(){
    return(
        <>
        <div className="flex flex-col xl:flex-row xl:px-[160px] items-center gap-20">

            <div className=" flex flex-col items-center lg:items-start px-3 xl:p-0">
                <p className="text-green-500">SELL</p>
                <p className="xl:text-[43px] font-semibold text-[30px] text-white">Why do we sell our software? 🤔</p>
            </div>




            <div>
                <div className="basis-1/3 ">
                    <p className="text-[20px] text-white mb-2 px-3 xl:p-0">
                    ✅ I hope this part will help you understand that our software is not a trap 🪤, it’s a road to your <b>new wealthy life!</b>
                    </p>

                    <div className="flex flex-col gap-5">

                        <div className="flex flex-col xl:flex-row gap-3 bg-gray-800 rounded-2xl xl:h-36 py-2 px-5  mx-10 xl:m-0">
                            <div>
                                <img className="w-[15vw] md:w-[10vw] xl:w-[5vw]" src="./assesst/dollar-symbo4rf.png"/>
                            </div>
                            <div className="flex flex-col gap-2">
                                <p className="text-teal-500 text-[24px]">millions of wallets</p>
                                <p className="text-slate-500">There is millions of wallets, with billions $ of crypto on them. It’s impossible to hack them all even in 1000 years no matter how many machines I will use. So I’m giving others this opportunity.</p>
                            </div>
                        </div>
                    
                        <div className="flex  flex-col xl:flex-row  gap-3 bg-gray-800 rounded-2xl xl:h-36 py-2 px-5  mx-10 xl:m-0">
                            <div>
                                <img className="w-[15vw] md:w-[10vw] xl:w-[5vw]" src="./assesst/security4rf.png"/>
                            </div>
                            <div className="flex flex-col gap-2">
                                <p className="text-blue-300 text-[24px]">don't earn less</p>
                                <p className="text-slate-500">We don't earn less because you use our software, but we charge from your subscriptions, so our income increases. We have 800+ active clients, you can count by yourself how much a month is it 😉</p>
                            </div>
                        </div>
                    
                        <div className="flex  flex-col xl:flex-row  gap-3 bg-gray-800 rounded-2xl xl:h-36 py-2 px-5  mx-10 xl:m-0">
                            <div>
                                <img className="w-[15vw] md:w-[10vw] xl:w-[5vw]" src="./assesst/4krfjr4.png"/>
                            </div>
                            <div className="flex flex-col gap-2">
                                <p className="text-purple-500 text-[24px]">hundreds of people use the software</p>
                                <p className="text-slate-500">Since hundreds of people use the software, we can fix bugs faster and more efficiently, add useful features and improve the software with the help of customers.</p>
                            </div>
                        </div>

                    </div>


                </div>
            </div>
        </div>
        </>
    )
}