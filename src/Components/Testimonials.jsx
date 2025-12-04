import React from "react";
import OurServicesImg from "../assets/service.svg";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import tes1 from "../assets/test1.svg";
import test2 from "../assets/test2.svg";

const Testimonials = () => {
  return (
    <section
      className="
        relative font-poppins 
        bg-gradient-to-r from-[#343A7D] to-[#32ADDF] 
        py-[40px] pb-[100px] lg:pb-[150px]
      "
    >
      {/* Image on top-right */}
      <div className="absolute top-[20px] right-[0px] sm:top-[50px] sm:right-[-7px] w-[120px] sm:w-auto">
        <img src={OurServicesImg} alt="Our Services" />
      </div>

      {/* Header */}
      <div className="w-full px-[20px] sm:pl-[70px] lg:pl-[97px] lg:pr-[109px] pt-[30px]">
        <h2 className="text-white font-[600] text-[26px] sm:text-[40px] leading-[30px] sm:leading-[34px] indent-[2px] mb-[12px] sm:mb-[24px] text-start">
          Hear From Our Clients
        </h2>
        <p className="text-white mb-6 sm:mb-10 font-[400] text-[16px] sm:text-[24px] text-start max-w-[500px]">
          Trusted by businesses. Driven by results.
        </p>
      </div>

      {/* Cards */}
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 sm:px-6 lg:px-0 mt-[20px] max-w-[1300px]">
          {[
            {
              name: "SAMA Elshaht",
              img: tes1,
              company: "General Trading",
              review:
                '"From concept to final delivery, they handled everything seamlessly. Outstanding work and great communication!"',
            },
            {
              name: "Deem Elganoob",
              img: test2,
              company: "Recruitment & Foreign Labor Services",
              review:
                '"They truly understand branding and user experience. Our new website perfectly represents our company’s vision!"',
            },
          ].map((client, idx) => (
            <div
              key={idx}
              className="
                bg-white rounded-[20px] p-6 sm:p-8 shadow-md 
                max-w-[604px] w-full flex flex-col justify-between
              "
            >
              {/* Quote */}
              <p className="font-[600] text-[60px] sm:text-[120px] text-[#32ADDF] 
              h-[20px] sm:h-[40px] indent-[2px] translate-y-[-55px] sm:translate-y-[-110px]">
                ,,
              </p>

              {/* Review */}
              <p className="
                font-poppins font-[600] 
                text-[14px] sm:text-[15px] lg:text-[32px] 
                leading-[22px] sm:leading-[34px] lg:leading-[45px] py-[10px] sm:py-[20px]
              ">
                {client.review}
              </p>

              {/* Client info */}
              <div className="flex items-center">
                <div className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] lg:w-[97px] lg:h-[97px] rounded-full bg-gray-300 mr-4 flex items-center justify-center">
                  <img src={client.img} alt="" className="rounded-full" />
                </div>

                <div>
                  <p className="font-poppins font-[600] text-[18px] sm:text-[20px] lg:text-[24px]">
                    {client.name}
                  </p>
                  <p className="font-poppins font-[400] text-[12px] sm:text-[14px] lg:text-[16px] text-black w-[140px] sm:w-[195px]">
                    {client.company}
                  </p>
                </div>

                {/* Rating */}
                <div className="ml-auto flex items-center">
                  <div
                    className="flex items-center justify-center rounded-full w-[40px] h-[40px] sm:w-[48px] sm:h-[48px] lg:w-[54px] lg:h-[54px] bg-[#F0900033] mr-4 sm:mr-5"
                  >
                    <span className="text-[#F09000] font-extrabold text-[18px] sm:text-[22px] lg:text-[25px]">
                      ★
                    </span>
                  </div>
                  <span className="font-metropolis font-[800] text-[16px] sm:text-[18px] lg:text-[20px] leading-[28px] sm:leading-[34px]">
                    4.8
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Arrows */}
      <div className="absolute right-[20px] lg:right-[100px] mt-[20px]  flex space-x-3 sm:space-x-5">
        <button className="w-[45px] h-[45px] sm:w-[60px] sm:h-[60px] rounded-full bg-white flex items-center justify-center shadow-md">
          <FiArrowLeft size={22} color="#343A7D" />
        </button>
        <button className="w-[45px] h-[45px] sm:w-[60px] sm:h-[60px] rounded-full bg-white flex items-center justify-center shadow-md">
          <FiArrowRight size={22} color="#343A7D" />
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
