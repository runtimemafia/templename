"use client";
import React, { useRef } from "react";
import Link from "next/link";
import { TiSocialFacebook } from "react-icons/ti";
import { IoLogoInstagram } from "react-icons/io";
import { Button } from "@/components/ui/button";
import Typography from "@/components/ui/typography";
import { FaLinkedin } from "react-icons/fa";
import { EXTERNAL_URLS, openExternalLink } from "@/lib/openExternalLink";
import Image from "next/image";
import StarAnimationBackground from "./StarAnimationBackground";
import { motion, useInView } from "framer-motion";
import AnimationButton from "../../animation/AnimationButton";
import TypewriterText from "./TypeWriterText";

interface Data {
  Heading: string;
  Bg_image_1: string;
  bg_image_2: string;
  Sub_heading: string;
  star_image: string;
  button_text_1: string;
  button_text_2: string;
}

const HeroSection = ({ data }: { data: Data }) => {
  const [isAnytime, setIsAnytime] = React.useState(true);

  const sectionRef = React.useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.3, once: false });

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIsAnytime((prev) => !prev);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <motion.div
        ref={sectionRef}
        initial={{ x: -200, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : { x: -200, opacity: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <div className="flex flex-col lg:flex-row  items-center justify-between bg-transparent dark:bg-gray-800 p-4 mx-auto">
          <div className="flex-1 text-left lg:text-left  lg:w-[60%] w-full">
            <Typography className="text-[#101A24] lg:text-[65px] md:text-[60px] sm:text-[30px] text-[27px] font-david-libre font-bold mb-4">
              {/* Your Path to Divine Blessings, Anytime, Anywhere */}
              {/* {data?.Heading}{" "} */}
              Your Path to Divine Blessings{" "}
              <motion.span
                key={isAnytime ? "Anytime" : "Anywhere"}
                className="inline-block text-yellow-600"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 2.5 }}
              >
                {isAnytime ? "Anytime" : "Anywhere"}
              </motion.span>
              {/* <p className="inline-block text-yellow-600">
                <TypewriterText />
              </p> */}
            </Typography>
            <p
              dangerouslySetInnerHTML={{ __html: data?.Sub_heading }}
              className="font-inter lg:text-[24px] md:text-[24px] text-[15px] text-[#5C6574] dark:text-gray-400 mb-6 "
            >
              {/* Experience the divine like never before with
              <span className="font-semibold ">BookMyPuja</span> */}
              {/* {data.Sub_heading}{" "} */}
            </p>
            <div className="flex justify-center lg:justify-start lg:m-14 space-x-14">
              <Button
                variant={"curve"}
                className="bg-[#101A24] text-white px-6 py-2 w-[120px] h-[54px]"
              >
                {data?.button_text_1}
              </Button>

              <AnimationButton label={data?.button_text_2} />
            </div>
          </div>

          <div className="relative lg:w-[40%] w-full flex justify-center lg:justify-center mt-8 lg:mt-0 ">
            <Image
              src={data?.Bg_image_1}
              alt="Main Background"
              width={287}
              height={429}
              className=" lg:w-[518px] lg:h-[710px] md:w-[518px] md:h-[710px]  w-[297px] h-[429px] object-cover rounded-[75px_30px_75px_30px] "
            />

            <Image
              src={data?.bg_image_2}
              alt="Foreground Pot"
              width={1200}
              height={800}
              className="absolute bottom-[-20px] lg:bottom-[-7%] left-[15%] object-cover sm:-bottom-6 md:left-25 md:bottom-[-10%] sm:left-[20%] lg:left-0  transform -translate-x-1/2 bg-none lg:w-[1200px] md:w-4/5 sm:w-3/5 w-[342px]"
            />
          </div>
        </div>
        <div className="flex justify-center items-center gap-5 my-5">
          {/* Icons Section */}
          <div className="flex gap-5">
            <Link
              href={"https://www.facebook.com/profile.php?id=61564160341737"}
              className="rounded-full border-[1px] border-[#101A24] p-1"
            >
              <TiSocialFacebook size={22} />
            </Link>
            <Link
              href={"https://www.instagram.com/bookmy_puja/"}
              target="_blank"
              className="rounded-full border-[1px] border-[#101A24] p-1"
            >
              <IoLogoInstagram size={22} />
            </Link>
            <Link
              href={"https://www.linkedin.com/company/106116931"}
              className="rounded-full border-[1px] border-[#101A24] p-1"
            >
              <FaLinkedin size={22} />
            </Link>
          </div>
          <div className=" border-t lg:w-[150px] md:w-[120px] sm:w-[90px] w-[70px]  border-[rgba(16,26,36,0.15)] "></div>
        </div>
        <StarAnimationBackground data={data?.star_image} />
      </motion.div>
    </>
  );
};

export default HeroSection;
