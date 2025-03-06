"use client";
import { Container } from "@/components/ui/container";
import React from "react";
import HeroSection from "./HeroSection";
import EventSection from "./EventSection";
import SocialSection from "./SocialSection";
import TempleServices from "./TempleServices";
import ContactSection from "./ContactSection";
import MapSection from "./MapSection/MapSection";
import axios from "axios";
import HeroSkeleton from "../../skeleton/HeroSkeleton";
import ScrollUpButton from "../../button/ScrollUpButton";
import { useFloatingButtonStore } from "@/lib/store";
import AnimationButton from "../../animation/AnimationButton";

const TempleHomePage = () => {
  const [data, setData] = React.useState<any>(null);
  const [loading, setLoading] = React.useState(true); // State to track loading state

  React.useEffect(() => {
    axios
      .get("api/get-data")
      .then((res) => {
        if (res.data) {
          // Filtering for pages with Content === "blog page"
          const filteredData = res.data.filter(
            (item: { Content: string }) => item.Content === "Kuthiranmala page"
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
  // console.log(data?.[0]?.data);

  const isFloatingButtonVisible = useFloatingButtonStore(
    (state) => state.isFloatingButtonVisible
  );

  if (loading)
    return (
      <>
        <HeroSkeleton />
      </>
    );

  return (
    <>
      <Container className="relative font-inter m-0 p-0" id="home">
        <HeroSection data={data?.[0]?.data} />
        <EventSection data={data?.[0]?.data?.kuthiranmala_events} />
        <SocialSection data={data?.[0]?.data?.kuthiranmala_social} />
        <TempleServices
          title={data?.[0]?.data?.service_title}
          services={data?.[0]?.data?.services}
        />
        <ContactSection
          data={
            data?.[0]?.data?.kuthiranmala_page_kuthiranmala_contact?.[0]
              ?.kuthiranmala_contact
          }
        />
        <MapSection />
        <ScrollUpButton />
        {/* {isFloatingButtonVisible && } */}
        <div className="md:hidden flex justify-end absolute bottom-2">
          <AnimationButton label={"Book Puja"} />
        </div>
      </Container>{" "}
    </>
  );
};

export default TempleHomePage;
