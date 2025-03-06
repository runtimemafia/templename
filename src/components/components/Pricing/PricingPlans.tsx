"use client";

import React from "react";
import { motion } from "framer-motion";
import H1Typography from "../Typography/H1Typography";
import PricingCards from "./PricingCards";
import { Container } from "@/components/ui/container";

interface PricingPlansProps {
  data: {
    title: string;
    pricing_page_pricing_cards: any; // Replace 'any' with the appropriate type if known
  };
}

const PricingPlans: React.FC<PricingPlansProps> = ({ data }) => {
  return (
    <Container>
      {/* Title with animation */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <H1Typography data={data?.title} />
      </motion.div>

      {/* Pricing Cards with animation */}
      <motion.div
        className="mt-6"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
      >
        <PricingCards data={data?.pricing_page_pricing_cards} />
      </motion.div>
    </Container>
  );
};

export default PricingPlans;
