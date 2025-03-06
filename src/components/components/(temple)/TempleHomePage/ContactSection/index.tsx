import { MdOutlineLocationOn } from "react-icons/md";
import { FaWhatsappSquare } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FiFacebook } from "react-icons/fi";
import Link from "next/link";
interface ContactData {
  title: string;
  address: string;
  whatsapp: string;
  number: string;
  mail: string;
  fb_id: string;
}

const ContactSection = ({ data }: { data: ContactData }) => {
  return (
    <div className="w-full  mx-auto md:p-6 p-3">
      <h2 className="md:text-[48px] text-[24px] w-full text-center font-karma font-bold md:mb-8 mb-4">
        {data?.title}
      </h2>
      <div className="space-y-6 lg:px-[290px]  md:text-[24px] text-[14px] font-inter">
        {/* Address */}
        <div className="flex items-start  gap-3">
          <MdOutlineLocationOn className="text-[#E10909] " size={28} />
          <p dangerouslySetInnerHTML={{ __html: data?.address }} />{" "}
        </div>

        {/* Phone Numbers */}
        <div className="flex items-center gap-3">
          <span className=" border-black pr-3 flex items-center gap-3">
            {/* <FaPhoneAlt className="text-[#FF6E40] " size={24} /> */}
            <FaWhatsappSquare className="text-[#66ff40]" size={24} />
            {data?.whatsapp}
          </span>

          <span className="flex items-center gap-3">
            {" "}
            <span className="text-green-500">
              {/* <FaWhatsappSquare size={24} /> */}
            </span>
            {data?.number}
          </span>
        </div>

        {/* Email */}
        <Link
          href={`mailto:${data?.mail}?subject=Hello&body=Hello`}
          className="flex items-center gap-3 cursor-pointer hover:underline"
        >
          <MdOutlineEmail className="text-[#E10909]" size={28} />
          <span>{data?.mail}</span>
        </Link>
        {/* Facebook */}
        <Link
          href={""}
          target="_blank"
          className="flex items-center gap-3  hover:underline"
        >
          <FiFacebook className="text-[#B663FF] " size={28} />
          <span>{data?.fb_id}</span>
        </Link>
      </div>
    </div>
  );
};

export default ContactSection;
