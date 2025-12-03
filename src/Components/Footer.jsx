import React from "react";
import FooterBG from "../assets/footer-bg.jpg";
import Logo from "../assets/logo.svg";

export default function Footer() {
  return (
    <footer className="w-full bg-[#000000] text-white relative">

      {/* Background Overlay */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `url(${FooterBG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Content Wrapper */}
      <div className="relative max-w-[1200px] mx-auto flex flex-col pb-5 px-4">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left">

          {/* Logo + Description */}
          <div className="flex flex-col md:items-start mt-[80px] md:mt-[140px]">
            <img
              src={Logo}
              alt="Logo"
              className="w-[150px] md:w-[169px] h-[60px] md:h-[74px] object-contain mb-4 mx-auto md:mx-0"
            />

            <p
              className="mx-auto md:mx-0"
              style={{
                maxWidth: "433px",
                fontWeight: 400,
                fontSize: "16px",
                fontFamily: "DM Sans",
                lineHeight: "27px",
              }}
            >
              A leading company in providing integrated digital solutions, aiming 
              to empower entrepreneurs in the Arab world to effectively digitally 
              transform their businesses by offering a range of specialized technical 
              services and solutions.
            </p>
          </div>

          {/* Links Section */}
          <div
            className="flex flex-col items-center md:items-start text-sm mt-10 md:mt-[236px] w-full md:w-auto"
            style={{ gap: "24px" }}
          >
            {/* First Row */}
            <div className="flex flex-wrap gap-4 md:gap-6 justify-center md:justify-start w-full">
              {["Careers", "About Us", "Services", "Portfolio", "FAQs"].map((item) => (
                <p key={item} className="hover:text-[#32ADDF] cursor-pointer px-2 py-1">
                  {item}
                </p>
              ))}
            </div>

            {/* Second Row */}
            <div className="flex flex-wrap gap-4 md:gap-6 justify-center md:justify-start w-full">
              {[
                "Contact",
                "Partners",
                "support@Dabboosmasr.com",
                "+201022355169",
              ].map((item) => (
                <p key={item} className="hover:text-[#32ADDF] cursor-pointer px-2 py-1">
                  {item}
                </p>
              ))}
            </div>
          </div>

        </div>

         {/* Divider * */}
        <div className="border-t border-white mt-10 mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-white text-sm text-center">
            Copyright AldaboosMasr @2026
          </p>

          <div className="flex items-center gap-3">
            {["F", "Be", "T"].map((icon) => (
              <div
                key={icon}
                className="
                  w-[28px] h-[28px] rounded-full
                  flex items-center justify-center
                  bg-[white] text-[#000000] font-[700] font-[16px] leading-[120%] tracking-[0.5%]
                "
              >
                {icon}
              </div>
            ))}
          </div>

        </div>

      </div>
    </footer>
  );
}