import HeaderTemple from "@/components/components/(temple)/HeaderTemple";
import Footer from "@/components/components/footer";
import { MantineProvider } from "@mantine/core";
import React from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <MantineProvider>
        <main>
          <HeaderTemple />
          {children}
          <Footer />
        </main>
      </MantineProvider>
    </div>
  );
}
