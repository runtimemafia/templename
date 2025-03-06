import Typography from "@/components/ui/typography";
import { FC } from "react";
import { PiDiamondsFourFill } from "react-icons/pi";

interface TempleServicesProps {
  title: string;
  services: { service_name: string }[];
}

const TempleServices: FC<TempleServicesProps> = ({ title, services }) => {
  return (
    <div className="w-full flex flex-col items-center justify-center mx-auto md:p-20 p-6">
      <Typography className="md:text-[40px] sm:text-[22px] text-[17px] w-full  font-karma text-start font-bold md:mb-20 mb-4">
        {title}
      </Typography>
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-10 md:gap-40 gap-4 md:gap-y-20">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex items-center font-[500] md:text-[32px] text-[17px] gap-2"
          >
            <span className="">
              {" "}
              <PiDiamondsFourFill className="text-[#432E56]" size={20} />
            </span>
            <span className="">{service?.service_name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TempleServices;
