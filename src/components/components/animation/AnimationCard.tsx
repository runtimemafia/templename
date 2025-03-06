"use client";
import React, { useState, useRef, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

interface Card {
  id: number;
  image: string;
  title: string;
  description: string | JSX.Element;
}

const CarouselCards = ({ cards }: { cards: Card[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animatingCard, setAnimatingCard] = useState<number | string | null>(
    null
  );
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // const cards = [
  //   {
  //     id: 1,
  //     image:
  //       "https://res.cloudinary.com/dpaigt2bx/image/upload/v1739790781/painting-representing-krishna_ri9xzu_a9qi4p.webp",
  //     title: "Who We Are?",
  //     description:
  //       "Welcome to BookMyPuja, your trusted platform for connecting with India’s sacred temples and rituals. We’re on a mission to simplify your spiritual journey by offering a seamless way to book temple pujas, customize rituals, and make meaningful contributions to the community.",
  //   },
  //   {
  //     id: 2,
  //     image:
  //       "https://res.cloudinary.com/dpaigt2bx/image/upload/v1739790783/realistic-lord-arjuna-is-aiming-enemy-with-arrow_1033529-1221_ugwmpv_cxegq1.webp",
  //     title: "Our Vision",
  //     description:
  //       "To bridge tradition and technology, enabling everyone to stay connected to their spiritual roots, no matter where they are",
  //   },
  //   {
  //     id: 3,
  //     image:
  //       "https://res.cloudinary.com/dpaigt2bx/image/upload/v1739790779/lord-hanuman-meditating-peaceful-background-ai-generated_1020331-5767_prp4ya_rm6xwn.webp",
  //     title: "What We Do?",
  //     description: (
  //       <div>
  //         At BookMyPuja, we: <br />
  //         <ul className="list-disc lg:ml-6 md:ml-6 sm:ml-6 ml-0">
  //           <li>
  //             Simplify Puja Bookings: Choose from a wide range of temples and
  //             rituals across India with just a few clicks.{" "}
  //           </li>
  //           <li>
  //             Personalize Rituals: Tailor your offerings and mantras to suit
  //             your spiritual goals.
  //           </li>
  //           <li>
  //             Support Temples: Contribute to temples and charitable causes
  //             through our secure online donation system.
  //           </li>
  //         </ul>
  //       </div>
  //     ),
  //   },
  //   {
  //     id: 4,
  //     image:
  //       "https://res.cloudinary.com/dpaigt2bx/image/upload/v1739790770/c31044d0e8d51d5db9e7b5a50fd8f9e8_bv4oyb_dqayzz.webp",
  //     title: "Why Choose Us?",
  //     description: (
  //       <div>
  //         Convenience: Access sacred rituals from anywhere in the world. <br />
  //         Transparency: Receive real-time updates, invoices, and confirmation
  //         details. <br />
  //         Community Impact: Every transaction contributes to the upliftment of
  //         temples and local communities.
  //       </div>
  //     ),
  //   },
  //   {
  //     id: 5,
  //     image:
  //       "https://res.cloudinary.com/dpaigt2bx/image/upload/v1739790775/fantasy-rama-navami-celebration_2_pfeffk_atvyya.webp",
  //     title: "Our Commitment",
  //     description:
  //       "We’re dedicated to preserving India’s rich spiritual heritage while empowering devotees and temples alike. Through innovative technology and heartfelt dedication, we aim to provide a platform that resonates with trust, transparency, and tradition.",
  //   },
  // ];

  const handleSlideChange = (nextIndex: number) => {
    if (isAnimating) return;

    setIsAnimating(true);
    setAnimatingCard(currentIndex);

    setTimeout(() => {
      setAnimatingCard(`${currentIndex}-stage2`);

      setTimeout(() => {
        setAnimatingCard(null);
        setCurrentIndex(nextIndex);

        setTimeout(() => {
          setIsAnimating(false);
        }, 500);
      }, 1000);
    }, 1000);
  };

  const handleWheel = (e: WheelEvent) => {
    e.preventDefault();
    if (isAnimating) return;

    const direction = e.deltaY > 0 ? 1 : -1;
    const nextIndex = (currentIndex + direction + cards.length) % cards.length;
    handleSlideChange(nextIndex);
  };

  const handleClick = () => {
    handleSlideChange(currentIndex + 1);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("wheel", handleWheel, { passive: false });
      container.addEventListener("click", handleClick);
      return () => {
        container.removeEventListener("wheel", handleWheel);
        container.removeEventListener("click", handleClick);
      };
    }
  }, [currentIndex, isAnimating]);

  const getCardStyle = (index: number) => {
    // Calculate next index for preview
    const nextIndex = (currentIndex + 1) % cards.length;

    if (animatingCard === index) {
      return "z-20 -translate-y-1/4 -rotate-2 scale-95 opacity-100 transition-all duration-1000 ease-in-out";
    }

    if (animatingCard === `${index}-stage2`) {
      return "z-20 -translate-y-full -rotate-4 opacity-0 scale-90 transition-all duration-1000 ease-in-out";
    }

    if (index === currentIndex) {
      return "transform translate-x-0 z-20 scale-100 opacity-100 transition-all duration-500 ease-out";
    }

    if (index === nextIndex) {
      // Preview of next slide
      return "transform translate-x-[0%] z-10 scale-95 opacity-90 transition-all duration-500 ease-out";
    }

    // Other slides
    const position = (index - currentIndex) * 100 + 100;
    return `transform translate-x-[${position}%] z-0 scale-90 opacity-0 transition-all duration-500 ease-out`;
  };

  return (
    <div
      ref={containerRef}
      className="relative  w-full max-w-[1512px]  mx-auto lg:h-[495px] md:h-[495px] sm:h-[230px] h-[200px] mt-8 overflow-hidden "
    >
      <div className="flex items-center h-full">
        {cards.map((card, index) => (
          <Card
            key={card.id}
            className={`absolute w-[95%] h-full group
              ${getCardStyle(index)}
                 border-none`}
            onClick={() => !isAnimating && handleSlideChange(index)}
          >
            {/* {index === (currentIndex + 1) % cards.length && (
              <div className="absolute -left-2 top-4 bg-blue-500 text-white px-3 py-1 rounded-r-lg text-sm transform -translate-x-full opacity-0 group-hover:opacity-100 transition-opacity">
                Next
              </div>
            )} */}

            <CardContent className="p-0 h-full flex items-center cursor-pointer overflow-hidden">
              <div className={`w-full h-full   transition-all ease-in-out `}>
                <div className="flex h-full items-center justify-center font-inter animate-fade-up bg-[#E7E7FF] shadow-md rounded-lg border border-[#d2d2d2]  md:p-6 sm:p-4 p-2">
                  <div className="flex-shrink-0 mr-6 ">
                    <Image
                      height={429}
                      width={444}
                      src={card.image}
                      alt={card.title}
                      className="object-cover lg:h-[429px] lg:w-[444px] md:h-[329px] md:w-[344px] sm:h-[229px] sm:w-[244px] w-[120px] h-[142px] rounded-lg shadow-[12px_12px_12px_2px_#00000010]"
                    />
                  </div>
                  <div className="flex-1 flex flex-col h-full  justify-center">
                    <h2 className="lg:text-[96px] md:text-[35px] sm:text-[30px] text-[18px] font-semibold text-black lg:mb-3 md:mb-2 sm:mb-1 mb-0">
                      {card.title}
                    </h2>
                    <div
                      dangerouslySetInnerHTML={{ __html: card.description }}
                      className="text-gray-700 lg:text-[22px] md:text-[14px] sm:text-[12px] text-[9px] leading-relaxed"
                    ></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="absolute flex flex-col lg:top-1/3 md:top-1/3 sm:top-1/4 top-1/4 gap-4 lg:right-0 md:right-0 sm:right-[-4px] right-[-4px] transform -translate-x-1/2  ">
        {cards.map((_, index) => (
          <button
            key={index}
            className={` rounded-full transition-all duration-300
              ${
                index === currentIndex
                  ? "bg-blue-500 lg:w-[27px] lg:h-[27px] md:w-[20px] md:h-[20px] sm:w-[15px] sm:h-[15px] w-[10px] h-[10px]"
                  : "bg-gray-300 lg:w-[27px] lg:h-[27px] md:w-[20px] md:h-[20px] sm:w-[15px] sm:h-[15px] w-[10px] h-[10px]"
              }`}
            onClick={() => !isAnimating && handleSlideChange(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default CarouselCards;
