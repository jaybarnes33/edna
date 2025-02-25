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
