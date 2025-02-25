"use client";
import React from "react";
import { Button } from "../ui/button";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const About = () => {
  const socials = [
    {
      name: "Github",
      icon: <FaGithub />,
      url: "https://github.com/EmeraldEdna",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedinIn />,
      url: "https://www.linkedin.com/in/edna-quarshie-50b198223/",
    },
  ];

  const handleDownloadCV = () => {
    // Create a link element
    const link = document.createElement("a");
    link.href = "/Edna Quarshie_CV.pdf";
    link.download = "Edna Quarshie_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="about"
      className="grid relative z-50 md:grid-cols-2 gap-8 items-center lg:-mb-10 py-8 bg-white shadow-sm rounded-xl p-4 sm:p-8 md:p-16 lg:p-28  max-w-7xl  md:pb-0 mx-auto mb-20"
    >
      <motion.div
        className="flex flex-col sm:flex-row gap-6 items-center justify-center"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src="/images/edna-2.png"
          alt="About"
          width={250}
          height={250}
          className="w-48 sm:w-[250px] hover:scale-105 transition-all duration-300"
          unoptimized
        />
        <motion.div
          className="flex flex-row gap-3 p-3 sm:p-4 rounded-lg bg-white shadow text-purple-500"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {socials.map((social) => (
            <Link
              key={social.name}
              className="hover:bg-purple-500 hover:text-white p-2 rounded-xl transition-colors"
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {social.icon}
            </Link>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className="space-y-4 text-center md:text-left"
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
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
        <motion.div
          className="flex flex-col sm:flex-row gap-4 py-4 justify-center md:justify-start"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button
            onClick={handleDownloadCV}
            className="bg-purple-500 text-white w-full sm:w-auto hover:bg-purple-600 hover:scale-105 transition-all duration-300"
          >
            Download CV
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
