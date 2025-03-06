"use client";
import { Button } from "@/components/ui/button";
import Typography from "@/components/ui/typography";
import React from "react";
import H1Typography from "../../Typography/H1Typography";
import { motion } from "framer-motion";

interface PujaBookingStepsProps {
  data: {
    title: string;
    description: string;
    steps: { steps: string }[];
    button_label: string;
    images: { image_cdn: string; label: string }[];
  };
}

const PujaBookingSteps = ({ data }: PujaBookingStepsProps) => {
  // Step list animation

  const listVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.3, duration: 0.6, ease: "easeOut" },
    }),
  };

  // Image fade-in animation
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: i * 0.4, duration: 1, ease: "easeOut" },
    }),
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 100, y: -100 }} // Start from top-right
      whileInView={{ opacity: 1, x: 0, y: 0 }} // Move to original position
      transition={{ duration: 1.8, ease: "easeOut" }}
      // viewport={{ once: true }}
    >
      <div className="py-10 px-5 md:px-20 lg:bg-none md:bg-none bg-[#F9F9F9]">
        {/* Title and Description */}
        <div className="text-center mb-10">
          <H1Typography data={data?.title} />
          <Typography className="text-[#5C6574] font-inter font-normal lg:text-[32px] md:text-[32px] text-[15px] lg:text-center md:text-center sm:text-center text-left">
            <span dangerouslySetInnerHTML={{ __html: data?.description }} />
          </Typography>
        </div>

        {/* Steps & Images Section */}
        <div className="flex flex-col-reverse md:flex-row items-center">
          {/* Steps Section */}
          <div className="md:flex md:w-1/2 md:flex-col flex-col-reverse flex items-center lg:items-end md:items-start w-full">
            <ol className="space-y-6 lg:w-[70%] md:w-full">
              {data?.steps.map((step, index) => (
                <motion.li
                  key={index}
                  className="flex items-center gap-3"
                  initial="hidden"
                  whileInView="visible"
                  // viewport={{ once: true }}
                  variants={listVariants}
                  custom={index}
                >
                  <div className="flex justify-center items-center px-1 py-0 text-[12px] bg-orange-500 text-white font-normal rounded-full">
                    {index + 1}
                  </div>
                  <p
                    dangerouslySetInnerHTML={{ __html: step.steps }}
                    className="text-gray-600 text-[15px] lg:text-[24px] md:text-[24px]"
                  ></p>
                </motion.li>
              ))}
            </ol>

            {/* Desktop Button */}
            <div className="lg:flex md:flex justify-center w-[70%] hidden">
              <Button
                variant={"curve"}
                className="bg-[#FFBB00] text-[#101A24] mt-8 px-4 py-1"
              >
                {data?.button_label}
              </Button>
            </div>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 flex flex-col items-center justify-center">
            {/* Mobile Button */}
            <div className="flex justify-center w-full lg:hidden md:hidden">
              <Button
                variant={"curve"}
                className="bg-[#FFBB00] text-[#101A24] px-4 py-1 lg:mb-0 md:mb-0 sm:mb-0 mb-6"
              >
                {data?.button_label}
              </Button>
            </div>

            <div className="relative lg:h-[560px] md:w-full sm:w-[400px] w-[340px] max-w-[588px] md:h-[560px] h-[356px] max-h-[560px] mx-auto">
              {data?.images.map((image, index) => {
                const positions = [
                  "w-full h-full top-[-10%] right-[20%] sm:top-[-8%] sm:right-[20%] md:top-[-6%] md:right-[10%] lg:top-[-10%] lg:right-20 !rotate-[-8deg]",
                  "w-full h-full md:max-h-[530px] max-h-[326px] top-[-2%] left-[-5%] sm:top-[0%] sm:left-[-5%] md:top-[0%] md:left-[9%] lg:top-[-5%] lg:left-[0%] !rotate-[-2deg]",
                  "w-full h-full md:max-h-[500px] max-h-[290px] top-[7%] left-[8%] sm:top-[10%] sm:left-[8%] md:top-[6%] md:left-[25%] lg:top-[2%] lg:left-[15%] !rotate-2",
                  "w-full h-full md:max-h-[440px] max-h-[260px] top-[15%] left-[20%] sm:top-[19%] sm:left-[20%] md:top-[16%] md:left-[38%] lg:top-[13%] lg:left-[28%] !rotate-[8deg]",
                ];
                return (
                  <motion.img
                    key={index}
                    src={image.image_cdn}
                    alt={image.label}
                    className={`absolute z-${40 - index * 10} ${
                      positions[index]
                    }`}
                    initial="hidden"
                    whileInView="visible"
                    // viewport={{ once: true }}
                    variants={imageVariants}
                    custom={index}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PujaBookingSteps;
