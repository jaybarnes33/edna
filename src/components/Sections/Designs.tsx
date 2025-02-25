import clsx from "clsx";
import Image from "next/image";
import React from "react";

const Designs = () => {
  const designs = [
    {
      title: "Coffee Shop",
      image: "/images/coffee-2.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum. Suspendis imperdiet",
    },
    {
      title: "Food delivery login screen",
      image: "/images/food-2.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum. Suspendis imperdiet",
    },
    {
      title: "Coffee Shop Onboarding",
      image: "/images/coffee.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum. Suspendis imperdiet",
    },
    {
      title: "Food App",
      image: "/images/food.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum. Suspendis imperdiet",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 space-y-10">
      <h1 className="text-4xl font-bold text-center sm:text-left">
        Sample Designs
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {designs.map((design) => (
          <div
            key={design.title}
            className={clsx(["flex flex-col gap-y-2", "sm:even:mt-20"])}
          >
            <Image
              src={design.image}
              alt={design.title}
              width={300}
              height={300}
              className="w-full"
              unoptimized
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Designs;
