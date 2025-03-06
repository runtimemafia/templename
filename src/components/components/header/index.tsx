"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import React from "react";
import { openExternalLink, EXTERNAL_URLS } from "@/lib/openExternalLink";
import axios from "axios";
import HeaderSkeleton from "../skeleton/HeaderSkeleton";

const Header = () => {
  const path = usePathname();
  const [isSheetOpen, setIsSheetOpen] = React.useState(false);
  interface DataType {
    collection: string;
    data: {
      logo_1: string;
      logo_2: string;
      navigation_links: { path: string; name: string }[];
      button_label: string;
    };
  }

  const [data, setData] = React.useState<DataType | null>(null);
  const [loading, setLoading] = React.useState(true); // State to track loading state

  React.useEffect(() => {
    axios
      .get("api/get-data")
      .then((res) => {
        if (res.data) {
          const filteredData = res.data.filter(
            (item: { Content: string }) => item.Content === "header components"
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

  // console.log(data);

  if (loading) return <HeaderSkeleton />;

  return (
    <>
      {data?.collection === "header" && (
        <header className="bg-transparent dark:bg-transparent border-none dark:border-none ">
          <nav className="flex lg:p-14 lg:!pr-3 lg:!pb-4 md:p-10 p-4  ">
            <div className="w-[45%] ">
              <Button
                variant={"link"}
                className=" justify-start w-full h-full p-0"
              >
                <img
                  src={data?.data?.logo_1}
                  alt="Book my puja logo"
                  className="lg:!w-[101px] lg:h-[88px] md:!w-[88px] md:h-[88px] !w-[40px] h-[40px] "
                />
                <img
                  src={data?.data?.logo_2}
                  alt="Book my puja logo 2"
                  className="w-[266px] h-[40px] object-cover lg:flex hidden"
                />
              </Button>
              {/* <p className="pl-5 bg-gradient-to-r from-[#FE7967] to-[#03A83A] text-transparent bg-clip-text font-karma font-medium text-[16px]">
            India’s most Trusted Online puja booking platform
          </p> */}
            </div>

            <div className="flex justify-center  md:w-[86%] w-[90%] ">
              <div className="flex justify-center items-center">
                <ul className="hidden lg:flex md:flex items-center font-inter gap-3 text-gray-700 dark:text-gray-400 font-medium">
                  {data?.data?.navigation_links.map((item, index) => (
                    <li
                      key={item.path}
                      className={`${index >= 3 && "hidden md:block lg:block"}`}
                    >
                      <Link
                        href={item.path}
                        className={`py-2 mx-4 text-[16px] rounded-lg hover:no-underline hover:bg-gray-50 dark:hover:bg-gray-700 ${
                          path === item.path
                            ? "text-black font-semibold"
                            : "hover:text-primary-700 dark:hover:text-white"
                        }`}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <div className="hidden lg:flex md:flex lg:justify-center items-center">
                      <Button
                        variant={"curve"}
                        className="bg-[#FFBB00] w-[167px] h-[64px] text-[20px] font-[500] font-david-libre text-black  "
                        onClick={() => openExternalLink(EXTERNAL_URLS.CHAT)}
                      >
                        {data?.data?.button_label}
                      </Button>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <Sheet
              open={isSheetOpen}
              onOpenChange={(isOpen) => setIsSheetOpen(isOpen)}
            >
              <SheetTrigger asChild>
                <button
                  onClick={() => setIsSheetOpen(true)}
                  className="lg:hidden md:hidden  p-3 inline-flex items-center "
                >
                  <Menu className="w-[25px] h-[25px]" size={20} />
                </button>
              </SheetTrigger>

              <SheetContent
                side="top"
                className="bg-white [&_button[data-state='closed']]:hidden   h-[100%] dark:bg-white flex flex-col items-center justify-start transform duration-\[3000ms\] ease-linear"
              >
                <nav className="mt-4 w-full text-center">
                  <ul className="flex flex-col space-y-4 text-[27px] text-[#101A24] font-bold font-david-libre">
                    {data?.data?.navigation_links?.map((item, index) => (
                      <li
                        key={item.name}
                        className={`opacity-0 transform translate-y-5 animate-fadeIn`}
                        style={{ animationDelay: `${index * 180}ms` }} // Stagger effect
                      >
                        <a
                          href={item.path}
                          className="block py-2 px-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-primary-700 dark:hover:text-white"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
                <div>
                  <img
                    src="https://res.cloudinary.com/dpaigt2bx/image/upload/v1739790787/Untitled_design_3_pvy2yf_orx1ge.webp"
                    alt=""
                    className="absolute  pointer-events-none right-[-101.44px] top-[-80px] object-cover w-[458px] h-[521px] opacity-[12%] "
                  />
                  <Image
                    width={278}
                    height={117}
                    src="https://res.cloudinary.com/dpaigt2bx/image/upload/v1739790769/6_oka7ir_lsgjbx.webp"
                    alt=""
                    className="absolute  pointer-events-none  left-[-80.4px] top-[280.64px] opacity-[8%] transform -rotate-12 scale-x-[-1] "
                  />
                  <img
                    src="https://res.cloudinary.com/dpaigt2bx/image/upload/v1739790769/4_3_rswbdm_socpne.webp"
                    alt=""
                    className="absolute  h-[169px] w-[160px] top-[10px] left-[-40px] opacity-[22%]"
                  />
                </div>
              </SheetContent>
            </Sheet>
          </nav>
        </header>
      )}
    </>
  );
};

export default Header;
