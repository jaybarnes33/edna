import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const Home = () => {
  return (
    <div className="md:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center h-full py-12 md:py-0">
        <div className="col-span-1 md:col-span-5 md:order-last flex justify-center md:justify-end">
          <Image
            src="/images/edna.png"
            alt="Emerald Edna"
            width={500}
            height={500}
            className="w-[280px] sm:w-[400px] lg:w-[500px] h-auto"
            priority
            unoptimized
          />
        </div>
        <div className="space-y-4 md:space-y-6 col-span-1 md:col-span-7 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Hello, I&apos;m Emerald Edna Quarshie
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-xl">
            Build immersive, responsive and beautiful web and mobile
            applications through user-centric design.
          </p>

          <Button
            size="lg"
            className="bg-purple-500 text-white hover:bg-purple-600 transition-colors"
          >
            Hire Me
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
