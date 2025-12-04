import React from "react";

const ContactForm = () => {
  return (
    <div className="
      bg-white lg:p-8 p-4 
      rounded-3xl shadow-lg w-full lg:max-w-[503px]
      flex flex-col gap-4 lg:gap-6
    ">
      {/* First Name */}
      <div className="flex flex-col gap-1 lg:gap-2">
        <label
          className="
            text-sm lg:text-[16px]
            font-bold font-poppins text-black
          "
        >
          First Name
        </label>
        <input
          type="text"
          placeholder="Input your first name"
          className="
            w-full h-12 lg:h-14 px-4 lg:px-5
            text-sm lg:text-[16px]
            rounded-[16px] lg:rounded-[20px]
            border border-[#2C2E9C80]
            outline-none placeholder:text-[#000000]
          "
          style={{
            fontFamily: "DM Sans",
          }}
        />
      </div>

      {/* Email Address */}
      <div className="flex flex-col gap-1 lg:gap-2">
        <label
          className="
            text-sm lg:text-[16px]
            font-bold font-poppins text-black
          "
        >
          Email Address
        </label>
        <input
          type="email"
          placeholder="Input your email address"
          className="
            w-full h-12 lg:h-14 px-4 lg:px-5
            text-sm lg:text-[16px]
            rounded-[16px] lg:rounded-[20px]
            border border-[#2C2E9C80]
            outline-none placeholder:text-[#000000]
          "
          style={{
            fontFamily: "DM Sans",
          }}
        />
      </div>

      {/* Messages */}
      <div className="flex flex-col gap-1 lg:gap-2">
        <label
          className="
            text-sm lg:text-[16px]
            font-bold font-poppins text-black
          "
        >
          Messages
        </label>
        <textarea
          placeholder="Write your message here"
          className="
            w-full h-20 lg:h-14 px-4 lg:px-5 py-2 lg:py-4
            text-sm lg:text-[16px]
            rounded-[16px] lg:rounded-[20px]
            border border-[#2C2E9C80]
            outline-none resize-none
            placeholder:text-[#000000]
          "
          style={{
            fontFamily: "DM Sans",
          }}
        />
      </div>

      {/* Button */}
      <div className="flex justify-end">
        <button
          className="
            w-[120px] lg:w-[166px]
            h-[44px] lg:h-[51px]
            rounded-[20px] lg:rounded-[26px]
            text-sm lg:text-[16px]
            text-white font-semibold
          "
          style={{ background: "#343A7D", fontFamily: "DM Sans" }}
        >
          Let’s Talk
        </button>
      </div>
    </div>
  );
};

export default ContactForm;
