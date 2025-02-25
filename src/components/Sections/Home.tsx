"use client";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div
      id="home"
      className="py-10 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center h-full py-12 md:py-0">
        <motion.div
          className="col-span-1 md:col-span-5 md:order-last flex justify-center md:justify-end"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Image
            src="/images/edna.png"
            alt="Emerald Edna"
            width={500}
            height={500}
            className="w-[280px] sm:w-[400px] lg:w-[500px] h-auto hover:scale-105 transition-all duration-300"
            priority
            unoptimized
          />
        </motion.div>
        <motion.div
          className="space-y-4 md:space-y-6 col-span-1 md:col-span-7 text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Hello, I&apos;m Emerald Edna Quarshie
          </h1>
          <p className="text-base mb-4 sm:text-lg text-gray-600 max-w-xl">
            Build immersive, responsive and beautiful web and mobile
            applications through user-centric design.
          </p>
          <br />
          <Link href="mailto:qedna717@gmail.com">
            <Button
              size="lg"
              className="bg-purple-500 top-10 text-white hover:bg-purple-600 hover:scale-105 transition-all duration-300"
            >
              Hire Me
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
