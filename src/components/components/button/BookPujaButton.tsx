import { Button } from "@/components/ui/button";
import React from "react";
import { openExternalLink, EXTERNAL_URLS } from "@/lib/openExternalLink";

const BookPujaButton = () => {
  return (
    <>
      <Button
        variant={"curve"}
        className="bg-[#FFBB00] z-40 fixed bottom-[24px] right-[24px] text-[#101A24] px-6 py-2  w-[167px] h-[54px] "
        onClick={() => openExternalLink(EXTERNAL_URLS.CHAT)}
      >
        Book a Puja
      </Button>
    </>
  );
};

export default BookPujaButton;
