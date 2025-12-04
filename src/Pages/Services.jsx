import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import arrow from "../assets/small-stats.svg";
import service1 from "../assets/erp.svg";
import service2 from "../assets/web.svg";
import service3 from "../assets/social.svg";
import service4 from "../assets/branding.svg";
import service5 from "../assets/uiux.svg";
import Testimonials from "../Components/Testimonials";
import FAQTechStack from "../Components/FAQTechStack";

export default function Services() {

  const servicesData = [
    {
      id: 1,
      title: "ERP <br/> Systems",
      desc: "We develop integrated ERP solutions using Odoo.",
      img: service1
    },
    {
      id: 2,
      title: "Website & <br/> Mobile Design",
      desc: "Creating intuitive and engaging experiences.",
      img: service2
    },
    {
      id: 3,
      title: "Social Media <br/> Marketing",
      desc: "Engaging audiences across platforms.",
      img: service3
    },
    {
      id: 4,
      title: "Branding & <br/> Strategy",
      desc: "Defining brand voice, mission, and positioning.",
      img: service4
    },
    {
      id: 5,
      title: "UIUX Design",
      desc: "creating user-centered digital products like websites and apps.",
      img: service5
    },
    {
      id: 6,
      title: "UIUX Design",
      desc: "creating user-centered digital products like websites and apps.",
      img: service5
    },
  ];

  return (
    <div className="max-w-[1440px] mx-auto">

      {/* page wrapper */}
      <div className="mx-auto px-[15px] sm:px-[30px] lg:px-[120px] font-poppins mb-[80px] lg:mb-[120px] lg:mb-[161px]">

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
          Services
        </h2>

        {/* grid section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[15px] sm:gap-[17px]">

          {servicesData.map((box) => (
            <div
              key={box.id}
              className="bg-[#E9EFFF] rounded-[20px] px-[20px] sm:px-[25px] md:px-[32px] py-[30px] sm:py-[40px] md:py-[43px] 
              border border-[#E7EAF7]"
            >
              {/* top section */}
              <div className="flex items-start justify-between gap-2 sm:gap-4">
                <div>
                  <h3 className="min-h-[60px] sm:min-h-[80px] md:min-h-[98px]
                  text-[22px] sm:text-[28px] md:text-[32px] 
                  font-[600] text-[#000]
                  leading-[28px] sm:leading-[32px] md:leading-[34px]
                  indent-[2px]"
                    dangerouslySetInnerHTML={{ __html: box.title }}>
                  </h3>

                  <p className="min-h-[40px] sm:min-h-[55px] md:min-h-[70px]
                  text-[#000] font-[400] text-[14px] sm:text-[16px] mt-[6px] leading-[20px] sm:leading-[24px]">
                    {box.desc}
                  </p>
                </div>

                {/* arrow circle */}
                <div className="w-[60px] h-[60px] sm:w-[75px] sm:h-[75px] md:w-[86px] md:h-[86px]">
                  <img src={arrow} alt="" />
                </div>
              </div>

              {/* image */}
              <div className="mt-[20px] sm:mt-[25px] md:mt-[30px]">
                <img
                  src={box.img}
                  alt={box.title}
                  className="w-full h-[250px] sm:h-[350px] md:h-[500px] object-cover rounded-[16px]"
                />
              </div>

            </div>
          ))}

        </div>

      </div>

      <Testimonials />
      <div className="max-w-[1330px] mx-auto">
      <FAQTechStack />
      </div>
      <Footer />

    </div>
  );
}
