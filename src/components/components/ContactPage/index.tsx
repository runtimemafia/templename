"use client";
import Typography from "@/components/ui/typography";
import React from "react";
import { Container } from "@/components/ui/container";
import ContactUsForm from "./ContactUsForm";
import axios from "axios";
import { ContactSkeleton } from "../skeleton/ContactSkeleton";
import { motion } from "framer-motion";

interface ContactPageProps {
  data: {
    heading: string;
    sub_heading: string;
    banner_title: string;
    banner_description: string;
    images: { image: string }[];
  };
}

const ContacPage = () => {
  const [data, setData] = React.useState<ContactPageProps["data"]>();
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    axios
      .get("api/get-data")
      .then((res) => {
        if (res.data) {
          const filteredData = res.data.filter(
            (item: { Content: string }) => item.Content === "contact page"
          );

          setData(filteredData?.[0]?.blocks?.[0].data); // Set only the filtered content
        } else {
          setData(undefined); // Set empty array if no data is available
        }

        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <ContactSkeleton />;

  return (
    <Container>
      <div className="flex justify-evenly">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-[50%] lg:flex flex-col gap-6 hidden"
        >
          <div className="w-full flex justify-start">
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6 }}
              src={data?.images?.[0]?.image}
              alt="image 1"
              className="w-[498px] h-[308px] rounded-[55px_20px_55px_20px]"
            />
          </div>
          <div className="w-full flex justify-center">
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              src={data?.images?.[1]?.image}
              alt="image 2"
              className="w-[421px] h-[308px] rounded-[20px_55px_20px_55px]"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:w-[50%] flex flex-col"
        >
          <Typography className="lg:pr-4 mb-2 font-david-libre text-[27px] lg:text-[65px] font-bold leading-[72px] text-left">
            <span dangerouslySetInnerHTML={{ __html: data?.heading || "" }} />
          </Typography>
          <Typography className="h-[93px] font-inter text-[15px] lg:text-[24px] text-black font-normal leading-[31px] text-left">
            {data?.sub_heading}
          </Typography>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex lg:justify-start justify-center w-full my-5"
          >
            <ContactUsForm />
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="lg:flex justify-center hidden w-full my-8"
      >
        <div className="w-[1277px] h-[282px] font-inter flex flex-col gap-6 justify-center text-white items-center text-center rounded-[40px] bg-[#002E40]">
          <Typography className="w-[891px] font-semibold text-[48px]">
            <span
              dangerouslySetInnerHTML={{ __html: data?.banner_title || "" }}
            />
          </Typography>
          <Typography className="text-[20px]">
            {data?.banner_description}
          </Typography>
        </div>
      </motion.div>
    </Container>
  );
};

export default ContacPage;
