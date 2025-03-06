"use client";
import { Button } from "@/components/ui/button";
import { EXTERNAL_URLS, openExternalLink } from "@/lib/openExternalLink";
import React, { useRef } from "react";

const AnimationButton = ({ label }: { label: string }) => {
  const [scrollPosition, setScrollPosition] = React.useState(0);
  const bookPujaButtonRef = useRef<HTMLButtonElement>(null);
  const [pos, setPos] = React.useState<number | null>(null);

  React.useEffect(() => {
    if (bookPujaButtonRef.current) {
      const rect = bookPujaButtonRef.current.offsetTop;
      setPos(rect);
    }
  }, []);
  React.useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const getButtonStyles = () => {
    if (pos !== null && scrollPosition > pos) {
      return {
        position: "fixed",
        bottom: "24px",
        right: "24px",
        transition: "all 4s cubic-bezier(0.4, 0, 0.2, 1)",
        transform: "translate(0, 0)",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        zIndex: 50,
      };
    }
    return {
      position: "relative",
      transition: "all 5s cubic-bezier(0.4, 0, 0.2, 1)",
      transform: "translate(0, 0)",
      boxShadow: "none",
    };
  };
  return (
    <>
      {" "}
      <Button
        ref={bookPujaButtonRef}
        variant={"curve"}
        style={getButtonStyles() as React.CSSProperties}
        onClick={() => openExternalLink(EXTERNAL_URLS.CHAT)}
        className="relative bg-[#FFBB00] hover:z-30 hover:bg-[#FFBB00]  text-[#101A24] px-6 py-2 sm:w-[167px] w-[140px] h-[54px] overflow-hidden group"
      >
        <span className="z-40"> {label}</span>

        <div
          className="wave w-[300px] h-[200px] bg-yellow-300 shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] absolute left-0 top-[-80px] transition-all duration-400 
       before:content-[''] before:w-[200%] before:h-[200%] before:absolute before:top-0 before:left-[50%] before:translate-x-[-50%] before:translate-y-[-75%] 
       before:rounded-[45%] before:bg-[#ffbb00c7] before:animate-[wave_4s_linear_infinite] group-hover:before:animate-none 
       after:content-[''] after:w-[200%] after:h-[200%] after:absolute after:top-0 after:left-[50%] after:translate-x-[-50%] after:translate-y-[-75%] 
       after:rounded-[40%] after:bg-[#ffbb003c] after:animate-[wave_6s_linear_infinite] group-hover:bg-[#FFBB00] group-hover:after:animate-none"
        ></div>
      </Button>
    </>
  );
};

export default AnimationButton;
