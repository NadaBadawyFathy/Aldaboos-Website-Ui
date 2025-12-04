import React, { useState } from "react";

// ---------- Images ----------
import SocialImg from "../assets/social.svg";
import BrandingImg from "../assets/branding.svg";
import UIUXImg from "../assets/uiux.svg";
import WebImg from "../assets/web.svg";
import ERPImg from "../assets/erp.svg";
import OurServicesImg from "../assets/image.svg"; 
import StatsImge from "../assets/stateImge.svg"; 
import MidanImg from "../assets/midan.svg";
import MandabaImg from "../assets/mandaba.svg";
import title from "../assets/icon-title.svg";  
import iconTitle from "../assets/icon-title.svg";
import FooterBG from "../assets/footer-bg.jpg";
import FingerprintBG from "../assets/fingerprint-home.svg";
import Phone from "../assets/phone-landing.svg";
import arrow from "../assets/small-stats.svg";
import arrowPro from "../assets/arrow.svg";

// Tech Stack Images
import ReactLogo from "../assets/react-logo.svg";
import LaravelLogo from "../assets/laravel-logo.svg";
import OdooLogo from "../assets/odoo-logo.svg";
import NextLogo from "../assets/nextjs-logo.svg";

// ---------- External Components ----------
import WeWork from "../Components/WeWork";
import StatsSection from "../Components/StatsSection";
import Title from "../Components/Title";
import Testimonials from "../Components/Testimonials";
import FAQTechStack from "../Components/FAQTechStack";
import ContactForm from "../Components/ContactForm"; 

