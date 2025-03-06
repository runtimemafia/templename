"use client";
// KuthiranmalaCarousel.tsx
import React, { useCallback, useEffect, useState, useRef } from "react";
import { Carousel, Embla } from "@mantine/carousel";
import { Progress, Box } from "@mantine/core";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { Container } from "@/components/ui/container";

const THEME = {
  primary: "#FACE00",
  primaryDark: "#E1B800",
  primaryLight: "#FFF4CC",
  textPrimary: "#1A1A1A",
  textSecondary: "#4A4A4A",
  background: "#FFFFFF",
  shadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
  headerHeight: "64px",
};

interface CarouselImage {
  src: string;
  alt: string;
  blurDataURL?: string;
}

const CarouselImage = ({
  image,
  index,
  priority = false,
}: {
  image: CarouselImage;
  index: number;
  priority?: boolean;
}) => (
  <div style={{ position: "relative", width: "100%", height: "400px" }}>
    <Image
      src={image.src}
      alt={image.alt}
      fill
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      quality={75}
      priority={priority}
      loading={priority ? "eager" : "lazy"}
      placeholder="blur"
      blurDataURL={
        image.blurDataURL ||
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx0cHBwcHx8kHx0fHx8lJSAgICAgJSUlHh4eJSUuLi4lJTAwMDAwMDAwMDAwMDAzM//2wBDARUXFyAeIBwgIDw8gHiUlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICD/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
      }
      style={{
        objectFit: "cover",
        borderRadius: "12px",
      }}
    />
  </div>
);

interface KuthiranmalaCarouselProps {
  carouselImage: CarouselImage[];
}

const KuthiranmalaCarousel = ({ carouselImage }: KuthiranmalaCarouselProps) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [embla, setEmbla] = useState<Embla | null>(null);

  const autoplay = useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  );

  const handleScroll = useCallback(() => {
    if (!embla) return;
    const progress = Math.max(0, Math.min(1, embla.scrollProgress()));
    setScrollProgress(progress * 100);
  }, [embla]);

  useEffect(() => {
    if (embla) {
      embla.on("scroll", handleScroll);
      handleScroll();
    }
  }, [embla, handleScroll]);
  return (
    <Container className="flex md:hidden m-0">
      <Box style={{ position: "relative", marginTop: "4px" }}>
        <Carousel
          withIndicators
          height={350}
          slideSize="70%"
          slideGap="md"
          loop
          align="center"
          getEmblaApi={setEmbla}
          plugins={[autoplay.current]}
          styles={{
            root: { width: "100%" },
            viewport: {
              borderRadius: "12px",
              overflow: "hidden",
            },
            control: {
              backgroundColor: THEME.background,
              color: THEME.textPrimary,
              border: "none",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
              "&[dataInactive]": {
                opacity: 0,
                cursor: "default",
              },
            },
            indicator: {
              width: "6px",
              height: "6px",
              transition: "width 0.2s ease",
              backgroundColor: THEME.primaryLight,
              "&[dataActive]": {
                width: "24px",
                backgroundColor: THEME.primary,
                borderRadius: "4px",
              },
            },
          }}
        >
          {carouselImage?.map((image, index) => (
            <Carousel.Slide key={index}>
              <CarouselImage
                image={image}
                index={index}
                priority={index === 0}
              />
            </Carousel.Slide>
          ))}
        </Carousel>

        <Progress
          value={scrollProgress}
          size="xs"
          color={THEME.primary}
          style={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            backgroundColor: "rgba(0,0,0,0.1)",
            borderRadius: 0,
          }}
        />
      </Box>
    </Container>
  );
};

export default KuthiranmalaCarousel;
