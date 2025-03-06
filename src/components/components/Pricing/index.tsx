"use client";
import React from "react";
import axios from "axios";
import PricingPlans from "./PricingPlans";
import FAQSection from "./FAQSection";
import { PricingPageSkeleton } from "../skeleton/Pricing PageSkeleton";

const PricingPage = () => {
  const [data, setData] = React.useState<{ collection: string; data: any }[]>(
    []
  );
  const [loading, setLoading] = React.useState(true); // State to track loading state

  React.useEffect(() => {
    axios
      .get("api/get-data")
      .then((res) => {
        if (res.data) {
          const filteredData = res.data.filter(
            (item: { Content: string }) => item.Content === "pricing page"
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

  if (loading) return <PricingPageSkeleton />;
  return (
    <>
      <PricingPlans
        data={
          data?.find((block: any) => block.collection === "pricing_page")?.data
        }
      />
      <FAQSection
        data={
          data?.find((block: any) => block.collection === "pricing_faq")?.data
        }
      />
      {/* <BookPujaButton /> */}
    </>
  );
};

export default PricingPage;
