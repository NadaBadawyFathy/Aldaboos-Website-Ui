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
    <div className="max-w-[1440px] font-poppins bg-[#F9F9FE] flex flex-col 
    gap-[px] mx-auto overflow-hidden">

{/* ---------- Landing  Section ---------- */}
 
<section
  className="text-white relative overflow-hidden bg-[#343A7D] 
  px-4 sm:px-10 lg:px-[70px] py-[70px]"
>

  {/* Background Image */}
  <img
    src={FingerprintBG}
    alt="bg"
    className="
      absolute right-0 bottom-[-20px]
      w-[300px] h-[280px] sm:w-[420px] sm:h-[400px] lg:w-[548.5px] lg:h-[500px]
      object-contain
    "
  />

  {/* Content Container */}
  <div
    className="
      flex flex-col lg:flex-row 
      gap-[60px] sm:gap-[120px] lg:gap-[200px] 
      items-start w-full
      px-2 sm:px-6 lg:px-[40px]
    "
  >

    {/* Left Section */}
    <div className="flex flex-col gap-4 sm:gap-6 w-full lg:w-[707px]">
      
      {/* Title 1 */}
      <h1
        className="
          font-extrabold font-poppins
          text-[28px] leading-[36px]
          sm:text-[36px] sm:leading-[46px]
          lg:text-[45px] lg:leading-[54px]
        "
      >
        Elevate Your Brand With Our
      </h1>

      {/* Title 2 Stroke */}
      <h1
        className="
          font-extrabold font-poppins
          text-[36px] leading-[42px]
          sm:text-[46px] sm:leading-[56px]
          lg:text-[55px] lg:leading-[64px]
        "
        style={{
          WebkitTextStroke: "2px white",
          color: "transparent",
        }}
      >
        Expertise Agency
      </h1>

      {/* Paragraph */}
      <p
        className="
          font-poppins text-[#E7E7E7]
          text-[16px] leading-[26px] 
          sm:text-[18px] sm:leading-[28px] 
          lg:text-[24px] lg:leading-[35px] 
          pt-3 sm:pt-5
          opacity-90
          max-w-[544px]
        "
      >
        We craft cutting-edge digital experiences that captivate, engage, and convert.<br />
        Let’s build something extraordinary together.
      </p>

      {/* Buttons */}
      <div className="flex gap-3 sm:gap-4 mt-4">
        <button
          className="
            text-white bg-[#32ADDF] rounded-[26px]
            font-poppins font-semibold
            w-[150px] h-[45px]
            sm:w-[180px] sm:h-[50px]
            lg:w-[201px] lg:h-[50px]
            text-[14px] sm:text-[15px] lg:text-[16px]
          "
        >
          Book A Meeting
        </button>

        <button
          className="
            border border-white text-white bg-transparent rounded-[26px]
            font-poppins font-semibold
            w-[150px] h-[45px]
            sm:w-[180px] sm:h-[50px]
            lg:w-[201px] lg:h-[50px]
            text-[14px] sm:text-[15px] lg:text-[16px]
          "
        >
          Learn More
        </button>
      </div>
    </div>

    {/* Right Phone Image */}
    <div className="z-10 hidden lg:block">
      <img
        src={Phone}
        alt="Phone"
        className="
          w-[200px] h-[380px]
          sm:w-[240px] sm:h-[460px]
          lg:w-[287px] lg:h-[542px]
        "
      />
    </div>
  </div>

  {/* Footer Bottom Contact */}
  <div
    className="
      absolute bottom-[15px] left-[20px] sm:left-[60px] lg:left-[105px]
      flex gap-[15px] sm:gap-[80px] lg:gap-[120px]
      text-[12px] sm:text-[16px] lg:text-[20px]
      opacity-90 font-poppins
    "
  >
    <span>Dabboosmasr@gmail.com</span>
    <span>+201022355169</span>
  </div>

</section>




{/* ---------- Our Services Section ---------- */}
  <div className="mx-auto flex flex-col gap-[30px] max-w-[1646px] px-4 sm:px-6 
  lg:px-0 relative mt-[70px]">

  {/* First Row: Title + First 2 Cards */}
  <div className="flex flex-col lg:flex-row justify-between gap-[24px]">
    {/* Title */}
    <div 
      className="flex flex-col lg:mt-[30px]"
      style={{ width: "100%", maxWidth: "394px", height: "auto", minHeight: "auto" }}
    >
      <Title 
        icon={title} 
        text="Our Services" 
        description={
          <p className="font-poppins font-[500] text-[20px] sm:text-[22px] 
          md:text-[24px] ml-0 sm:ml-[33px]">
            Elevate your brand with innovative design, seamless development, 
            and strategic digital solutions.
          </p>
        }
      />
      <div className="hidden lg:block flex-1 flex items-center justify-center 
      mt-4 sm:mt-6 lg:mt-[0]">
        <img 
          src={OurServicesImg} 
          alt="Our Services" 
          className="absolute sm:max-w-[400px] lg:max-w-[480px]
          lg:h-[136.81px] left-0 lg:left-[-110px] 
          lg:top-[350px]" 
        />
      </div>
    </div>

    {/* First 2 Service Cards */}
    <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-[24px]">
      {serviceCards.slice(0, 2).map((card, idx) => (
        <div 
          key={idx} 
          className="flex flex-col justify-between p-[22px] bg-[#E9EFFF] rounded-[20px] w-full sm:w-[48%] lg:w-[394px] h-auto sm:h-[500px] lg:h-[528px]"
        >
          <div>
            <div className="flex justify-between items-start mb-[15px]">
              <h3 className="font-poppins font-semibold text-[24px] sm:text-[28px] lg:text-[32px] leading-[28px] sm:leading-[32px] lg:leading-[34px]"
                dangerouslySetInnerHTML={{ __html: card.title }} >
              </h3>
              <div className="w-[50px] sm:w-[55px] lg:w-[60px] h-[50px] sm:h-[55px] lg:h-[60px]">
                <img src={arrow} alt="" />
              </div>
            </div>
            <p className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[16px] mb-[15px]">{card.text}</p>
          </div>
          <div className="mt-[20px] sm:mt-[25px] md:mt-[30px]">
                <img
                  src={card.img}
                  className="w-full h-auto sm:h-[300px] md:h-[300px] lg:h-[auto] object-cover rounded-[16px]"
                />
        </div>
        </div>
      ))}
    </div>
  </div>

  {/* Second Row: Remaining Cards */}
  <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-[24px]">
    {serviceCards.slice(2).map((card, idx) => (
      <div 
        key={idx} 
        className="flex flex-col justify-between p-[20px] bg-[#E9EFFF] rounded-[20px] w-full sm:w-[48%] lg:w-[394px] h-auto sm:h-[500px] lg:h-[528px]"
      >
        <div>
          <div className="flex justify-between items-start mb-[15px]">
            <h3 className="font-poppins font-semibold text-[24px] sm:text-[28px] lg:text-[32px] leading-[28px] sm:leading-[32px] lg:leading-[34px]"
              dangerouslySetInnerHTML={{ __html: card.title }}>
            </h3>
            <div className="w-[50px] sm:w-[55px] lg:w-[60px] h-[50px] sm:h-[55px] lg:h-[60px]">
              <img src={arrow} alt="" />
            </div>
          </div>
          <p className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[16px]">{card.text}</p>
        </div>
        {/* <img src={card.img} alt="" className="w-full h-auto 
        sm:h-[180px] md:h-[200px] lg:h-[auto] object-contain" /> */}

        <div className="mt-[20px] sm:mt-[25px] md:mt-[30px]">
                <img
                  src={card.img}
                  className="w-full h-auto sm:h-[300px] md:h-[300px] lg:h-[auto] object-cover rounded-[16px]"
                />
        </div>
      </div>
    ))}
  </div>
</div>



      {/* ---------- How We Work Section ---------- */}


<section className=" max-w-[1646px]">
  <div className="p-[20px] lg:p-[40px]">
      <WeWork />
</div>
</section>


      

      {/* ---------- Stats Section ---------- */}
        <div className=" mx-auto flex flex-col max-w-[1233px] mx-auto px-[20px]
        lg:flex-row items-center relative">
          <div className="flex-1">
            <p className="text-[#000000] font-poppins font-[700] text-[22px] sm:text-[30px] md:text-[40px] 
            lg:text-[35px] leading-[35px] sm:leading-[44px] md:leading-[47px] indent-[2px]
            lg:leading-[47px]">
              <span className="text-[35px] sm:text-[50px] lg:text-[60px]"
                style={{
                  width: "59px",
                  height: "71px",
                  background: "linear-gradient(0deg, #34377A 0%, #354281 11.38%, #375C94 34.52%, #3A88BA 67.25%, #36C2F1 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontWeight: 500,
                }}
              >
                D
              </span>
              aboos Masr is a creative design agency with a top-tier team of talented and dedicated designers committed to delivering exceptional designs.
            </p>
          </div>
          <div className="flex-1 flex justify-start lg:justify-end relative">
            <img src={StatsImge} alt="Our Services" className="max-w-full h-auto top-[20px] lg:top-[55px]" 
            style={{ width: "100%", maxWidth: "350px", position: "relative" ,right:"-130px"}} />
          </div>
        </div>
        <div className="mx-auto px-4 sm:px-6 lg:px-0 mt-[30px] p-8 ">
          <StatsSection/>
        </div>


{/* ---------- Projects Section ---------- */}

  <div className="flex flex-col gap-[40px] mx-auto px-4 sm:px-6 lg:px-0 my-[50px] lg:my-[80px]">

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
        className={`w-full p-[16px] sm:p-[20px] lg:p-[25px] bg-[#E9EFFF] rounded-[20px] 
          flex items-center justify-center overflow-hidden
          ${idx % 2 === 0 ? "lg:order-2" : "lg:order-1"}`}
      >
        <img
          src={project.img}
          alt={project.title}
          className="w-full rounded-[20px]
                h-[240px] sm:h-[260px] lg:h-[380px]
                object-cover"
        />
      </div>

      {/* Content */}
      <div
        className={`flex flex-col justify-between  lg:h-[400px]
          ${idx % 2 === 0 ? "lg:order-1" : "lg:order-2"}`}
      >
        {/* Title + Arrow */}
        <div className="flex items-center justify-between">
          <h3 className="text-[22px] sm:text-[40px] lg:text-[60px]
              font-[600] text-[#000000] leading-[28px] sm:leading-[32px] lg:leading-[34px] font-semibold">
            {project.title}
          </h3>

          <div className="w-[48px] sm:w-[54px] lg:w-[60px]">
            <img src={arrowPro} alt="" />
          </div>
        </div>

        {/* Description */}
        <p className="mt-[20px] sm:mt-[28px] lg:mt-[40px]
              text-[16px] sm:text-[20px] lg:text-[22px]
              leading-[28px] sm:leading-[32px] lg:leading-[35px]
              text-[#000]">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap  gap-[8px] sm:gap-[10px] lg:gap-[13px] mt-3">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="px-[14px] sm:px-[16px] lg:px-[20px]
                  py-[8px] sm:py-[10px] lg:py-[13px]
                  border border-[#E8E8E8]
                  text-[12px] sm:text-[13px] lg:text-[14px]
                  rounded-[25px]"
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
    <div className="flex justify-center mt-[20px] lg:mt-[30px]">
      <button
        className="text-white "
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
          <div className="max-w-[1300px] mx-auto mb-[50px] lg:mb-[130px]">
            <FAQTechStack faqs={faqs} />

            <div className=" pl-[20px] lg:pl-[40px]">

              <h3 className="font-[700] text-[28px] lg:text-[36px]">Tech Stack </h3>
              <p className="font-[400] text-[20px] lg:text-[24px] mb-[35px]">We excel at quality apps development.</p>
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
  className="flex justify-between items-center relative 
  bg-[#000000] py-8 lg:py-16"
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
    className="
      w-full flex flex-col lg:flex-row lg:items-center justify-between gap-[15px]
      p-6 sm:p-10 lg:p-10 
      rounded-2xl relative z-10 text-white
    "
  >
    {/* Left Text */}
    <div className="text-white">
      <h2
        className="
          text-white font-poppins font-semibold
          text-[36px] leading-[42px]     /* mobile */
          sm:text-[50px] sm:leading-[58px] /* tablet */
          lg:text-[64px] lg:leading-[63px] /* desktop */
          tracking-normal
        "
      >
        Let’s Bring
        <br />
        Your Ideas
        <br />
        To Life!
      </h2>

      <p
        className="
          text-white font-poppins
          font-normal mt-6
          text-[16px] leading-[22px] 
          sm:text-[20px] sm:leading-[28px]
          lg:text-[24px] lg:leading-[100%]
          max-w-full sm:max-w-[400px] lg:max-w-[486px]
        "
      >
        Understanding your thoughts before you even say them.
      </p>
    </div>

    {/* Contact Form Component */}
    <div className="relative flex lg:justify-center lg:justify-end w-full">
      {/* Form Wrapper */}
      <div className="relative z-10 w-full lg:w-[503px]">
        <ContactForm />
      </div>
    </div>

  </div>
</section>


{/* ================= End Contact Section ================ */}

    </div>
  );
}
