import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-4 text-center bg-gray-100">
      <p className="text-gray-600 text-sm">
        © {currentYear} Emerald Edna Quarshie. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
