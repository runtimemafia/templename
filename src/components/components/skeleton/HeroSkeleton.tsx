import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const HeroSkeleton = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between bg-transparent dark:bg-gray-800 p-4 mx-auto">
      {/* Left Section */}
      <div className="flex-1 text-left lg:w-[60%] w-full">
        <Skeleton className="h-[65px] w-[80%] mb-4" />
        <Skeleton className="h-[24px] w-[90%] mb-6" />

        <div className="flex justify-center lg:justify-start lg:m-14 space-x-14">
          <Skeleton className="h-[54px] w-[120px] rounded-lg" />
          <Skeleton className="h-[54px] w-[140px] rounded-lg" />
        </div>
      </div>

      {/* Right Section - Image */}
      <div className="relative lg:w-[40%] h-[80%] w-full flex justify-center lg:justify-center mt-8 lg:mt-0">
        <Skeleton className="w-[297px] h-[350px] lg:w-[518px] lg:h-[710px] rounded-lg" />
      </div>

      {/* Social Links */}
      <div className="flex justify-center items-center gap-5 my-5">
        <div className="flex gap-5">
          <Skeleton className="h-8 w-8 rounded-full" />
          <Skeleton className="h-8 w-8 rounded-full" />
          <Skeleton className="h-8 w-8 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default HeroSkeleton;
