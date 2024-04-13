import React from 'react'

export default function Footer() {
  return (
    <div>
        <div className='w-full flex-col flex lg:flex-row text-white px-4 py-10 pb-7 '>
            <div className='md:px-8 px-4 py-8 w-full lg:w-1/3'>
                <h4 className='text-[30px] font-bold'>Crypto Factory</h4>
                <p className='text-[15px]'>Crypto Factory is a software that helps you to mine crypto wallets! Make easy Money</p>
            </div>
            <div className='md:px-8 px-4 py-8 w-full lg:w-1/3'>
                <h4>CONTACT US</h4>
                <div>
                    <p>202 Helga Springs Rd, Crawford, TN 38554</p>
                    <p>info@cfmine.com</p>
                </div>
            </div>
            <div className='md:px-8 px-4 w-full lg:w-1/3 border-zinc-900 border-b-2  pb-10'>
                <img src='./assesst/bh-22-trustpilot-tp-logo-text-ie-300x223.png'/>
            </div>
        </div>
        <div className='flex flex-col-reverse md:px-14 3xl:px-[200px] px-8 lg:flex-row justify-between  text-white'>
            <div className='text-center mb-6'>
                <p className='text-slate-500 text-[14px] lg:text-[16px]'>Copyright ©2024 Crypto Factory. All rights reserved.</p>
            </div>
            <div className='text-center mb-4'>
                <button onClick={()=>{window.location.reload()}} className='pe-4 text-[14px] lg:text-[16px]'>Home</button>
                <button className='pe-4 text-[14px] lg:text-[16px]'>Blog</button>  
            </div> 
        </div>
    </div>
  )
}
