import React from "react";

const ContactForm = () => {
  return (
    <div className="bg-white p-8 rounded-3xl shadow-lg w-full max-w-[503px] flex flex-col gap-6">
      {/* First Name */}
      <div className="flex flex-col gap-2">
        <label
          style={{
            fontFamily: "Poppins",
            fontWeight: 700,
            fontStyle: "bold",
            fontSize: "16px",
            lineHeight: "24px",
            letterSpacing: "0%",
            fontVariantNumeric: "lining-nums",
            fontVariantNumericSpacing: "proportional-nums",
            color: "black",
          }}
        >
          First Name
        </label>
        <input
          type="text"
          placeholder="Input your first name in here"
          className="w-full h-14 px-5 rounded-[20px] border border-[#2C2E9C80] outline-none placeholder:text-[#000000]"
          style={{
            fontFamily: "DM Sans",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "27px",
          }}
        />
      </div>

      {/* Email Address */}
      <div className="flex flex-col gap-2">
        <label
          style={{
            fontFamily: "Poppins",
            fontWeight: 700,
            fontStyle: "bold",
            fontSize: "16px",
            lineHeight: "24px",
            letterSpacing: "0%",
            fontVariantNumeric: "lining-nums",
            fontVariantNumericSpacing: "proportional-nums",
            color: "black",
          }}
        >
          Email Address
        </label>
        <input
          type="email"
          placeholder="Input your email address in here"
          className="w-full h-14 px-5 rounded-[20px] border border-[#2C2E9C80] outline-none placeholder:text-[#000000]"
          style={{
            fontFamily: "DM Sans",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "27px",
          }}
        />
      </div>

      {/* Messages */}
      <div className="flex flex-col gap-2">
        <label
          style={{
            fontFamily: "Poppins",
            fontWeight: 700,
            fontStyle: "bold",
            fontSize: "16px",
            lineHeight: "24px",
            letterSpacing: "0%",
            fontVariantNumeric: "lining-nums",
            fontVariantNumericSpacing: "proportional-nums",
            color: "black",
          }}
        >
          Messages
        </label>
        <textarea
          placeholder="Write your messages in here"
          className="w-full  px-5 py-4 h-14 rounded-[20px] border border-[#2C2E9C80] outline-none resize-none overflow-hidden placeholder:text-[#000000]"
          style={{
            fontFamily: "DM Sans",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "27px",
            color: "black",
          }}
        ></textarea>
      </div>

      {/* Button */}
      <div className="flex justify-end">
        <button
          className="w-[166px] h-[51px] rounded-[26px] text-white font-semibold"
          style={{ background: "#343A7D", fontFamily: "DM Sans" }}
        >
          Let’s Talk
        </button>
      </div>
    </div>
  );
};

export default ContactForm;
