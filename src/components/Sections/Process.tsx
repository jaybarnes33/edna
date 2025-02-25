import React from "react";
import { Card, CardContent, CardTitle } from "../ui/card";
import clsx from "clsx";

const Process = () => {
  const processes = [
    {
      title: "Research",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus
          arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices
          eget lorem ac vestibulum. Suspendis imperdiet`,
    },
    {
      title: "Analyze",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus
            arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices
            eget lorem ac vestibulum. Suspendis imperdiet`,
    },
    {
      title: "Design",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus
            arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices
            eget lorem ac vestibulum. Suspendis imperdiet`,
    },
    {
      title: "Launch",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum. Suspendis imperdiet`,
    },
  ];
  return (
    <section className="py-12 sm:py-20 bg-[#F0F1F3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="space-y-4 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl font-bold">Work Process</h1>
            <div className="space-y-4 text-sm sm:text-base text-gray-600">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                purus arcu, varius eget velit non, laoreet imperdiet orci.
                Mauris ultrices eget lorem ac vestibulum. Suspendis imperdiet,
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                purus
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {processes.map((item, index) => (
              <Card
                key={item.title}
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
