import { Container } from "@/components/ui/container";
import Typography from "@/components/ui/typography";
import Link from "next/link";
import React from "react";
import ScrollUpButton from "../button/ScrollUpButton";

const DisclaimerPage = () => {
  return (
    <>
      <Container className="md:px-12 px-4 md:mb-[600px] mb-[300px] md:text-left text-justify">
        <Typography className="text-end lg:text-[128px] md:text-[60px] sm:[35px] text-[25px] !font-bold font-adamina">
          Disclaimer
        </Typography>
        <div className="font-afacad font-normal tracking-wide ">
          <Typography className=" md:text-[24px] text-[18px]   md:leading-[39px] leading-[30px] ">
            If you require any more information or have any questions about our
            site's disclaimer, please feel free to contact us by email
            <span className="block">at support@bookmypuja.app.</span>
          </Typography>
          <Typography className="font-bold  md:text-[45px] text-[26px]  text-left  md:leading-[72px] leading-[39px] ">
            Disclaimers for BookMyPuja
          </Typography>
          <Typography className=" md:text-[24px] text-[18px]   md:leading-[39px] leading-[30px] ">
            All the information on this website -{" "}
            <Link
              href={"https://bookmypuja.app"}
              className="underline hover:text-gray-500"
            >
              https://bookmypuja.app
            </Link>{" "}
            - is published in good faith and for general information purpose
            only.
            <span className="block">
              bookmypuja.app does not make any warranties about the
              completeness, reliability and accuracy of this information. Any
              action you take upon the information you find on this website
              (bookmypuja.app), is strictly at your own risk. bookmypuja.app
              will not be liable for any losses and/or damages in connection
              with the use of our website.
            </span>
            From our website, you can visit other websites by following
            hyperlinks to such external sites. While we strive to provide only
            quality links to useful and ethical websites, we have no control
            over the content and nature of these sites. These links to other
            websites do not imply a recommendation for all the content found on
            these sites. Site owners and content may change without notice and
            may occur before we have the opportunity to remove a link which may
            have gone 'bad'.{" "}
            <span className="block">
              {" "}
              Please be also aware that when you leave our website, other sites
              may have different privacy policies and terms which are beyond our
              control. Please be sure to check the Privacy Policies of these
              sites as well as their "Terms of Service" before engaging in any
              business or uploading any information.
            </span>
          </Typography>
          <Typography className="font-bold  md:text-[45px] text-[26px]  text-left  md:leading-[72px] leading-[39px] ">
            Consent
          </Typography>
          <Typography className=" md:text-[24px] text-[18px]   md:leading-[39px] leading-[30px] ">
            By using our website, you hereby consent to our disclaimer and agree
            to its terms.
          </Typography>
          <Typography className="font-bold  md:text-[45px] text-[26px]  text-left  md:leading-[72px] leading-[39px] ">
            Update
          </Typography>
          <Typography className=" md:text-[24px] text-[18px]   md:leading-[39px] leading-[30px] ">
            Should we update, amend or make any changes to this document, those
            changes will be prominently posted here.
          </Typography>
        </div>
      </Container>
      <ScrollUpButton />
    </>
  );
};

export default DisclaimerPage;
