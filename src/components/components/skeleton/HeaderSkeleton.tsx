"use client";

import { Skeleton } from "@/components/ui/skeleton";

const HeaderSkeleton = () => {
  return (
    <header className="bg-transparent dark:bg-transparent border-none dark:border-none">
      <nav className="flex lg:p-14 lg:!pr-3 lg:!pb-4 md:p-10 p-4">
        {/* Logo Skeleton */}
        <div className="w-[45%] flex items-center">
          <Skeleton className="lg:w-[101px] lg:h-[88px] md:w-[88px] md:h-[88px] w-[40px] h-[40px] rounded-md" />
          <Skeleton className="w-[266px] h-[40px] ml-4 hidden lg:block" />
        </div>

        {/* Navigation Links Skeleton */}
        <div className="hidden lg:flex md:flex items-center justify-center space-x-6">
          {Array.from({ length: 5 }).map((_, index) => (
            <Skeleton key={index} className="w-[80px] h-[20px] rounded-md" />
          ))}
        </div>

        {/* Button Skeleton */}
        <div className="hidden lg:flex md:flex items-center">
          <Skeleton className="w-[167px] h-[64px] rounded-lg" />
        </div>

        {/* Mobile Menu Icon Skeleton */}
        <div className="lg:hidden md:hidden p-3">
          <Skeleton className="w-[25px] h-[25px] rounded-md" />
        </div>
      </nav>
    </header>
  );
};

export default HeaderSkeleton;
