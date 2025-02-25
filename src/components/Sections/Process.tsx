"use client";
import React from "react";
import { Card, CardContent, CardTitle } from "../ui/card";
import clsx from "clsx";
import { motion } from "framer-motion";

const Process = () => {
  const processes = [
    {
      title: "Research",
      content: `I begin by conducting thorough user research, competitor analysis, and gathering requirements. This helps understand user needs, market trends, and project objectives to create a solid foundation for the design process.`,
    },
    {
      title: "Analyze",
      content: `Using the research insights, I identify user pain points, create user personas, and map out user journeys. This analysis phase helps prioritize features and establish clear design objectives that align with business goals.`,
    },
    {
      title: "Design",
      content: `I create wireframes and interactive prototypes, iterating through multiple design solutions. Each design decision is based on user feedback, usability principles, and modern design trends while maintaining brand consistency.`,
    },
    {
      title: "Launch",
      content: `After thorough testing and refinement, I prepare the final design assets and documentation. I work closely with development teams to ensure pixel-perfect implementation and provide post-launch support for any adjustments needed.`,
    },
  ];
  return (
    <section id="process" className="py-12 sm:py-20 bg-[#F0F1F3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
          <motion.div
            className="space-y-4 text-center md:text-left"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl sm:text-4xl font-bold">Work Process</h1>
            <div className="space-y-4 text-sm sm:text-base text-gray-600">
              <p>
                My design process is structured yet flexible, ensuring every
                project is approached with both creativity and strategic
                thinking. I follow a proven methodology that delivers consistent
                results while adapting to each project&apos;s unique
                requirements.
              </p>
              <p>
                Through continuous collaboration and iteration, I transform
                complex challenges into intuitive, user-friendly solutions that
                delight users and achieve business objectives.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {processes.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  className={clsx([
                    "bg-white shadow-sm rounded-xl p-4 sm:p-5 space-y-3",
                    index % 2 !== 0 && "sm:mt-4",
                  ])}
                >
                  <CardTitle className="text-lg sm:text-xl">
                    {item.title}
                  </CardTitle>
                  <CardContent className="p-0 text-sm sm:text-base text-gray-600">
                    {item.content}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
