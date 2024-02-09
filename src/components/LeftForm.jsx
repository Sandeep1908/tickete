import React from "react";
import { IoMdInformationCircleOutline } from "react-icons/io";
import globe from "@/images/logo/globe.svg";
import { CiCreditCard1 } from "react-icons/ci";
import visa from "@/images/credit/visa.png";
import master from "@/images/credit/money.png";
import american from "@/images/credit/american.png";
import { PiPiggyBank } from "react-icons/pi";
import { FaApple } from "react-icons/fa";
import { GrGoogle } from "react-icons/gr";

import { IoIosInformationCircle } from "react-icons/io";
import { IoMdLock } from "react-icons/io";
function LeftForm() {
  return (
    <div className="w-full  ">
      <div className=" w-full flex flex-col justify-start space-y-10">
        <p className="text-7xl font-serif hidden md:block"> Confirm & Pay </p>

        <div className="w-full flex flex-col justify-start p-3 space-y-5 bg-[#FCFCFD] border  rounded-lg">
          <div className="flex justify-between items-center ">
            <p className="text-sm">Free Cancellation</p>
            <IoMdInformationCircleOutline />
          </div>
          <p className="text-shade-main text-xs">
            Ticket can be cancelled by 13th December, 2022
          </p>
        </div>
      </div>

      <div className=" w-full flex pt-20 flex-col justify-start space-y-10">
        <div className="w-full flex flex-col justify-start p-3 space-y-5  ">
          <p className="text-2xl">Enter your details</p>
          <p className="text-shade-main text-sm">
            We&apos;ll be sending your tickets to the detials below. Booking for
            a friend? Add their details.
          </p>
        </div>

        <div className="flex flex-col space-y-10">
          <form class="group relative">
            <input
              class="focus:ring-2  focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-lg py-3 pl-10 ring-1 ring-slate-200 shadow-sm"
              type="text"
              aria-label="Full Name"
              placeholder="Full Name"
            />
          </form>

          <div className="grid  md:grid-cols-2 gap-5">
            <form class="group relative">
              <img
                src={globe.src}
                className="w-5 h-5 absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none "
              />
              <input
                class="focus:ring-2   focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm"
                type="text"
                aria-label="Country"
                placeholder="Country"
              />
            </form>

            <form class="group relative">
              <input
                class="focus:ring-2   focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm"
                type="text"
                aria-label="Phone number "
                placeholder="Phone Number"
              />
            </form>
          </div>

          <div className="grid  md:grid-cols-2 gap-5">
            <form class="group relative">
              <input
                class="focus:ring-2   focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-3 pl-10 ring-1 ring-slate-200 shadow-sm"
                type="text"
                aria-label="Email"
                placeholder="Email"
              />
            </form>

            <form class="group relative">
              <input
                class="focus:ring-2   focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-3 pl-10 ring-1 ring-slate-200 shadow-sm"
                type="text"
                aria-label="Confirm email "
                placeholder="Confirm email"
              />
            </form>
          </div>
        </div>
      </div>

      <div className="w-full h-0.5 border mt-10"></div>

      <div className=" w-full flex pt-20 flex-col justify-start space-y-10">
        <div className="w-full flex flex-col justify-start p-3 space-y-5  ">
          <p className="text-2xl">Additional Information</p>
          <p className="text-shade-main text-sm">
            We need a few more details to complete your reservation.
          </p>
        </div>

        <div className="flex flex-col space-y-10">
          <div className="grid  md:grid-cols-2 gap-5">
            <form class="group relative">
              <input
                class="focus:ring-2   focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-3 pl-10 ring-1 ring-slate-200 shadow-sm"
                type="text"
                aria-label="Input Label"
                placeholder="Input Label"
              />
            </form>

            <form class="group relative">
              <input
                class="focus:ring-2   focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-3 pl-10 ring-1 ring-slate-200 shadow-sm"
                type="text"
                aria-label="select"
                placeholder="select"
              />
            </form>
          </div>
          <form class="group relative">
            <input
              class="focus:ring-2  focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-lg py-3 pl-10 ring-1 ring-slate-200 shadow-sm"
              type="text"
              aria-label="MultiSelect"
              placeholder="MultiSelect"
            />
          </form>
        </div>
      </div>

      <div className="w-full h-0.5 border mt-10"></div>

      <div className=" w-full flex pt-20 flex-col justify-start space-y-10">
        <div className="w-full flex flex-col justify-start p-3 space-y-5  ">
          <p className="text-2xl">Select your mode of payment</p>
          <p className="text-shade-main text-sm">
            Payments with Tickete are secure and encrypted
          </p>
        </div>

        <div className="flex flex-col space-y-10 p-5 border border-black rounded-lg">
          <div className="flex  flex-col justify-start space-y-5">
            <div className="flex justify-between ">
              <div className="flex justify-center items-center space-x-2">
                <CiCreditCard1 size={20} />
                <p className="text-md">Credit & debit card</p>
              </div>

              <div className="w-5 h-5 rounded-full bg-black flex justify-center items-center">
                <div className="w-1/2 h-1/2 bg-white rounded-full"></div>
              </div>
            </div>

            <div className="flex justify-start items-start space-x-5">
              <img
                src={visa.src}
                alt="credit card"
                className="w-8 h-5 border object-contain "
              />
              <img
                src={master.src}
                alt="credit card"
                className="w-8 h-5 border object-contain"
              />

              <img
                src={american.src}
                alt="credit card"
                className="w-8 h-5 border object-contain"
              />
            </div>

            <div className="grid  md:grid-cols-2 gap-5 pt-10">
              <form class="group relative">
                <input
                  class="focus:ring-2   focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-3 pl-10 ring-1 ring-slate-200 shadow-sm"
                  type="text"
                  aria-label="Input Label"
                  placeholder="Input Label"
                />
              </form>

              <form class="group relative">
                <input
                  class="focus:ring-2   focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-3 pl-10 ring-1 ring-slate-200 shadow-sm"
                  type="text"
                  aria-label="select"
                  placeholder="select"
                />
              </form>
            </div>

            <div className="grid  md:grid-cols-2 gap-5">
              <form class="group relative">
                <input
                  class="focus:ring-2   focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-3 pl-10 ring-1 ring-slate-200 shadow-sm"
                  type="text"
                  aria-label="Input Label"
                  placeholder="Input Label"
                />
              </form>

              <form class="group relative">
                <input
                  class="focus:ring-2   focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-3 pl-10 ring-1 ring-slate-200 shadow-sm"
                  type="text"
                  aria-label="select"
                  placeholder="select"
                />
              </form>
            </div>

            <div className="w-full p-3 flex flex-col space-y-2 justify-start ">
              <div className="flex justify-between items-center flex-wrap">
                <p className="text-xl">Total Payable: $XXX</p>
                <div className="text-xs  justify-start flex items-center w-36 p-1 text-white  space-x-1 rounded-full bg-[#289764] ">
                  <PiPiggyBank /> <span>You saved &lt;price&gt;</span>
                </div>
              </div>

              <div className=" flex justify-start space-x-3 items-center">
                <p className="text-xs text-shade-main">
                  You will be charged in AED
                </p>
                <IoMdInformationCircleOutline />
              </div>

              <div className="pt-5 ">
                <p className="text-xs text-shade-main">
                  By clicking &quot;confirm & pay&quot;, you agree to{" "}
                  <span className="text-blue-500 underline">
                    Ticketes general terms and contidions and cancellation
                    policy
                  </span>
                </p>
              </div>

              <div className="pt-5   cursor-pointer ">
                <div
                  className="text-md bg-black text-white flex justify-start items-start w-fit  
            pl-5 pr-5 p-2 space-x-1  rounded-md  "
                >
                  <IoMdLock size={25} /> <span>Confirm & pay</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col justify-start p-5 space-y-5 bg-[#FCFCFD] border  rounded-lg">
          <div className="flex justify-between items-center bg-[#F9F9FB] ">
            <div className="flex justify-center items-center space-x-6">
              <p className="text-sm flex justify-center items-center bg-[#E4E4E8] p-2 rounded-md">
                {" "}
                <FaApple size={15} color="#8B8D98" />{" "}
                <span className="text-xs text-shade-main">Pay </span>
              </p>
              <p className="text-shade-main text-lg font-mono">Coming Soon</p>
            </div>

            <div className="w-5 h-5 rounded-full bg-[#E4E4E9] "></div>
          </div>
        </div>

        <div className="w-full flex flex-col justify-start p-5 space-y-5 bg-[#FCFCFD] border  rounded-lg">
          <div className="flex justify-between items-center bg-[#F9F9FB] ">
            <div className="flex justify-center items-center space-x-6">
              <p className="text-sm flex justify-center items-center bg-[#E4E4E8] p-2 rounded-md">
                {" "}
                <GrGoogle size={10} color="#8B8D98" />{" "}
                <span className="text-xs text-shade-main">Pay </span>
              </p>
              <p className="text-shade-main text-lg font-mono">Coming Soon</p>
            </div>

            <div className="w-5 h-5 rounded-full bg-[#E4E4E9]    "></div>
          </div>
        </div>

        <div className="w-full h-0.5 border mt-10"></div>
      </div>

      <div className=" mt-10 flex flex-col justify-start space-y-5">
        <h1 className="text-xl">Total Payable : $XXX</h1>

        <div className="w-full  flex flex-col justify-start p-5 space-y-5   border  rounded-lg">
          <div className="flex justify-start flex-col items-start   ">
            <div className="flex justify-center items-center ">
              <p className="text-sm flex justify-center items-center   p-2 rounded-md">
                {" "}
                <IoIosInformationCircle />
              </p>
              <p className=" text-sm ">You will be charged in AED.</p>
            </div>

            <p className="text-shade-main text-xs pl-5">
              The price shown here is in US Dollar (USD) as per the current
              conversation rate. You will be charged in United Arab Emirates
              Dhiram (AED).
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-0.5 border mt-10"></div>
    </div>
  );
}

export default LeftForm;
