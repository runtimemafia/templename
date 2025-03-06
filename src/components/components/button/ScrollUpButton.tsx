"use client";
import React, { useEffect, useState } from "react";
import { CgChevronDoubleUp } from "react-icons/cg";

const ScrollUpButton = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    if (scrollTop > documentHeight / 3 - windowHeight / 3) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const backToTop = () => {
    document.documentElement.style.scrollBehavior = "smooth";
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      onClick={backToTop}
      aria-label="scroll to top"
      className={`${
        showButton ? `inline-block` : `hidden`
      } sm:w-12 sm:h-12 w-8 h-8 transition-transform duration-200  z-40  flex fixed sm:right-20 right-10 sm:bottom-28 bottom-24 bg-transparent rounded-full  justify-center items-center`}
    >
      <CgChevronDoubleUp
        size={50}
        className="animate-[bounce_2s_linear_infinite] text-[#F0B534]"
      />
    </button>
  );
};

export default ScrollUpButton;
