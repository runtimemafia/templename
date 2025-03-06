"use client";
import React from "react";
import { Circle } from "lucide-react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FiFacebook } from "react-icons/fi";
import { RiInstagramLine } from "react-icons/ri";
import { AiOutlineYoutube } from "react-icons/ai";
import { LuTwitter } from "react-icons/lu";
import { GiBeveledStar } from "react-icons/gi";
import { FaLinkedin } from "react-icons/fa6";
import { MdCopyright } from "react-icons/md";
import { useRouter } from "next/navigation";
import Link from "next/link";
import axios from "axios";
import FooterSkeleton from "../skeleton/footerSkeleton";

const events = [
  // "Perunthatta Chumundeshwari Theyyam",
  // "Adhur Perumkaliyatta Mahotssavam",
  // "Vadakkanthara Vela",
  // "Manapulli Bagavathi Vela",
  // "Puthur Vela",
  // "Thaipoosam",
  // "Uthralikkavu Vella",
  // "Nenmmara Vedi",
];

const Footer = () => {
  const router = useRouter();

  interface FooterData {
    collection: string;
    data: {
      heading: string;
      phone: string;
      mail: string;
      sub_heading: string;
      mail_2: string;
      footer_upcoming_event?: {
        upcoming_event?: {
          heading: string;
          events: { event: string }[];
        };
      }[];
    };
  }
  const [data, setData] = React.useState<FooterData | null>(null);
  const [loading, setLoading] = React.useState(true); // State to track loading state

  React.useEffect(() => {
    axios
      .get("api/get-data")
      .then((res) => {
        if (res.data) {
          const filteredData = res.data.filter(
            (item: { Content: string }) => item.Content === "footer components"
          );

          setData(filteredData?.[0]?.blocks?.[0]); // Set only the filtered content
        } else {
          setData(null); // Set null if no data is available
        }

        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <FooterSkeleton />;

  return (
    <>
      {data?.collection === "footer" && (
        <div className="bg-black p-8 z-0">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-center  gap-5">
            <div className="bg-[#212121] lg:text-2xl md:text-[23px] sm:text-[21px] text-[20px]  h-auto lg:p-0 p-4 flex flex-col items-center justify-center gap-2 w-full  rounded-md text-center font-normal leading-[20px] ">
              <div className="text-white lg:text-[32px] md:text-[28px] sm:text-[24px] text-[20px]">
                {data?.data?.heading}
              </div>
              <div className="text-[#FFDE5C] flex items-center justify-center my-2">
                <FaPhoneAlt className="w-5 h-5 mr-2" />
                {data?.data?.phone}
              </div>
              <div className="text-[#FFDE5C] flex items-center justify-center my-2">
                <IoMdMail className="w-5 h-5 mr-2" />
                {data?.data?.mail}
              </div>
              <div className="text-white">{data?.data?.sub_heading}</div>
              <div className="text-[#FFDE5C] flex items-center justify-center my-2">
                <IoMdMail className="w-5 h-5 mr-2" />
                {data?.data?.mail_2}
              </div>
            </div>
            <div className="bg-[#212121] px-4 py-6 flex flex-col items-center justify-center w-full rounded-md lg:text-[16px] md:text-[15px] sm:text-[14px] text-[13px] font-normal">
              {/* <div className="flex items-center space-x-2 my-2">
            <Circle className="w-8 h-8 text-yellow-500" />
            <span className="text-white font-bold">BookMyPuja</span>
          </div> */}
              <p className="text-white text-justify mb-4 px-3">
                At BookMyPuja, we believe that spirituality and divine
                connection should be accessible to everyone, no matter where
                they are. 
              </p>
              <div className="border-y-2 border-white w-full py-2 pr-1 flex justify-between">
                <Link
                  href={
                    "https://www.facebook.com/profile.php?id=61564160341737"
                  }
                  target="_blank"
                >
                  <FiFacebook className="w-6 h-6 text-blue-500" />
                </Link>
                <Link
                  href={"https://www.instagram.com/bookmy_puja/"}
                  target="_blank"
                >
                  <RiInstagramLine className="w-6 h-6 text-pink-500" />
                </Link>
                <Link
                  href={"https://youtube.com/@bookmypuja?si=rIX_5Rnd0itoSYFl"}
                  target="_blank"
                >
                  {" "}
                  <AiOutlineYoutube className="w-6 h-6 text-red-500" />
                </Link>
                <Link
                  href={"https://www.linkedin.com/company/106116931"}
                  target="_blank"
                >
                  {" "}
                  <FaLinkedin className="w-6 h-6 text-blue-400" />
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-2 my-4 w-full text-left text-white">
                <div className="hover:underline">FAQ</div>
                <Link href={"/terms-and-condition"} className="hover:underline">
                  Terms & Conditions
                </Link>
                <Link href={"/privacy-policy"} className="hover:underline">
                  Privacy Policy
                </Link>
                <Link href={"/blogs"} className="hover:underline">
                  Blog
                </Link>
                <Link href={"/refund-policy"} className="hover:underline">
                  Refund Policy
                </Link>

                <Link href={"/disclaimer"} className="hover:underline">
                  Disclaimer
                </Link>
              </div>

              <div className="flex justify-center  items-center lg:visible sm:hidden text-white">
                <span>Infinix AI Pvt Ltd </span>{" "}
                <MdCopyright className="w-4 h-4 " />
                {""}
                <span>2025 | All rights reserved</span>
              </div>
            </div>
            <div className="text-white w-full flex sm:justify-start md:justify-center lg:justify-center">
              <div className="flex flex-col  space-y-4">
                <h6 className="mt-2 ml-1 text-[24px] font-serif">
                  {
                    data?.data?.footer_upcoming_event?.[0]?.upcoming_event
                      ?.heading
                  }
                </h6>
                <ul className="ml-1 text-[16px] font-inter space-y-2">
                  {(data?.data?.footer_upcoming_event?.[0]?.upcoming_event
                    ?.events?.length || 0) > 0 &&
                    data?.data?.footer_upcoming_event?.[0]?.upcoming_event?.events?.map(
                      (event, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <GiBeveledStar className="w-3 h-3 text-white" />
                          <span className="text-[17px] font-normal">
                            {event?.event}
                          </span>
                        </li>
                      )
                    )}
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full lg:flex md:flex justify-center mt-24 hidden">
            <ol className="flex items-center  whitespace-nowrap">
              <li className="inline-flex items-center">
                <Link
                  className="flex items-center text-[16px] font-inter text-white  "
                  href="/homepage"
                >
                  Home
                </Link>
                <svg
                  className="shrink-0 text-gray-400 dark:text-neutral-600 mx-2"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M6 13L10 3"
                    stroke="currentColor"
                    strokeLinecap="round"
                  ></path>
                </svg>
              </li>
              <li className="inline-flex items-center">
                <Link
                  className="flex items-center text-[16px] font-inter text-white  "
                  href="/blogs"
                >
                  Blogs
                </Link>
                <svg
                  className="shrink-0 text-gray-400 dark:text-neutral-600 mx-2"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M6 13L10 3"
                    stroke="currentColor"
                    strokeLinecap="round"
                  ></path>
                </svg>
              </li>{" "}
              <li className="inline-flex items-center">
                <Link
                  className="flex items-center text-[16px] font-inter text-white  "
                  href="/pricing"
                >
                  Pricing
                </Link>
                <svg
                  className="shrink-0 text-gray-400 dark:text-neutral-600 mx-2"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M6 13L10 3"
                    stroke="currentColor"
                    strokeLinecap="round"
                  ></path>
                </svg>
              </li>{" "}
              <li className="inline-flex items-center">
                <Link
                  className="flex items-center text-[16px] font-inter text-white  "
                  href="/about"
                >
                  About
                </Link>
                <svg
                  className="shrink-0 text-gray-400 dark:text-neutral-600 mx-2"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M6 13L10 3"
                    stroke="currentColor"
                    strokeLinecap="round"
                  ></path>
                </svg>
              </li>{" "}
              <li className="inline-flex items-center">
                <Link
                  className="flex items-center text-[16px] font-inter text-white  "
                  href="/contact"
                >
                  Contact
                </Link>
              </li>
            </ol>
          </div>

          <div className="md:flex justify-center items-center hidden mt-24  text-white">
            <span>Infinix AI Pvt Ltd</span> <MdCopyright className="w-4 h-4 " />
            {""}
            <span>2025 | All rights reserved</span>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
