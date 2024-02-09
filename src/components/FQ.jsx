'use client'
import React, { useEffect, useState } from "react";
import robot from "@/images/fq/robot.png";
import accData from '@/config/accordionText.js'
import Accordion from "./Accordion";


function FQ() {
    
    const [accordionData,setAccordionData]=useState([])
    const [currentId,setCurrentId]=useState(0)

    const handleId=(id)=>{
       
        if(id===currentId){
            setCurrentId(0)
        }
        else{

            setCurrentId(id)
        }
    }

    useEffect(()=>{
        setAccordionData(accData)
    },[])
  return (
    <div className="w-full">
      <div className="w-full md:max-w-[95%] flex gap-7 flex-col-reverse  m-auto md:flex-row md:p-10">
        <section className="w-full p-5 flex flex-col justify-start items-start">
          <div className="w-full flex flex-col justify-start  p-3 space-y-3  ">
            <p className="text-2xl">Frequently asked questions</p>
            <p className="text-shade-main text-sm">
              Here are some of our most asked questions
            </p>
          </div>

          <div className="w-full flex justify-between  items-start p-5 bg-[#F9F9FB] rounded-md ">

            <div className="max-w-40">
              <p>Still need help? We&apos;re here for you</p>
              <div className="pt-5   cursor-pointer ">
                <div
                  className="text-md bg-black text-white flex justify-start items-start w-fit  
            pl-4 pr-4 p-2 space-x-1  rounded-md  "
                >
                  <span>Chat with us</span>
                </div>
              </div>
            </div>

             <img src={robot.src} alt="robot" className="w-40"/ >   

          </div>
        </section>

        <section className="w-full p-5">
            
            <div className="w-full flex flex-col space-y-3">

                {accordionData?.map((item,idx)=>{
                    
                     
                    return( 
                        <Accordion
                        key={idx}
                        title={item.title}
                        description={item.description}
                     
                        id={item.id}
                        currentId={currentId}
                        setCurrentId={setCurrentId}
                        handleId={handleId}
                    />

                    )
                })}


                   
            </div>
        </section>
      </div>
      <div className="w-full h-0.5 border mt-10"></div>
    </div>
  );
}

export default FQ;
