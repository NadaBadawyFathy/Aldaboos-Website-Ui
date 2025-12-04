export default function Title({ icon, text, description }) {
  return (
    <div className="flex flex-col">
      <h2 
        className="flex items-center gap-[12.36px] text-[#000000] 
        font-poppins font-extrabold 
        text-[26px] leading-[20px] 
        sm:text-[32px] sm:leading-[24px] 
        lg:text-[40px] lg:leading-[27px] 
        mb-[24px] sm:mb-[28px] lg:mb-[29.74px]"
        
      >
        <img
          src={icon}
          alt=""
          className="w-[60px] h-[22px] sm:w-[70px] sm:h-[26px] lg:w-[78.64px] lg:h-[28.26px] mr-2"
        />
        {text}
      </h2>
      {description && (
        <div>
          {description}
        </div>
      )}
    </div>
  );
}
