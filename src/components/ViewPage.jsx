'use client'
import React from 'react'
import image1 from "@/images/cardImages/1.webp";
import image2 from "@/images/cardImages/2.jpeg";
import image3 from "@/images/cardImages/3.webp";
import image4 from "@/images/cardImages/4.jpeg";
import { FaRegStar } from "react-icons/fa";
import { PiTicketFill } from "react-icons/pi";
import { SlCalender } from "react-icons/sl";
import { IoTimeSharp } from "react-icons/io5";
import { BsFillPeopleFill } from "react-icons/bs";
import { GoPlus } from "react-icons/go";
import { PiPiggyBank } from "react-icons/pi";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { IoMdLock } from "react-icons/io";
import { Carousel } from 'react-responsive-carousel';


 
function ViewPage() {
    const images =[image1.src,image2.src,image3.src,image4.src]
  return (
    <>


    <div className="w-full h-auto mt-10    md:max-w-80 m-auto border  rounded-lg">
    <p className="text-4xl font-serif text-center  md:hidden"> Confirm & Pay </p>
      
    <div className="w-full  p-3   ">
      <div className="w-full h-48 rounded-full">

    <Carousel
    showThumbs={false}
    autoPlay={true}
    interval={1000}
    infiniteLoop={true}
    >

    {
      images?.map((item,idx)=>{
        return( 
          <img src={item} key={idx} className='h-48'/>
          
          
          )
        })
      }
    </Carousel>

      </div>
    </div>

    <div className="w-full flex p-3 flex-col justify-start items-start">
      <div className="flex  justify-start items-center space-x-1 text-shade-main text-sm">
        <FaRegStar size={15} color="#FF4A55" />
        <span className="text-black mr-3">4.9 </span>
        (4.5k) &lt;category&gt;
      </div>

      <div className="w-full pt-1 flex flex-col justify-start space-y-5">
        <p className="text-sm text-black">
          Amsterdam open boat canal cruise - Live Guiye- from Anne Frank
          Housef
        </p>

        <ul className="flex flex-col space-y-6">
          <li className="flex justify-start space-x-3 items-start">
            <PiTicketFill size={20} />
            <div>
              <p className="text-sm ">&lt;ticket type - variant&gt;</p>
            </div>
          </li>

          <li className="flex justify-start space-x-3 items-start">
            <SlCalender size={20} />
            <div className="flex flex-col items-start justify-start space-y-3">
              <p className="text-sm ">
                &lt;day&gt;,&lt;month&gt; &lt;date&gt;
              </p>
              <p className="text-shade-main text-xs">
                Duration: &lt;duration&gt;
              </p>
            </div>
          </li>

          <li className="flex justify-start space-x-3 items-start">
            <IoTimeSharp size={20} />
            <div className="flex flex-col items-start justify-start space-y-3">
              <p className="text-sm ">&lt;time&gt;</p>
              <p className="text-shade-main text-xs">
                Operating hours: &lt;time&gt; to &lt;time&gt;{" "}
              </p>
            </div>
          </li>

          <li className="flex justify-start space-x-3 items-start">
            <BsFillPeopleFill size={20} />
            <div>
              <p className="text-sm ">5 Guests</p>
            </div>
          </li>
        </ul>

        <div className="w-full h-0.5 border border-dashed"></div>
      </div>
    </div>
    <div className="w-full ">
      <div className="flex  justify-between items-center border-b  p-3 w-full">
        <p className="text-shade-main  text-sm ">View payment summary</p>
        <GoPlus color="" />
      </div>

      <div className="w-full p-3 flex flex-col space-y-2 justify-start ">
        <div className="flex justify-between items-center">
          <p className="text-xl">Total Payable</p>
          <p>$XXX</p>
        </div>

        <div className="text-xs  justify-start flex items-center w-36 p-1 text-[#289764]  space-x-1 rounded-full bg-[#E9F9EE] ">
          <PiPiggyBank /> <span>You saved &lt;price&gt;</span>
        </div>

        <div className="pt-5 flex justify-start space-x-3 items-center">
          <p className="text-xs text-shade-main">
            You will be charged in AED
          </p>
          <IoMdInformationCircleOutline />
        </div>

        <div className="pt-5 ">
          <p className="text-xs text-shade-main">
            By clicking &quot;confirm & pay&quot;, you agree to <span className='text-blue-500 underline'>
                Ticketes general terms and contidions and cancellation policy
            </span>
          </p>
          
        </div>

        <div className="pt-5   cursor-pointer ">
          <div className="text-lg bg-black text-white flex justify-center items-center w-full
            p-2 space-x-2  rounded-lg  ">
            <IoMdLock size={25}/> <span>Confirm & pay</span>
             
          </div>
          
        </div>

      </div>
    </div>
  </div>
              </>
  )
}

export default ViewPage