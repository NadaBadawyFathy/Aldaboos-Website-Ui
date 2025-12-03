import React from "react";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import finger from "../assets/fingerprint-about.svg";
import title from "../assets/icon-title.svg";
import WeWork from "../Components/WeWork";
import StatsSection from "../Components/StatsSection";

export default function About() {
  return (
    <div className="max-w-[1440px] mx-auto">

      {/* <Header/> */}

      <div className="absolute top-0 right-0 z-1 w-[180px] md:w-[230px] lg:w-auto">
          <img src={finger} alt="" className="w-full" />
        </div>
      
    <div className="mx-auto px-[20px] lg:pl-[120px] lg:pr-[175px] font-poppins">
      {/* links */}
      <div className="mt-3 font-metropolis text-[14px] md:text-[16px] leading-[24px] md:leading-[30px] text-[#151515]">
        <span>
          <Link to="/" className="hover:text-blue-500">Home</Link>
        </span>
        <span className="mx-1">/</span>
        <span>
          <Link to="/about" className="hover:text-blue-500">About Us</Link>
        </span>
      </div>
      
      {/* TITLE */}
      <h2 className="text-[24px] sm:text-[30px] lg:text-[40px] font-metropolis font-[700]
      text-[#383B3E] mt-[20px] sm:mt-[40px] lg:mt-[70px] mb-[20px] sm:mb-[40px] lg:mb-[70px]
      leading-[32px] sm:leading-[38px] lg:leading-[42px]">
        About Us
      </h2>

      <h3 className="text-[22px] sm:text-[40px] lg:text-[54px] xl:text-[64px] w-[290px] sm:w-[600px] lg:w-[800px]
      font-semibold leading-[35px] sm:leading-[50px] lg:leading-[63px]
      text-[#000000] indent-[1px] mb-[18px] sm:mb-[32px] lg:mb-[46px]">
        
                Tech Expertise with 
              <br />
      
              <span className="flex items-center gap-1">
                Personal Connection
              <img 
                src={title} 
                alt="decor" 
                className="w-[50px] sm:w-[75px] lg:w-[112px]"
              />
              </span>
      
            </h3>

            <p className="text-[#000000] text-[16px] sm:text-[22px] lg:text-[24px] 
            font-[400] max-w-[873px] leading-[35px] mb-[50px] lg:mb-[103px]
            ">
              From innovation to digital product transformation, we work closely with our clients to 
              create cutting-edge solutions across all platforms and brand messaging components.
            </p>

            <StatsSection/>
            <WeWork/>
    
    </div>

     <Footer/>
    {/* Footer */}
    </div>
  );
}
