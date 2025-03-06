import Typography from "@/components/ui/typography";
import React from "react";
import H1Typography from "../../Typography/H1Typography";

const TempleTrust = () => {
  return (
    <>
      <div className="bg-[rgba(16,26,36,0.05)] h-[524px]  lg:flex md:flex hidden flex-col items-center py-5 relative">
        <H1Typography data="Leading Temples Trust BookMyPuja" />
        {/* <Typography className="w-full text-start p-36 font-poppins font-normal text-[20px]">
          ADHOOR SHREE BHAGAVATHI KSHETHRA BHARANA SAMITHI
        </Typography> */}
        <img
          src="https://res.cloudinary.com/dpaigt2bx/image/upload/v1739790769/5_oectt6-1_lcv2tw.webp"
          alt=""
          className="absolute w-[494px] h-[680px] top-[-30%] left-[-8%] transform scale-x-[-1] opacity-[29%]"
        />
      </div>
    </>
  );
};

export default TempleTrust;
