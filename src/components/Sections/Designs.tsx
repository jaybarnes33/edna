"use client";
import clsx from "clsx";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Designs = () => {
  const designs = [
    {
      title: "Coffee Shop",
      image: "/images/coffee-2.png",
    },
    {
      title: "Food delivery login screen",
      image: "/images/food-2.png",
    },
    {
      title: "Coffee Shop Onboarding",
      image: "/images/coffee.png",
    },
    {
      title: "Food App",
      image: "/images/food.png",
    },
  ];

  return (
    <div
      id="designs"
      className="max-w-7xl mx-auto py-20 px-4 sm:px-6 space-y-10"
    >
      <motion.h1
        className="text-4xl font-bold text-center sm:text-left"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Sample Designs
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {designs.map((design, index) => (
          <motion.div
            key={design.title}
            className={clsx(["flex flex-col gap-y-2", "sm:even:mt-20"])}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Image
              src={design.image}
              alt={design.title}
              width={300}
              height={300}
              className="w-full hover:scale-105 transition-all duration-300"
              unoptimized
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Designs;
