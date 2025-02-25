"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Button } from "../ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    "home",
    "about",
    "process",
    "portfolio",
    "blog",
    "services",
    "contacts",
  ];

  return (
    <nav className="relative px-4 sm:px-6 lg:px-8">
      <div className="flex flex-row justify-between items-center py-4 max-w-7xl mx-auto">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold">Emerald Edna</h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-row gap-4 capitalize">
          {links.map((link) => (
            <Link
              key={link}
              href={`/${link}`}
              className="hover:text-purple-500 transition-colors"
            >
              {link}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden z-50">
          <div className="flex flex-col p-4 space-y-3">
            {links.map((link) => (
              <Link
                key={link}
                href={`/${link}`}
                className="capitalize hover:text-purple-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
