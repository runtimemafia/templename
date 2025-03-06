"use client";
import Typography from "@/components/ui/typography";
import React from "react";
import H1Typography from "../../Typography/H1Typography";
import { motion } from "framer-motion";
import AnimationButton from "../../animation/AnimationButton";

interface Data {
  title: string;
  discription: string;
  image: string;
}

const IntroSection = ({ data }: { data: Data }) => {
  return (
    <div className="grid lg:grid-cols-2 gap-3 px-4 sm:px-4 relative">
      {/* Left Image Section - Animates from Left to Right */}
      <motion.div
        initial={{ opacity: 0, x: -100 }} // Start from left
        whileInView={{ opacity: 1, x: 0 }} // Move to original position
        transition={{ duration: 1, ease: "easeOut" }}
        // viewport={{ once: true }}
        className="w-full lg:flex hidden justify-center items-center"
      >
        <img
          src={data?.image}
          alt="Temple"
          className="w-full h-full transform scale-x-[-1]"
        />
      </motion.div>

      {/* Right Content Section - Animates from Right to Left */}
      <motion.div
        initial={{ opacity: 0, x: 100 }} // Start from right
        whileInView={{ opacity: 1, x: 0 }} // Move to original position
        transition={{ duration: 1, ease: "easeOut" }}
        // viewport={{ once: true }}
        className="flex flex-col justify-center lg:items-start md:items-start items-center lg:pl-6 md:pl-6 pl-0 lg:py-0 md:py-0 py-6"
      >
        <H1Typography data={data?.title} />
        <Typography className="font-david-libre font-bold text-[24px] text-[#DA9861] mb-3">
          “Your spiritual partner”
        </Typography>
        <p
          dangerouslySetInnerHTML={{ __html: data?.discription }}
          className="font-inter font-normal text-[16px] lg:text-[20px] md:text-[16px] text-[#5C6574] w-full sm:w-[80%] md:w-auto"
        />
      </motion.div>

      {/* Background Decorative Image */}
      <motion.img
        initial={{ opacity: 0, scale: 0.8 }} // Small and transparent at first
        whileInView={{ opacity: 0.32, scale: 1 }} // Appears smoothly
        transition={{ duration: 1.5, ease: "easeOut" }}
        // viewport={{ once: true }}
        src="https://res.cloudinary.com/dpaigt2bx/image/upload/v1739790769/4_3_rswbdm_socpne.webp"
        alt=""
        className="absolute lg:flex md:flex hidden w-[369px] object-cover h-[350px] top-[11%] left-[40%]"
      />
      <AnimationButton label="Book a Puja" />
    </div>
  );
};

export default IntroSection;
