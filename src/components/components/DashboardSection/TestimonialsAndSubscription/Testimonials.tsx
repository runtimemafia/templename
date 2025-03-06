"use client";

import React from "react";
import { motion } from "framer-motion";
import H1Typography from "../../Typography/H1Typography";
import Typography from "@/components/ui/typography";

interface TestimonialsProps {
  title: string;
  decription: string;
}

const Testimonials: React.FC<TestimonialsProps> = ({ title, decription }) => {
  return (
    <div className="flex flex-col items-end overflow-hidden">
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        // viewport={{ once: true }}
        className="w-[62%] flex flex-col items-start mr-7"
      >
        <H1Typography data={title} />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          // viewport={{ once: true }}
        >
          <Typography className="font-inter font-normal text-[20px] text-[#5C6574]">
            {decription}
          </Typography>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Testimonials;
