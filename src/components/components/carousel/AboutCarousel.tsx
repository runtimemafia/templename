"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Pagination, Navigation, Mousewheel, EffectFade } from "swiper/modules";
import Image from "next/image";
import "../../../styles/aboutCarousel.css";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const EssayWritingSwiper = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const onSlideChangeStart = (swiper: any) => {
    setActiveIndex(swiper.activeIndex);
  };

  const slides = [
    {
      id: 1,
      image: "/carousel-1.jpg",
      title: "Who We Are?",
      description:
        "Welcome to BookMyPuja, your trusted platform for connecting with India’s sacred temples and rituals. We’re on a mission to simplify your spiritual journey by offering a seamless way to book temple pujas, customize rituals, and make meaningful contributions to the community.",
    },
    {
      id: 2,
      image: "/carousel-2.avif",
      title: "Our Vision",
      description:
        "To become the most trusted essay writing service provider, helping individuals articulate their thoughts effectively and enhancing their writing skills.",
    },
    {
      id: 3,
      image: "/carousel-3.avif",
      title: "What We Do?",
      description: (
        <div>
          At BookMyPuja, we: <br />
          <ul className="list-disc ml-6">
            <li>
              Simplify Puja Bookings: Choose from a wide range of temples and
              rituals across India with just a few clicks.{" "}
            </li>
            <li>
              Personalize Rituals: Tailor your offerings and mantras to suit
              your spiritual goals.
            </li>
            <li>
              Support Temples: Contribute to temples and charitable causes
              through our secure online donation system.
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: 4,
      image: "/carousel-4.jpg",
      title: "Why Choose Us?",
      description: (
        <div>
          Convenience: Access sacred rituals from anywhere in the world. <br />
          Transparency: Receive real-time updates, invoices, and confirmation
          details. <br />
          Community Impact: Every transaction contributes to the upliftment of
          temples and local communities.
        </div>
      ),
    },
    {
      id: 5,
      image: "/carousel-5.jpg",
      title: "Our Commitment",
      description:
        "We’re dedicated to preserving India’s rich spiritual heritage while empowering devotees and temples alike. Through innovative technology and heartfelt dedication, we aim to provide a platform that resonates with trust, transparency, and tradition.",
    },
  ];
  const cardsData = [
    {
      title: "Comment Card 1",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent bibendum, lorem vel tincidunt imperdiet, nibh elit laoreet felis...",
    },
    {
      title: "Comment Card 2",
      content:
        "Vestibulum nunc massa, gravida quis porta nec, feugiat id metus. Nunc ac arcu dolor, quis vestibulum leo. Cras viverra mollis ipsum...",
    },
    {
      title: "Comment Card 3",
      content:
        "Donec nunc ligula, vulputate quis mollis eu, interdum quis libero. Donec nulla ante, facilisis sit amet vulputate at, tincidunt a velit...",
    },
    {
      title: "Comment Card 4",
      content:
        "Donec nunc ligula, vulputate quis mollis eu, interdum quis libero. Donec nulla ante, facilisis sit amet vulputate at, tincidunt a velit...",
    },
  ];

  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handleCardClick = (index: number) => {
    if (currentIndex !== index) {
      setCurrentIndex(index);
    }
  };

  return (
    <>
      <div className=" mx-auto mt-20 min-w-[34em]">
        <ul className="cards list-none p-0 relative">
          {cardsData?.map((card, index) => {
            // Card State Management (current, next, out)
            const isCurrent = index === currentIndex;
            const isNext = index === (currentIndex + 1) % cardsData?.length; // Circular next index
            const isOut =
              index !== currentIndex &&
              index !== (currentIndex + 1) % cardsData?.length;

            const cardClasses = `
            absolute top-0 left-0 z-[${
              isCurrent ? 10 : isNext ? 5 : isOut ? 1 : 2
            }] 
            bg-gray-300 rounded-2xl p-10 shadow-lg 
            transition-transform duration-700 
            ${
              isCurrent
                ? "transform translate-x-0 rotate-[-1deg] scale-100"
                : isNext
                ? "transform translate-y-[-25px] rotate-[4deg] scale-100"
                : isOut
                ? "transform translate-y-[-50px] rotate-[8deg] scale-95 bg-gray-400"
                : ""
            }
          `;

            return (
              <li
                key={index}
                className={cardClasses}
                onClick={() => handleCardClick(index)}
              >
                <h1 className="text-xl font-bold">{card.title}</h1>
                <p className="mt-4 text-gray-700">{card.content}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </>
    // <div className="w-full flex items-center justify-center mt-10">
    //   <Swiper
    //     spaceBetween={50}
    //     slidesPerView={1}
    //     loop={true}
    //     pagination={{ clickable: true }}
    //     direction="vertical"
    //     mousewheel={true}
    //     effect="fade"
    //     fadeEffect={{ crossFade: true }}
    //     modules={[Pagination, Navigation, Mousewheel, EffectFade]}
    //     onSlideChangeTransitionStart={onSlideChangeStart}
    //     onSlideChangeTransitionEnd={onSlideChangeStart}
    //     className="w-full max-w-[1501px] lg:max-h-[500px] md:max-h-[400px] sm:max-h-[300px] max-h-[200px]"
    //   >
    //     {slides.map((slide, index) => (
    //       <SwiperSlide key={slide.id}>
    //         <div
    //           className={`w-[95%] transition-all ease-in-out ${
    //             activeIndex === index ? "animate-slide-in" : "animate-slide-out"
    //           }`}
    //         >
    //           <div className="flex items-center justify-center font-inter animate-fade-up bg-[#E7E7FF] shadow-md rounded-lg border border-[#d2d2d2] lg:p-8 md:p-6 sm:p-4 p-2">
    //             <div className="flex-shrink-0 mr-6">
    //               <Image
    //                 height={429}
    //                 width={444}
    //                 src={slide.image}
    //                 alt={slide.title}
    //                 className="lg:h-[429px] lg:w-[444px] md:h-[329px] md:w-[344px] sm:h-[229px] sm:w-[244px] w-[120px] h-[142px] rounded-lg shadow-[12px_12px_12px_2px_#00000010]"
    //               />
    //             </div>
    //             <div className="flex-1 h-full">
    //               <h2 className="lg:text-[96px] md:text-[45px] sm:text-[30px] text-[22px] font-semibold text-black lg:mb-4 md:mb-3 sm:mb-2 mb-1">
    //                 {slide.title}
    //               </h2>
    //               <div className="text-gray-700 lg:text-[24px] md:text-[16px] sm:text-[12px] text-[10px] leading-relaxed">
    //                 {slide.description}
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </SwiperSlide>
    //     ))}
    //   </Swiper>
    // </div>
  );
};

export default EssayWritingSwiper;
