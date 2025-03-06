"use client";
import { Button } from "@/components/ui/button";
import Typography from "@/components/ui/typography";
import Image from "next/image";
import React from "react";
import { PiSquaresFourFill } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa";
interface SocialSectionProps {
  data: {
    title: string;
    profile_image: string;
    insta_id: string;
    follow: { value: string; name: string }[];
    images_url: { image_url: string; image_name: string }[];
  };
}

const SocialSection: React.FC<SocialSectionProps> = ({ data }) => {
  const [visibleRows, setVisibleRows] = React.useState(2);
  const imagesPerRow = 4;

  const totalImagesToShow = visibleRows * imagesPerRow;

  const handleViewMore = () => {
    setVisibleRows((prev) => prev + 1);
  };

  return (
    <>
      <div className="lg:flex md:flex flex-col hidden">
        <div className="flex justify-center items-center space-x-4">
          <hr className="border-t-2 border-[#E4DEDE] my-4 w-1/4" />
          <Typography className="font-inter font-[500] text-[32px] md:text-[48px]">
            {data?.title}
          </Typography>
          <hr className="border-t-2 border-[#E4DEDE] my-4 w-1/4" />
        </div>
        <div className="lg:px-20 md:px-10">
          <div className="flex flex-col md:flex-row items-center gap-4 w-full max-w-[60%] lg:p-6">
            <div className="md:h-[120px] min-h-[120px] min-w-[120px] rounded-full overflow-hidden border-4 border-gray-200">
              <Image
                src={data?.profile_image}
                alt="Profile"
                width={120}
                height={120}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Profile Info */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <Typography className="text-[32px] font-tenali-ramakrishna">
                {data?.insta_id}
              </Typography>
              <Typography className="text-[#AAA7A7] flex gap-4 text-[14px] font-assistant">
                {data?.follow?.map((follow, index) => (
                  <span key={index}>
                    {follow?.value} {follow?.name}
                  </span>
                ))}
              </Typography>
            </div>

            <Button className="flex items-center bg-[#5A365C] ml-auto text-white px-6 py-2 text-lg rounded-lg hover:bg-[#452A47]">
              Follow
              <span className="w-6">
                <FaInstagram size={22} />
              </span>
            </Button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 mt-6 w-full ">
            {data?.images_url.slice(0, totalImagesToShow).map((img, index) => (
              <div
                key={index}
                className="w-full aspect-square rounded-lg overflow-hidden shadow-md"
              >
                <Image
                  src={img.image_url}
                  alt={img.image_name}
                  width={292}
                  height={292}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>
            ))}
          </div>

          {totalImagesToShow < data?.images_url?.length && (
            <div className="flex justify-center mt-6">
              <button
                onClick={handleViewMore}
                className="flex items-center w-[163px] h-[53px] gap-2 bg-[#432E56] text-white px-3 py-2 text-[22px] rounded-[10px] hover:bg-[#452A47] transition-colors"
              >
                <span className="flex justify-center items-center gap-2">
                  <PiSquaresFourFill />
                  View More
                </span>
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SocialSection;
