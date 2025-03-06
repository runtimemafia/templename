"use client";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

interface CardComponentProps {
  title: string;
  date: string;
  index: number;
  image: string;
}

export const CardComponents: React.FC<CardComponentProps> = ({
  title,
  date,
  index,
  image,
}) => {
  const router = useRouter();
  const lightColors = [
    { bg: "#E5F2F9", base: "#A7D6F1" },
    { bg: "#F8F9E5", base: "#F1E2A7" },
    { bg: "#F9F5E5", base: "#F1DBA7" },
    { bg: "#F9E6E5", base: "#F1AEA7" },
    { bg: "#E5F9E8", base: "#A7F1C6" },
    { bg: "#E7E5F9", base: "#A7ACF1" },
    { bg: "#F3F9E5", base: "#D6F1A7" },
    { bg: "#F4E5F9", base: "#DEA7F1" },
    { bg: "#F4F9E5", base: "#F1DDA7" },
  ];
  const cardColor = lightColors[index % lightColors.length];

  return (
    <motion.div
      className="flex justify-center items-start font-inter"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      whileHover={{ scale: 1.05 }}
    >
      <Card
        style={{ backgroundColor: cardColor.bg }}
        className="w-[380px] rounded-[30px] cursor-pointer shadow-md"
        onClick={() => router.push(`/blogs/${title}`)}
      >
        <div className="flex justify-center items-center p-5">
          <div
            style={{ backgroundColor: cardColor.base }}
            className="w-full rounded-[25px] overflow-hidden"
          >
            <motion.img
              src={image}
              alt=""
              className="w-full h-[174px] object-cover object-right-top rounded-[25px]"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>
        <CardHeader className="pt-0">
          <CardDescription className="text-sm text-gray-500">
            {date}
          </CardDescription>
          <CardTitle className="text-[24px] font-normal">{title}</CardTitle>
        </CardHeader>
      </Card>
    </motion.div>
  );
};
