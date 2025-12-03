import React from "react";
import { Link } from "react-router-dom";
import cover from "../assets/contact3.svg";     

export default function Products() {

  return (
    <div className="max-w-[1440px] bg-[#ffffff] mx-auto">

      <div className="mx-auto px-[15px] sm:px-[40px] lg:px-[123px] font-poppins">
        
        {/* links */}
        <div className="mt-3 font-metropolis text-[14px] md:text-[16px] leading-[24px] md:leading-[30px] text-[#151515]]">
          <span>
            <Link to="/" className="hover:text-blue-500">Home</Link>
          </span>
          <span className="mx-1">/</span>
          <span>
            <Link to="/" className="hover:text-blue-500 font-[600]">How AI is Transforming Disease Detection and Diagnostics</Link>
          </span>
        </div>
        
        {/* TITLE */}
        <h2 className="
        text-[22px] sm:text-[30px] lg:text-[40px]
        font-metropolis text-[#2C2E9C]
        mt-[20px] lg:mt-[30px]
        font-[700] leading-[28px] sm:leading-[42px]
        mb-[15px] sm:mb-[20px]
        ">
          ERP
        </h2>

        <h3 className="
        text-[20px] sm:text-[32px] lg:text-[48px]
        max-w-[1184px]
        font-semibold
        leading-[30px] sm:leading-[45px] lg:leading-[63px]
        text-[#000000]
        mb-[18px] sm:mb-[21px]
        ">
          Maximizing business efficiency with custom ERP software development: 
          a 2024-2025 outlook and real-life case study
        </h3>

        <p className="text-[14px] sm:text-[20px] lg:text-[24px] mb-[40px] sm:mb-[72px]">
          2024-03-13 • 18 min read
        </p>

        <img src={cover} alt="" className="mb-[40px] sm:mb-[68px] w-full" />

        <div className="text-[16px] sm:text-[20px] lg:text-[24px] 
        font-[400] mb-[60px] sm:mb-[146px] leading-[26px] sm:leading-[34px]">
          
          <p className="mb-[20px]">
            ERP systems might be the oldest type of software. Back to 1980-s 
            the manufacturing companies started using ERPs to handle important
            business issues and avoid manual work. Nowadays the technology 
            hasn't lost its efficiency and helps to automate key business 
            operations like customer and finance management, HR operations, 
            inventory management, and many other tasks.
          </p>

          <p>
            In this article, we'll discuss why developing custom ERP 
            software is an up-to-date idea in 2024 and share our case of 
            automating business processes with the help of a custom ERP system.
          </p>
        </div>

        <div>
          <h3 className="
          text-[20px] sm:text-[28px] lg:text-[36px]
          font-[600]
          leading-[28px] sm:leading-[34px]
          mb-[25px] sm:mb-[45px]
          ">
            What is enterprise resource planning software?
          </h3>

          <div className="text-[16px] sm:text-[20px] lg:text-[24px] 
          leading-[26px] sm:leading-[34px] font-[400]">
            
            <p className="mb-[20px]">
              Enterprise resource planning software or ERP is a set 
              of applications developed to centralize and streamline 
              business processes across an organization. It serves as a 
              hub for managing essential internal entities such as accounting,
              inventory, HR, supply chain, manufacturing, logistics, 
              procurement, and all other entities essential for the effective 
              functioning of your business. ERPs enable all departments in an 
              organization to share data effectively and make data-driven 
              decisions.
            </p>

            <p className="mb-[20px]">
              ERP software is designed to streamline and enhance your 
              internal operations, rather than directly boost sales figures.
            </p>

            <p className="mb-[20px]">
              ERPs make communication between employees more effective 
              by providing a single source of up-to-date information that 
              can be used by all the departments. For instance, 
              the inventory management system may contain data about the 
              number of goods stored by the company, while managers from the 
              sales department can check this info in the ERP system to find 
              out how much they can offer to the customers.
            </p>

          </div>
        </div>

      </div>

    </div>
  );
}
