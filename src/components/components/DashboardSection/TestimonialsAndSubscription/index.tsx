"use client";

import React from "react";
import { motion } from "framer-motion";
import Testimonials from "./Testimonials";
import TestimonialsCarousel from "./TestimonialsCarousel";
import Subscribing from "./Subscribing";

interface TestimonialsAndSubscriptionProps {
  data: {
    title: string;
    description: string;
    testimonials_blocks_testimonials_carousel: any; // Replace 'any' with the appropriate type if known
    suscribing_title: string;
    suscribing_bg_image: string;
  };
}

const TestimonialsAndSubscription: React.FC<
  TestimonialsAndSubscriptionProps
> = ({ data }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100, y: -100 }} // Start from top-left
      whileInView={{ opacity: 1, x: 0, y: 0 }} // Move to original position
      transition={{ duration: 1.2, ease: "easeOut" }}
      // viewport={{ once: true }}
    >
      <div className="bg-[rgba(16,26,36,0.05)] relative lg:flex md:flex hidden flex-col items-end py-10">
        <Testimonials title={data?.title} decription={data?.description} />
        <TestimonialsCarousel
          carousel={data?.testimonials_blocks_testimonials_carousel}
        />
        <Subscribing
          title={data?.suscribing_title}
          bg={data?.suscribing_bg_image}
        />
        <img
          src="https://res.cloudinary.com/dpaigt2bx/image/upload/v1739790786/Untitled_design_2_uur79f_i7p90e.webp"
          alt=""
          className="absolute w-[654px] h-[728px] top-[-9%] left-[-11%] opacity-[23%]"
        />
      </div>
    </motion.div>
  );
};

export default TestimonialsAndSubscription;
