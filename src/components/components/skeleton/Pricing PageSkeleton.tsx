import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export const PricingPageSkeleton = () => {
  return (
    <div className="flex relative flex-wrap justify-evenly gap-5 items-center my-6 lg:mx-4 font-inter">
      {Array.from({ length: 3 }).map((_, index) => (
        <div
          key={index}
          className="lg:h-[777px] lg:w-[429px] md:h-[777px] md:w-[429px] sm:h[777px] w-[340px] h-auto border-[1px] border-solid border-[#5C6574] rounded-[46px]"
        >
          {/* Skeleton Header */}
          <div className="p-6">
            <Skeleton className="w-[80%] h-[48px] mb-4 rounded-lg" />
            <Skeleton className="w-[60%] h-[36px] mb-2 rounded-lg" />
          </div>

          {/* Skeleton Features */}
          <div className="px-6">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="flex items-center gap-2 mb-3">
                <Skeleton className="w-[24px] h-[24px] rounded-full" />
                <Skeleton className="w-[70%] h-[20px] rounded-md" />
              </div>
            ))}
          </div>

          {/* Skeleton Button */}
          <div className="p-6">
            <Skeleton className="w-[80%] h-[50px] rounded-lg" />
          </div>
        </div>
      ))}
      <Skeleton className="w-[60%] h-10 rounded-md mb-6" />

      {/* Skeleton for FAQ items */}
      {Array.from({ length: 3 }).map((_, i) => (
        <Skeleton key={i} className="w-[90%] h-[83px] rounded-[26px] my-4" />
      ))}
    </div>
  );
};
