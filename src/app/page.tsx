import About from "@/components/Sections/About";
import Designs from "@/components/Sections/Designs";
import Home from "@/components/Sections/Home";
import Process from "@/components/Sections/Process";
import React from "react";

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
