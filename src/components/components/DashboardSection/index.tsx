"use client";
import React from "react";
import HeroSection from "./HeroSection";
import PartnerSection from "./PartnersSection";
import IntroSection from "./IntroSection";
import TempleTrust from "./TempleTrust.tsx";
import PujaBookingSteps from "./PujaBookingSteps";
import TestimonialsAndSubscription from "./TestimonialsAndSubscription";
import ScrollUpButton from "../button/ScrollUpButton";
import axios from "axios";
import HeroSkeleton from "../skeleton/HeroSkeleton";
import PartnerSectionSkeleton from "../skeleton/PartnerSectionSkeleton";

const DashboardSection = () => {
  const [data, setData] = React.useState<any>(null);
  const [loading, setLoading] = React.useState(true); // State to track loading state

  React.useEffect(() => {
    axios
      .get("api/get-data")
      .then((res) => {
        if (res.data) {
          // Filtering for pages with Content === "blog page"
          const filteredData = res.data.filter(
            (item: { Content: string }) => item.Content === "Home page"
          );

          setData(filteredData?.[0]?.blocks); // Set only the filtered content
        } else {
          setData([]); // Set empty array if no data is available
        }

        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <>
        <HeroSkeleton />
        <PartnerSectionSkeleton />
      </>
    );

  return (
    <>
      <HeroSection
        data={
          data?.find((block: any) => block.collection === "hero_block")?.data
        }
      />
      <PartnerSection
        data={
          data?.find((block: any) => block.collection === "partner_blocks")
            ?.data
        }
      />
      <IntroSection
        data={
          data?.find((block: any) => block.collection === "info_blocks")?.data
        }
      />
      <PujaBookingSteps
        data={
          data?.find(
            (block: any) => block.collection === "booking_steps_blocks"
          )?.data
        }
      />
      <TestimonialsAndSubscription
        data={
          data?.find((block: any) => block.collection === "testimonials_blocks")
            ?.data
        }
      />
      <ScrollUpButton />
    </>
  );
};

export default DashboardSection;
