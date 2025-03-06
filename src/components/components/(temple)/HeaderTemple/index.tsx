"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import AnimationButton from "../../animation/AnimationButton";
import Image from "next/image";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useFloatingButtonStore } from "@/lib/store";

const HeaderTemple = () => {
  const [isSheetOpen, setIsSheetOpen] = React.useState(false);

  const isFloatingButtonVisible = useFloatingButtonStore(
    (state) => state.isFloatingButtonVisible
  );

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { name: "Home", sectionId: "home" },
    { name: "About", sectionId: "about" },
    { name: "Event", sectionId: "event" },
    { name: "Update", sectionId: "update" },
  ];

  return (
    <>
      <nav className=" p-4 md:my-8 my-2 relative">
        <ul className="flex justify-center font-inter space-x-6 mr-4">
          {navItems.map((item) => (
            <li key={item.sectionId}>
              <button
                onClick={() => scrollToSection(item.sectionId)}
                className="md:text-[24px] text-[15px] font-normal transition-colors duration-200 text-[#B5ABAB] hover:text-gray-700"
              >
                {item.name}
              </button>
            </li>
          ))}

          <Sheet
            open={isSheetOpen}
            onOpenChange={(isOpen) => setIsSheetOpen(isOpen)}
          >
            <SheetTrigger asChild>
              <button
                onClick={() => setIsSheetOpen(true)}
                className="lg:hidden md:hidden  p-3 inline-flex items-center absolute right-[3%] top-[2.4%]"
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
                  {navItems.map((item) => (
                    <li key={item.sectionId}>
                      <button
                        onClick={() => {
                          setIsSheetOpen(false),
                            scrollToSection(item.sectionId);
                        }}
                        className="md:text-[28px] text-[24px] font-normal transition-colors duration-200 text-[#B5ABAB] hover:text-gray-700"
                      >
                        {item.name}
                      </button>
                    </li>
                  ))}
                  <li>
                    <AnimationButton label="Book Puja" />
                  </li>
                </ul>
              </nav>
            </SheetContent>
          </Sheet>

          {isFloatingButtonVisible && (
            <div className="absolute w-[163px] h-[53px] md:flex hidden rounded-[24px_5px_24px_5px] top-3 right-[5%]">
              <AnimationButton label="Book Puja" />
            </div>
          )}
        </ul>
        {/* <Button
          variant={"curve"}
          className="absolute w-[163px] h-[53px] md:flex lg:flex hidden rounded-[24px_5px_24px_5px] bg-[#EF973F] top-3 right-[5%]"
        >
          Book puja
        </Button> */}
        {/* <div className="w-full flex justify-end">
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
                  {navItems.map((item) => (
                    <li key={item.sectionId}>
                      <button
                        onClick={() => {
                          setIsSheetOpen(false),
                            scrollToSection(item.sectionId);
                        }}
                        className="md:text-[28px] text-[24px] font-normal transition-colors duration-200 text-[#B5ABAB] hover:text-gray-700"
                      >
                        {item.name}
                      </button>
                    </li>
                  ))}
                  <li>
                    <AnimationButton label="Book Puja" />
                  </li>
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
        </div> */}
      </nav>
    </>
  );
};

export default HeaderTemple;
