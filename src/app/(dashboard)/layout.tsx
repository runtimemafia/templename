import BackgroundImage from "@/components/components/BackgroundImage";
import Footer from "@/components/components/footer";
import Header from "@/components/components/header";
import React from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <BackgroundImage />

      <Footer />
    </div>
  );
}
