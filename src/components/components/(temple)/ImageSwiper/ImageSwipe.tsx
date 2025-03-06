import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  {
    url: "./temple1.png",
    alt: "Temple entrance with colorful architecture",
  },
  {
    url: "./temple2.png",
    alt: "Golden statue in front of trees",
  },
  {
    url: "./temple1.png",
    alt: "Temple entrance with statues and trees",
  },
  {
    url: "./temple2.png",
    alt: "Close up of golden statue",
  },
  {
    url: "./temple1.png",
    alt: "Temple side view",
  },
];

const ImageSwipe = () => {
  const [activeIndex, setActiveIndex] = useState(2);

  const getOrder = (index: number) => {
    const diff = index - activeIndex;
    const totalImages = images.length;

    if (diff < -(totalImages - 1) / 2) return diff + totalImages;
    if (diff > totalImages / 2) return diff - totalImages;
    return diff;
  };

  const moveCarousel = (direction: number) => {
    setActiveIndex((current) => {
      let newIndex = current + direction;
      if (newIndex < 0) newIndex = images.length - 1;
      if (newIndex >= images.length) newIndex = 0;
      return newIndex;
    });
  };

  return (
    <Card className="w-full md:hidden flex flex-col items-center mx-auto p-4 shadow-none bg-transparent border-none">
      <div className="relative w-full h-[147px] flex justify-center items-center">
        {/* Container for all images */}
        <div className="absolute left-1/2 w-[139px] h-full">
          {images.map((image, index) => {
            const order = getOrder(index);
            const isActive = order === 0;

            // Calculate position and styles
            let translateX = order * 90;
            let zIndex = 20 - Math.abs(order);
            let opacity = 1 - Math.abs(order) * 0.2;
            let scale = 1;
            let width = isActive ? "w-[139px]" : "w-[66px]";

            if (Math.abs(order) > 2) {
              opacity = 0;
              scale = 0;
            }

            return (
              <div
                key={index}
                className={`absolute top-0 left-0 transition-all duration-500 ease-in-out h-[147px] ${width}`}
                style={{
                  transform: `translateX(${
                    translateX - (isActive ? 0 : 66) / 2
                  }px) scale(${scale})`,
                  opacity,
                  zIndex,
                }}
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className={`h-full w-full object-cover rounded-lg transition-all duration-500
                    ${isActive ? "brightness-100" : "brightness-75"}`}
                />
              </div>
            );
          })}
        </div>

        {/* Navigation buttons */}
        <Button
          variant="ghost"
          className="absolute left-4 z-30 p-2 bg-black/30 hover:bg-black/50 text-white rounded-full"
          onClick={() => moveCarousel(-1)}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <Button
          variant="ghost"
          className="absolute right-4 z-30 p-2 bg-black/30 hover:bg-black/50 text-white rounded-full"
          onClick={() => moveCarousel(1)}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Indicators */}
      <div className="flex justify-center space-x-2 mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
              index === activeIndex ? "bg-orange-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </Card>
  );
};

export default ImageSwipe;
