import Typography from "@/components/ui/typography";
import React from "react";

interface H1TypographyProps {
  data: string;
}

const H1Typography: React.FC<H1TypographyProps> = ({ data }) => {
  return (
    <>
      <div className="flex items-center justify-center">
        <Typography className="text-[#101A24] lg:text-[65px] md:text-[60px] sm:text-[32px] text-[30px] text-center font-david-libre font-bold mb-4">
          {data}
        </Typography>
      </div>
    </>
  );
};

export default H1Typography;
