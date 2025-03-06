import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Container } from "@/components/ui/container";

export const ContactSkeleton = () => {
  return (
    <Container className="p-4">
      {/* Heading Skeleton */}
      <div className="w-full flex justify-center">
        <Skeleton className="w-[300px] h-[40px] md:w-[500px] md:h-[64px] rounded-md" />
      </div>
      <div className="flex justify-evenly">
        {/* Images Skeleton */}
        <div className="lg:w-[50%] hidden lg:flex flex-col gap-6">
          <Skeleton className="w-[498px] h-[308px] rounded-[55px_20px_55px_20px]" />
          <Skeleton className="w-[421px] h-[308px] rounded-[20px_55px_20px_55px]" />
        </div>

        {/* Text Skeleton */}
        <div className="lg:w-[50%] flex flex-col gap-4">
          <Skeleton className="w-[300px] h-[40px] md:w-[500px] md:h-[65px] rounded-md" />
          <Skeleton className="w-[90%] h-[20px] md:h-[24px] rounded-md" />
          <Skeleton className="w-[80%] h-[20px] md:h-[24px] rounded-md" />

          {/* Form Skeleton */}
          <div className="flex justify-center my-5">
            <Skeleton className="w-[300px] h-[40px] md:w-[400px] md:h-[50px] rounded-md" />
          </div>
        </div>
      </div>

      {/* Banner Skeleton */}
      <div className="lg:flex justify-center hidden w-full my-8">
        <Skeleton className="w-[1277px] h-[282px] rounded-[40px]" />
      </div>

      {/* Content Skeleton */}
      <div className="space-y-2">
        <Skeleton className="w-full h-[20px] md:h-[24px] rounded-md" />
        <Skeleton className="w-[90%] h-[20px] md:h-[24px] rounded-md" />
        <Skeleton className="w-[80%] h-[20px] md:h-[24px] rounded-md" />
      </div>
    </Container>
  );
};

<Container className="p-4">
  <div className="flex justify-evenly">
    {/* Images Skeleton */}
    <div className="lg:w-[50%] hidden lg:flex flex-col gap-6">
      <Skeleton className="w-[498px] h-[308px] rounded-[55px_20px_55px_20px]" />
      <Skeleton className="w-[421px] h-[308px] rounded-[20px_55px_20px_55px]" />
    </div>

    {/* Text Skeleton */}
    <div className="lg:w-[50%] flex flex-col gap-4">
      <Skeleton className="w-[300px] h-[40px] md:w-[500px] md:h-[65px] rounded-md" />
      <Skeleton className="w-[90%] h-[20px] md:h-[24px] rounded-md" />
      <Skeleton className="w-[80%] h-[20px] md:h-[24px] rounded-md" />

      {/* Form Skeleton */}
      <div className="flex justify-center my-5">
        <Skeleton className="w-[300px] h-[40px] md:w-[400px] md:h-[50px] rounded-md" />
      </div>
    </div>
  </div>

  {/* Banner Skeleton */}
  <div className="lg:flex justify-center hidden w-full my-8">
    <Skeleton className="w-[1277px] h-[282px] rounded-[40px]" />
  </div>
</Container>;
