import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Container } from "@/components/ui/container";

const AboutSkeleton = () => {
  return (
    <Container className="items-center">
      {/* Heading Skeleton */}
      <div className="lg:w-[1189px] flex justify-center mt-8">
        <Skeleton className="h-[65px] w-[400px] rounded-md" />
      </div>

      {/* Subheading Skeleton */}
      <div className="lg:w-[1001px] flex justify-center mt-4">
        <Skeleton className="h-[20px] w-[600px] rounded-md" />
      </div>

      {/* Carousel Skeleton */}
      <div className="w-full flex justify-center mt-6">
        <Skeleton className="h-[300px] w-full rounded-md" />
      </div>

      {/* Achievements Skeleton */}
      <div className="w-full flex justify-center my-20">
        <div className="w-[761px] h-[83px] flex justify-between">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="flex flex-col items-center space-y-2">
              <Skeleton className="h-[50px] w-[100px] rounded-md" />
              <Skeleton className="h-[20px] w-[80px] rounded-md" />
            </div>
          ))}
        </div>
      </div>

      {/* Banner Skeleton */}
      <div className="flex justify-center w-full my-8">
        <div className="lg:w-[1277px] lg:h-[235px] flex flex-col lg:gap-6 md:gap-5 sm:gap-3 gap-2 p-4 justify-center items-center text-center rounded-[40px] bg-[#002E40]">
          <Skeleton className="h-[48px] w-[500px] rounded-md" />
          <Skeleton className="h-[16px] w-[600px] rounded-md mt-2" />
        </div>
      </div>
    </Container>
  );
};

export default AboutSkeleton;
