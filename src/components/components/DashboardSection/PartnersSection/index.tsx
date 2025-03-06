import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import Typography from "@/components/ui/typography";
import React from "react";
import H1Typography from "../../Typography/H1Typography";
import Image from "next/image";
import { motion } from "framer-motion";

interface PartnerBlock {
  id: number;
  partner_blocks_id: number;
  cards_id: string;
  cards: {
    id: string;
    card_images: string;
    card_title: string;
    card_discription: string;
    class_name?: string | null;
    position?: string | null;
  };
}

interface PartnerLogos {
  id: number;
  partner_blocks_id: number;
  text_field_id: string;
  text_field: {
    id: string;
    text_field: string;
    label: string;
  };
}

interface Data {
  title: string;
  sub_title: string;
  discription: string;
  partner_blocks_text_field: PartnerLogos[];
  partner_blocks_cards: PartnerBlock[];
}

const PartnerSection = ({ data }: { data: Data }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        // viewport={{ once: true }}
      >
        <div className="bg-[rgba(16,26,36,0.05)] flex flex-col items-center justify-center py-5 px-3 relative">
          <H1Typography data={data?.title} />

          <div className="flex w-full justify-between md:justify-around items-center flex-wrap gap-4 mb-5 ">
            {data?.partner_blocks_text_field.map((logo, index) => (
              <motion.img
                key={logo.text_field_id}
                className={`h-[${
                  60 - index * 20
                }px] md:h-auto w-auto object-contain`}
                src={logo.text_field.text_field}
                alt={logo.text_field.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: index * 0.2 }}
                // viewport={{ once: true }}
              />
            ))}
          </div>

          <div className="flex flex-col items-center justify-center ">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              // viewport={{ once: true }}
              className="flex flex-col justify-center items-center lg:w-[580px] md:w-[580px] lg:py-24 md:py-20"
            >
              <H1Typography data={data?.sub_title} />
              <Typography className="px-2 text-center font-inter font-normal lg:text-[20px] md:text-[20px] text-[12px] text-[#5C6574]">
                {data?.discription}
              </Typography>
            </motion.div>

            <section className="flex flex-col items-center justify-center px-4 py-10 lg:pl:0 md:pl-0 sm:pl-0 pl-14">
              <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-wrap lg:justify-center md:gap-32 sm:gap-16 lg:gap-6 gap-6 w-full md:px-10 px-5 lg:px-0">
                {" "}
                {data?.partner_blocks_cards.map((service, index) => {
                  const position = [
                    "absolute lg:h-[350px] lg:w-[350px] md:h-[309px] md:w-[265px]  h-[228px] w-[180px]  lg:top-[-180px] lg:left-1/2 md:left-1/2 md:top-[-150px] sm:left-[-9px]  top-[-10px] left-[-15px] transform -translate-x-1/2",
                    "absolute lg:h-[350px] lg:w-[350px] md:h-[309px] md:w-[265px]  h-[228px] w-[180px]  lg:!top-[-190px] lg:left-1/2 md:left-1/2 md:top-[-150px] sm:left-[-9px]  top-[-10px] left-[-15px] transform -translate-x-1/2",
                    "lg:!top-[-157px] md:!top-[-150px] !top-1  absolute lg:h-[350px] lg:w-[350px] md:h-[309px] md:w-[265px]  h-[228px] w-[180px]  lg:left-1/2 md:left-1/2 sm:left-[-12px]  left-[-23px] transform -translate-x-1/2",
                    " lg:!top-[-180px] lg:!left-[220px] md:!top-[-180px] md:!left-[190px]  sm:!top-[10px] top-[10px] !left-[10px]  absolute lg:h-[350px] lg:w-[350px] md:h-[309px] md:w-[265px]  h-[228px] w-[180px] sm:left-[-9px]  transform -translate-x-1/2",
                  ];
                  const classs = [
                    "",
                    "lg:!w-[365px] lg:!h-[365px]",
                    "",
                    "lg:!w-[232px] lg:!h-[272px] md:!w-[213px] md:!h-[272px]  sm:!w-[130px] sm:!h-[152px] !w-[110px] !h-[142px]",
                  ];
                  return (
                    <motion.div
                      key={service.cards_id}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1, delay: index * 0.3 }}
                      // viewport={{ once: true }}
                    >
                      <Card className="hover:bg-[#FFFFFF] lg:px-0 md:px-0 sm:px-0 px-3 lg:my-10 bg-inherit border-[2px] border-white w-full md:w-[309px] lg:w-[309px] h-[226px] sm:h-[226px] sm:w-[235px] lg:h-[265px] md:h-[265px] !rounded-br-[40px] !rounded-tl-[40px] rounded-lg hover:shadow-lg relative overflow-visible">
                        <div
                          className={` ${service.cards.position} ${position[index]}`}
                        >
                          <img
                            src={service.cards.card_images}
                            alt={service.cards.card_title}
                            className={`${classs[index]} ${service.cards.class_name} || w-full h-full `}
                          />
                        </div>

                        <CardContent className="text-center  lg:pt-12 lg:px-2 md:px-6 sm:px-6 px-0 mx-5  flex flex-col items-center lg:justify-end md:justify-end sm:justify-center justify-center h-full">
                          <CardTitle className="text-[20px] font-bold font-david-libre mt-3 mb-1">
                            {service.cards.card_title}
                          </CardTitle>
                          <CardDescription className="text-[14px] lg:mr-0 md:mr-0 sm:mr-2 mr-4 lg:text-[16px] md:text-[16px]  text-[#5C6574] font-inter font-normal text-center">
                            {service.cards.card_discription}
                          </CardDescription>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </motion.div>
            </section>
          </div>
          <motion.img
            src="https://res.cloudinary.com/dpaigt2bx/image/upload/v1739790769/4_3_rswbdm_socpne.webp"
            alt=""
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 0.15, y: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="absolute lg:w-[339px] lg:h-[320px] md:w-[369px] md:h-[350px] h-[169px] w-[160px] lg:top-[28%] lg:left-[15%] md:top-[28%] md:left-[15%] top-[-30px] right-[-70px]"
          />
          <motion.img
            src="https://res.cloudinary.com/dpaigt2bx/image/upload/v1739790768/5_oectt6_mzabde.webp"
            alt=""
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.12 }}
            transition={{ duration: 1.5, delay: 1 }}
            viewport={{ once: true }}
            className="absolute hidden lg:flex md:flex w-[147px] h-[164px] top-[55%] left-[25%]"
          />

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 0.32, y: 0 }}
            transition={{ duration: 1.5, delay: 1 }}
            viewport={{ once: true }}
          >
            <Image
              width={503}
              height={383}
              src="https://res.cloudinary.com/dpaigt2bx/image/upload/v1739790769/7_ycf8kd_anzflo.webp"
              alt=""
              className="absolute pointer-events-none hidden lg:flex top-[70px] right-[-165.84px] transform scale-x-[-1] rotate-45"
            />
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default PartnerSection;
