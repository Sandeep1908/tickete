import React from 'react'
import { GoPlus } from "react-icons/go";

function Accordion({title,isOpen,description,id,currentId,handleId}) {
  return (
    <div className=" w-full h-15 flex justify-start items-start space-x-4 bg-[#FFFFFF] border rounded-lg p-3 transition-all duration-500" onClick={()=>handleId(id)}>
    <div className="w-10">
    <GoPlus color="#60646C" size={25}  className={`${currentId===id?'rotate-45':''} transition-all duration-300`}/> 
    </div>
       <div className=" max-w-96 flex flex-col space-y-3 items-start justify-start ">
            <p className="text-md">{title}</p>
            {currentId===id &&
             <p className={`text-shade-main text-justify text-xs tracking-wide ${currentId===id?'block':'hidden'} `}>{description}</p>
            }
           
       </div>

    </div>
  )
}

export default Accordion