import Image from "next/image";
import React from "react";

const BackgroundImage = () => {
  return (
    <>
      <Image
        width={658}
        height={721}
        src="https://res.cloudinary.com/dpaigt2bx/image/upload/v1739790787/Untitled_design_3_pvy2yf_orx1ge.webp"
        alt=""
        className="absolute  pointer-events-none right-[-181.44px] top-[-124px] object-cover w-[658px] h-[721px] opacity-[12%] "
      />
      <Image
        height={635}
        width={620}
        src="https://res.cloudinary.com/dpaigt2bx/image/upload/v1739790786/Untitled_design_1_vqbpnf_vmglzt.webp"
        alt=""
        className="absolute z-10 pointer-events-none lg:w-[620px] md:w-[620px] lg:top-[736px] md:top-[1206px] sm:top-[706px] top-[706px] sm:w-[400px] w-[400px] lg:left-[-347.76px] md:left-[-347.76px] sm:left-[-267.76px] left-[-290.76px] opacity-[11%] rotate-45"
      />

      <Image
        width={350}
        height={150}
        src="https://res.cloudinary.com/dpaigt2bx/image/upload/v1739790769/6_oka7ir_lsgjbx.webp"
        alt=""
        className="absolute z-10 object-cover  pointer-events-none lg:flex flex sm:hidden right-[-202.4px] top-[1638.64px] opacity-[13%]"
      />
      <Image
        height={635}
        width={620}
        src="https://res.cloudinary.com/dpaigt2bx/image/upload/v1739790786/Untitled_design_1_vqbpnf-1_eymama.webp"
        alt=""
        className="absolute  z-10  pointer-events-none w-[620px] h-[635px] top-[2246.18px] right-[-211.68px] opacity-[11%] -rotate-45"
      />
      <Image
        width={620}
        height={635}
        src="https://res.cloudinary.com/dpaigt2bx/image/upload/v1739790786/Untitled_design_1_vqbpnf-1_eymama.webp"
        alt=""
        className="absolute  z-10  pointer-events-none lg:flex md:hidden flex top-[3201.05px] left-[-347.76px] opacity-[11%] rotate-45"
      />
      <Image
        width={378}
        height={517}
        src="https://res.cloudinary.com/dpaigt2bx/image/upload/v1739790769/6_oka7ir_lsgjbx.webp"
        alt=""
        className="absolute z-10 object-cover pointer-events-none lg:flex md:hidden hidden  lg:right-[-150.92px]  lg:top-[3281.05px] opacity-[13%]"
      />
    </>
  );
};

export default BackgroundImage;
