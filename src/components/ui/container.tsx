import * as React from "react";

import { cn } from "@/lib/utils";

const Container = React.forwardRef<
  HTMLInputElement,
  React.ComponentProps<"input">
>(({ className, ...props }, ref) => {
  return (
    <div
      className={cn("lg:m-6 md:m-6 sm:m-4 m-4 flex flex-col gap-3", className)}
      ref={ref}
      {...props}
    ></div>
  );
});
Container.displayName = "Container";

export { Container };
