import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.svg";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Products", path: "/products" },
    { name: "Blog", path: "/blog" },
    { name: "About Us", path: "/about" },
  ];

  return (
    <div className="z-10 relative">
      <header className="bg-[#343A7D] w-full flex items-center justify-between pt-[15px] px-4 sm:px-6 md:px-12 lg:px-24 pb-[24px]">
        
        {/* logo + nav */}
        <div className="flex items-center">
          <img
            src={Logo}
            alt="Logo"
            className="object-contain w-[120px] h-[40px] sm:w-[130px] sm:h-[45px] md:w-[150px] md:h-[55px] lg:w-[177px] lg:h-[68px]"
          />

          {/* desktop nav */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-[68px] text-white text-sm lg:text-base ml-[68px]">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `hover:text-[#32ADDF] transition ${
                    isActive ? "border-b-2 border-white pb-1" : ""
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* buttons */}
        <div className="flex items-center">
          <button className="hidden md:block bg-[#32ADDF] text-white rounded-[26px] font-medium w-[130px] h-[40px] lg:w-[164px] lg:h-[48px] hover:bg-[#29A4CC] transition">
            Start Project
          </button>

          <button
            className="text-white text-3xl md:hidden ml-4"
            onClick={() => setOpenMenu(!openMenu)}
          >
            ☰
          </button>
        </div>
      </header>

      {/* mobile menu */}
      {openMenu && (
        <div className="bg-[#343A7D] text-white flex flex-col gap-4 py-4 px-6 md:hidden">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setOpenMenu(false)}
              className={({ isActive }) =>
                `hover:text-[#32ADDF] transition ${
                  isActive ? "border-b border-white pb-1" : ""
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}

          <button className="bg-[#32ADDF] text-white rounded-[26px] font-medium w-[160px] h-[44px] mt-2 hover:bg-[#29A4CC] transition">
            Start Project
          </button>
        </div>
      )}
    </div>
  );
}
