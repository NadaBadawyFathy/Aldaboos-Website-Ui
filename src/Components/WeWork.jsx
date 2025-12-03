import React from "react";
import title from "../assets/icon-title.svg";
import research from "../assets/research.svg";
import concept from "../assets/concept.svg";
import design from "../assets/design.svg";
import development from "../assets/development.svg";

export default function WeWork() {
  const cards = [
    {
      number: "01",
      icon: research,
      title: "Research",
      description:
        "Understanding user needs, market trends, & business goals to build a strong foundation.",
    },
    {
      number: "02",
      icon: concept,
      title: "Concept",
      description:
        "Defining the vision through ideation, wireframes, and strategy alignment.",
    },
    {
      number: "03",
      icon: design,
      title: "Design",
      description:
        "Crafting intuitive, aesthetically pleasing, and user-centered experiences.",
    },
    {
      number: "04",
      icon: development,
      title: "Development",
      description:
        "Bringing designs to life with seamless functionality and performance.",
    },
  ];

  return (
    <div className="max-w-[1233px] mx-auto py-[50px] lg:py-[120px] 
    font-poppins">

      {/* Title */}
      <h2 className="flex items-center gap-[12.36px] text-[#000000] 
        font-poppins font-extrabold 
        text-[26px] leading-[20px] 
        sm:text-[32px] sm:leading-[24px] 
        lg:text-[40px] lg:leading-[27px] 
        mb-[24px] sm:mb-[28px] lg:mb-[29.74px]"
      >
        <span>
          <img
            src={title}
            alt=""
            className="w-[60px] h-[22px] sm:w-[70px] sm:h-[26px] lg:w-[78.64px] lg:h-[28.26px]"
          />
        </span>
        How We Work
      </h2>

      {/* Description */}
      <p
        className="text-[#000000] 
        text-[16px] leading-[22px] 
        sm:text-[20px] sm:leading-[28px] 
        lg:text-[24px] lg:leading-[34px] 
        font-medium 
        max-w-[1053px] mb-[32px] sm:mb-[40px] lg:mb-[48px]"
      >
        We combine creativity, strategy, and technology to deliver exceptional
        digital experiences—tailored to your brand’s needs.
      </p>

      {/* Cards Grid */}
      <div className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-4
        gap-[15px]
        mt-10 sm:mt-12
      ">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-[#E9EFFF] rounded-[20px] p-[18px] flex flex-col"
          >
            {/* Number */}
            <h1 className="
              text-[90px] leading-none 
              sm:text-[120px] 
              lg:text-[150px] 
              font-semibold text-white"
            >
              {card.number}
            </h1>

            {/* Icon */}
            <img
              src={card.icon}
              alt={card.title}
              className="
                mt-[30px] 
                w-[80px] h-[80px] 
                sm:w-[100px] sm:h-[100px] sm:mt-[40px]
                lg:w-[120px] lg:h-[120px] lg:mt-[50px]
              "
            />

            {/* Card Title */}
            <h3 className="
              text-[22px] leading-[26px] pt-[10px] pb-[8px] font-semibold text-[#000] 
              sm:text-[26px] sm:leading-[30px] sm:pt-[12px] sm:pb-[12px]
              lg:text-[32px] lg:leading-[34px] lg:pt-[16px] lg:pb-[16px]
            ">
              {card.title}
            </h3>

            {/* Card Description */}
            <p className="
              text-[14px] leading-[22px] 
              sm:text-[16px] sm:leading-[26px] 
              lg:text-[18px] lg:leading-[34px] 
              font-regular text-[#000]
            ">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
