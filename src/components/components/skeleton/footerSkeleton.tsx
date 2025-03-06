import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const FooterSkeleton = () => {
  return (
    <div className="bg-black p-8 z-0">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-center gap-5">
        {/* Left Section */}
        <div className="bg-[#212121] h-auto lg:p-0 p-4 flex flex-col items-center justify-center gap-2 w-full rounded-md text-center">
          <Skeleton className="w-40 h-8 mb-2" />
          <Skeleton className="w-32 h-6 mb-2" />
          <Skeleton className="w-40 h-6 mb-2" />
          <Skeleton className="w-48 h-6 mb-2" />
        </div>

        {/* Middle Section */}
        <div className="bg-[#212121] px-4 py-6 flex flex-col items-center justify-center w-full rounded-md">
          <Skeleton className="w-60 h-16 mb-4" />
          <div className="flex space-x-4">
            <Skeleton className="w-8 h-8 rounded-full" />
            <Skeleton className="w-8 h-8 rounded-full" />
            <Skeleton className="w-8 h-8 rounded-full" />
            <Skeleton className="w-8 h-8 rounded-full" />
          </div>
          <Skeleton className="w-32 h-6 mt-4" />
        </div>

        {/* Right Section */}
        <div className="text-white w-full flex justify-center">
          <div className="flex flex-col space-y-4">
            <Skeleton className="w-40 h-6" />
            <div className="space-y-2">
              <Skeleton className="w-48 h-4" />
              <Skeleton className="w-40 h-4" />
              <Skeleton className="w-44 h-4" />
              <Skeleton className="w-36 h-4" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full flex justify-center mt-12">
        <Skeleton className="w-60 h-6" />
      </div>
    </div>
  );
};

export default FooterSkeleton;