export default function Home() {
  const serviceCards = [
    { title: "Social Media <br/> Marketing", text: "Engaging audiences across platforms.", img: SocialImg },
    { title: "Branding & <br/> Strategy", text: "Defining brand voice, mission, and positioning.", img: BrandingImg },
    { title: "UIUX", text: "Creating user-centered digital products.", img: UIUXImg },
    { title: "Website & <br/> Mobile Design", text: "Creating intuitive and engaging experiences.", img: WebImg },
    { title: "ERP <br/> Systems", text: "We develop integrated ERP solutions using Odoo.", img: ERPImg },
  ];

  const projects = [
    {
      title: "Midan App",
      description:
        "A comprehensive solution for managing sales teams, giving management an integrated view and real-time control thanks to advanced features and detailed performance reports that support the decision-making process.",
      img: MidanImg,
      tags: ["Mobile App Design", "UI/UX", "Odoo"],
    },
    {
      title: "Mandaba App",
      description:
        "A comprehensive solution for managing sales teams, giving management an integrated view and real-time control thanks to advanced features and detailed performance reports that support the decision-making process.",
      img: MandabaImg,
      tags: ["Mobile App Design", "UI/UX", "Odoo"],
    },
  ];

  const cardStyle = { width: "405px", height: "528px", borderRadius: "20px" };
  const imgStyle = { width: "361px", height: "320px", borderRadius: "20px", objectFit: "cover" };
  const textStyle = { fontFamily: "Poppins, sans-serif", fontWeight: 400, fontSize: "16px", lineHeight: "100%", color: "#000" };



    const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What services does your digital agency offer?",
      answer:
        "We specialize in UI/UX design, web development, branding, digital marketing, and software solutions tailored to your business needs.",
    },
    {
      question: "How do I get started with your agency?",
      answer:
        "Simply contact us via email or phone, and we will guide you through the onboarding process and initial consultation.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "Project durations vary based on scope, but we always provide a clear timeline after the initial consultation.",
    },
    {
      question: "Do you offer ongoing support and maintenance?",
      answer:
        "Yes, we provide full support and maintenance packages to ensure your project runs smoothly after launch.",
    },
  ];
  const logos = [ReactLogo, LaravelLogo, OdooLogo, NextLogo];

  return (
    <div className="font-poppins bg-[#F9F9FE] flex flex-col gap-[px] mx-auto overflow-hidden" style={{width:"1440px"}}>

{/* ---------- Landing  Section ---------- */}
 
<section
  className="text-white"
  style={{
    background: "#343A7D",
    position: "relative",
    overflow: "hidden",
    padding: "70px",
  }}
>
  {/* Background Image */}
  <img
    src={FingerprintBG}
    alt="Fingerprint Background"
    style={{
      position: "absolute",
      right: "0",
      bottom: 0,
      width: "548.5px",
      height: "500px",
      objectFit: "contain",
      objectPosition: "bottom right",
      overflow: "hidden",
    }}
  />

  {/* Content Wrapper */}
  <div className="flex flex-col lg:flex-row gap-[200px] items-start w-full px-[40px] pt-2">

    {/* Left Text Section */}
    <div className="flex flex-col gap-6 w-[707px]">
      <h1 className=" w-[707px] font-extrabold text-[45px] leading-[54px] tracking-[0px] indent-[2px] font-poppins">
        Elevate Your Brand With Our
      </h1>

      <h1
        className="font-extrabold text-[55px] leading-[64px] font-poppins w-full"
        style={{
          WebkitTextStroke: "2px white",
          color: "transparent",
          textIndent: "2px",
          letterSpacing: "0px",
        }}
      >
        Expertise Agency
      </h1>

      <p
        style={{
          width: "544px",
          paddingTop: "20px",
          fontFamily: "Poppins, sans-serif",
          fontSize: "24px",
          fontWeight: "400",
          lineHeight: "35px",
          color: "#E7E7E7",
          letterSpacing: "0px",
          opacity: 1,
        }}
      >
        We craft cutting-edge digital experiences that captivate, engage, and convert.<br />
        Let’s build something extraordinary together.
      </p>

      {/* Buttons */}
      <div className="flex gap-4 mt-4">
        <button
          className="text-white"
          style={{
            width: "201px",
            height: "50px",
            fontFamily: "Poppins, sans-serif",
            fontWeight: 600,
            fontSize: "16px",
            lineHeight: "24px",
            letterSpacing: "0px",
            background: "#32ADDF",
            borderRadius: "26px",
          }}
        >
          Book A Meeting
        </button>

        <button
          className="font-semibold rounded-full border border-white text-white"
          style={{
            width: "201px",
            height: "50px",
            fontFamily: "Poppins, sans-serif",
            fontWeight: 600,
            fontSize: "16px",
            lineHeight: "24px",
            letterSpacing: "0px",
            borderRadius: "26px",
            background: "transparent",
          }}
        >
          Learn More
        </button>
      </div>
    </div>

    {/* Right Side Phone Image */}
    <div className="z-10">
      <img
        src={Phone}
        alt="Phone"
        style={{
          width: "287px",
          height: "542px",
        }}
      />
    </div>
  </div>

  {/* Footer Contact Info */}
  <div
    className="absolute bottom-[25px] left-[105px] flex gap-[120px]"
    style={{
      fontFamily: "Poppins, sans-serif",
      fontSize: "20px",
      fontWeight: 400,
      color: "white",
      opacity: 0.9,
    }}
  >
    <span>Dabboosmasr@gmail.com</span>
    <span>+201022355169</span>
  </div>
</section>



{/* ---------- Our Services Section ---------- */}
  <div className="mx-auto flex flex-col gap-[30px] max-w-[1646px] px-4 sm:px-6 lg:px-0 relative mt-[70px]" style={{padding:"40px"}}>

    {/* First Row: Title + First 2 Cards */}
    <div className="flex justify-between gap-[24px] ">
      {/* Title */}
      <div className="flex flex-col p-[22px] " style={{ width: "394px", height: "528px" }}>
        <Title 
          icon={title} 
          text="Our Services" 
          description={
            <p className="font-poppins font-[500] text-[24px] ml-[33px] mt-[15px]">
              Elevate your brand with innovative design, seamless development, and strategic digital solutions.
            </p>
          }

        />
        <div className="flex-1 flex items-center justify-center">
          <img 
            src={OurServicesImg} 
            alt="Our Services" 
            style={{ maxWidth: "480px", height: "136.81px", position: "absolute", left: "-70px" ,top:'400px' }} 
          />
        </div>
      </div>

      {/* First 2 Service Cards */}
      {serviceCards.slice(0, 2).map((card, idx) => (
        <div 
          key={idx} 
          className="flex flex-col justify-between p-[22px]" 
          style={{ ...cardStyle, backgroundColor: "#E9EFFF", width: "394px", height: "528px" }}
        >
          <div>
            <div className="flex justify-between items-start mb-[15px]">
              <h3 style={{ fontFamily: "Poppins, sans-serif",
                 fontWeight: 600, fontSize: "32px", lineHeight: "34px" }}
                 dangerouslySetInnerHTML={{ __html: card.title }} >
                
              </h3>
              <div className="w-[60px] h-[60px]">
                <img src={arrow} alt="" />
              </div>
            </div>
            <p style={textStyle} className="mb-[15px]">{card.text}</p>
          </div>
          <img src={card.img} alt="" style={imgStyle} />
        </div>
      ))}
    </div>

    {/* Second Row: Remaining Cards */}
    <div className="flex justify-center gap-[24px]">
      {serviceCards.slice(2).map((card, idx) => (
        <div 
          key={idx} 
          className="flex flex-col justify-between p-[20px]" 
          style={{ ...cardStyle, backgroundColor: "#E9EFFF", width: "394px", height: "528px" }}
        >
          <div>
            <div className="flex justify-between items-start mb-[15px]">
              <h3 style={{ fontFamily: "Poppins, sans-serif", 
                fontWeight: 600, fontSize: "32px", lineHeight: "34px" }}
                dangerouslySetInnerHTML={{ __html: card.title }}>
               
              </h3>
              <div className="w-[60px] h-[60px]">
                <img src={arrow} alt="" />
              </div>
            </div>
            <p style={textStyle} className="text-[16px]">{card.text}</p>
          </div>
          <img src={card.img} alt="" style={imgStyle} />
        </div>
      ))}
    </div>

  </div>


      {/* ---------- How We Work Section ---------- */}


<section className=" max-w-[1646px]">
  <div style={{padding:"40px"}}>
      <WeWork />
</div>
</section>


      

      {/* ---------- Stats Section ---------- */}
        <div className=" mx-auto flex flex-col relative max-w-[1236px]
        lg:flex-row items-center relative">
          <div className="flex-1">
            <p className="text-[#000000] font-poppins font-[700] text-[32px] sm:text-[36px] md:text-[40px] 
            lg:text-[35px] leading-[40px] sm:leading-[44px] md:leading-[47px] indent-[2px]
            lg:leading-[47px]">
              <span
                style={{
                  width: "59px",
                  height: "71px",
                  background: "linear-gradient(0deg, #34377A 0%, #354281 11.38%, #375C94 34.52%, #3A88BA 67.25%, #36C2F1 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontSize: "60px",
                  fontWeight: 500,
                }}
              >
                D
              </span>
              aboos Masr is a creative design agency with a top-tier team of talented and dedicated designers committed to delivering exceptional designs.
            </p>
          </div>
          <div className="flex-1 flex justify-start lg:justify-end mt-6 lg:mt-0 relative">
            <img src={StatsImge} alt="Our Services" className="max-w-full h-auto" 
            style={{ width: "100%", maxWidth: "350px", position: "relative" ,right:"-100px", top:'55px' }} />
          </div>
        </div>
        <div className="mx-auto px-4 sm:px-6 lg:px-0 mt-[30px] p-8 ">
          <StatsSection/>
        </div>


{/* ---------- Projects Section ---------- */}

  <div className="flex flex-col gap-[40px] mx-auto px-4 sm:px-6 lg:px-0 my-[90px]">

    {/* Title */}
    <div>
      <Title
        icon={iconTitle}
        text="Our Projects"
        description={
          <p
            className="
            text-[#000000] 
            text-[16px] leading-[22px] 
            sm:text-[20px] sm:leading-[28px] 
            lg:text-[24px] lg:leading-[34px] 
            font-medium 
            max-w-[940px] mb-[20px]"
          >
            We are a mobile app development agency that creates innovative digital products that drive your business forward and connect with users on a deep and meaningful level.
          </p>
        }
      />
    </div>

    {/* Projects List */}
    <div className="flex flex-col gap-[60px] max-w-[1230px] mx-auto">
  {projects.map((project, idx) => (
    <div
      key={idx}
      className="grid grid-cols-1 lg:grid-cols-2 items-start gap-[40px]"
    >
      {/* Image */}
      <div
        className={`w-full h-[430px] bg-[#E9EFFF] rounded-[20px] 
          flex items-center justify-center overflow-hidden
          ${idx % 2 === 0 ? "lg:order-2" : "lg:order-1"}`}
      >
        <img
          src={project.img}
          alt={project.title}
          className="w-[450px] h-[380px] object-cover rounded-[20px]"
        />
      </div>

      {/* Content */}
      <div
        className={`flex flex-col justify-between h-[400px]
          ${idx % 2 === 0 ? "lg:order-1" : "lg:order-2"}`}
      >
        {/* Title + Arrow */}
        <div className="flex items-center justify-between">
          <h3 className="text-[32px] lg:text-[60px] font-semibold">
            {project.title}
          </h3>

          <div className="w-[60px] h-[60px]">
            <img src={arrowPro} alt="" />
          </div>
        </div>

        {/* Description */}
        <p className="font-[Poppins] text-[22px] leading-[32px] text-black">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-[13px] mt-3">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="px-[20px] py-[10px] border border-[#E8E8E8] rounded-[25px] text-[14px] text-[#000]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  ))}
</div>


    {/* View All Button */}
    <div className="flex justify-center mt-[30px]">
      <button
        className="text-white"
        style={{
          width: "228px",
          height: "51px",
          backgroundColor: "#343A7D",
          borderRadius: "26px",
          fontFamily: "DM Sans, sans-serif",
          fontWeight: 700,
          fontSize: "16px",
          lineHeight: "24px",
        }}
      >
        View All
      </button>
    </div>
  </div>



{/* ---------- Testimonials Section ---------- */}

<section>
  <Testimonials />
</section>



      {/* ---------- FAQ & Tech Stack Section ---------- */}

          {/* FAQ Component */}
          <div className="max-w-[1300px] mx-auto mb-[130px]">
            <FAQTechStack faqs={faqs} />

            <div className="pl-[40px]">

              <h3 className="font-[700] text-[36px]">Tech Stack </h3>
              <p className="font-[400] text-[24px] mb-[35px]">We excel at quality apps development.</p>
            </div>
            {/* Tech Stack Images */}
          <div className="flex justify-center gap-3 flex-wrap">
            {logos.map((logo, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center"
                style={{
                  width: "296px",
                  height: "191px",
                  borderWidth: "1px",
                  borderStyle: "solid",
                  borderColor: "#2C2E9C45",
                  borderRadius: "20px",
                  position: "relative",
                  marginBottom: "20px",
                }}
              >
                <img
                  src={logo}
                  alt={`Logo ${idx}`}
                  style={{
                    width: "172px",
                    height: "153px",
                    objectFit: "cover",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    borderRadius: "20px",
                  }}
                />
              </div>
            ))}
          </div>
          </div>



{/* ================= Contact Section ================ */}

<section
  className="flex justify-center items-center  relative bg-[#000000]"
>
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
  <div
    className="w-full flex flex-col lg:flex-row items-center justify-between
     gap-10 p-10 rounded-2xl relative z-10 text-white"
  >
    {/* Left Text */}
    <div className="text-white max-w-[500px]">
      <h2
        style={{
          width: "396px",
          height: "189px",
          fontFamily: "Poppins",
          fontWeight: 600,
          fontSize: "64px",
          lineHeight: "63px",
          textIndent: "2px",
          letterSpacing: "0px",
        }}
        className="text-white"
      >
        Let’s Bring
        <br />
        Your Ideas
        <br />
        To Life!
      </h2>

      <p
        style={{
          width: "486px",
          height: "72px",
          fontFamily: "Poppins",
          fontWeight: 400,
          fontSize: "24px",
          lineHeight: "100%",
          letterSpacing: "0px",
          marginTop: "40px",
        }}
        className="text-white"
      >
        Understanding your thoughts before you even say them.
      </p>
    </div>

    {/* Contact Form Component */}
    <div className="relative w-full flex justify-center">
  
  {/* Form Wrapper */}
  <div className="relative z-10 w-[503px]">
    <ContactForm />
  </div>

  {/* Image Under Form */}
  {/* <img
    src={card}
    alt=""
    className="absolute top-[-20%]  max-w-[503px]"
  /> */}

</div>


  </div>
</section>

{/* ================= End Contact Section ================ */}

    </div>
  );
}
