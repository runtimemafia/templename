import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Image {
  image_url: string;
  image_name: string;
}

interface ImageSwiper2Props {
  images: Image[];
}

const ImageSwiper2: React.FC<ImageSwiper2Props> = ({ images }) => {
  console.log(images);

  const [currentIndex, setCurrentIndex] = useState(2); // Start with middle image

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? images?.length - 1 : currentIndex - 1);
  };

  const nextSlide = () => {
    setCurrentIndex(currentIndex === images?.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <Card className="w-full flex flex-col md:hidden mx-auto p-0  shadow-none bg-transparent border-none">
      <div className="relative flex justify-center items-center gap-2 h-40 overflow-hidden">
        {images?.map((image, index) => {
          // Calculate the position relative to current index
          const position =
            (index - currentIndex + images?.length) % images?.length;
          // Calculate size and visibility based on position
          let width = "w-[67px]"; // Default small width
          let opacity = "opacity-100";
          let zIndex = "z-0";

          if (position === 0) {
            // Center image
            width = "w-[140px]";
            zIndex = "z-20";
          } else if (position === 1 || position === images?.length - 1) {
            // Adjacent images
            width = "w-16";
            zIndex = "z-10";
            opacity = "opacity-50";
          } else {
            // Edge images
            width = "w-8 sm:w-16";
            opacity = "opacity-50";
          }

          return (
            <div
              key={index}
              className={`transition-all duration-300 h-[147px] ${width} ${opacity} ${zIndex} relative`}
            >
              <img
                src={image.image_url}
                alt={image.image_name}
                className="h-full w-full object-cover rounded-lg"
              />
            </div>
          );
        })}

        {/* Navigation buttons */}
        <Button
          variant="ghost"
          className="absolute left-0 z-30 p-2 bg-black/30 hover:bg-black/50 text-white rounded-full"
          onClick={prevSlide}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <Button
          variant="ghost"
          className="absolute right-0 z-30 p-2 bg-black/30 hover:bg-black/50 text-white rounded-full"
          onClick={nextSlide}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center space-x-3 mt-4">
        {images?.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-[14px] h-[10px] rounded-full transition-colors duration-300 ${
              index === currentIndex ? "bg-[#EF973F] w-[38px]" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </Card>
  );
};

export default ImageSwiper2;
