import React from "react";
import mainImage from "../assets/big-stats.svg";
import smallImage from "../assets/small-stats.svg";

export default function StatsSection() {
  const stats = [
    { number: "+15", title: "Years of experience" },
    { number: "350+", title: "Dedicated Team" },
    { number: "500+", title: "Satisfied Clients" },
    { number: "+200", title: "Project Delivered" },
  ];

  return (
    <div className="max-w-[1236px] bg-[#E9EFFF] rounded-[20px] mx-auto font-poppins">

      {/* TOP SECTION */}
      <div
        className="
          mx-auto 
          grid 
          grid-cols-1
          sm:grid-cols-2 
          md:grid-cols-4 
          gap-[28px] 
          sm:gap-[45px] 
          md:gap-[65px] 

          text-center 
          pt-[30px] 
          sm:pt-[60px] 
          md:pt-[70px] 
          mb-[18px] 
          md:mb-[35px] 
          px-5 sm:px-10 md:px-[107px]
        "
      >
        {stats.map((item, index) => (
          <div key={index} className="max-w-[235px] mx-auto">
            <h2
              className="
                text-[34px] 
                sm:text-[44px] 
                md:text-[64px] 
                font-semibold 
                leading-none
                text-[#000000] 
                mb-[14px] sm:mb-[20px] md:mb-[32px]
              "
            >
              {item.number}
            </h2>
            <p className="text-[14px] sm:text-[15px] md:text-[16px] text-[#000000]">
              {item.title}
            </p>
          </div>
        ))}
      </div>

      {/* IMAGE SECTION */}
      <div className="mx-auto px-4 sm:px-[40px] md:px-[67px] pb-[30px] sm:pb-[55px] md:pb-[63.4px]">
        <div className="relative w-full h-auto flex justify-center">

          {/* الصورة الكبيرة */}
          <img
            src={mainImage}
            alt="Main section visual"
            className="
              sm:w-full
              rounded-[15px]
              lg:rounded-[20px]
            "
          />

          {/* الأيقونة */}
          <img
            src={smallImage}
            alt="Icon"
            className="
              absolute top-[50%] left-[50%] 
              -translate-x-1/2 -translate-y-1/2 
              w-[45px] h-[45px]
              sm:w-[80px] sm:h-[80px] 
              md:w-[100px] md:h-[100px]
            "
          />
        </div>
      </div>

    </div>
  );
}
