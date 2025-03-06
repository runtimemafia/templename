"use client";

import { Skeleton } from "@/components/ui/skeleton";

const PartnerSectionSkeleton = () => {
  return (
    <div className="bg-[rgba(16,26,36,0.05)] flex flex-col items-center justify-center py-5 px-3 relative">
      {/* Title Skeleton */}
      <Skeleton className="w-[250px] h-[40px] mb-6" />

      {/* Logo Skeletons */}
      <div className="flex w-full justify-between md:justify-around items-center flex-wrap gap-4 mb-5">
        {Array.from({ length: 3 }).map((_, index) => (
          <Skeleton key={index} className={` w-[150px]`} />
        ))}
      </div>

      <div className="flex flex-col items-center justify-center">
        {/* Subtitle Skeleton */}
        <Skeleton className="w-[200px] h-[30px] mb-3" />
        <Skeleton className="w-[350px] h-[60px] mb-6" />

        {/* Card Skeletons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full md:px-10 px-5 lg:px-0">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="hover:bg-[#FFFFFF] bg-inherit border-[2px] border-white w-full md:w-[309px] lg:w-[309px] h-[265px] rounded-lg hover:shadow-lg relative overflow-visible flex flex-col items-center p-4"
            >
              {/* Image Skeleton */}
              <Skeleton className="absolute top-[-50px] w-[200px] h-[200px] rounded-md" />

              {/* Card Content Skeleton */}
              <div className="text-center mt-16 flex flex-col items-center justify-end h-full">
                <Skeleton className="w-[150px] h-[24px] mb-2" />
                <Skeleton className="w-[200px] h-[40px]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnerSectionSkeleton;
