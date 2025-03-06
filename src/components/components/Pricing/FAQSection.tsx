"use client";
import React from "react";
import H1Typography from "../Typography/H1Typography";
import { IoArrowDown, IoArrowUp } from "react-icons/io5";

interface FAQData {
  heading: string;
  faq: { question: string; answer: string }[];
}

const FAQSection = ({ data }: { data: FAQData }) => {
  const [expandedIndex, setExpandedIndex] = React.useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="bg-[rgba(16,26,36,0.05)] flex flex-col items-center justify-center py-8">
      <H1Typography data={data?.heading} />
      {data?.faq.map((value, i) => (
        <div
          key={i}
          className={`bg-[#5C5CFF33] flex flex-col my-4 px-8 w-[90%] lg:rounded-[46px] md:rounded-[46px] sm:rounded-[26px] rounded-[26px] transition-all duration-700 ease-in-out ${
            expandedIndex === i
              ? "h-auto min-h-[161px] lg:pt-12 md:pt-14 sm:pt-10 pt-3 pb-4 items-center"
              : "lg:h-[161px] md:h-[161px] sm:h-[130px] h-[83px] justify-center  items-center"
          }`}
        >
          <div
            onClick={() => toggleExpand(i)}
            className={`w-full flex cursor-pointer justify-between transition-all duration-700 items-center font-inter font-[500] lg:text-[36px] md:text-[30px] sm:text-[26px] text-[18px] lg:mt-2`}
          >
            <div> {value.question}</div>
            <div>
              {expandedIndex === i ? (
                <IoArrowUp className="!w-5 !h-5" />
              ) : (
                <IoArrowDown className="!w-5 !h-5" />
              )}
            </div>
          </div>

          <div
            className={`overflow-hidden transition-all duration-700 ease-in-out ${
              expandedIndex === i ? "max-h-[1000px]" : "max-h-0"
            }`}
          >
            {expandedIndex === i && (
              <div className=" transform transition-all duration-700 ease-in-out lg:text-[24px] md:text-[20px] sm:text-[18px] text-[16px] font-inter text-gray-700">
                {value.answer}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQSection;
