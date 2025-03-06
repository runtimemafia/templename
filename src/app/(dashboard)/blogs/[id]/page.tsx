"use client";
import { Container } from "@/components/ui/container";
import Typography from "@/components/ui/typography";
import { useStore } from "@/lib/store";
import { useParams } from "next/navigation";
import React from "react";

const Content = () => {
  const params = useParams();
  const decodedId = decodeURIComponent(
    Array.isArray(params.id) ? params.id[0] : params.id
  );

  const { blogs } = useStore();

  return (
    <div>
      {blogs
        ?.filter(
          (blogs: { blogs: { heading: string } }) =>
            blogs?.blogs?.heading === decodedId
        )
        ?.map(
          (
            blog: {
              blogs: { heading: string; image: string; content: string };
            },
            index: number
          ) => (
            <Container key={index} className="p-4">
              <Typography className=" w-full font-adamina flex justify-center  md:mb-4 mb-2 ">
                <Typography className=" lg:w-[1000px] text-center md:text-[64px]  text-[36px]    md:leading-[72px] leading-10">
                  {blog?.blogs?.heading}
                </Typography>
              </Typography>
              <div className="w-full flex justify-center  md:mb-4 mb-2  ">
                <img
                  src={blog?.blogs?.image}
                  alt=""
                  className="md:w-[573px] md:h-[573px] object-cover rounded-lg"
                />
              </div>
              <div dangerouslySetInnerHTML={{ __html: blog?.blogs?.content }} />
            </Container>
          )
        )}
    </div>
  );
};

export default Content;
