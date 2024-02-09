"use client";
import React from "react";
import { GoArrowLeft } from "react-icons/go";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi2";
import { IoMdLock } from "react-icons/io";
import Logo from '@/images/logo/logo.png'
import Image from "next/image";
function Header() {
  return (
    <header className="w-full   ">
      <nav className="w-full h-20 p-5 flex justify-between items-center ">
        <div className="transition-all duration-500">
          <GoArrowLeft size={20} className="sm:hidden" />
          <Image src={Logo.src} alt="logo" width={100} height={200} className="hidden sm:inline-block"/>
        </div>

        <div className="flex justify-center items-center space-x-1 text- ">
          <IoMdLock color="#60646C" size={23} />
          <p className="text-md text-shade-main font-[400]">Checkout</p>
        </div>

        <div className="flex justify-center space-x-1 items-center text-shade-main ">
          <HiOutlineQuestionMarkCircle size={20} />
          <p className="text-sm hidden sm:block">Help</p>
        </div>

      </nav>

      <div className="w-full grid place-content-center bg-black h-10">
                <p className="text-white text-sm">Holding your tickets for 30:00</p>
      </div>
    </header>
  );
}

export default Header;
