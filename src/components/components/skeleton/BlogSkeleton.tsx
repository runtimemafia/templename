import { Container } from "@/components/ui/container";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const BlogSkeleton = () => {
  return (
    <>
      <Container className="flex flex-col justify-center items-center">
        <Skeleton className="h-20 w-[70%]  mt-5" />
        <Skeleton className="h-10 w-[70%] my-8" />
        <div className="w-full flex justify-center lg:ml-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full md:px-10 px-5 lg:px-0 ">
            {Array.from({ length: 12 }).map((_, index) => (
              <Skeleton
                key={index}
                className="w-[300px] h-[300px] rounded-md my-5"
              />
            ))}
          </div>
        </div>
      </Container>
    </>
  );
};

export default BlogSkeleton;
