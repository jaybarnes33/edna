import About from "@/components/Sections/About";
import Designs from "@/components/Sections/Designs";
import Home from "@/components/Sections/Home";
import Process from "@/components/Sections/Process";
import React from "react";

export const metadata = {
  title: "Emerald Edna Quarshie - UX Designer & Software Designer",
  description:
    "Professional UX Designer and Software Designer specializing in creating stylish, modern websites, web services and online stores.",
  keywords: [
    "UX Designer",
    "Software Designer",
    "Web Design",
    "UI/UX",
    "Product Design",
  ],
  openGraph: {
    title: "Emerald Edna Quarshie - UX Designer & Software Designer",
    description:
      "Professional UX Designer and Software Designer specializing in creating stylish, modern websites, web services and online stores.",
    url: "https://edna-kappa.vercel.app/",
    siteName: "Emerald Edna Portfolio",
    images: [
      {
        url: "/images/edna.png",
        width: 1200,
        height: 630,
        alt: "Emerald Edna Quarshie",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Emerald Edna Quarshie - UX Designer & Software Designer",
    description:
      "Professional UX Designer and Software Designer specializing in creating stylish, modern websites, web services and online stores.",

    images: ["/images/edna.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const page = () => {
  return (
    <div>
      <Home />
      <About />
      <Process />
      <Designs />
    </div>
  );
};

export default page;
