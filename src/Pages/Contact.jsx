import React from "react";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import title from "../assets/icon-title.svg";
import location from "../assets/location.svg";
import phone from "../assets/phone.svg";
import follow from "../assets/follow.svg";

export default function Contact() {
  return (
    <div className="max-w-[1440px] mx-auto">

      {/* <Header/> */}

    <div className="mx-auto px-[20px] lg:pl-[120px] lg:pr-[175px] font-poppins">
      {/* links */}
      <div className="mt-3 font-metropolis text-[14px] md:text-[16px] leading-[24px] md:leading-[30px] text-[#151515]">
        <span>
          <Link to="/" className="hover:text-blue-500">Home</Link>
        </span>
        <span className="mx-1">/</span>
        <span>
          <Link to="/contact-us" className="hover:text-blue-500">Contact Us</Link>
        </span>
      </div>
      
      {/* TITLE */}
      <h2 className="text-[24px] sm:text-[30px] lg:text-[40px] font-metropolis font-[700]
      text-[#383B3E] mt-[20px] sm:mt-[40px] lg:mt-[70px] mb-[20px] sm:mb-[40px] lg:mb-[70px]
      leading-[32px] sm:leading-[38px] lg:leading-[42px]">
        Contact Us
      </h2>

      <h3 className="text-[22px] sm:text-[40px] lg:text-[54px] xl:text-[64px]
      font-semibold leading-[35px] sm:leading-[50px] lg:leading-[63px]
      text-[#000000] indent-[1px] mb-[18px] sm:mb-[32px] lg:mb-[46px]">
  
          Have Questions?
        <br />

        <span className="flex items-center gap-1">
          Get in Touch!
        <img 
          src={title} 
          alt="decor" 
          className="w-[50px] sm:w-[75px] lg:w-[112px]"
        />
        </span>

      </h3>


      {/* GRID 2 COLUMNS */}
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[153px] mb-[150px] lg:mb-[234px]">

    {/* LEFT SIDE */}
    <div>

      {/* PARAGRAPH INSIDE THE COLUMN */}
      <p className="text-[#000000] text-[18px] sm:text-[22px] lg:text-[24px] 
      font-[400] max-w-[486px] leading-[28px] lg:leading-[35px] mb-[40px] lg:mb-[90px]
      ">
        It is a long established fact that a reader will be distracted by <br />
        the readable content of a page when looking at its layout.
      </p>

      {/* Location */}
      <div className="flex items-start gap-3 pb-[19px] font-metropolis text-[16px]">
        <div className="w-[50px] h-[50px]">
          <img src={location} alt="location" />
        </div>
        <div>
          <h4 className="font-[400] leading-[120%] c text-[#000000] mb-[10px]">Location</h4>
          <p className="font-[500] leading-[120%] text-[#000000]">Results in 3-6 months</p>
        </div>
      </div>

      {/* Phone */}
      <div className="border-t border-[#2C2E9C]/25 py-[19px] flex items-start gap-3 
      font-metropolis text-[16px]
      ">
        <div className="w-[50px] h-[50px]">
          <img src={phone} alt="phone" />
        </div>
        <div>
          <h4 className="font-[400] leading-[120%] text-[#000000] mb-[10px]">Phone Number</h4>
          <p className="font-[500] leading-[120%] text-[#000000]">(+20) 1022355169</p>
        </div>
      </div>

      {/* Follow Us */}
      <div className="border-t border-[#2C2E9C]/25 py-[19px] flex items-start gap-3 
      font-metropolis text-[16px]
      ">
        <div className="w-[50px] h-[50px]">
          <img src={follow} alt="social" />
        </div>
        <div>
          <h4 className="font-[400] leading-[120%] text-[#000000] mb-[10px]">
            Follow Us
          </h4>
          <p className="font-[500] leading-[120%] text-[#000000]">
            Facebook | Instagram | Twitter
          </p>
        </div>
      </div>

    </div>

    {/* RIGHT SIDE — FORM */}
    <div>

      {/* First Name */}
      <div>
        <label className="block text-[16px] text-[#2E2E2E] mb-[11px] 
        font-[700] font-[16px] leading-[24px]
        ">
          First Name
        </label>
        <input
          type="text"
          placeholder="Input your first name in here"
          className="w-full h-[60px] font-dm font-[400] border border-[#2C2E9C80]/50 
          rounded-[20px] px-[22px] text-[16px] outline-none mb-[20px] placeholder:text-[#000000]
          "
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-[16px] text-[#2E2E2E] mb-[11px] 
        font-[700] font-[16px] leading-[24px]
        ">
          Email Address
        </label>
        <input
          type="email"
          placeholder="Input your email address in here"
          className="w-full font-dm font-[400] border border-[#2C2E9C80]/50 
          rounded-[20px] px-[22px] h-[60px] text-[16px] outline-none mb-[20px] placeholder:text-[#000000]
          "
        />
      </div>

      {/* Message */}
      <div>
        <label className="block text-[16px] text-[#2E2E2E] mb-[11px] 
        font-[700] font-[16px] leading-[24px]
        ">
          Messages
        </label>
        <textarea
          placeholder="Write your messages in here"
          className="w-full h-[60px] font-dm font-[400] border border-[#2C2E9C80]/50 
          rounded-[20px] px-[22px] py-[16px] text-[16px] outline-none mb-[50px] lg:mb-[100px] placeholder:text-[#000000]
          "
        ></textarea>
      </div>

      {/* BUTTON */}
      <div className="text-right">
        <button
          className="w-[166.01px] h-[51px] font-dm bg-[#343A7D] 
          text-[#FFFFFF] rounded-[26px] text-[16px] font-[700] leading-[24px] 
          hover:opacity-90 transition-all"
        >
          Let’s Talk
        </button>
      </div>
     </div>
     </div>
    </div>

     <Footer/>
    {/* Footer */}
    </div>
  );
}
