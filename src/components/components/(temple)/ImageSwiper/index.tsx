"use client";
import React, { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ImageSwiper = () => {
  const [currentIndex, setCurrentIndex] = useState(2);
  const [isMobile, setIsMobile] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const images = [
    "/carousel-1.png",
    "/carousel-2.avif",
    "/carousel-3.avif",
    "/carousel-4.jpg",
    "/carousel-5.jpg",
  ];

  const normalizeIndex = (index: number) => {
    if (index < 0) return images.length - 1;
    if (index >= images.length) return 0;
    return index;
  };

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => normalizeIndex(prev + 1));
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => normalizeIndex(prev - 1));
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const getVisibleImages = () => {
    return [-2, -1, 0, 1, 2].map((offset) => ({
      index: normalizeIndex(currentIndex + offset),
      offset,
    }));
  };

  const getImageStyle = (offset: number) => {
    const baseWidth = isMobile ? 100 : 139;
    const previewWidth = isMobile ? 40 : 66;
    const centerSpacing = isMobile ? 85 : 120; // Spacing for center slides
    const edgeSpacing = isMobile ? 20 : 30; // Reduced spacing for edge slides

    let width = baseWidth;
    if (Math.abs(offset) === 1) width = previewWidth;
    if (Math.abs(offset) === 2) width = previewWidth;

    // Calculate spacing based on offset
    let xOffset;
    if (Math.abs(offset) === 1) {
      xOffset = offset * centerSpacing;
    } else if (Math.abs(offset) === 2) {
      xOffset = offset * (centerSpacing + edgeSpacing); // Adjusted spacing for edge slides
    } else {
      xOffset = 0;
    }

    const style: React.CSSProperties = {
      width: `${width}px`,
      height: isMobile ? "120px" : "147px",
      transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
      position: "absolute",
      left: "50%",
      transform: `translateX(-50%) translateX(${xOffset}px)`,
      zIndex: 10 - Math.abs(offset),
      opacity: Math.abs(offset) === 2 ? 0.5 : 1,
      visibility: Math.abs(offset) <= 2 ? "visible" : "hidden",
    };

    // Add clip-path for edge images
    if (Math.abs(offset) === 2) {
      if (offset < 0) {
        style.clipPath = "inset(0 50% 0 0)";
      } else {
        style.clipPath = "inset(0 0 0 50%)";
      }
    }

    return style;
  };

  return (
    <Card className="w-full mx-auto overflow-hidden">
      <div
        className="relative mx-auto px-4 py-8"
        style={{
          height: isMobile ? "150px" : "180px",
          width: "100%",
        }}
      >
        <div className="relative h-full overflow-hidden">
          {getVisibleImages().map(({ index, offset }) => (
            <div
              key={index}
              className="absolute top-0 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out"
              style={getImageStyle(offset)}
            >
              <div className="w-full h-full overflow-hidden">
                <img
                  src={images[index]}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    // Fallback in case the image fails to load
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <Button
          variant="secondary"
          size="icon"
          className={`absolute left-6 top-1/2 transform -translate-y-1/2 z-20
            ${isMobile ? "w-8 h-8" : "w-10 h-10"}
            transition-transform duration-200 hover:scale-110`}
          onClick={prevSlide}
          disabled={isTransitioning}
        >
          <ChevronLeft className={isMobile ? "h-4 w-4" : "h-6 w-6"} />
        </Button>

        <Button
          variant="secondary"
          size="icon"
          className={`absolute right-6 top-1/2 transform -translate-y-1/2 z-20
            ${isMobile ? "w-8 h-8" : "w-10 h-10"}
            transition-transform duration-200 hover:scale-110`}
          onClick={nextSlide}
          disabled={isTransitioning}
        >
          <ChevronRight className={isMobile ? "h-4 w-4" : "h-6 w-6"} />
        </Button>

        {/* Dots Navigation */}
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentIndex === index ? "bg-blue-600 scale-125" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </Card>
  );
};

export default ImageSwiper;
