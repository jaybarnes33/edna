import React from "react";
import { Button } from "../ui/button";
import {
  FaFacebookF,
  FaDribbble,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  const socials = [
    {
      name: "Facebook",
      icon: <FaFacebookF />,
      url: "https://facebook.com/emerald_edna",
    },
    {
      name: "Dribbble",
      icon: <FaDribbble />,
      url: "https://dribbble.com/emerald_edna",
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      url: "https://instagram.com/emerald_edna",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedinIn />,
      url: "https://linkedin.com/in/emerald_edna",
    },
  ];
  return (
    <section className="grid relative z-50 md:grid-cols-2 gap-8 items-center lg:-mb-10 py-8 bg-white shadow-sm rounded-xl p-4 sm:p-8 md:p-16 lg:p-28  max-w-7xl  md:pb-0 mx-auto mb-20 ">
      <div className="flex flex-col sm:flex-row gap-6 items-center justify-center">
        <Image
          src="/images/edna-2.png"
          alt="About"
          width={250}
          height={250}
          className="w-48 sm:w-[250px]"
          unoptimized
        />
        <div className="flex flex-row gap-3 p-3 sm:p-4 rounded-lg bg-white shadow text-purple-500">
          {socials.map((social) => (
            <Link
              className="hover:bg-purple-500 hover:text-white p-2 rounded-xl transition-colors"
              href={social.url}
              key={social.name}
              target="_blank"
              rel="noopener noreferrer"
            >
              {social.icon}
            </Link>
          ))}
        </div>
      </div>

      <div className="space-y-4 text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl font-bold">
          I am a professional User Experience Designer and Software Designer
        </h1>
        <p className="text-sm sm:text-base">
          I design and develop services for customers specializing creating
          stylish, modern websites, web services and online stores. My passion
          is to design digital user experiences.
        </p>
        <p className="text-sm sm:text-base">
          I design and develop services for customers specializing creating
          stylish, modern websites, web services.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 py-4 justify-center md:justify-start">
          <Button className="bg-purple-500 text-white w-full sm:w-auto">
            Download CV
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;
