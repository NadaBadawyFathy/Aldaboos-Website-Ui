import React from "react";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import finger from "../assets/fingerprint-about.svg";
import title from "../assets/icon-title.svg";
import blog1 from "../assets/blog1.svg";
import blog2 from "../assets/blog2.svg";        
import blog3 from "../assets/blog3.svg";        
import blog4 from "../assets/blog4.svg"; 
import arrow from "../assets/arrow.svg";       

export default function About() {

    {/* ===== Posts data (JSON) */}
const posts = [
  {
    id: 1,
    img: blog1,
    title: "How to Build a Cryptocurrency Exchange Platform in 2025",
    desc:
      "A comprehensive solution for managing sales teams, giving management an integrated view and real-time control thanks to advanced features and detailed performance reports that support the decision-making process.",
    tags: ["Mobile App Design", "UI/UX", "Odoo"],
  },
  {
    id: 2,
    img: blog2,
    title: "How AI is Transforming Disease Detection and Diagnostics",
    desc:
      "A comprehensive solution for managing sales teams, giving management an integrated view and real-time control thanks to advanced features and detailed performance reports that support the decision-making process.",
    tags: ["Mobile App Design", "UI/UX", "Odoo"],
  },
  {
    id: 3,
    img: blog3,
    title: "Maximizing business efficiency with custom ERP software development",
    desc:
      "ERP systems might be the oldest type of software. Back to 1980-s the manufacturing companies started using ERPs to handle important business issues and avoid manual work. ",
    tags: ["Mobile App Design", "UI/UX", "Odoo"],
  },
  {
    id: 4,
    img: blog4,
    title: "Midan App",
    desc:
      "A comprehensive solution for managing sales teams, giving management an integrated view and real-time control thanks to advanced features and detailed performance reports that support the decision-making process.",
    tags: ["Mobile App Design", "UI/UX", "Odoo"],
  },
];


  return (
   <div className="max-w-[1440px] bg-[#ffffff] mx-auto">

  {/* top image */}
  <div className="absolute top-0 right-0 z-1 w-[180px] md:w-[230px] lg:w-auto">
    <img src={finger} alt="" className="w-full" />
  </div>

  <div className="mx-auto px-4 md:px-16 lg:px-[123px] font-poppins">

    {/* breadcrumbs */}
    <div className="mt-3 text-[14px] md:text-[16px] leading-[24px] md:leading-[30px] text-[#151515]">
      <Link to="/" className="hover:text-blue-500">Home</Link>
      <span className="mx-1">/</span>
      <Link to="/blog" className="hover:text-blue-500">Blog</Link>
    </div>

    {/* MAIN TITLE */}
    <h2 className="
      text-[24px] sm:text-[30px] lg:text-[40px] font-metropolis font-[700]
      text-[#383B3E] mt-[20px] sm:mt-[40px] lg:mt-[70px] mb-[20px] sm:mb-[40px] lg:mb-[70px]
      leading-[32px] sm:leading-[38px] lg:leading-[42px]
    ">
      Blog.
    </h2>

    {/* HEADING */}
    <h3 className="
      text-[22px] sm:text-[40px] lg:text-[54px] xl:text-[64px]
      font-semibold leading-[35px] sm:leading-[50px] lg:leading-[63px]
      text-[#000000] indent-[1px] mb-[18px] sm:mb-[32px] lg:mb-[46px]
    ">
      Blog. We share our <br />
      <span className="flex items-center gap-1">
        expertise.
        <img
          src={title}
          alt="decor"
          className="w-[50px] sm:w-[75px] lg:w-[112px]"
        />
      </span>
    </h3>

    {/* SEARCH */}
    <div className="w-full sm:w-[400px] lg:w-[544px] mb-10">
      <div className="flex items-center gap-[18px] sm:gap-[25px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-[22px] sm:w-[28px] lg:w-[32px] text-[#000]"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          fill="none"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 18a7.5 7.5 0 006.15-3.35z"
          />
        </svg>

        <input
          type="text"
          placeholder="Search"
          className="
            text-[18px] sm:text-[24px] lg:text-[32px]
            font-[500] font-metropolis
            outline-none border-none bg-transparent w-full
            placeholder:text-[#000]
          "
        />
      </div>
      <div className="w-full h-[1px] bg-[#2C2E9C40]/25 mt-[12px] sm:mt-[18px]" />
    </div>

    {/* FILTERS */}
    <div className="flex flex-wrap gap-[10px] sm:gap-[14px] lg:gap-[16px] mb-[50px] lg:mb-[82px]">
      {["All", "Mobile App Design", "UI/UX", "Odoo"].map((item, i) => (
        <button
          key={i}
          className="
            px-[22px] sm:px-[36px] lg:px-[48px]
            py-[8px] sm:py-[10px] lg:py-[11px]
            text-[12px] sm:text-[14px] lg:text-[16px]
            rounded-[25px]
            bg-white border border-[#E0E0E0]
            text-[#383B3E] transition
            hover:bg-[#383B3E] hover:text-white
          "
        >
          {item}
        </button>
      ))}
    </div>

    {/* POSTS GRID */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px]">
      {posts.map((post) => (
        <article key={post.id}>
          {/* image container */}
          <div className="bg-[#EEF2FF] rounded-[20px] p-[16px] sm:p-[20px] lg:p-[25px]">
            <img
              src={post.img}
              alt={post.title}
              className="
                w-full rounded-[20px]
                h-[240px] sm:h-[260px] lg:h-[380px]
                object-cover
              "
            />
          </div>

          {/* title + arrow */}
          <div className="flex justify-between items-center mt-[25px] sm:mt-[35px] lg:mt-[49px]">
            <h3
              className="
              text-[18px] sm:text-[26px] lg:text-[36px]
              font-[600] text-[#000000] leading-[28px] sm:leading-[32px] lg:leading-[34px]
            "
            >
              {post.title}
            </h3>

            <img
              src={arrow}
              className="w-[48px] sm:w-[54px] lg:w-[60px]"
              alt=""
            />
          </div>

          {/* description */}
          <p
            className="
              mt-[20px] sm:mt-[28px] lg:mt-[40px]
              text-[16px] sm:text-[20px] lg:text-[24px]
              leading-[28px] sm:leading-[32px] lg:leading-[35px]
              text-[#000]
            "
          >
            {post.desc}
          </p>

          {/* tags */}
          <div className="flex flex-wrap gap-[8px] sm:gap-[10px] lg:gap-[13px] mt-[20px] sm:mt-[24px] lg:mt-[27px] mb-[25px] sm:mb-[30px] lg:mb-[37px]">
            {post.tags.map((tag, i) => (
              <span
                key={i}
                className="
                  px-[14px] sm:px-[16px] lg:px-[20px]
                  py-[8px] sm:py-[10px] lg:py-[13px]
                  border border-[#E8E8E8]
                  text-[12px] sm:text-[13px] lg:text-[14px]
                  rounded-[25px]
                "
              >
                {tag}
              </span>
            ))}
          </div>
        </article>
      ))}
    </div>
  </div>

  <Footer />
</div>

  );
}
