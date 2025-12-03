export default function Title({ icon, text, description }) {
  return (
    <div className="flex flex-col">
      <h2 
        className="flex items-center text-[#000000] font-extrabold text-[36px] leading-[27px]"
        style={{ fontFamily: "Poppins", fontWeight: 800, margin: 0 }} // بدون margin
      >
        <img
          src={icon}
          alt=""
          className="w-[60px] h-[22px] sm:w-[70px] sm:h-[26px] lg:w-[78.64px] lg:h-[28.26px] mr-2"
        />
        {text}
      </h2>
      {description && (
        <div style={{ marginTop: "16px", marginLeft: 0 }}>
          {description}
        </div>
      )}
    </div>
  );
}
