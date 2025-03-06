import AnimationButton from "@/components/components/animation/AnimationButton";
import { Button } from "@/components/ui/button";
import Typography from "@/components/ui/typography";
import Image from "next/image";
import React from "react";
import { LuIndianRupee } from "react-icons/lu";

interface EventData {
  title: string;
  image_url: string;
  heading: string;
  sub_heading: string;
  sub_title: string;
  price_title: string;
  price: number;
  event_title: string;
  button_label: string;
  events: { event_name: string; event_price: number }[];
}

const EventSection = ({ data }: { data: EventData }) => {
  return (
    <>
      <div id="event">
        <div className="flex justify-center items-center space-x-4">
          <hr className="border-t-2 border-[#E4DEDE] my-4 w-1/4" />
          <Typography className="font-inter font-[500] sm:text-[32px] text-[24px] md:text-[48px]">
            {data?.title}
          </Typography>
          <hr className="border-t-2 border-[#E4DEDE] my-4 w-1/4" />
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-center p-6 relative">
          <div className="w-full z-0 bg-none lg:w-[37%]  flex justify-center  lg:rounded-[50%]">
            <Image
              src={data?.image_url}
              alt="Puja Ritual"
              width={785}
              height={678}
              className="image-size w-full  h-[350px] md:h-[500px] bg-none lg:h-[678px]   object-cover  lg:absolute md:top-16 lg:rounded-[50%] rounded-[15px] md:left-[-180px]"
            />
          </div>
          {/* Text Section */}
          <div className="w-full z-10 md:w-[80%] font-inter flex flex-col items-center  text-center md:text-left mt-8 md:mt-0 md:pl-8">
            <Typography className="font-[800] sm:text-[24px] text-[18px] text-center md:text-[36px] md:mb-6 m-3">
              {data?.heading}
            </Typography>
            <Typography className="sm:text-[18px] text-[13px] lg:px-4 text-center md:text-[24px] md:mb-8 mb-4">
              {data?.sub_heading}
            </Typography>

            <h4 className="text-[20px] md:text-[24px] font-semibold my-4">
              {data?.sub_title}
            </h4>
            <Typography className="text-[20px] lg:px-36 text-center md:text-[32px] font-bold text-[#EF973F] md:mb-4 mb-2">
              {data?.price_title}{" "}
              <span className="inline-flex">
                <LuIndianRupee size={20} />
              </span>
              {data?.price}
            </Typography>
            <Typography className="text-[17px] lg:px-36 md:text-[24px] md:mb-4 mb-2">
              {data?.event_title}
            </Typography>

            {/* List of Offerings */}
            <div className="mt-4 p-4 ">
              <ul className="font-semibold text-[13px] md:text-[16px] space-y-3">
                {data?.events?.map((value, index) => (
                  <li
                    key={index}
                    className="flex justify-between items-start gap-4 md:gap-8"
                  >
                    <span>{value?.event_name}</span>
                    <span>{value?.event_price}.00</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Book Puja Button */}
            <div className="mt-6 flex justify-center md:justify-start">
              <Button className="bg-[#EF973F] text-black px-6 py-3 text-[24px] shadow-md rounded-[9px] hover:bg-[#e68a00]">
                {data?.button_label}
              </Button>
              {/* <AnimationButton label={data?.button_label} /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventSection;
