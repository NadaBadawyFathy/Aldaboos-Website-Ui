import React, { useState, useRef, useEffect } from "react";
import { FiMinus } from "react-icons/fi";
import { GoArrowUpRight } from "react-icons/go";

const faqs = [
  {
    question: "What services does your digital agency offer?",
    answer: "We provide web development, mobile apps, UI/UX design, and digital marketing services."
  },
  {
    question: "How do I get started with your agency?",
    answer: "Reach out to us via email or our contact form, and we'll guide you through the process."
  },
  {
    question: "How long does a typical project take?",
    answer: "Most projects are completed within 4 to 12 weeks depending on complexity."
  },
  {
    question: "Do you offer ongoing support and maintenance?",
    answer: "Yes, we provide post-launch support and maintenance to keep everything running smoothly."
  }
];

const FAQTechStack = ({ faqs: propsFaqs = faqs }) => { // <-- استخدمت المتغير الافتراضي

  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);

  useEffect(() => {
    // Initialize refs array
    contentRefs.current = contentRefs.current.slice(0, propsFaqs.length);
  }, [propsFaqs]);

  return (
    <section className="flex justify-center py-[60px]">
      <div className="flex flex-col gap-8 w-full" style={{ padding: "40px" }}>
        {/* ---------- FAQ Section ---------- */}
        <div className="flex flex-col gap-10 w-full">
          <h2
            className="text-black"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 600,
              fontSize: "40px",
              lineHeight: "48px",
              textAlign: "left",
            }}
          >
            We Know What’s On Your Mind
          </h2>
          <p
            className="text-gray-600"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 400,
              fontSize: "24px",
              lineHeight: "32px",
              textAlign: "left",
              color: "#000000",
            }}
          >
            Understanding your thoughts before you even say them.
          </p>

          <div
            className="grid grid-cols-2 gap-6 justify-start items-start mt-3"
            style={{ width: "100%" }}
          >
            {propsFaqs.map((faq, idx) => {
              const isOpen = openIndex === idx;

              return (
                <div
                  key={idx}
                  className="flex flex-col p-6 rounded-[20px] transition-all duration-300"
                  style={{
                    background: "#E9EFFF",
                    color: "#000000",
                  }}
                >
                  {/* Question Header */}
                  <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                  >
                    <p
                      style={{
                        fontFamily: "Poppins, sans-serif",
                        fontWeight: 600,
                        fontSize: "20px",
                        lineHeight: "28px",
                      }}
                    >
                      {faq.question}
                    </p>

                    <div
                      className="flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300"
                      style={{
                        background: isOpen ? "#FFFFFF" : "#343A7D",
                        color: isOpen ? "#343A7D" : "#FFFFFF",
                      }}
                    >
                      {isOpen ? <FiMinus size={20} /> : <GoArrowUpRight size={20} />}
                    </div>
                  </div>

                  {/* Answer with smooth height transition */}
                  <div
                    ref={(el) => (contentRefs.current[idx] = el)}
                    style={{
                      maxHeight: isOpen
                        ? `${contentRefs.current[idx]?.scrollHeight}px`
                        : "0px",
                      overflow: "hidden",
                      transition: "max-height 0.5s ease",
                    }}
                  >
                    <p
                      className="mt-4"
                      style={{
                        fontFamily: "Poppins, sans-serif",
                        fontWeight: 400,
                        fontSize: "16px",
                        lineHeight: "24px",
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
