"use client";
import { Container } from "@/components/ui/container";
import Typography from "@/components/ui/typography";
import React from "react";
import axios from "axios";
import CarouselCards from "../animation/AnimationCard";
import AboutSkeleton from "../skeleton/AboutUsSkeleton";
import { motion } from "framer-motion";

interface AboutPageProps {
  data: {
    heading: string;
    sub_heading: string;
    carousel: any;
    achivement: { title: string; reward: string }[];
    banner_title: string;
    banner_description: string;
  };
}

const AboutPage = () => {
  const [data, setData] = React.useState<AboutPageProps["data"]>();
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    axios
      .get("api/get-data")
      .then((res) => {
        if (res.data) {
          // Filtering for pages with Content === "blog page"
          const filteredData = res.data.filter(
            (item: { Content: string }) => item.Content === "about page"
          );

          setData(filteredData?.[0]?.blocks?.[0]?.data); // Set only the filtered content
        } else {
          setData(undefined); // Set undefined if no data is available
        }

        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <AboutSkeleton />;

  console.log(data);

  return (
    <>
      <Container className="items-center">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:w-[1189px] flex justify-center mt-8"
        >
          <Typography className="font-bold font-david-libre lg:text-[65px] md:text-[50px] sm:text-[40px] text-[30px] sm text-center">
            {data?.heading}
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:w-[1001px] flex justify-center"
        >
          <Typography className="font-normal font-inter lg:text-[20px] md:text-[18px] sm:text-[16px] text-[14px] text-center">
            {data?.sub_heading}
          </Typography>
        </motion.div>

        <CarouselCards cards={data?.carousel} />

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="w-full flex justify-center my-20"
        >
          <div className="w-[761px] h-[83px] flex justify-between">
            {data?.achivement?.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.2 }}
                className="flex flex-col items-center justify-center font-inter"
              >
                <Typography className="lg:text-[64px] md:text-[60px] sm:text-[30px] text-[25px] font-extrabold text-[#101A24] leading-tight">
                  {achievement.reward}
                </Typography>
                <Typography className="lg:text-[24px] md:text-[20px] sm:text-[18px] text-[15px] font-semibold">
                  {achievement.title}
                </Typography>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex justify-center w-full my-8"
        >
          <div className="lg:w-[1277px] lg:h-[235px] font-inter flex flex-col lg:gap-6 md:gap-5 sm:gap-3 gap-2 p-4 justify-center text-white items-center text-center rounded-[40px] bg-[#002E40]">
            <Typography className="lg:w-[891px] font-semibold lg:text-[48px] md:text-[46px] text-[20px]">
              {data?.banner_title}
            </Typography>
            <Typography className="lg:text-[16px] md:text-[16px] text-[13px] lg:text-start md:text-start sm:text-center text-center lg:px-20 md:px-20 px-0">
              <p
                dangerouslySetInnerHTML={{
                  __html: data?.banner_description || "",
                }}
              />
            </Typography>
          </div>
        </motion.div>
      </Container>
    </>
  );
};

export default AboutPage;
