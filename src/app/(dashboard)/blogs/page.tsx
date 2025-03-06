"use client";
import BlogPage from "@/components/components/BlogPage";
import BlogSkeleton from "@/components/components/skeleton/BlogSkeleton";
import axios from "axios";
import React from "react";

const Blogs = () => {
  const [data, setData] = React.useState<{ collection: string; data: any }[]>(
    []
  );
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    axios
      .get("api/get-data")
      .then((res) => {
        if (res.data) {
          // Filtering for pages with Content === "blog page"
          const filteredData = res.data.filter(
            (item: { Content: string }) => item.Content === "blog page"
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
  // Show loader while loading
  if (loading) return <BlogSkeleton />;

  return (
    <>
      <BlogPage
        data={
          data?.find((block: any) => block.collection === "blog_page")?.data
        }
      />
    </>
  );
};

export default Blogs;
