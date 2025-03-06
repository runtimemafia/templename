"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Typography from "@/components/ui/typography";
import Image from "next/image";
import React from "react";
import { PiDiamondsFourFill } from "react-icons/pi";
import ImageSwiper2 from "../../ImageSwiper/ImageSwiper2";
import KuthiranmalaCarousel from "@/components/components/carousel/KuthiranmalaCarousel";
import BookPujaButton from "@/components/components/button/BookPujaButton";
import AnimationButton from "@/components/components/animation/AnimationButton";
import { useFloatingButtonStore } from "@/lib/store";

interface HeroSectionProps {
  data: {
    image_url: string;
    images_url: { image_url: string; image_name: string }[];
    carousel_image: { image_url: string; image_name: string }[];
    title: string;
    about: string;
    timing: { date: string; time: string }[];
    updates: { new_update: string }[];
    kuthiranmala_page_kuthiranmala_card: {
      kuthiranmala_card: {
        heading: string;
        sub_heading: string;
        price: string;
        text: string;
        nakshatra: { nakshatra_name: string }[];
      };
    }[];
  };
}

const HeroSection = ({ data }: HeroSectionProps) => {
  const [activeTab, setActiveTab] = React.useState("updates");

  const BookButtonRef = React.useRef<HTMLButtonElement>(null);
  const setFloatingButtonVisible = useFloatingButtonStore(
    (state) => state.setFloatingButtonVisible
  );

  React.useEffect(() => {
    const handleScroll = () => {
      if (BookButtonRef.current) {
        const rect = BookButtonRef.current.getBoundingClientRect();
        const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;
        setFloatingButtonVisible(!isVisible);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setFloatingButtonVisible]);

  return (
    <>
      <div className="w-full md:flex hidden flex-col md:flex-row gap-5 overflow-hidden">
        <div className="w-full md:w-[40%] h-full">
          <Image
            src={data?.image_url}
            width={624}
            height={459}
            alt=""
            className="w-full h-[459px] object-cover rounded-[20px]"
          />
        </div>

        <div className="w-full md:w-[60%] h-full flex gap-5 sm:gap-6 justify-between flex-wrap overflow-y-auto">
          {data?.images_url.map((image, index) => (
            <div
              key={index}
              className="w-full sm:w-[48%] md:w-[28%] lg:w-[30%] h-[212px]"
            >
              <Image
                src={image.image_url}
                width={212}
                height={212}
                alt={image.image_name}
                className="w-full h-full object-cover rounded-[20px]"
              />
            </div>
          ))}
        </div>
      </div>

      {/* <ImageSwiper2 images={data?.images_url?.slice(0, 5)} /> */}

      <KuthiranmalaCarousel
        carouselImage={data?.carousel_image?.map((image) => ({
          src: image.image_url,
          alt: image.image_name,
        }))}
      />
      <div className=" mt-10 md:p-5 p-0" id="about">
        <h1 className="md:text-[64px] text-[32px]  font-david-libre font-bold text-center">
          {data?.title}
        </h1>

        {/* Tabs */}
        <div className="flex md:gap-4 gap-0 md:justify-start items-center justify-center md:mt-6 mt-3">
          {["Updates", "About", "Timings"].map((tab) => (
            <Button
              key={tab}
              variant={
                activeTab === tab.toLowerCase() ? "default" : "secondary"
              }
              className={`sm:ml-6 ml-3 py-2 font-istok-web md:text-[26px] text-[15px] rounded-[9px] md:w-[174px] md:h-[58px] w-[100px] h-[31px] ${
                activeTab === tab.toLowerCase()
                  ? "bg-[#FFB300] text-white"
                  : "bg-[#D9D9D9] text-gray-700"
              }`}
              onClick={() => setActiveTab(tab.toLowerCase())}
            >
              {tab}
            </Button>
          ))}
        </div>
        <div className="flex md:mx-10 mx-3 justify-between items-start md:mt-8 mt-3">
          <div className="font-istok-web lg:w-[65%]">
            {activeTab === "about" && (
              <div className="mt-6">
                <Typography className="md:text-[26px] text-[16px] text-black font-istok-web font-normal md:leading-[43px] leading-[29px]">
                  <span dangerouslySetInnerHTML={{ __html: data?.about }} />
                </Typography>
              </div>
            )}
            {activeTab === "timings" && (
              <div className="md:p-12 p-3 md:ml-3 space-y-2">
                {data?.timing?.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start md:text-[24px] text-[15px] space-x-3"
                  >
                    <PiDiamondsFourFill
                      className="text-[#432E56] m-2"
                      size={20}
                    />
                    <div className="grid grid-cols-2 ">
                      <div className="font-medium ">{item.date}</div>
                      <div>{item.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {activeTab === "updates" && (
              <div id="update" className="mt-6 md:text-[26px] text-[16px]">
                {data?.updates?.map((update, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div>
                      <PiDiamondsFourFill
                        className="text-[#432E56] m-2 w-8"
                        size={20}
                      />
                    </div>
                    <div>{update?.new_update}</div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <Card className="w-[378px] h-[520px] lg:flex hidden justify-center items-center border-[1px_#D9D9D9]  shadow-[14px_11px_20px_0px_#00000040] bg-[#D9D9D9] text-white p-5 rounded-[10px] ">
            <CardContent className=" flex flex-col gap-4 justify-center items-center text-black p-0">
              <h2 className="text-[24px] font-[900">
                {
                  data?.kuthiranmala_page_kuthiranmala_card?.[0]
                    ?.kuthiranmala_card?.heading
                }
              </h2>
              <p className="text-[14px] mb-3">
                {" "}
                {
                  data?.kuthiranmala_page_kuthiranmala_card?.[0]
                    ?.kuthiranmala_card?.sub_heading
                }
              </p>
              <p className="text-[24px] font-semibold mb-6">
                {
                  data?.kuthiranmala_page_kuthiranmala_card?.[0]
                    ?.kuthiranmala_card?.price
                }{" "}
                <span className="text-[12px] font-normal">/ person</span>
              </p>

              <Input
                placeholder="Enter name"
                className=" bg-white w-[322px] mb-3 h-[58px] placeholder:text-gray-400 rounded-[15px] border border-[#D9D9D9] text-[#432E56] focus:ring-0 focus:outline-none focus-visible:ring-0 hover:ring-0"
              />

              <Select>
                <SelectTrigger className="bg-white mb-8 w-[322px] h-[58px] rounded-[15px] border border-[#D9D9D9] text-[#432E56] px-3 focus:ring-0 focus:outline-none hover:ring-0">
                  <SelectValue
                    placeholder={
                      <span className="text-gray-400">
                        {" "}
                        {
                          data?.kuthiranmala_page_kuthiranmala_card?.[0]
                            ?.kuthiranmala_card?.text
                        }
                      </span>
                    }
                  />
                </SelectTrigger>
                <SelectContent className="text-[#432E56] bg-[#D9D9D9] border border-[#D9D9D9]">
                  {data?.kuthiranmala_page_kuthiranmala_card?.[0]?.kuthiranmala_card?.nakshatra?.map(
                    (item, index) => (
                      <SelectItem key={index} value={item?.nakshatra_name}>
                        {item?.nakshatra_name}
                      </SelectItem>
                    )
                  )}
                </SelectContent>
              </Select>
              <Button
                ref={BookButtonRef}
                id="book-btn"
                className="w-[163px] font-normal h-[62px] rounded-[9px] bg-[#EF973F] text-white text-[24px]"
              >
                Book Puja
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
