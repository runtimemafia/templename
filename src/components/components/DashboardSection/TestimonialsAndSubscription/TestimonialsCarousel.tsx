"use client";

import React from "react";
import "../../../../styles/testimonialscarousel.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import { FaStar } from "react-icons/fa6";
import { motion } from "framer-motion";

interface Testimonial {
  testimonials_carousel: {
    id: number;
    testimonial_image: string;
    testimonial_starts: number;
    testimonial_description: string;
    testimonial_name: string;
  };
}

interface TestimonialsCarouselProps {
  carousel: Testimonial[];
}

const TestimonialsCarousel: React.FC<TestimonialsCarouselProps> = ({
  carousel,
}) => {
  return (
    <div className="w-full flex lg:justify-start md:justify-start sm:justify-center mt-10 ">
      <Swiper
        spaceBetween={90}
        slidesPerView={2}
        loop={true}
        grabCursor={true}
        centeredSlides={true}
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="custom-swiper"
      >
        {carousel?.map((testimonial) => (
          <SwiperSlide
            key={testimonial.testimonials_carousel.id}
            style={{
              width: "739px",
              height: 550,
              display: "flex",
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              // viewport={{ once: true }}
              className="m-14 w-[639px] h-[391px] relative"
            >
              {/* Image Animation */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
                className="absolute top-[-50px] left-[40%] transform -translate-x-1/2"
              >
                <img
                  src={testimonial.testimonials_carousel.testimonial_image}
                  alt="avatar"
                  className="h-[109px] w-[109px] object-cover rounded-full shadow-md"
                />
              </motion.div>

              {/* Testimonial Card */}
              <div className="bg-white shadow-[0px_0px_30px_0px_#00000030] text-center !rounded-br-[100px] !rounded-tl-[100px] rounded-[50px] pt-12 px-4 flex flex-col items-center justify-center h-full">
                {/* Star Animation */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
                  // viewport={{ once: true }}
                  className="absolute flex gap-1 top-20 text-[#FFBB00] text-[16px] font-[900] left-1/2 transform -translate-x-1/2"
                >
                  {Array.from({
                    length:
                      testimonial.testimonials_carousel.testimonial_starts,
                  }).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                    >
                      <FaStar className="w-[20px]" />
                    </motion.div>
                  ))}
                </motion.div>

                {/* Testimonial Text Animation */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
                  // viewport={{ once: true }}
                  className="w-[383px] h-[223px] flex flex-col flex-wrap justify-center items-center"
                >
                  <p className="text-[16px] leading-7 text-[#5C6574] font-inter font-normal text-center">
                    {testimonial.testimonials_carousel.testimonial_description}
                  </p>
                  <div className="text-[16px] font-bold font-inter mt-3">
                    {testimonial.testimonials_carousel.testimonial_name}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialsCarousel;
