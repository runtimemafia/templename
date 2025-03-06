"use client";

import React from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { IoCheckmarkOutline } from "react-icons/io5";
import { Button } from "@/components/ui/button";

interface PricingCardData {
  pricing_cards: {
    most_popular: boolean;
    heading: string;
    pricing: string;
    subtitle: string;
    features: { feature: string }[];
  };
}

interface PricingCardsProps {
  data: PricingCardData[];
}

const PricingCards: React.FC<PricingCardsProps> = ({ data }) => {
  return (
    <div className="flex relative flex-wrap justify-evenly gap-5 items-center my-6 lg:mx-4 font-inter">
      {data?.map((option, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <Card
            className={`lg:h-[777px] lg:w-[429px] md:h-[777px] md:w-[429px] sm:h-[777px] w-[340px] h-auto border-[1px] border-solid border-[#5C6574] rounded-[46px] relative ${
              option.pricing_cards.most_popular
                ? "border-[#5C5CFFB0] bg-[#5C5CFF26]"
                : "border-[#5C6574]"
            }`}
          >
            {option.pricing_cards.most_popular && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Button className="relative overflow-hidden group lg:w-[161px] md:w-[161px] w-[127px] h-[34px] flex items-center justify-center top-6 left-8 bg-[#FFC107] text-black text-[13px] font-[600] px-2 py-1 rounded-full">
                  <span className="z-40">MOST POPULAR</span>
                </Button>
              </motion.div>
            )}
            <CardHeader className="lg:pb-3 md:pb-3 pb-0">
              <div className="text-left lg:text-[48px] md:text-[48px] text-[36px] font-semibold px-0 pb-1 mt-2 lg:mb-12 md:mb-12 mb-0">
                {option.pricing_cards.heading}
              </div>
              <p className="text-left lg:text-[36px] md:text-[36px] text-[32px] font-medium lg:mt-2 md:mt-2 mt-0 px-4">
                {option.pricing_cards.pricing}
                {option.pricing_cards.pricing !== "Let’s Talk" && (
                  <span className="lg:text-[20px] md:text-[20px] text-[16px] font-normal ">
                    {" "}
                    /month
                  </span>
                )}
              </p>
            </CardHeader>
            <CardContent className="pr-1">
              <p className="text-left lg:text-[24px] md:text-[24px] text-[20px] font-semibold lg:mt-2 md:mt-2 mt-0 px-0">
                {option.pricing_cards.subtitle}
              </p>
              <ul className="list-inside space-y-2 lg:mt-4 md:mt-4 mt-2">
                {option.pricing_cards.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center lg:text-[20px] md:text-[20px] text-[18px] lg:leading-loose md:leading-loose leading-relaxed text-gray-700"
                  >
                    <IoCheckmarkOutline
                      size={24}
                      color="black"
                      className="mr-2"
                    />
                    {feature.feature}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export default PricingCards;
