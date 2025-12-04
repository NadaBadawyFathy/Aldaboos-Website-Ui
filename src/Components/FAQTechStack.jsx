import React, { useState, useRef, useEffect } from "react";
import { FiMinus } from "react-icons/fi";
import { GoArrowUpRight } from "react-icons/go";

const faqs = [
  {
    question: "What services does your digital agency offer?",
    answer:
      "We provide web development, mobile apps, UI/UX design, and digital marketing services.",
  },
  {
    question: "How do I get started with your agency?",
    answer:
      "Reach out to us via email or our contact form, and we'll guide you through the process.",
  },
  {
    question: "How long does a typical project take?",
    answer: "Most projects are completed within 4 to 12 weeks depending on complexity.",
  },
  {
    question: "Do you offer ongoing support and maintenance?",
    answer:
      "Yes, we provide post-launch support and maintenance to keep everything running smoothly.",
  },
];

const FAQTechStack = ({ faqs: propsFaqs = faqs }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);

  useEffect(() => {
    contentRefs.current = contentRefs.current.slice(0, propsFaqs.length);
  }, [propsFaqs]);

  return (
    <section className="flex justify-center py-[40px] md:py-[60px]">
      <div className="flex flex-col gap-6 md:gap-8 w-full px-[15px] md:px-[40px]">
        
        <div className="flex flex-col gap-6 md:gap-10 w-full">
          
          <h2
            className="text-black text-[22px] md:text-[40px] leading-[28px] md:leading-[48px]"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 600,
              textAlign: "left",
            }}
          >
            We Know What’s On Your Mind
          </h2>

          <p
            className="text-gray-600 text-[14px] md:text-[24px] leading-[20px] md:leading-[32px]"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 400,
              textAlign: "left",
              color: "#000000",
            }}
          >
            Understanding your thoughts before you even say them.
          </p>

          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-2"
            style={{ width: "100%" }}
          >
            {propsFaqs.map((faq, idx) => {
              const isOpen = openIndex === idx;

              return (
                <div
                  key={idx}
                  className="flex flex-col p-4 md:p-6 rounded-[15px] md:rounded-[20px] transition-all duration-300"
                  style={{
                    background: "#E9EFFF",
                    color: "#000000",
                  }}
                >
                  {/* Question */}
                  <div
  className="flex justify-between items-center cursor-pointer"
  onClick={() => setOpenIndex(isOpen ? null : idx)}
>
  <p
    className="text-[13px] mr-[5px] md:text-[20px] leading-[18px] md:leading-[28px]"
    style={{
      fontFamily: "Poppins, sans-serif",
      fontWeight: 600,
    }}
  >
    {faq.question}
  </p>

  <div
    className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full transition-all duration-300 flex-shrink-0"
    style={{
      background: isOpen ? "#FFFFFF" : "#343A7D",
      color: isOpen ? "#343A7D" : "#FFFFFF",
      padding: "4px",  // 🔥 يضمن شكل ثابت للأيقونة
    }}
  >
    {isOpen ? <FiMinus size={18} /> : <GoArrowUpRight size={18} />}
  </div>
</div>


                  {/* Answer */}
                  <div
                    ref={(el) => (contentRefs.current[idx] = el)}
                    style={{
                      maxHeight: isOpen
                        ? `${contentRefs.current[idx]?.scrollHeight}px`
                        : "0px",
                      overflow: "hidden",
                      transition: "max-height 0.4s ease",
                    }}
                  >
                    <p
                      className="mt-3 md:mt-4 text-[12px] md:text-[16px] leading-[18px] md:leading-[24px]"
                      style={{
                        fontFamily: "Poppins, sans-serif",
                        fontWeight: 400,
                      }}
                    >
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQTechStack;
