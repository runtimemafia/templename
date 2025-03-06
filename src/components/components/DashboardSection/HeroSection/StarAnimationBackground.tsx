import React from "react";

const StarAnimationBackground = ({ data }: { data: string }) => {
  return (
    <div>
      <div className=" absolute animate-[spin_2s_linear_infinite] pointer-events-none  sm:flex lg:flex md:flex lg:top-[800px] lg:left-[43%] md:top-[14%] md:left-[9%] sm:top-[14%] sm:left-[13%] top-[8%] left-[2%]">
        <img
          src={data}
          alt="Star image"
          className=" animate-[ping_1s_linear_infinite,bounce_1s_linear_infinite,pluse_4s_linear_infinite,fadeIn_3s_linear_infinite] "
        />
      </div>
      <div className=" absolute animate-[pulse_4s_linear_infinite,spin_3s_linear_infinite] pointer-events-none  sm:flex lg:flex md:flex lg:top-[400px] lg:left-[54%] md:top-[8.5%] md:left-[13%] sm:top-[8.8%] sm:left-[17%] hidden">
        <img
          src={data}
          alt="Star image"
          className=" animate-[ping_5s_linear_infinite,bounce_1s_linear_infinite,pluse_1s_linear_infinite,fadeIn_3s_linear_infinite] "
        />
      </div>
      <div className=" absolute animate-[spin_3s_linear_infinite] pointer-events-none sm:flex lg:flex md:flex lg:top-[610px] lg:left-[42%] md:top-[11%] md:left-[6%] sm:top-[11%] sm:left-[11%] top-[11%] left-[2%]">
        <img
          src={data}
          alt="Star image"
          className=" w-[35px] h-[35px] animate-[ping_2s_linear_infinite,bounce_1s_linear_infinite,fadeIn_1s_linear_infinite] "
        />
      </div>
      <div className=" absolute animate-[spin_2s_linear_infinite] pointer-events-none  sm:flex lg:flex md:flex lg:top-[900px] lg:left-[84%] md:top-[21%] md:left-[79%] sm:top-[20%] sm:left-[73%] top-[18%] left-[2%]">
        <img
          src={data}
          alt="Star image"
          className=" animate-[ping_3s_linear_infinite,bounce_1s_linear_infinite,pluse_1s_linear_infinite,fadeIn_3s_linear_infinite] "
        />
      </div>
      <div className="  absolute animate-[spin_4s_linear_infinite,bounce_3s_linear_infinite] pointer-events-none  lg:top-[900px] lg:left-[60%]  md:top-[21%] md:left-[16%] sm:top-[21%] sm:left-[22%] top-[17.5%] right-[8%]">
        <img
          src={data}
          alt="Star image"
          className=" w-[30px] h-[35px] animate-[ping_4s_linear_infinite,bounce_1s_linear_infinite,pluse_5s_linear_infinite,fadeIn_3s_linear_infinite] "
        />
      </div>
    </div>
  );
};

export default StarAnimationBackground;
