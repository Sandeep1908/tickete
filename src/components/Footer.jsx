import React from 'react'
import logo from '@/images/logo/logob.png'

function Footer() {
  return (
    <div className='w-full   mt-10 bg-[#000000]'>

        <div className='w-full flex flex-col justify-between items-start'>


        
        <div className='w-full p-10 border-b border-shade-main'>
                <img src={logo.src} alt='logo-footer' className='w-15 h-10'/>
        </div>
 


        <div className='w-full max-w-2xl p-10 flex flex-col justify-start items-start space-y-3 md:space-x-6 md:space-y-0 md:flex-row md:items-center'>
            <p className='text-shade-main text-sm'>Made with ❤️</p>

            <ul className=' flex justify-start flex-wrap gap-5 list-disc items-center  text-[#ADB1B8] text-xs'>
                <li>Privacy Policy</li>
                <li>Terms of usage</li>
                <li>Cancellation policy</li>
                <li>Sitemap</li>
            </ul>
        </div>  

        </div>
    </div>
  )
}

export default Footer