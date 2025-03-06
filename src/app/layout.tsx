import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "BookMyPuja - India's Leading Online Puja Booking Platform",
  description:
    "India's most trusted platform for booking authentic pujas, pandits, and religious ceremonies online. Experience divine services with verified priests, traditional rituals, and seamless booking.",
  keywords: [
    "book puja online",
    "online puja booking",
    "puja services",
    "hindu rituals",
    "pandit booking",
    "religious ceremonies",
    "online religious services",
    "BookMyPuja",
  ],
  openGraph: {
    title: "BookMyPuja - India's Leading Online Puja Booking Platform",
    description:
      "Book authentic pujas and religious ceremonies online . Your trusted platform for traditional Hindu rituals and ceremonies.",
    type: "website",
    locale: "en_IN",
    siteName: "BookMyPuja",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://bookmypuja.app",
  },
};

export const generateViewport = () => {
  return {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    viewportFit: "cover",
  };
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="shortcut icon"
          href="https://res.cloudinary.com/dpaigt2bx/image/upload/v1739790776/logo_q5f790.webp"
        />
      </head>
      <body>
        <div className="relative overflow-hidden">
          {/* <Header /> */}
          {children}
          {/* <Footer /> */}
          {/* <BackgroundImage /> */}
        </div>
      </body>
    </html>
  );
}
